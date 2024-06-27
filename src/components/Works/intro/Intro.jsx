import styles from "./styles.module.scss"
import { LiaAngleDoubleDownSolid } from "react-icons/lia"
import { FiArrowDownLeft } from "react-icons/fi"
import { FaXTwitter } from "react-icons/fa6"
import { FaFacebookF } from "react-icons/fa"
import { IoLogoInstagram } from "react-icons/io5"
import { FaYoutube } from "react-icons/fa"
import { Link } from "react-router-dom"

const social = [
  { id: "1", icon: FaXTwitter, link: "" },
  { id: "2", icon: FaFacebookF, link: "" },
  { id: "3", icon: IoLogoInstagram, link: "" },
  { id: "4", icon: FaYoutube, link: "" },
]

const Intro = () => {
  const goToSection = () => {
    document.getElementById("to-works").scrollIntoView({ behavior: "smooth" })
  }
  return (
    <section className="container">
      <div className={styles.wrapper_main}>
        <h1 className={styles.heading}>
          تصفح أعمالنا
          <FiArrowDownLeft className={styles.iconarrow} />
        </h1>

        <div className={styles.social}>
          <ul>
            {social.map((item) => (
              <li key={item.id}>
                <Link href={""}>
                  <item.icon className={styles.icon} />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <button className={styles.goDown} onClick={goToSection}>
          <span className={styles.text}>قم بالتمرير لأسفل لرؤية الأعمال</span>
          <LiaAngleDoubleDownSolid className={styles.icon} />
        </button>
      </div>
    </section>
  )
}

export default Intro
