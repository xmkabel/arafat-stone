import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { ServiceDetail } from "./pages/ServiceDetail";
import { Projects } from "./pages/Projects";
import { About } from "./pages/About";
import { BookVisit } from "./pages/BookVisit";
import { Contact } from "./pages/Contact";
import { AdminLayout } from "./pages/admin/AdminLayout";
import { AdminLogin } from "./pages/admin/AdminLogin";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { AdminVisits } from "./pages/admin/AdminVisits";
import { AdminServices } from "./pages/admin/AdminServices";
import { AdminProjects } from "./pages/admin/AdminProjects";
import { AdminMessages } from "./pages/admin/AdminMessages";
import { AdminSettings } from "./pages/admin/AdminSettings";
import RootLayout from "./components/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,   // ← wrap all public pages
    children: [
      { path: "/", Component: Home },
      { path: "/services", Component: Services },
      { path: "/service/:id", Component: ServiceDetail },
      { path: "/projects", Component: Projects },
      { path: "/about", Component: About },
      { path: "/book-visit", Component: BookVisit },
      { path: "/contact", Component: Contact },
    ],
  },
  {
    path: "/admin/login",
    Component: AdminLogin,
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: AdminDashboard },
      { path: "visits", Component: AdminVisits },
      { path: "services", Component: AdminServices },
      { path: "projects", Component: AdminProjects },
      { path: "messages", Component: AdminMessages },
      { path: "settings", Component: AdminSettings },
    ],
  },
]);