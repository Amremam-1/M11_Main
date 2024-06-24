import { Outlet } from "react-router-dom"
import Header from "../components/utils/Header/Header"
import Footer from "../components/utils/Footer/Footer"

const Layout = () => {
  return (
    <div>
      <Header />
      <div id="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
