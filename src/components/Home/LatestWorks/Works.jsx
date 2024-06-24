import { Link } from "react-router-dom"
import styles from "./styles.module.scss"
import { GoArrowUpLeft } from "react-icons/go"

const Works = () => {
  return (
    <section>
      <div className={`${styles.container} secContainer`}>
        <div className={styles.wrapper_works}>
          <div className={styles.portfolio_one}>
            <div className={styles.portfolio_image}>
              <img
                src={"/src/assets/images/works1.png"}
                className={styles.img}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className={styles.portfolio_description}>
              <div className={styles.heading}>
                <h1 className={styles.title}>
                  أحدث اعمالنا لليوم الوطني <br />
                  السعودي <span>90</span>
                </h1>

                <span className={styles.data}>سبتمبر 23, 2020</span>
              </div>

              <div className={styles.group_member}>
                <h3 className={styles.marker}>شارك في العمل المبدعين :-</h3>

                <ul className={styles.name_member}>
                  <li>الفنان شافي الحارثي</li>
                  <li>محمد الشعيبي خالد عسيري</li>
                  <li>حسن محفوظ محمد عسيري</li>
                  <li>نرمين محسن المغامر ياسا</li>
                  <li>تركي السدحان دكتور زايد </li>
                  <li>مشاري هلال بيان بينو</li>
                  <li>يحيى صالح </li>
                  <li>فكرة واشراف ماهر الحارثي</li>
                  <li>المغني والملحن</li>
                  <li>فهد شباج</li>
                  <li className={styles.marker}>كلمات</li>
                  <li>هلا الحلواني</li>
                  <li className={styles.marker}>توزيع وماستر</li>
                  <li>أيمن الزحيري</li>
                </ul>
              </div>

              <div className={styles.review_more}>
                <button className={styles.btn}>
                  <Link href={"https://www.youtube.com/watch?v=qxBbafuvwco"}>
                    مشاهدة الفيديو
                  </Link>
                  <GoArrowUpLeft className={styles.arrow} />
                </button>
              </div>
            </div>
          </div>

          <div className={styles.portfolio_two}>
            <div className={styles.portfolio_description}>
              <div className={styles.heading}>
                <div className={styles.title}>
                  <div className={styles.title_lineOne}>
                    <p className={styles.word}>حماسية</p>
                    <Link
                      href={
                        "https://www.youtube.com/hashtag/%D8%A8%D9%86%D9%8A_%D8%A7%D9%84%D8%AD%D8%A7%D8%B1%D8%AB"
                      }
                      className={styles.link}
                    >
                      #بني_الحارث
                    </Link>
                    <p className={styles.word}>2024</p>
                  </div>
                  <div className={styles.title_lineTwo}>
                    <Link
                      href={
                        "https://www.youtube.com/hashtag/%D8%AC%D8%AF%D9%8A%D8%AF"
                      }
                      className={styles.link}
                    >
                      #جديد
                    </Link>
                    <p className={`${styles.word}`}>
                      <span>وحصرى</span>
                    </p>
                  </div>
                </div>

                <span className={styles.data}>سبتمبر 23, 2020</span>
              </div>

              <div className={styles.group_member}>
                <h3 className={styles.marker}>شارك في العمل المبدعين :-</h3>

                <ul className={styles.name_member}>
                  <li>الفنان شافي الحارثي</li>
                  <li>محمد الشعيبي خالد عسيري</li>
                  <li>حسن محفوظ محمد عسيري</li>
                  <li>نرمين محسن المغامر ياسا</li>
                  <li>تركي السدحان دكتور زايد </li>
                  <li>مشاري هلال بيان بينو</li>
                  <li>يحيى صالح </li>
                  <li>فكرة واشراف ماهر الحارثي</li>
                  <li>المغني والملحن</li>
                  <li>فهد شباج</li>
                  <li className={styles.marker}>كلمات</li>
                  <li>هلا الحلواني</li>
                  <li className={styles.marker}>توزيع وماستر</li>
                  <li>أيمن الزحيري</li>
                </ul>
              </div>

              <div className={styles.review_more}>
                <button className={styles.btn}>
                  <Link href={"https://www.youtube.com/watch?v=qxBbafuvwco"}>
                    مشاهدة الفيديو
                  </Link>
                  <GoArrowUpLeft className={styles.arrow} />
                </button>
              </div>
            </div>

            <div className={styles.portfolio_image}>
              <img
                src={"/src/assets/images/works2.png"}
                className={styles.img}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
          </div>

          <div className={styles.portfolio_three}>
            <div className={styles.portfolio_image}>
              <img
                src={"/src/assets/images/work3.png"}
                className={styles.img}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>

            <div className={styles.portfolio_description}>
              <div className={styles.heading}>
                <div className={styles.title}>
                  <div className={styles.title_lineOne}>
                    <p className={styles.word}>حماسية</p>
                    <Link
                      href={
                        "https://www.youtube.com/hashtag/%D8%A8%D9%86%D9%8A_%D8%A7%D9%84%D8%AD%D8%A7%D8%B1%D8%AB"
                      }
                      className={styles.link}
                    >
                      #بني_الحارث
                    </Link>
                    <p className={styles.word}>2024</p>
                  </div>
                  <div className={styles.title_lineTwo}>
                    <Link
                      href={
                        "https://www.youtube.com/hashtag/%D8%AC%D8%AF%D9%8A%D8%AF"
                      }
                      className={styles.link}
                    >
                      #جديد
                    </Link>
                    <p className={`${styles.word}`}>
                      <span>وحصرى</span>
                    </p>
                  </div>
                </div>

                <span className={styles.data}>سبتمبر 23, 2020</span>
              </div>

              <div className={styles.group_member}>
                <h3 className={styles.marker}>شارك في العمل المبدعين :-</h3>

                <ul className={styles.name_member}>
                  <li>الفنان شافي الحارثي</li>
                  <li>محمد الشعيبي خالد عسيري</li>
                  <li>حسن محفوظ محمد عسيري</li>
                  <li>نرمين محسن المغامر ياسا</li>
                  <li>تركي السدحان دكتور زايد </li>
                  <li>مشاري هلال بيان بينو</li>
                  <li>يحيى صالح </li>
                  <li>فكرة واشراف ماهر الحارثي</li>
                  <li>المغني والملحن</li>
                  <li>فهد شباج</li>
                  <li className={styles.marker}>كلمات</li>
                  <li>هلا الحلواني</li>
                  <li className={styles.marker}>توزيع وماستر</li>
                  <li>أيمن الزحيري</li>
                </ul>
              </div>

              <div className={styles.review_more}>
                <button className={styles.btn}>
                  <Link href={"https://www.youtube.com/watch?v=qxBbafuvwco"}>
                    مشاهدة الفيديو
                  </Link>
                  <GoArrowUpLeft className={styles.arrow} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works
