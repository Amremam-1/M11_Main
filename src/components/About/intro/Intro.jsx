import styles from "./styles.module.scss"
import { features } from "../../data"
import CountUp from "react-countup"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { responsivebox } from "../../data"

const Intro = () => {
  return (
    <section className="container">
      <div className={styles.wrapper_main}>
        <h1 className={styles.heading}>من نحن</h1>

        <div>
          <Carousel
            responsive={responsivebox}
            infinite={true}
            autoPlay={true}
            transitionDuration={1}
            pauseOnHover={true}
            arrows={false}
            itemClass="carousel-item"
          >
            {features.map((item) => (
              <div key={item.id} className={styles.box_content}>
                <h2 className={styles.num}>
                  <CountUp end={item.num} duration={2.5} />+
                </h2>
                <span className={styles.title}>{item.title}</span>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default Intro
