import { Link } from "react-router-dom"
import styles from "./styles.module.scss"


const Info = () => {
  return (
    <section className="bg-color">
      <div className={`${styles.container}`}>
        <div className={styles.content}>
          <div className={styles.info}>
            <h1 className={styles.title}>من نحن</h1>
            <p className={styles.disc}>
              تضم شركة <span>M11</span> مجموعة من المبدعين المتحمسين الملتزمين
              بإنتاج المعنى من خلال العدسة. من المفهوم إلى مرحلة ما بعد الإنتاج،
              نحن نفخر برؤيتنا الفريدة في كل مشروع، ونتخصص في الأفلام الطويلة
              والوثائقية والبرامج التلفزيونية والإعلانات التجارية. ومع التركيز
              على التنوع والشمول والمساءلة الاجتماعية، فإننا نؤمن بقوة الفيلم في
              ربط الناس عبر الثقافات. دعونا نجلب قصتك إلى الحياة.
            </p>
          </div>

          <div className={styles.shape}>
            <img
              src={"/images/shape.png"}
              alt=""
              className={styles.img}
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>

        <div className={styles.discover}>
          <p className={styles.title}>تصفح افضل اعمالنا</p>
          <button className={styles.view}>
            <Link href={""}>مشاهدة جميع الاعمال </Link>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Info
