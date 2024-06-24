import styles from "./styles.module.scss"
import { IoIosMailOpen } from "react-icons/io"
import { FiPhone } from "react-icons/fi"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const Contact = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.right}>
            <p>تواصل معنا</p>
            <h1>
              ابقي عل اطلاع <br />
              دائم بنا
            </h1>

            <div className={styles.details}>
              <div className={styles.email}>
                <IoIosMailOpen className={styles.icon} />
                <div className={styles.email_info}>
                  <h5>البريد الاكتروني</h5>
                  <span>INFO@M11.TV</span>
                </div>
              </div>
              <div className={styles.phone}>
                <FiPhone className={styles.icon} />
                <div className={styles.phone_info}>
                  <h5>الهاتف</h5>
                  <span>920011324</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.left}>
            <form>
              <input
                className={styles.fristName}
                type="text"
                placeholder="الاسم الاول"
                id="name"
                name="name"
              />
              <input
                className={styles.lastName}
                type="text"
                placeholder="الاسم الاخير"
                id="name"
                name="name"
              />
              <input
                className={styles.email}
                type="message"
                placeholder="اكتب رسالتك"
                id="message"
                name="message"
              />

              <Button type="submit" className={styles.btn}>
                <Link href={""}>ارسل رسالتك</Link>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
