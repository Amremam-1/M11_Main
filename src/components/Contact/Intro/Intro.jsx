import styles from "./styles.module.scss"
import { Link } from "react-router-dom"
import { social } from "../../data"

const Intro = () => {
  return (
    <div className="container">
      <div className={styles.wrapper_main}>
        <div className={styles.top}></div>

        <div className={styles.middle}>
          <h1 className={styles.title}>تواصل معنا</h1>
          <div className={styles.middleContent}>
            <p className={styles.disc}>
              تضم شركة m11 مجموعة من المبدعين المتحمسين الملتزمين بإنتاج المعنى
              من خلال العدسة. من المفهوم إلى مرحلة ما بعد الإنتاج، نحن نفخر
              برؤيتنا الفريدة في كل مشروع، ونتخصص في الأفلام الطويلة والوثائقية
              والبرامج التلفزيونية والإعلانات التجارية. ومع التركيز على التنوع
              والشمول والمساءلة الاجتماعية، فإننا نؤمن بقوة الفيلم في ربط الناس
              عبر الثقافات. دعونا نجلب قصتك إلى الحياة.
              <Link href="">تواصل معنا الان</Link>
            </p>

            <div className={styles.social}>
              <ul>
                {social.map((item) => (
                  <li key={item.id}>
                    <Link href={""}>
                      <item.icon className={styles.icon} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
