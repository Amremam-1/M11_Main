import { Link } from "react-router-dom"
import styles from "./styles.module.scss"
import { GoArrowUpLeft } from "react-icons/go"

const Offers = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>أفضل عروض التصميم</h1>
      <div className={styles.main_wrapper}>
        <div className={styles.poster}>
          <div className={styles.advertising}>
            <h2 className={styles.title}>تصميم بوست</h2>

            <div className={styles.amount}>
              <p>
                145
                <span>ريال</span>
              </p>

              <button className={styles.btn}>
                إحجز الان
                <GoArrowUpLeft className={styles.arrow} />
              </button>
            </div>
          </div>

          <div className={styles.offers_details}>
            <ul className={styles.services_highlight}>
              <li>
                <img
                  src={"/images/highlight.png"}
                  alt=""
                  width={25}
                  height={25}
                  security="100vw"
                />
                تصميم عدد 10 بوست
              </li>
              <li>
                <img
                  src={"/images/highlight.png"}
                  alt=""
                  width={25}
                  height={25}
                  security="100vw"
                />
                تصميم بوست انستغرام او سناب شات او .......
              </li>
              <li>
                <img
                  src={"/images/highlight.png"}
                  alt=""
                  width={25}
                  height={25}
                  security="100vw"
                />
                عدد 10 بوست احترافي بجودة عاليه
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.Graphic}>
          <div className={styles.advertising}>
            <h2 className={styles.title}>إعلان جرافيكس</h2>

            <div className={styles.amount}>
              <p>
                450 <span>ريال</span>
              </p>

              <button className={styles.btn}>
                إحجز الان
                <GoArrowUpLeft className={styles.arrow} />
              </button>
            </div>
          </div>

          <div className={styles.offers_details}>
            <ul className={styles.services_highlight}>
              <li>
                <img
                  src={"/images/highlight.png"}
                  alt=""
                  width={25}
                  height={25}
                  security="100vw"
                />
                إعلان مدة 50 ثانية
              </li>
              <li>
                <img
                  src={"/images/highlight.png"}
                  alt=""
                  width={25}
                  height={25}
                  security="100vw"
                />
                اعلان مصمم ببرنامج افترايفكت
              </li>
              <li>
                <img
                  src={"/images/highlight.png"}
                  alt=""
                  width={25}
                  height={25}
                  security="100vw"
                />
                عبارة عن صورة وفيديو احترافي تعريفي او لمنتج
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.service_video}>
          <div className={styles.video_img}>
            <img src="/images/partyimg.png" alt="party" />
          </div>
          <div className={styles.video_content}>
            <h1 className={styles.head}>تصوير الحفلات والمؤتمرات</h1>
            <p className={styles.text}>
              نقوم بتغطئة وتوثيق مناسباتكم وحفلاتكم بفريق عمل علي اعلي مستوي من
              الدقة والكفاءة وبتجهيز كامل اضاءات صوتيات وكاميرات عالية الدقة
            </p>

            <Link className={styles.btn}>
              <span>مشاهدة اعمالنا</span>
              <GoArrowUpLeft className={styles.icon} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offers
