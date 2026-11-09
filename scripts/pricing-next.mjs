// The next plans (Personal, Go, Pro, Business, Enterprise and Boost) for the
// draft Pricing & Limits page, content/(account)/pricing.mdx. They are not
// live: GET /v1/pricing still serves the current plans, so this module is the
// one source for every number on that page until the API does.
// components/PricingTable.astro renders it, and blume.config.ts renders the same
// tables as Markdown for .md pages and agents.

const BETA = "Beta";
const SOON = "Soon";
const COMP = "Complimentary";
const YES = "✓";
const NO = "—";

export const PLANS = ["Personal", "Go", "Pro", "Business", "Enterprise"];
export const SPACE_PLANS = ["Personal", "Go", "Pro", "Business", "Boost", "Enterprise"];

const row = (label, tip, values, tag) => ({ label, tip, values, tag });
const NO_LIMIT = "No predefined limit";
const all5 = (value) => [value, value, value, value, value];
const CPU = "$0.119 per CPU-hour";

// Per team, per month: [Personal, Go, Pro, Enterprise]. Business is added from BUSINESS_TEAM.
const TEAM = [
  ["Usage", [
    row("Included usage", "Pays for every metered resource on this page, at the listed prices. Resets every month; unused usage doesn't roll over.",
      ["$1", "$5", "$15", "Contract"]),
    row("Members", "People who can publish and change settings. Reviewers, commenters, agents and app users are free and never count.",
      ["1", "1", "Free up to 5, then $15/month each", "Contract"]),
  ]],
  ["Compute", [
    row("Compute", "Active CPU time running your Space's code, including Zero apps. Time spent waiting on the network or the database doesn't count.",
      [CPU, CPU, CPU, "Contract"]),
    row("MySQL compute", "Active CPU time your database spends answering queries. Memories and other team data we keep for you are part of this.",
      [CPU, CPU, CPU, "Contract"]),
    row("Dynamic requests", "Requests that run PHP. Requests served from cache are free and never count.",
      ["1 million, then $0.25 per million", "3 million, then $0.25 per million", "10 million, then $0.25 per million", "Contract"]),
    row("CI compute (builds)", "Elapsed minutes on a 4 vCPU, 8 GB build machine, including install time. Up to 1 / 1 / 3 builds at once.",
      ["100 min, then $0.0055 per min", "500 min, then $0.0055 per min", "2,000 min, then $0.0055 per min", "Contract"]),
    row("Workers requests", "Requests to your edge functions.",
      ["$0.30 per million", "$0.30 per million", "$0.30 per million", "Contract"]),
    row("Workers compute", "Free for a limited time while we finish measuring it. The price after that is shown.",
      ["Free now, then $0.072 per CPU-hour†", "Free now, then $0.072 per CPU-hour†", "Free now, then $0.072 per CPU-hour†", "Contract"], "comp"),
  ]],
  ["Delivery", [
    row("Cached traffic", "Pages and files served from our edge cache.",
      ["1 TB, then $0.02 per GB", "Fair use", "Fair use", "Fair use"]),
    row("Uncached traffic", "Responses that miss the cache, such as dynamic pages and API responses.",
      ["10 GB, then $0.04 per GB", "100 GB, then $0.04 per GB", "500 GB, then $0.04 per GB", "Contract"]),
  ]],
  ["Storage", [
    row("Storage", "Everything a Space keeps on its site: published versions, media and its MySQL database. Measured daily and averaged over the month. For now, the first 1 GB of every Space isn't counted; it covers platform files we load onto each site.",
      ["1 GB per Space, then $0.10 per GB-month", "1 GB per Space, then $0.10 per GB-month", "1 GB per Space, then $0.10 per GB-month", "Contract"]),
    row("Bucket storage", "Files your app stores through the storage API. Free during the beta.",
      ["Free now; 10 GB, then $0.016 per GB-month*", "Free now; 25 GB, then $0.016 per GB-month*", "Free now; 100 GB, then $0.016 per GB-month*", "Contract"], "beta"),
    row("Source control storage", "Your Spaces' Git repositories. Free for a limited time while we finish measuring it.",
      ["Free now; 1 GB, then $0.07 per GB-month†", "Free now; 10 GB, then $0.07 per GB-month†", "Free now; 50 GB, then $0.07 per GB-month†", "Contract"], "comp"),
  ]],
  ["Email, forms and insights", [
    row("Transactional email", "Free during the beta. Daily sending limits still apply.",
      ["Free now; 20 a day, then $0.50 per 1,000*", "Free now; 200 a day, then $0.50 per 1,000*", "Free now; 2,000 a day, then $0.50 per 1,000*", "Custom"], "beta"),
    row("Spam checks", "Each form submission or comment checked for spam.",
      ["Fair use", "Fair use", "Fair use", "Fair use"]),
    row("Analytics events", "Page views and custom events.",
      ["Free during the beta, fair use", "Free during the beta, fair use", "Free during the beta, fair use", "Free during the beta, fair use"], "beta"),
  ]],
  ["Account", [
    row("Spaces", "Personal gets 30, 50 or 100 Spaces when 1, 3 or 5 friends sign up with your referral link.",
      ["20", "100", "500", "Custom"]),
    row("Custom domains", "Domains registered through Spacefast or WordPress.com, and domains using Spacefast DNS, never count.",
      ["20", "100", "500", "Custom"]),
    row("Logs", "Runtime and edge logs: how far back you can look. Build logs are kept with each version.",
      ["Last 1 day", "Last 3 days", "Last 7 days", "Custom, plus log drains"]),
    row("Activity history", "Who did what, when. Nothing is deleted; older entries are hidden on lower plans.",
      ["Last 7 days", "Last 30 days", "Last year", "Custom"]),
  ]],
];

// Per Space: [Personal, Go, Pro, Boost, Enterprise]. Business is added from BUSINESS_SPACE.
const SPACE = [
  ["Compute", [
    row("Compute workers", "How many dynamic requests one Space runs at the same time. Requests beyond that wait briefly, then get a 429.",
      ["2", "2", "4", "8", "Custom"]),
    row("Burst", "Extra compute workers a Space can borrow when the server has room.",
      ["Off", "Up to 4", "Up to 8", "Up to 16", "Custom"]),
    row("Compute memory per request", null, ["512 MB", "512 MB", "1 GB", "2 GB", "2 GB"]),
    row("Function bundle", null, ["64 MB", "64 MB", "128 MB", "250 MB", "Custom"]),
    row("Function run time", "The longest one request can run, including time spent waiting on other services. Requests default to 30 s; raise it per route up to this limit.",
      ["60 s", "60 s", "120 s", "300 s", "Custom"]),
  ]],
  ["Storage", [
    row("Disk", "The live site's files and its MySQL database.",
      ["1 GB", "10 GB", "25 GB", "50 GB", "Up to 1 TB"]),
    row("VideoPress storage", "Ad-free 4K adaptive video. Streaming has no bandwidth limit and never counts toward your traffic. Each video can be up to 5 GB.",
      ["5 GB", "100 GB", "256 GB", "1 TB", "Custom"]),
    row("Version size", null, ["500 MB", "2 GB", "2 GB", "5 GB", "Custom"]),
    row("File size", null, ["100 MB", "1 GB", "1 GB", "1 GB", "Custom"]),
    row("Files per version", null, ["20,000", "100,000", "100,000", "100,000", "Custom"]),
    row("Stored file size", "The largest single file your app can store, uploaded directly.",
      ["100 MB", "1 GB", "1 GB", "1 GB", "Custom"]),
    row("Environment variables", null,
      ["256, up to 16 KB each, 64 KB total", "256, up to 16 KB each, 64 KB total", "256, up to 16 KB each, 64 KB total", "256, up to 16 KB each, 64 KB total", "Custom"]),
    row("Database backups", "Automatic MySQL backups. The days shown are how far back you can restore yourself; older backups aren't deleted, and support can restore them.",
      ["Daily, restore 7 days back", "Hourly, restore 7 days back", "Hourly, restore 30 days back", "Hourly, restore 30 days back", "Custom"]),
  ]],
  ["Builds", [
    row("Build timeout", null, ["30 min", "30 min", "45 min", "2 h", "2 h"]),
  ]],
  ["Scheduling and traffic", [
    row("Crons", "Scheduled jobs that run hourly, daily or weekly.", ["3", "10", "20", "40", "Custom"]),
    row("Advanced crons", "Any five-field crontab schedule, down to every minute. Counts toward the crons above.", [NO, NO, NO, "Up to 10", "Custom"]),
    row("Cron run time", null, ["55 s", "55 s", "5 min", "15 min", "Custom"]),
    row("Redirects", "Static redirects plus dynamic ones that use patterns, from sf.jsonc or a _redirects file.",
      ["500 + 25 dynamic", "1,000 + 50 dynamic", "1,500 + 75 dynamic", "2,000 + 100 dynamic", "Custom"]),
    row("Header rules", null, ["25", "50", "75", "100", "Custom"]),
    row("Firewall and cache rules", "Edge rules that block, challenge or bypass the cache for matching requests.",
      ["10", "25", "50", "100", "Custom"]),
  ]],
  ["Security", [
    row("DDoS challenge mode", "Turn on a browser challenge for every visitor while a Space is under attack, then turn it off.", [YES, YES, YES, YES, YES]),
    row("Custom certificate", "Bring your own TLS certificate for this Space's domain instead of the managed one.", [NO, NO, NO, YES, YES]),
  ]],
  ["Email and sharing", [
    row("Extra email a day", "Added to the team's daily limit, for this Space only.", [NO, NO, NO, "+5,000", "Custom"]),
    row("Share links", "No set number on any plan. Abuse protections still apply.", all5(NO_LIMIT)),
    row("Pending invitations", "No set number on any plan. Abuse protections still apply.", all5(NO_LIMIT)),
  ]],
];

const all = (value) => [value, value, value, value];
// Every feature: [Personal, Go, Pro, Enterprise]. Business is added from BUSINESS_FEATURES.
const FEATURES = [
  ["Publishing", [
    row("Publish from any agent: CLI, MCP and API", null, all(YES)),
    row("Publish without an account, claim it later", null, all(YES)),
    row("Hosted builds for 30+ frameworks", null, all(YES)),
    row("GitHub deploys and pull request previews", null, all(YES)),
    row("Git repository for every Space", null, all(YES)),
    row("Preview versions and instant rollback", null, all(YES)),
    row("Rename a Space's address", null, all(YES)),
    row("Move Spaces between teams", null, all(YES)),
    row("Signed-in links agents can hand you", null, all(YES)),
  ]],
  ["Domains and delivery", [
    row("Managed HTTPS", null, all(YES)),
    row("Custom domains", null, ["20", "100", "500", "Custom"]),
    row("Register and renew domains at cost", null, all(YES)),
    row("Wildcard domains", null, [NO, NO, YES, YES]),
    row("Global edge cache and purge", null, all(YES)),
    row("Redirects and header rules", null, ["500 per Space", "1,000 per Space", "1,500 per Space", "Custom"]),
    row("Firewall and cache rules", null, ["10 per Space", "25 per Space", "50 per Space", "Custom"]),
    row("Choose a datacenter", "Amsterdam, Burbank, Washington DC or Dallas.", [NO, YES, YES, YES]),
    row("DDoS challenge mode", "Turn on a browser challenge for every visitor while a Space is under attack, then turn it off.", all(YES)),
    row("Custom certificates", "Bring your own TLS certificate for a Space's domain instead of the managed one.", [NO, "With Boost", "With Boost", YES]),
  ]],
  ["Build apps", [
    row("MySQL database", null, all(YES)),
    row("Bucket storage and uploads API", null, all(BETA)),
    row("Zero: WordPress-powered apps", null, all(YES)),
    row("Workers: edge functions", null, all(YES)),
    row("Crons", null, ["3 per Space", "10 per Space", "20 per Space", "Custom"]),
    row("Forms with spam checks", null, all(YES)),
    row("External API proxy", null, all(YES)),
    row("Page templates", null, [NO, NO, YES, YES]),
    row("Transactional email", null, all(BETA)),
    row("Space users and sign-in", null, all(BETA)),
    row("Sign in with Spacefast for your apps", null, all(BETA)),
    row("Managed content", null, all(BETA)),
    row("Tag Manager", null, all(BETA)),
    row("Connectors to other services", "Connect services like Linear or Google once and let agents and Spaces use them.", all(SOON)),
    row("Store and payments", "Sell digital downloads and physical products, with checkout and orders. In private beta.", all(BETA), "beta"),
    row("Draw on pages when giving feedback", null, all(SOON)),
  ]],
  ["Sharing and feedback", [
    row("Private by default, share links, passwords", null, all(YES)),
    row("Invitations and access requests", null, all(YES)),
    row("Comments on any page", null, all(YES)),
    row("Show & Tell: share public Spaces for discovery", null, all(BETA)),
    row("Live comment updates", null, all(YES)),
    row("Custom access page without Spacefast branding", null, [NO, NO, NO, YES]),
  ]],
  ["Agents", [
    row("Spacefast skills for Claude, Codex and Cursor", null, all(YES)),
    row("Custom team skills", null, [NO, BETA, BETA, BETA]),
    row("Team memories", null, [NO, BETA, BETA, BETA]),
    row("Design systems", null, [NO, BETA, BETA, BETA]),
  ]],
  ["Insights", [
    row("Analytics", null, all(BETA)),
    row("VideoPress", null, all(BETA)),
    row("Runtime and edge logs", null, ["Last 1 day", "Last 3 days", "Last 7 days", "Custom"]),
    row("Build logs, kept with each version", null, all(YES)),
    row("Log drains", null, [NO, NO, NO, YES]),
  ]],
  ["Infrastructure", [
    row("Edge locations", "Cached pages are served from the location closest to each visitor.", all("28+")),
    row("Datacenters", "Amsterdam, Burbank, Washington DC and Dallas. Every datacenter costs the same.", all("4")),
    row("Disaster-recovery backups", "Platform backups we keep to recover from hardware failure, on every Space. They are separate from the database backups you restore yourself, listed under Data.", all(YES)),
    row("DDoS protection and firewall", "DDoS protection, defensive mode and a web application firewall.", all(YES)),
    row("Automated failover", "If a Space's server fails, it moves to healthy hardware on its own, with no data lost.", all(YES)),
  ]],
  ["Data", [
    row("Database backups", null, ["Daily, 7 days", "Hourly, 7 days", "Hourly, 30 days", "Custom"]),
    row("Export everything", null, all(YES)),
  ]],
  ["Team and security", [
    row("Commercial use", null, all(YES)),
    row("Team roles", null, [NO, NO, YES, YES]),
    row("API keys and webhooks", null, all(YES)),
    row("Subteams", null, [NO, NO, NO, YES]),
    row("Connector allowlists and blocklists", null, [NO, NO, NO, YES]),
    row("External access inventory", null, [NO, NO, NO, YES]),
    row("SSO, SAML and SCIM", null, [NO, NO, NO, YES]),
    row("Network policies and egress firewall", null, [NO, NO, NO, YES]),
    row("WordPress VIP integration", null, [NO, NO, NO, YES]),
    row("Support", null, ["Community", "Email", "Priority email", "Dedicated, with SLA"]),
    row("Nonprofit and education pricing", null, all("Contact sales")),
  ]],
];

// Business (coming soon): from $500 a month, $25 per member, no included usage.
// Its prices are set; its limits aren't. A row without an override copies Pro
// when Pro's cell is a yes/no, Beta, Soon or Contact sales, and is TBD otherwise.
const TBD = "TBD";
const BUSINESS_TEAM = {
  "Included usage": "None",
  Members: "$25/month each",
  Compute: CPU,
  "MySQL compute": CPU,
  "Workers requests": "$0.30 per million",
  Storage: "1 GB per Space, then $0.10 per GB-month",
};
const BUSINESS_SPACE = {
  "Advanced crons": TBD,
  "Extra email a day": TBD,
  "DDoS challenge mode": YES,
  "Custom certificate": YES,
  "Share links": NO_LIMIT,
  "Pending invitations": NO_LIMIT,
};
const BUSINESS_FEATURES = {
  "Edge locations": "28+",
  Datacenters: "4",
  "Custom certificates": YES,
  "Log drains": YES,
  Support: "Slack Connect channel",
};

/** Insert the Business column after Pro: an override, Pro's non-limit value, or TBD. */
export function withBusiness(groups, overrides, proIndex = 2) {
  const used = new Set();
  const out = groups.map(([group, rows]) => [group, rows.map((item) => {
    const pro = item.values[proIndex];
    const copies = [YES, NO, BETA, SOON, "Contact sales"].includes(pro);
    const value = Object.hasOwn(overrides, item.label) ? overrides[item.label] : copies ? pro : TBD;
    if (Object.hasOwn(overrides, item.label)) used.add(item.label);
    return { ...item, values: [...item.values.slice(0, proIndex + 1), value, ...item.values.slice(proIndex + 1)] };
  })]);
  const missing = Object.keys(overrides).filter((label) => !used.has(label));
  if (missing.length > 0) throw new Error(`Business override for unknown rows: ${missing.join(", ")}`);
  return out;
}

// Example bills. The first two use real usage across every Space in the last
// 30 days (median and 99th percentile per Space, measured 9 Nov 2026).
export const EXAMPLES = [
  { title: "A typical Space", plan: "Personal", price: "$0", basis: "Real usage: the median Space over the last 30 days.",
    lines: [["387 dynamic requests", "Included"], ["0.13 CPU-hours of compute", "$0.02"], ["0.28 GB stored", "Under the 1 GB not counted"], ["2 build minutes", "Included"]],
    note: "Uses $0.02 of the $1 included." },
  { title: "A busy Space", plan: "Personal", price: "$0", basis: "Real usage: busier than 99% of Spaces, plus as many build minutes as a team in the top 1%, over the last 30 days.",
    lines: [["40,686 dynamic requests", "Included"], ["1.29 CPU-hours of compute", "$0.15"], ["0.83 GB stored", "Under the 1 GB not counted"], ["247 build minutes", "100 included, then $0.81"]],
    note: "Uses $0.96 of the $1 included. On Go, the same Space uses $0.15 of $5." },
  { title: "A studio of five", plan: "Pro", price: "$15", basis: "Estimate: 20 client sites and five members.",
    lines: [["5 million dynamic requests", "Included"], ["40 CPU-hours of compute, 10 of MySQL", "$5.95"], ["2 TB cached, 300 GB uncached", "Included"], ["50 GB stored on 20 Spaces", "30 GB counted, $3.00"], ["1,500 build minutes", "Included"]],
    note: "Uses $8.95 of the $15 included." },
  { title: "A busy app", plan: "Pro + Boost", price: "$24", basis: "Estimate: one app with 10 million requests a month, 70% cached.",
    lines: [["3 million dynamic requests", "Included"], ["25 CPU-hours of compute, 8.3 of MySQL", "$3.97"], ["600 GB uncached", "500 included, then $4.00"], ["10 GB stored", "9 GB counted, $0.90"], ["5 million Workers requests", "$1.50"]],
    note: "Uses $10.37 of the $15 included. Boost adds $9." },
];

// Card processing for Store and payments, at US rates.
export const PAYMENTS = [
  ["Cards", "2.9% + $0.30"],
  ["Apple Pay, Google Pay", "Same as cards"],
  ["International card", "+1.5%"],
  ["Currency conversion", "+1%"],
  ["Klarna", "5.99% + $0.30"],
  ["Affirm, Afterpay", "6% + $0.30"],
  ["Subscriptions", "+1% on orders with a subscription payment"],
  ["Dispute", "$15, refunded if you win"],
  ["Instant payout", "1.5% of the payout"],
];

// Structured tables for components/PricingTable.astro: columns, then [group, rows].
// Row values are plain text; tags and tips are rendered by the component.
const PLAN_HEAD = {
  Personal: { note: "$0, no card" },
  Go: { note: "$5 a month" },
  Pro: { note: "$15 a month" },
  Business: { tag: "soon", note: "From $500, $25 per member" },
  Boost: { note: "+$9 per Space" },
  Enterprise: { note: "Talk to us" },
};
const columnsFor = (names) => names.map((name) => ({ name, ...PLAN_HEAD[name] }));

const AT_A_GLANCE = [
  ["", [
    row("Included usage", "Pays for every metered resource on this page, at the listed prices. Resets every month.", ["$1", "$5", "$15", "None", "Contract"]),
    row("Members", "People who can publish and change settings. Reviewers, commenters, agents and app users are free.", ["1", "1", "Free up to 5, then $15/month each", "$25/month each", "Contract"]),
    row("Spaces and custom domains", null, ["20", "100", "500", TBD, "Custom"]),
    row("Compute workers per Space", "Dynamic requests one Space runs at the same time.", ["2", "2", "4", TBD, "Custom"]),
    row("Disk per Space", "The live site's files and its MySQL database.", ["1 GB", "10 GB", "25 GB", TBD, "Up to 1 TB"]),
    row("Database backups", "How far back you can restore yourself. Older backups aren't deleted.", ["Daily, 7 days", "Hourly, 7 days", "Hourly, 30 days", TBD, "Custom"]),
    row("Support", null, ["Community", "Email", "Priority email", "Slack Connect", "Dedicated, with SLA"]),
  ]],
];

// In structured tables, a cell that is only a Beta or Soon badge becomes a ✓ (or —),
// and the label moves to the row title, so the cells stay plain values.
function plainRows(groups) {
  return groups.map(([group, rows]) => [group, rows.map((item) => {
    const badges = new Set(item.values.filter((v) => v === BETA || v === SOON));
    if (badges.size === 0) return item;
    const tag = item.tag ?? (badges.has(SOON) ? "soon" : "beta");
    return { ...item, tag, values: item.values.map((v) => (v === BETA ? YES : v === SOON ? "Soon" : v)) };
  })]);
}

// Docs pages that explain a row, linked from its name.
const ROW_LINKS = {
  "Included usage": "/usage",
  Members: "/teams",
  Compute: "/functions",
  "MySQL compute": "/database",
  "Dynamic requests": "/caching",
  "CI compute (builds)": "/ci",
  "Workers requests": "/functions",
  "Workers compute": "/functions",
  "Cached traffic": "/caching",
  Storage: "/infrastructure/server-specs-settings",
  "Bucket storage": "/object-storage",
  "Source control storage": "/git",
  "Transactional email": "/functions",
  Spaces: "/spaces",
  "Custom domains": "/domains",
  Logs: "/logs",
  "Activity history": "/logs",
  "Compute workers": "/infrastructure/server-specs-settings",
  Burst: "/infrastructure/server-specs-settings",
  "Compute memory per request": "/infrastructure/server-specs-settings",
  "Function bundle": "/functions",
  "Function run time": "/functions",
  "Version size": "/versions",
  "Files per version": "/versions",
  "Environment variables": "/environment-variables",
  "Database backups": "/database",
  "Build timeout": "/ci",
  Crons: "/crons",
  "Advanced crons": "/crons",
  "Cron run time": "/crons",
  Redirects: "/routing",
  "Header rules": "/routing",
  "Firewall and cache rules": "/infrastructure/rate-limiting",
  "DDoS challenge mode": "/infrastructure/defensive-mode",
  "Edge locations": "/infrastructure/origin-edge-servers",
  Datacenters: "/infrastructure/origin-edge-servers",
  "Disaster-recovery backups": "/infrastructure/automated-failover",
  "DDoS protection and firewall": "/infrastructure/ddos-protection",
  "Automated failover": "/infrastructure/automated-failover",
  "Custom certificate": "/infrastructure/tls-certificates",
  "Share links": "/share",
  "Pending invitations": "/share",
  "Spaces and custom domains": "/spaces",
  "Compute workers per Space": "/infrastructure/server-specs-settings",
  "Disk per Space": "/infrastructure/server-specs-settings",
};
const withLinks = (groups) => groups.map(([group, rows]) => [group, rows.map((item) => ({ ...item, href: item.href ?? ROW_LINKS[item.label] }))]);

export function pricingTable(name) {
  switch (name) {
    case "plans":
      return { columns: columnsFor(PLANS), groups: withLinks(AT_A_GLANCE) };
    case "team":
      return { columns: columnsFor(PLANS), groups: withLinks(withBusiness(TEAM, BUSINESS_TEAM)) };
    case "space":
      return { columns: columnsFor(SPACE_PLANS), groups: withLinks(withBusiness(SPACE, BUSINESS_SPACE)), highlight: "Boost" };
    case "features":
      return { columns: columnsFor(PLANS), groups: withLinks(plainRows(withBusiness(FEATURES, BUSINESS_FEATURES))) };
    case "examples":
      return {
        columns: [{ name: "Plan" }, { name: "Usage" }, { name: "Bill" }],
        groups: [["", EXAMPLES.map(({ title: label, plan, price, basis, lines, note }) =>
          row(label, basis, [plan, lines.map(([what, cost]) => `${what}: ${cost}`).join(" · "), `${price} a month. ${note}`]))]],
      };
    case "payments":
      return { columns: [{ name: "Rate" }], groups: [["", PAYMENTS.map(([what, rate]) => row(what, null, [rate]))]] };
    default:
      throw new Error(`Unknown pricing table: ${name}`);
  }
}

const TAG_TEXT = { beta: "Beta", soon: "Soon", comp: "Complimentary" };
const md = (value) => String(value).replaceAll("*", String.raw`\*`).replaceAll("|", String.raw`\|`);

/** The same table as plain Markdown, for .md pages, llms-full.txt and MCP. */
export function pricingTableMarkdown(name) {
  const { columns, groups } = pricingTable(name);
  const head = columns.map((c) => [c.name, c.tag ? `(${TAG_TEXT[c.tag]})` : "", c.note ? `— ${c.note}` : ""].filter(Boolean).join(" "));
  const lines = [`| Item | ${head.map(md).join(" | ")} |`, `| --- | ${columns.map(() => "---").join(" | ")} |`];
  const notes = [];
  for (const [group, rows] of groups) {
    if (group) lines.push(`| **${md(group)}** | ${columns.map(() => "").join(" | ")} |`);
    for (const item of rows) {
      lines.push(`| ${md(item.label)}${item.tag ? ` (${TAG_TEXT[item.tag]})` : ""} | ${item.values.map(md).join(" | ")} |`);
      if (item.tip) notes.push(`- **${md(item.label)}**: ${md(item.tip)}`);
    }
  }
  return notes.length ? `${lines.join("\n")}\n\n${notes.join("\n")}` : lines.join("\n");
}
