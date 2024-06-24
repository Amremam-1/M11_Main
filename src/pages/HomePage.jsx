import Works from "../components/Home/LatestWorks/Works"
import Offers from "../components/Home/bestOffer/Offers"
import Info from "../components/Home/info/Info"
import News from "../components/Home/news/News"
import Services from "../components/Home/services/Services"
import PageHead from "../components/utils/PageHead/PageHead"
import Opinion from "../components/Home/review/Opinion"
import Contact from "../components/Home/contact/Contact"
import Top from "../components/Home/goTop/Top"

const HomePage = () => {
  return (
    <main>
      <PageHead />
      <Info />
      <Works />
      <Services />
      <Offers />
      <News />
      <Opinion />
      <Contact />
      <Top />
    </main>
  )
}

export default HomePage
