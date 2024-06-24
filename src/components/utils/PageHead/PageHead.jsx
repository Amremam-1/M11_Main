import styles from "./styles.module.scss"
import { FaXTwitter } from "react-icons/fa6"
import { FaFacebookF } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useState } from "react"

const PageHead = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false)

  const handleMouseEnter = () => {
    setIsPopupVisible(true)
  }

  const handleMouseLeave = () => {
    setIsPopupVisible(false)
  }

  // const handleClick = () => {
  //   setIsPopupVisible(!isPopupVisible)
  // }
  return (
    <section className={styles.pageHead}>
      <div className={styles.container}>
        <div className={styles.pageInfo}>
          <h1 className={styles.title}>
            شركة <span>M11</span>
          </h1>
          <p className={styles.disc}>
            للإنتاج الفني ومواكبة عصر التطور في عالم الدقة , نتطلع دايماً بتوفير
            احدث الامكانيات
          </p>

          <button className={styles.btn}>
            <Link href={""}>ابدا الان</Link>
          </button>
        </div>

        <div className={styles.pageLinks}>
          <div className={styles.right}>
            <div className={styles.whatsAppContainer}>
              <button
                className={styles.whatsApp}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link href={""}>
                  <img
                    src={"/src/assets/images/whatsApp.png"}
                    className={styles.whatup}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </Link>

                {isPopupVisible && (
                  <div className={styles.whatsAppPopUp}>
                    <button
                      className={styles.closeBtn}
                      onClick={() => setIsPopupVisible(false)}
                    >
                      &times;
                    </button>
                    <div className={styles.info}>
                      <h2>تحدث معنا..</h2>
                      <span>نحن في خدمتك على مدار الساعة!</span>
                    </div>
                  </div>
                )}
              </button>
            </div>
          </div>
          <div className={styles.left}>
            <ul>
              <Link href={""}>
                <FaInstagram className={styles.icon} />
              </Link>
              <Link href={""}>
                <FaYoutube className={styles.icon} />
              </Link>
              <Link href={""}>
                <FaFacebookF className={styles.icon} />
              </Link>
              <Link href={""}>
                <FaXTwitter className={styles.icon} />
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageHead
