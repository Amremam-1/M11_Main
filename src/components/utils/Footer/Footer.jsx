import styles from "./styles.module.scss"
import { FaXTwitter } from "react-icons/fa6"
import { FaFacebookF } from "react-icons/fa"
import { IoLogoInstagram } from "react-icons/io5"
import { FaYoutube } from "react-icons/fa"
import { IoIosMailOpen } from "react-icons/io"
import { FiPhone } from "react-icons/fi"


const services = [
  {
    title: "الرئيسية",
    links: [
      {
        href: "/about",
        display: "من نحن",
      },
      {
        href: "/works",
        display: "اعمالنا",
      },
      {
        href: "/services",
        display: "خدمتنا",
      },
    ],
  },
]
const usefulLinks = [
  {
    title: "خدمتنا",
    links: [
      {
        href: "",
        display: "الفيديو الاعلاني",
      },
      {
        href: "",
        display: "التصوير الفوتوغرافي",
      },
      {
        href: "",
        display: "تصوير الحفلات والمؤتمرات ",
      },
      {
        href: "",
        display: "تصميم سوشيال ميديا",
      },
    ],
  },
]

const social = [
  { id: "1", icon: FaXTwitter, link: "" },
  { id: "2", icon: FaFacebookF, link: "" },
  { id: "3", icon: IoLogoInstagram, link: "" },
  { id: "4", icon: FaYoutube, link: "" },
]

const links = [
  {
    href: "",
    display: "الفيديو الاعلاني",
  },
  {
    href: "",
    display: "التصوير الفوتوغرافي",
  },
  {
    href: "",
    display: "تصوير الحفلات والمؤتمرات ",
  },
  {
    href: "",
    display: "تصميم سوشيال ميديا",
  },
]

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={styles.top}>
        <ul className={styles.main}>
          {links.map((item, index) => (
            <li className={styles.servcies} key={index}>
              <img
                src={"/images/highlight.png"}
                alt=""
                width={20}
                height={21}
                sizes="100vw"
                loading="lazy"
              />
              <a to={item.href}>{item.display}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.middle}>
        <div className={styles.m11Right}>
          <img
            className={styles.img}
            src={"/images/M11rotate.png"}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <div className={styles.m11Left}>
          <img
            className={styles.img}
            src={"/images/M11rotateleft.png"}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <div className={`${styles.container}`}>
          <div className={styles.logo}>
            <img
              className={styles.image}
              src={"/images/Layer 3.png"}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              loading="lazy"
            />
          </div>

          <div className={styles.servcies}>
            {services.map((item, index) => (
              <div className={styles.servcies_content} key={index}>
                <h3 className={styles.title}>{item.title}</h3>

                <div className={styles.links}>
                  <ul className={styles.nav}>
                    {item.links.map((link, index) => (
                      <li key={index}>
                        <a href={link.href}>{link.display}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.usefulLinks}>
            {usefulLinks.map((item, index) => (
              <div className={styles.usefulLinks_content} key={index}>
                <h3 className={styles.title}>{item.title}</h3>

                <div className={styles.links}>
                  <ul className={styles.nav}>
                    {item.links.map((link, index) => (
                      <li key={index}>
                        <a href={link.href}>{link.display}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.contact}>
            <h3 className={styles.title}>تواصل معانا</h3>
            <div className={styles.details}>
              <div className={styles.email}>
                <IoIosMailOpen className={styles.icon} />
                <div className={styles.email_info}>
                  <h5>البريد الاكتروني</h5>
                  <span>INFO@M11.TV</span>
                </div>
              </div>
              <div className={styles.phone}>
                <FiPhone className={styles.icon} />
                <div className={styles.phone_info}>
                  <h5>الهاتف</h5>
                  <span>920011324</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.bottom}`}>
        <div className={styles.wrapper}>
          <div className={styles.links}>
            <ul>
              <a href="">سياسة الخصوصية</a>
              <span></span>
              <a href="">الشروط والأحكام</a>
            </ul>
          </div>

          <div className={styles.social}>
            <ul>
              {social.map((item) => (
                <li key={item.id}>
                  <a href={""}>
                    <item.icon className={styles.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p className={styles.word}>M11</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
