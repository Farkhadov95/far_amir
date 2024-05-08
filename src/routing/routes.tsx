import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import ScrollToTop from "../components/ScrollToTop";
import SinglePage from "../pages/SinglePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Layout />
      </>
    ),
    children: [{ path: "", element: <SinglePage /> }],
  },
]);

export default router;
