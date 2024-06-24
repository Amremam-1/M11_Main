import { createBrowserRouter } from "react-router-dom"
import Layout from "./pages/layout"
import HomePage from "./pages/HomePage"
import Error from "./components/utils/Error/Error"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <HomePage /> }],
    errorElement: <Error />,
  },
])

export default router
