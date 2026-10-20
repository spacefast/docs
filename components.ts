import { defineComponents } from "blume";

import Pagination from "./components/Pagination.astro";
import Sidebar from "./components/Sidebar.astro";

export default defineComponents({
  layout: { Pagination, Sidebar },
});
