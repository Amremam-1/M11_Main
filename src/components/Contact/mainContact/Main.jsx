import styles from "./styles.module.scss"
import { IoIosMailOpen } from "react-icons/io"
import { FiPhone } from "react-icons/fi"
import { Link } from "react-router-dom"
import { GoArrowUpLeft } from "react-icons/go"

const Main = () => {
  return (
    <section className={styles.container}>
      <div className={styles.main_wrapper}>
        <div className={styles.top}>
          <h1 className={styles.contactWith}>تواصل معنا</h1>

          <div className={styles.details}>
            <div className={styles.phone}>
              <FiPhone className={styles.icon} />
              <div className={styles.phone_info}>
                <h5>الهاتف</h5>
                <span>920011324</span>
              </div>
            </div>
            <div className={styles.email}>
              <IoIosMailOpen className={styles.icon} />
              <div className={styles.email_info}>
                <h5>البريد الاكتروني</h5>
                <span>INFO@M11.TV</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.middle}>
          <div className={styles.middle_right}>
            <h1>
              ابقي عل اطلاع <br />
              دائم بنا
            </h1>

            <div className={styles.m11}>
              <img className={styles.img} src={"/images/M11-01-01.png"} />
            </div>
          </div>

          <div className={styles.middle_left}>
            <form>
              <div className={styles.formGroup}>
                <label htmlFor="firstName" className={styles.label}>
                  الاسم الاول
                </label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="الاسم الاول"
                  id="firstName"
                  name="firstName"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="lastName" className={styles.label}>
                  الاسم الاخير
                </label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="الاسم الاخير"
                  id="lastName"
                  name="lastName"
                />
              </div>

              <div className={`${styles.formGroup} ${styles.width}`}>
                <label htmlFor="email" className={styles.label}>
                  البريد الالكتروني
                </label>
                <input
                  className={styles.input}
                  type="email"
                  placeholder="البريد الالكتروني"
                  id="email"
                  name="email"
                />
              </div>

              <div
                className={`${styles.formGroup} ${styles.width} ${styles.height}`}
              >
                <label htmlFor="message" className={styles.label}>
                  اكتب رسالتك
                </label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="اكتب رسالتك"
                  id="message"
                  name="message"
                />
              </div>

              <button type="submit" className={styles.btn}>
                <Link to={""}>ارسل رسالتك</Link>

                <span>
                  <GoArrowUpLeft className={styles.icon} />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main
