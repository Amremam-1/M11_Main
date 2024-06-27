import styles from "./styles.module.scss"
import { GoArrowUpLeft } from "react-icons/go"
import { Link } from "react-router-dom"

const Content = () => {
  return (
    <section className="container" id="services">
      <div className={styles.wrapper}>
        <div className={styles.service_video}>
          <div className={styles.video_content}>
            <h1 className={styles.heading}>الفيديو الاعلاني</h1>
            <p className={styles.text}>
              نقدم السيناريو وفكرة الاعلان بما خصص له من ميزانية من العميل ومن
              ثم يتم ترشيح طريقة عمل الفيديو الاعلاني واعلانات الفيديو تنقسم عدة
              اقسام وفريقنا يهتم لثلاث تصوير اعلاني ذو لوكيشن وشخصيات هامة -
              تصوير اعلاني بطريقة عصرية - عمل فيديو جرافيك اعلاني ونحرص كل الحرص
              بأن يكون للاعلان صدى كبير بكتابة الافكار في السيناريو
            </p>

            <Link className={styles.btn}>
              <span>مشاهدة اعمالنا</span>
              <GoArrowUpLeft className={styles.icon} />
            </Link>
          </div>

          <div className={styles.video_img}>
            <img src="/images/viedoimg.png" alt="video" />
          </div>
        </div>

        <div className={styles.service_photo}>
          <div className={styles.video_img}>
            <img src="/images/photoimg.png" alt="photo" />
          </div>

          <div className={styles.video_content}>
            <h1 className={styles.heading}>التصوير الفوتوغرافي</h1>
            <p className={styles.text}>
              صور منتجاتك لدى عملائك له اهمية وتأثير عآلي جدا لدى عملائكم فهناك
              من يقوم بتصوير منتج جميل ويظهره بشكل سيئ بالامكانيات وقلة الخبرة
              وهناك من يقوم بتجميل صورة المنتج بأحدث التقنيات وخبرة التصوير ونحن
              نقدم لكم خدمة تصوير المنتجات والمودلز بإحترافية عالية
            </p>

            <Link className={styles.btn}>
              <span>مشاهدة اعمالنا</span>
              <GoArrowUpLeft className={styles.icon} />
            </Link>
          </div>
        </div>

        <div className={styles.service_media}>
          <div className={styles.video_content}>
            <h1 className={styles.heading}>تصميم سوشيال ميديا</h1>
            <p className={styles.text}>
              تصميم متوافق مع جميع برامج التواصل الاجتماعي صورة ( بوست ) فيديو
              تصميم احترافي عآلي الجودة نقوم بتنشيط حساباتكم بتصميم وتنسيق الملف
              الشخصي وتصميم الطرح اليومي
            </p>

            <Link className={styles.btn}>
              <span>مشاهدة اعمالنا</span>
              <GoArrowUpLeft className={styles.icon} />
            </Link>
          </div>

          <div className={styles.video_img}>
            <img src="/images/socialimg.png" alt="social" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Content
