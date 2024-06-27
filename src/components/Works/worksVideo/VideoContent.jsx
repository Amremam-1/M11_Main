import styles from "./styles.module.scss"
import { Link } from "react-router-dom"
import { GoArrowUpLeft } from "react-icons/go"
import { contentVideo, responsive } from "../../data"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const VideoContent = () => {
  return (
    <section className={"container"} id="works">
      <div className={styles.wrapper_main}>
        <div className={styles.header}>
          <h1 className={styles.highlight}>الفيديو الاعلاني</h1>

          <div className={styles.navgation}></div>
        </div>

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          transitionDuration={1}
          arrows={true}
          swipeable={false}
          draggable={false}
          pauseOnHover={true}
        >
          {contentVideo.map((item) => (
            <div className={styles.box} key={item.id}>
              <div className={styles.contentImage}>
                <img src={item.imgUrl} alt={item.title} />
              </div>

              <div className={styles.details}>
                <Link className={styles.btn}>
                  <GoArrowUpLeft className={styles.icon} />
                  <span>مشاهدة الاعلان</span>
                </Link>
                <h3 className={styles.title}>
                  {item.title}
                  <span className={styles.subtitle}>{item.subtitle}</span>
                </h3>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default VideoContent
