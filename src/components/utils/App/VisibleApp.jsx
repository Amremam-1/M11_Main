import { apps } from "../../data"
import styles from "./styles.module.scss"

const VisibleApp = () => {
  return (
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
  )
}

export default VisibleApp
