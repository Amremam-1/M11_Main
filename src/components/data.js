import { FiArrowDownLeft, FiArrowUpLeft } from "react-icons/fi"
import { RiHome6Line } from "react-icons/ri"
import { GrServices } from "react-icons/gr"
import { MdWork } from "react-icons/md"
import { IoMdInformationCircleOutline } from "react-icons/io"
import { IoIosContacts } from "react-icons/io"

export const contentVideo = [
  {
    id: "3",
    imgUrl: "/images/song.png",
    link: "",
    title: "خالد عسيري - ازار | Azar",
    subtitle: "يناير 17, 2018",
  },
  {
    id: "2",
    imgUrl: "/images/conturypng.png",
    link: "",
    title: "هالبلد ما نوفيه , اليوم الوطني ",
    subtitle: "سبتمبر 23, 2020",
  },
  {
    id: "1",
    imgUrl: "/images/mbn.png",
    link: "",
    title: "افترايفكت جاهز شعار تعديل",
    subtitle: "أكتوبر 27, 2021",
  },
  {
    id: "2",
    imgUrl: "/images/conturypng.png",
    link: "",
    title: "هالبلد ما نوفيه , اليوم الوطني ",
    subtitle: "سبتمبر 23, 2020",
  },
]

export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 838 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 838, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  smMobile: {
    breakpoint: { max: 567, min: 320 },
    items: 1,
    slidesToSlide: 1,
  },
}

export const apps = [
  {
    title: "مجموعة ماهر بن نايف التجارية",
    subtitle: "للخدمات التقنية والفنية والتسويقية",
    imageUrl: "/images/mbn-logo.png",
    link: "https://mahercp2-main.vercel.app/en",
    icon: FiArrowUpLeft,
  },
  {
    title: "الدليــل التجــاري",
    subtitle: "منشأت , مندوبين , منتجات بيع وايجار واكثر ",
    imageUrl: "/images/D2020.png",
    link: "https://d2020web.vercel.app/",
    icon: FiArrowUpLeft,
  },
  {
    title: "متجر HALF/ نـص",
    subtitle: "للتجارة الالكترونية",
    imageUrl: "/images/halfapp.png",
    link: "https://noo9.net/",
    icon: FiArrowUpLeft,
  },
]

export const navList = [
  {
    id: "01",
    titleAr: "الرئيسية",
    titleEn: "",
    link: "/",
    icon: RiHome6Line,
  },
  {
    id: "02",
    titleAr: "خدماتنا",
    titleEn: "",
    link: "/services",
    icon: GrServices,
  },
  {
    id: "03",
    titleAr: "أعمالنا",
    titleEn: "",
    link: "/works",
    arrow: FiArrowDownLeft,
    icon: MdWork,
  },
  {
    id: "04",
    titleAr: "من نحن",
    titleEn: "",
    link: "/about",
    icon: IoMdInformationCircleOutline,
  },
  {
    id: "05",
    titleAr: "تواصل معنا",
    titleEn: "",
    link: "/contact",
    icon: IoIosContacts,
  },
]
