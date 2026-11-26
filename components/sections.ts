/*
 * Which header tab owns a route, and that tab's sidebar.
 *
 * Blume matches a tab by URL prefix. Guides (/guides), Agents (/agents), and
 * Platforms (/platforms) are real folders, so prefix matching works for them.
 * The Reference tab is different: it gathers /cli, /api, /config-file,
 * /limits, /glossary, /errors, and /changelog, which share no prefix. It is
 * the `(reference)` folder group instead, so membership comes from the
 * navigation tree, and the generated /setup and /connect pages belong to the
 * Agents tab even though they live at the root.
 */
import { sidebarForRoute } from "blume/components/layout/nav-utils.ts";
import type { NavNode, NavTab } from "blume/core/types.ts";

// Navigation routes are base-less; Blume adds the deployment base when it renders links.
export const referenceTabPath = "/reference";
export const agentsTabPath = "/agents";
const referenceGroupLabel = "Reference";
const agentRoots = ["/setup", "/connect"];

export const under = (route: string, root: string) =>
  root === "/" || route === root || route.startsWith(`${root}/`);

const routesIn = (nodes: NavNode[]): string[] =>
  nodes.flatMap((node) =>
    node.kind === "page" ? [node.route] : [...(node.route ? [node.route] : []), ...routesIn(node.children)],
  );

const referenceGroup = (sidebar: NavNode[]) =>
  sidebar.find(
    (node): node is Extract<NavNode, { kind: "group" }> =>
      node.kind === "group" && node.path === "/" && node.label === referenceGroupLabel,
  );

/** The routes the Reference tab owns, generated references included. */
export const referenceRoots = (sidebar: NavNode[]): string[] => [
  ...routesIn(referenceGroup(sidebar)?.children ?? []),
  "/cli",
  "/api",
  "/errors",
  "/changelog",
];

const isReference = (sidebar: NavNode[], route: string) =>
  referenceRoots(sidebar).some((root) => under(route, root));

const isAgents = (route: string) => [agentsTabPath, ...agentRoots].some((root) => under(route, root));

/** The tab a route belongs to, matching Blume's longest-prefix rule otherwise. */
export const tabForRoute = (tabs: NavTab[], sidebar: NavNode[], route: string): NavTab | undefined => {
  const byPath = (path: string) => tabs.find((tab) => tab.path === path);
  if (isReference(sidebar, route)) return byPath(referenceTabPath);
  if (isAgents(route)) return byPath(agentsTabPath);
  return [...tabs]
    .filter((tab) => under(route, tab.path))
    .toSorted((left, right) => right.path.length - left.path.length)[0];
};

/** Whether a top-level node belongs to a tab other than Docs. */
const outsideDocs = (node: NavNode, sidebar: NavNode[], tabs: NavTab[]) => {
  if (node.kind === "group" && node.path === "/" && node.label === referenceGroupLabel) return true;
  const route = node.kind === "page" ? node.route : (node.path ?? node.route);
  if (!route || route === "/") return false;
  return (
    isReference(sidebar, route) ||
    isAgents(route) ||
    tabs.some((tab) => tab.path !== "/" && under(route, tab.path))
  );
};

/** Reference tab sidebar: fold top-level OpenAPI /api/reference into REST API and link /changelog. */
const referenceSidebar = (sidebar: NavNode[]): NavNode[] => {
  const apiReferenceNodes = sidebar
    .filter((node): node is Extract<NavNode, { kind: "group" }> => node.kind === "group" && node.path === "/api")
    .flatMap((node) => node.children);
  return (referenceGroup(sidebar)?.children ?? []).map((node) => {
    if (node.kind === "group" && node.path === "/api" && apiReferenceNodes.length > 0) {
      return {
        ...node,
        children: [
          ...node.children,
          ...apiReferenceNodes.map((child) =>
            child.kind === "group" && child.path === "/api/reference"
              ? { ...child, label: "API reference" }
              : child,
          ),
        ],
      };
    }
    if (node.kind === "group" && node.path === "/changelog" && !node.route) {
      return { ...node, route: "/changelog" };
    }
    return node;
  });
};

/** The sidebar for a route's tab. */
export const sectionSidebar = (
  sidebar: NavNode[],
  tabs: NavTab[],
  route: string,
  root: string,
): NavNode[] => {
  const tab = tabForRoute(tabs, sidebar, route);
  if (tab?.path === referenceTabPath) return referenceSidebar(sidebar);
  if (tab?.path === agentsTabPath) {
    const agents = sidebarForRoute(sidebar, tabs, agentsTabPath, root);
    const generated = sidebar.filter(
      (node) => node.kind === "group" && agentRoots.some((root) => node.path === root || node.route === root),
    );
    return [...agents, ...generated];
  }
  if (tab && tab.path !== "/") return sidebarForRoute(sidebar, tabs, route, root);
  return sidebar.filter((node) => !outsideDocs(node, sidebar, tabs));
};
