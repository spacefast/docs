// The next plans (Personal, Go, Pro, Business, Enterprise and Boost) for the
// draft Pricing & Limits page, content/(account)/pricing.mdx. They are not
// live: GET /v1/pricing still serves the current plans, so this module is the
// one source for every number on that page until the API does.
// scripts/prepare-pricing.mjs renders it into content/_pricing-next/*.mdx.

const BETA = '<Badge variant="warning">Beta</Badge>';
const SOON = "<Badge>Soon</Badge>";
const COMP = '<Badge variant="success">Complimentary</Badge>';
const YES = "✓";
const NO = "—";
const TAGS = { beta: BETA, soon: SOON, comp: COMP };

export const PLANS = ["Personal", "Go", "Pro", "Business", "Enterprise"];
export const SPACE_PLANS = ["Personal", "Go", "Pro", "Business", "Boost", "Enterprise"];
const HEAD = { Business: `Business ${SOON}` };

const row = (label, tip, values, tag) => ({ label, tip, values, tag });
const CPU = "$0.119 per CPU-hour";

// Per team, per month: [Personal, Go, Pro, Enterprise]. Business is added from BUSINESS_TEAM.
const TEAM = [
  ["Usage", [
    row("Included usage", "Pays for every metered resource on this page, at the listed prices. Resets every month; unused usage doesn't roll over.",
      ["$1", "$5", "$15", "Contract"]),
    row("Members", "People who can publish and change settings. Reviewers, commenters, agents and app users are free and never count.",
      ["1", "1", "5, then $15 each (no extra usage)", "Contract"]),
  ]],
  ["Compute", [
    row("PHP compute", "Active CPU time running PHP, including Zero apps. Time spent waiting on the network or the database doesn't count.",
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
    row("Share links", "A safety limit against abuse, the same on every self-serve plan.", ["100", "100", "100", "100", "Custom"]),
    row("Pending invitations", "A safety limit against abuse, the same on every self-serve plan.", ["500", "500", "500", "500", "Custom"]),
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
// Per-Space limits are 5x Pro, capped where the platform has a hard ceiling.
// A row without an override takes Pro's value.
const BUSINESS_TEAM = {
  "Included usage": "None; $100 welcome credit in month one",
  Members: "$25 each",
  "PHP compute": CPU,
  "MySQL compute": CPU,
  "Dynamic requests": "Fair use with minimums (TBD)",
  "CI compute (builds)": "Fair use with minimums (TBD)",
  "Workers requests": "$0.30 per million",
  "Cached traffic": "Fair use with minimums (TBD)",
  "Uncached traffic": "Fair use with minimums (TBD)",
  Storage: "1 GB per Space, then $0.10 per GB-month",
  "Bucket storage": "Free now; 500 GB, then $0.016 per GB-month*",
  "Source control storage": "Free now; 250 GB, then $0.07 per GB-month†",
  "Transactional email": "Free now; 10,000 a day, then $0.50 per 1,000*",
  Spaces: "2,500",
  "Custom domains": "2,500",
  Logs: "Last 30 days",
  "Activity history": "Last 5 years",
};
const BUSINESS_SPACE = {
  "Compute workers": "20",
  Burst: "Up to 40",
  "Compute memory per request": "2 GB",
  "Function bundle": "250 MB",
  "Function run time": "600 s",
  Disk: "125 GB",
  "VideoPress storage": "1.25 TB",
  "Version size": "10 GB",
  "File size": "5 GB",
  "Files per version": "500,000",
  "Stored file size": "5 GB",
  "Database backups": "Hourly, restore 150 days back",
  "Build timeout": "4 h",
  Crons: "100",
  "Advanced crons": "Up to 25",
  "Cron run time": "25 min",
  Redirects: "7,500 + 375 dynamic",
  "Header rules": "375",
  "Firewall and cache rules": "250",
  "Custom certificate": YES,
  "Extra email a day": "+10,000",
  "Share links": "100",
  "Pending invitations": "500",
};
const BUSINESS_FEATURES = {
  "Custom domains": "2,500",
  "Redirects and header rules": "7,500 per Space",
  "Firewall and cache rules": "250 per Space",
  "Custom certificates": YES,
  Crons: "100 per Space",
  "Runtime and edge logs": "Last 30 days",
  "Database backups": "Hourly, 150 days",
  "Log drains": YES,
  Support: "Slack Connect channel",
};

/** Insert the Business column after Pro, from the overrides or Pro's own value. */
export function withBusiness(groups, overrides, proIndex = 2) {
  const used = new Set();
  const out = groups.map(([group, rows]) => [group, rows.map((item) => {
    const value = Object.hasOwn(overrides, item.label) ? overrides[item.label] : item.values[proIndex];
    if (Object.hasOwn(overrides, item.label)) used.add(item.label);
    return { ...item, values: [...item.values.slice(0, proIndex + 1), value, ...item.values.slice(proIndex + 1)] };
  })]);
  const missing = Object.keys(overrides).filter((label) => !used.has(label));
  if (missing.length > 0) throw new Error(`Business override for unknown rows: ${missing.join(", ")}`);
  return out;
}

export const CARDS = [
  { name: "Personal", price: "$0", per: "per month, no card", tag: "For your own projects and ideas.",
    items: ["$1 of usage included", "100 build minutes", "1 TB cached traffic", "20 Spaces, 20 custom domains", "1 GB disk per Space", "Daily database backups you can restore", "Analytics and 5 GB VideoPress per Space"] },
  { name: "Go", price: "$5", per: "per month", tag: "$5 of usage included.",
    items: ["Everything in Personal", "Fair-use cached traffic", "100 Spaces, 100 custom domains", "10 GB disk, 100 GB VideoPress per Space", "Hourly database backups", "Choose a datacenter", "Team skills, memories and design systems", "Boost any Space"] },
  { name: "Pro", price: "$15", per: "per month, 5 members included", tag: "$15 of usage included. Extra members are $15 each.",
    items: ["Everything in Go", "Team roles", "500 Spaces, 500 custom domains", "4 compute workers per Space", "25 GB disk per Space", "Wildcard domains and page templates", "Hourly backups, restore 30 days back", "Priority email support"] },
  { name: "Business", soon: true, price: "$500", per: "a month to start, $25 per member", tag: "Usage at the same prices, no included usage. $100 welcome credit in your first month.",
    items: ["Everything in Pro, with 5x the limits per Space", "20 compute workers per Space, bursting to 40", "125 GB disk, 1.25 TB VideoPress per Space", "2,500 Spaces and custom domains", "Hourly backups, restore 150 days back", "Custom certificates and log drains", "Support in a Slack Connect channel"] },
  { name: "Enterprise", price: "Custom", per: "talk to a person", tag: "For bigger requirements.",
    items: ["Everything in Business", "SSO, SAML and SCIM", "Subteams", "Custom access pages, no branding", "Network policies and egress firewall", "Log drains, SLA, volume pricing"] },
];
export const BOOST = { name: "Boost", price: "$9", per: "per Space, per month", tag: "On Go and up, for the Space that needs more.",
  items: ["8 compute workers, bursting to 16", "2 GB compute memory per request", "250 MB functions, 300 s run time", "50 GB disk, 1 TB VideoPress", "40 crons, including crontab", "More redirects and firewall rules", "Custom certificate", "5,000 more emails a day"] };

// Example bills. The first three use real usage across every Space in the last
// 30 days (median and 99th percentile per Space, measured 9 Nov 2026).
export const EXAMPLES = [
  { title: "A typical Space", plan: "Personal", price: "$0", basis: "Real usage: the median Space over the last 30 days.",
    lines: [["387 dynamic requests", "Included"], ["0.13 CPU-hours of PHP", "$0.02"], ["0.28 GB stored", "Under the 1 GB not counted"], ["2 build minutes", "Included"]],
    note: "Uses $0.02 of the $1 included." },
  { title: "A busy Space", plan: "Personal", price: "$0", basis: "Real usage: busier than 99% of Spaces over the last 30 days.",
    lines: [["40,686 dynamic requests", "Included"], ["1.29 CPU-hours of PHP", "$0.15"], ["0.83 GB stored", "Under the 1 GB not counted"], ["247 build minutes", "100 included, then $0.81"]],
    note: "Uses $0.96 of the $1 included. On Go, the same Space uses $0.15 of $5." },
  { title: "Ten busy Spaces", plan: "Go", price: "$5", basis: "Real usage: ten Spaces like the one above on one team.",
    lines: [["406,860 dynamic requests", "Included"], ["12.9 CPU-hours of PHP", "$1.54"], ["8.3 GB stored", "Under 1 GB per Space, not counted"], ["247 build minutes", "Included"]],
    note: "Uses $1.54 of the $5 included." },
  { title: "A studio of five", plan: "Pro", price: "$15", basis: "Estimate: 20 client sites and five members.",
    lines: [["5 million dynamic requests", "Included"], ["40 CPU-hours of PHP, 10 of MySQL", "$5.95"], ["2 TB cached, 300 GB uncached", "Included"], ["50 GB stored on 20 Spaces", "30 GB counted, $3.00"], ["1,500 build minutes", "Included"]],
    note: "Uses $8.95 of the $15 included." },
  { title: "A busy app", plan: "Pro + Boost", price: "$24", basis: "Estimate: one app with 10 million requests a month, 70% cached.",
    lines: [["3 million dynamic requests", "Included"], ["25 CPU-hours of PHP, 8.3 of MySQL", "$3.97"], ["600 GB uncached", "500 included, then $4.00"], ["10 GB stored", "9 GB counted, $0.90"], ["5 million Workers requests", "$1.50"]],
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

// Markdown treats a bare * as emphasis; the footnote marks stay literal.
const cell = (value) => value.replaceAll("*", String.raw`\*`).replaceAll("|", String.raw`\|`);
const title = (item) => (item.tag ? `${item.label} ${TAGS[item.tag]}` : item.label);

function table(first, columns, groups) {
  const lines = [
    `| ${[first, ...columns.map((column) => HEAD[column] ?? column)].join(" | ")} |`,
    `| ${[first, ...columns].map(() => "---").join(" | ")} |`,
  ];
  for (const [group, rows] of groups) {
    lines.push(`| **${group}** | ${columns.map(() => "").join(" | ")} |`);
    for (const item of rows) {
      if (item.values.length !== columns.length) throw new Error(`${item.label} has ${item.values.length} values for ${columns.length} plans`);
      lines.push(`| ${[title(item), ...item.values].map(cell).join(" | ")} |`);
    }
  }
  const notes = groups.flatMap(([, rows]) => rows).filter((item) => item.tip);
  if (notes.length === 0) return lines.join("\n");
  return [
    lines.join("\n"),
    "",
    '<Expandable title="What each row counts">',
    "",
    ...notes.map((item) => `- **${item.label}**: ${item.tip}`),
    "",
    "</Expandable>",
  ].join("\n");
}

function card({ name, soon, price, per, tag, items }, attributes = "") {
  return [
    `<Card title="${name}"${attributes}>`,
    "",
    `${soon ? `${SOON} ` : ""}**${price}** ${per}`,
    "",
    tag,
    "",
    ...items.map((item) => `- ${item}`),
    "",
    "</Card>",
  ].join("\n");
}

function example({ title: name, plan, price, basis, lines, note }) {
  return [
    `<Card title="${name}">`,
    "",
    `**${price} a month** on ${plan}. ${basis}`,
    "",
    ...lines.map(([what, cost]) => `- ${what}: ${cost}`),
    "",
    note,
    "",
    "</Card>",
  ].join("\n");
}

/** The draft page's includes, keyed by file name under content/_pricing-next/. */
export function pricingNextSnippets() {
  return {
    plans: [
      '<CardGroup cols={3}>',
      ...CARDS.map((plan) => card(plan)),
      "</CardGroup>",
      "",
      card(BOOST, ' icon="rocket"'),
    ].join("\n"),
    examples: ["<CardGroup cols={2}>", ...EXAMPLES.map(example), "</CardGroup>"].join("\n"),
    team: table("Per team, per month", PLANS, withBusiness(TEAM, BUSINESS_TEAM)),
    space: table("Per Space", SPACE_PLANS, withBusiness(SPACE, BUSINESS_SPACE)),
    features: table("Feature", PLANS, withBusiness(FEATURES, BUSINESS_FEATURES)),
    payments: [
      "| Payment | Rate |",
      "| --- | --- |",
      ...PAYMENTS.map(([payment, rate]) => `| ${cell(payment)} | ${cell(rate)} |`),
    ].join("\n"),
  };
}
