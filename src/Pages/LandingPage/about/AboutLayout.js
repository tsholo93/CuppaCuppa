import TeamContent from "./TeamContent";
import FarmStoryContent from "./FarmStoryContent";
import AboutContent from "./AboutContent";

export default function AboutLayout() {
  return (
    <section
      className="cuppa-page-pad"
      style={{
        backgroundColor: "#A6845B",
        color: "#0a0c0e"
      }}>
      <AboutContent/>
      <FarmStoryContent/>
      <TeamContent/>
    </section>

  )
}
