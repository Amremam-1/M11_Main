import { Link } from "react-router-dom"
import styles from "./styles.module.scss"
import { GoArrowUpLeft } from "react-icons/go"

const applications = [
  {
    imgUrl: "/images/D2020App.png",
    link: "https://d2020web.vercel.app/",
  },
  {
    imgUrl: "/images/halfApp2.png",
    link: "https://noo9.net/",
  },
  {
    imgUrl: "/images/mbnApp.png",
    link: "https://mahercp2-main.vercel.app/en",
  },
]

const Info = () => {
  return (
    <section>
      <div className={styles.wrapper_main}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            تضم شركة <span>m11</span>
          </h1>
          <p className={styles.disc}>
            مجموعة من المبدعين المتحمسين الملتزمين بإنتاج المعنى من خلال العدسة.
            من المفهوم إلى مرحلة ما بعد الإنتاج، نحن نفخر برؤيتنا الفريدة في كل
            مشروع، ونتخصص في الأفلام الطويلة والوثائقية والبرامج التلفزيونية
            والإعلانات التجارية. ومع التركيز على التنوع والشمول والمساءلة
            الاجتماعية، فإننا نؤمن بقوة الفيلم في ربط الناس عبر الثقافات. دعونا
            نجلب قصتك إلى الحياة.
          </p>
        </div>

        <div className={styles.shape}></div>
      </div>

      <div className={styles.discover}>
        <h2 className={styles.heading}>
          <span>تصفح مواقع</span> ماهر بن نايف
        </h2>

        <div className={styles.applications}>
          {applications.map((item, index) => (
            <div className={styles.app_content} key={index}>
              <div className={styles.iconApp}>
                <img src={item.imgUrl} alt="" />
              </div>

              <div className={styles.app_bottom}>
                <Link to={item.link} className={styles.link}>
                  <h3 className={styles.info}>زيارة الموقع</h3>
                  <GoArrowUpLeft className={styles.icon} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Info
