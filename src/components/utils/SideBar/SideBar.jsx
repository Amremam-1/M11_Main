import { Link } from "react-router-dom"
import { navList } from "../../data"
import styles from "./styles.module.scss"
import { IoIosClose } from "react-icons/io"

const SideBar = ({ view, setShowMenu }) => {
  return (
    <div className={`${styles.container} ${view ? styles.active : ""}`}>
      <div className={styles.top}>
        <div className={styles.close}>
          <span className={styles.btn} onClick={() => setShowMenu(false)}>
            <IoIosClose className={styles.icon} />
          </span>
        </div>

        <div className={styles.info}>
          <img src="/images/logo.png" alt="logo" />
        </div>
      </div>

      <div className={styles.links}>
        <ul className={styles.nav}>
          {navList.map((item) => (
            <li key={item.id} onClick={() => setShowMenu(false)}>
              <Link to={item.link} className={styles.link}>
                <p className={styles.title}>{item.titleAr}</p>
                <item.icon className={styles.iconDetail} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideBar
