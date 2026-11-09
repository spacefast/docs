import { defineComponents } from "blume";

import Breadcrumbs from "./components/Breadcrumbs.astro";
import Pagination from "./components/Pagination.astro";
import Sidebar from "./components/Sidebar.astro";
import PricingTable from "./components/PricingTable.astro";
import WpCloudDocs from "./components/WpCloudDocs.astro";

export default defineComponents({
  layout: { Breadcrumbs, Pagination, Sidebar },
  mdx: { PricingTable, WpCloudDocs },
});
