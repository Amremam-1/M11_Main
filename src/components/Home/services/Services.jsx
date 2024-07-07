import { Link } from "react-router-dom"
import styles from "./styles.module.scss"

import { GoArrowUpLeft } from "react-icons/go"

const Services = () => {
  return (
    <section>
      <div className={`${styles.container} secContainer`}>
        <div className={styles.discover}>
          <div className={styles.heading}>
            <span>تعرف اكثر علي</span>
            <p className={styles.title}>الخدمات التي نقدمها</p>
          </div>
          <button className={styles.view}>
            <Link href={""}>مشاهدة جميع الاعمال </Link>
          </button>
        </div>

        <div className={styles.technical_service}>
          <div className={styles.technical_content}>
            <div className={styles.wrapper}>
              <div className={styles.top}>
                <div className={styles.heading}>
                  <h1 className={styles.title}>خدماتنا الفنية</h1>
                  <button className={styles.btn}>
                    <GoArrowUpLeft className={styles.icon} />
                  </button>
                </div>

                <p className={styles.disc}>
                  تأسست شركة <span>M11</span> على يد مجموعة من المتخصصين في مجال
                  الإعلام المتحمسين، وهي شركة إنتاج إعلامي ديناميكية ومبتكرة
                  تعمل على إنشاء محتوى عالي الجودة لأكثر من عقد من الزمن، وهي
                  معروفة بسرد القصص المتطور والتزامها بالتميز.
                </p>
              </div>

              <div className={styles.bottom}>
                <h3 className={styles.highlight}>ابرز الخدمات التي نقدمها</h3>

                <ul className={styles.services_highlight}>
                  <li>
                    <img
                      src={"/images/highlight.png"}
                      alt=""
                      security="100vw"
                    />
                    الفيديو الاعلاني
                  </li>
                  <li>
                    <img
                      src={"/images/highlight.png"}
                      alt=""
                      security="100vw"
                    />
                    التصوير الفوتوغرافي
                  </li>
                  <li>
                    <img
                      src={"/images/highlight.png"}
                      alt=""
                      width={30}
                      height={30}
                      security="100vw"
                    />
                    تصوير الحفلات والمؤتمرات
                  </li>
                  <li>
                    <img
                      src={"/images/highlight.png"}
                      alt=""
                      width={30}
                      height={30}
                      security="100vw"
                    />
                    تصميم سوشيال ميديا
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.technical_image}>
            <img
              src={"/images/camare.png"}
              alt=""
              className={styles.camare}
              width={0}
              height={0}
              sizes="100vw"
            />

            <img
              src={"/images/camarebg.png"}
              alt=""
              className={styles.camare_bg}
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
