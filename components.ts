import { defineComponents } from "blume";

import Breadcrumbs from "./components/Breadcrumbs.astro";
import Pagination from "./components/Pagination.astro";
import Sidebar from "./components/Sidebar.astro";

export default defineComponents({
  layout: { Breadcrumbs, Pagination, Sidebar },
});
