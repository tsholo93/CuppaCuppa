import Template from "./Template";
import baristaImg640 from "./assets/barista-making-coffee640.jpg";
import baristaImg1920 from "./assets/barista-making-coffee1920.jpg";

const teamContentData = {
  id: 2,
  image: {
    size640: baristaImg640,
    size1920: baristaImg1920,
    alt: "barista making a cup of coffee"
  },
  masthead: {
    heading: "Use the tips & recipes of our Barista",
    tagline: "Our team"
  },
  content: " Unleash your inner barista with our expert tips and recipes. Elevate your at-home coffee game as our skilled baristas share their secrets, ensuring each cup you brew is infused with the same passion and craftsmanship found in our coffee house.",
  button: {
    name: "Meet the team",
    url: "#0"
  }
};

export default function TeamContent() {
  return (
    <Template data={teamContentData}/>
  )
}
