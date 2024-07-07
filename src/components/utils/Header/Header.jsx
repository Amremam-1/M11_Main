import styles from "./styles.module.scss"
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import VisibleApp from "../App/VisibleApp"
import { navList } from "../../data"
import SideBar from "../SideBar/SideBar"

const Header = () => {
  const location = useLocation()
  const [activeLink, setActiveLink] = useState(location.pathname)
  const [visibleApps, setVisibleApps] = useState(false)

  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    setActiveLink(location.pathname)
  }, [location.pathname])

  const toggle = (link) => {
    setActiveLink(activeLink === link ? "" : link)
  }

  const handleClick = () => {
    setVisibleApps(!visibleApps)
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header className={styles.header}>
      <div className={`${styles.container} secContainer`}>
        <div className={styles.logo}>
          <img
            className={styles.logoImg}
            src="/images/logo.png"
            alt="logo"
            width={100}
            height={55}
          />

          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {navList?.map((item, index) => (
                <li className={styles.navItem} key={index}>
                  <Link
                    className={`${styles.navLink} ${
                      activeLink === item.link ? styles.active : ""
                    }`}
                    to={item.link}
                    onClick={() => toggle(item.link)}
                  >
                    {item.titleAr}
                    {item.arrow && <item.arrow className={styles.arrow} />}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.apps}>
          <div
            className={`${styles.appsBtn} ${visibleApps ? styles.active : ""}`}
            onClick={handleClick}
          >
            <div className={styles.shapes}>
              <span className={styles.circle}></span>
              <span className={styles.square}></span>
              <span className={styles.circle}></span>
              <span className={styles.square}></span>
            </div>
          </div>

          <div
            className={`${styles.menu} ${showMenu && styles.active}`}
            onClick={toggleMenu}
          >
            <span className={`${styles.line} ${styles.line1}`}></span>
            <span className={`${styles.line} ${styles.line2}`}></span>
            <span className={`${styles.line} ${styles.line3}`}></span>
          </div>

          {visibleApps && <VisibleApp />}

          <SideBar view={showMenu} setShowMenu={setShowMenu} />
        </div>
      </div>
    </header>
  )
}

export default Header
