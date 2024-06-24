import { Link } from "react-router-dom"
import styles from "./styles.module.scss"

const News = () => {
  return (
    <section>
      <div className={`${styles.m11} secContainer`}>
        <img
          src={"/images/M11-01-01.png"}
          className={styles.m11_img}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>

      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h3>النشرة الإخبارية</h3>
          <p>
            اشترك في النشرة الإخبارية الخاصة بـ M11 للحصول على آخر التحديثات
          </p>

          <form>
            <input
              className={styles.email}
              type="email"
              placeholder="البريد الالكتروني"
              id="email"
              name="email"
            />

            <button type="submit" className={styles.btn}>
              <Link href={""}>اشترك الان</Link>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default News
