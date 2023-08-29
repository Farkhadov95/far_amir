import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ResumePage from "../pages/ResumePage";
import ProjectsPage from "../pages/ProjectsPage";
import AboutPage from "../pages/AboutPage";
import Layout from "../components/Layout";
import ScrollToTop from "../components/ScrollToTop";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Layout />
      </>
    ),
    children: [
      { path: "", element: <HomePage /> },
      { path: "resume", element: <ResumePage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "about", element: <AboutPage /> },
    ],
  },
]);

export default router;
