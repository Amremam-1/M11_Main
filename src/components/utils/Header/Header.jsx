import styles from "./styles.module.scss"
import { useState } from "react"
import { FiArrowDownLeft, FiArrowUpLeft } from "react-icons/fi"
import { Link } from "react-router-dom"

const navList = [
  {
    id: "01",
    titleAr: "الرئيسية",
    titleEn: "",
    link: "/",
  },
  {
    id: "02",
    titleAr: "خدماتنا",
    titleEn: "",
    link: "/",
  },
  {
    id: "03",
    titleAr: "أعمالنا",
    titleEn: "",
    link: "/",
    arrow: FiArrowDownLeft,
  },
  {
    id: "04",
    titleAr: "من نحن",
    titleEn: "",
    link: "/",
  },
  {
    id: "05",
    titleAr: "تواصل معنا",
    titleEn: "",
    link: "/",
  },
]

const apps = [
  {
    title: "مجموعة ماهر بن نايف التجارية",
    subtitle: "للخدمات التقنية والفنية والتسويقية",
    imageUrl: "/images/mbn-logo.png",
    link: "https://mahercp2-main.vercel.app/en",
    icon: FiArrowUpLeft,
  },
  {
    title: "الدليــل التجــاري",
    subtitle: "منشأت , مندوبين , منتجات بيع وايجار واكثر ",
    imageUrl: "/images/D2020.png",
    link: "",
    icon: FiArrowUpLeft,
  },
  {
    title: "متجر HALF/ نـص",
    subtitle: "للتجارة الالكترونية",
    imageUrl: "/images/halfapp.png",
    link: "https://noo9.net/",
    icon: FiArrowUpLeft,
  },
]

const Header = () => {
  const [activeLink, setActiveLink] = useState("01")
  const [visibleApps, setVisibleApps] = useState(false)

  const toggle = (id) => {
    setActiveLink(activeLink === id ? "" : id)
  }

  const handleClick = () => {
    setVisibleApps(!visibleApps)
  }

  return (
    <header className={styles.header}>
      <div className={`${styles.container} secContainer`}>
        <div className={styles.logo}>
          <img
            className={styles.logoImg}
            src="/public/images/logo.png"
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
                      activeLink === item.id ? styles.active : ""
                    }`}
                    href={item.link}
                    onClick={() => toggle(item.id)}
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
          <div className={styles.appsBtn} onClick={handleClick}>
            <div className={styles.shapes}>
              <span className={styles.circle}></span>
              <span className={styles.square}></span>
              <span className={styles.circle}></span>
              <span className={styles.square}></span>
            </div>
          </div>

          {visibleApps && (
            <div className={styles.wrapperApps}>
              <div className={styles.main}>
                {apps.map((item, index) => (
                  <div className={styles.app} key={index}>
                    <div className={styles.appImg}>
                      <img src={item.imageUrl} alt="" />
                    </div>
                    <div className={styles.appContent}>
                      <h2 className={styles.head}>
                        {item.title}
                        <span className={styles.subtitle}>{item.subtitle}</span>
                      </h2>

                      <button className={styles.btn}>
                        <a href={item.link} className={styles.link}>
                          زيارة الموقع
                        </a>
                        <item.icon className={styles.icon} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header

// <div className={styles.menu}>
// <LuMenu className={styles.iconMenu} />
// </div>
