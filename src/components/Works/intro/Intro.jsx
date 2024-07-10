import styles from "./styles.module.scss"
import { LiaAngleDoubleDownSolid } from "react-icons/lia"
import { FiArrowDownLeft } from "react-icons/fi"
import { social } from "../../data"
import { Link } from "react-router-dom"
import { goToSection } from "../../utils"

const Intro = () => {
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

        <button className={styles.goDown} onClick={() => goToSection("works")}>
          <span className={styles.text}>قم بالتمرير لأسفل لرؤية الأعمال</span>
          <LiaAngleDoubleDownSolid className={styles.icon} />
        </button>
      </div>
    </section>
  )
}

export default Intro
