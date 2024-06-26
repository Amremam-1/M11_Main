import { createBrowserRouter } from "react-router-dom"
import Layout from "./pages/layout"
import HomePage from "./pages/HomePage"
import Error from "./components/utils/Error/Error"
import ServicesPage from "./pages/ServicesPage"
import WorksPage from "./pages/WorksPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/services", element: <ServicesPage /> },
      { path: "/works", element: <WorksPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
    errorElement: <Error />,
  },
])

export default router
