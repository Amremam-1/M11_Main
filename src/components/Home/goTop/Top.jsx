import styles from "./styles.module.scss"
import { HiArrowSmallUp } from "react-icons/hi2"

const Top = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <section>
      <div className={styles.container}>
        <button onClick={scrollToTop} className={styles.btn}>
          <HiArrowSmallUp className={styles.icon} />
        </button>
      </div>
    </section>
  )
}

export default Top
