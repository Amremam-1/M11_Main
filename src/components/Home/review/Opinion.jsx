import { Link } from "react-router-dom"
import styles from "./styles.module.scss"
import { FaStar } from "react-icons/fa6"

const comments = [
  {
    id: "01",
    image: "/images/person1.png",
    name: "@AsMa-ti1np",
    title: "Saudi Arabia",
    start: FaStar,
    comment:
      "بالفعل كلمة شكراً لا توفيكم حقكم عمل يشد الانتباه بكل تفاصيله ولقطاته وكلماته فكل الشكر للقائمين على نجاحه ️",
  },
  {
    id: "02",
    image: "/images/person2.png",
    name: "@AsMa-ti1np",
    title: "Saudi Arabia",
    start: FaStar,
    comment:
      "عمل رائع فيه كل معاني الوفاء والامتنان لهذا البلد العظيم ومنجد مبسوطة اني شاركت فيه ️ #مانوفيه",
  },
  {
    id: "03",
    image: "",
    name: "@user-ej2lj3yh2d",
    title: "Saudi Arabia",
    start: FaStar,
    comment:
      "الله يسعدكم ويرعاكم عمل جبار مميز اجتماعي يمس مشاعر كل مواطن في كل مكان ومن جد هالبلد مانوفيه سعدت كثيرا لمشاركتي انا وعايلتي #عائلة_الصياد ",
  },
]

const Opinion = () => {
  return (
    <section>
      <div className={`${styles.container} secContainer`}>
        <div className={styles.discover}>
          <div className={styles.heading}>
            <span>التعليقات</span>
            <p className={styles.title}>ماذا يقول عملائنا</p>
            <span className={styles.all_comments}>اجمالي التعليقات</span>
            <span className={styles.num}>25</span>
          </div>
          <button className={styles.view}>
            <Link href={""}>مشاهدة جميع الاعمال </Link>
          </button>
        </div>

        <div className={styles.boxs_comments}>
          {comments.map((item) => (
            <div className={styles.box} key={item.id}>
              <div className={styles.info}>
                {item.image && (
                  <div className={styles.image}>
                    <img
                      className={styles.img}
                      src={item.image}
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                )}

                <div className={styles.about_info}>
                  <h4>{item.name}</h4>

                  <div className={styles.details}>
                    <span>{item.title}</span>
                    <div className={styles.stars}>
                      <item.start className={styles.icon} />
                      <item.start className={styles.icon} />
                      <item.start className={styles.icon} />
                      <item.start className={styles.icon} />
                      <item.start className={styles.icon} />
                      <item.start className={styles.icon} />
                    </div>
                  </div>
                </div>
              </div>

              <p className={styles.comment}>{item.comment}</p>
            </div>
          ))}
        </div>

        <div className={styles.m11}>
          <img
            className={styles.img}
            src={"/images/M11-01-01.png"}
            alt=""
            width={0}
            height={0}
          />
        </div>
      </div>
    </section>
  )
}

export default Opinion
