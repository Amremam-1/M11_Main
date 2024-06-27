import styles from "./styles.module.scss"
import { LiaAngleDoubleDownSolid } from "react-icons/lia"
import { goToSection } from "../../utils"
const Intro = () => {
  return (
    <section className="container">
      <div className={styles.wrapper_main}>
        <div className={styles.service_content}>
          <h1 className={styles.heading}>خدماتنا</h1>
          <p className={styles.info}>
            نحن شركة إنتاج أفلام متخصصة في تقديم تغطية عالية الجودة لأحداث
            الفيديو والتصوير الفوتوغرافي والإعلانات الرقمية والأفلام الوثائقية
            ومقاطع الفيديو الموسيقية والأفلام القصيرة. فريقنا من المحترفين ذوي
            الخبرة متحمسون لتقديم محتوى عالي الجودة يلبي احتياجات عملائنا
            ويتجاوز توقعاتهم.سواء كنت تخطط لحدث مشترك أو حفل موسيقي أو إعلان
            رقمي أو أي نوع آخر من الإنتاج، فلدينا الخبرة والمعدات اللازمة
            لالتقاط كل لحظة بتفاصيل مذهلة. تم تصميم خدمات تغطية أحداث الفيديو
            والتصوير الفوتوغرافي الخاصة بنا وفقًا لمتطلباتك المحددة، مما يضمن
            أننا نلتقط جوهر الحدث الخاص بك ونقدم منتجًا ستفخر بمشاركته مع
            الآخرين.إذا كنت بحاجة إلى فيلم وثائقي أو فيلم قصير، لدينا المهارات
            والإبداع لتحقيق رؤيتك على أرض الواقع. سيعمل فريقنا معك بدءًا من
            الفكرة وحتى الانتهاء، مما يضمن تسليم مشروعك في الوقت المحدد وفي حدود
            الميزانية.
          </p>
        </div>

        <div className={styles.service_info}>
          <img
            src="/images/M11-01-01.png"
            alt="m11"
            className={styles.m11_image}
          />

          <button
            className={styles.goDown}
            onClick={() => goToSection("services")}
          >
            <span className={styles.text}>قم بالتمرير لأسفل لرؤية الأعمال</span>
            <LiaAngleDoubleDownSolid className={styles.icon} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Intro
