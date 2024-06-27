import Intro from "../components/Works/intro/Intro"
import PhotoContent from "../components/Works/worksPhoto/PhotoContent"
import SocialContent from "../components/Works/worksSocail/SocialContent"
import VideoContent from "../components/Works/worksVideo/VideoContent"
import PartyContent from "../components/Works/worksParty/PartyContent"
import Opinion from "../components/Works/review/Opinion"

const WorksPage = () => {
  return (
    <main>
      <Intro />
      <VideoContent />
      <PhotoContent />
      <SocialContent />
      <PartyContent />
      <Opinion />
    </main>
  )
}

export default WorksPage
