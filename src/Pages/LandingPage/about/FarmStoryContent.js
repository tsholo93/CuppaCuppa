import Template from "./Template";
import coffeeBeanImg640 from "./assets/coffee-beans-on-the-table640.jpg";
import coffeeBeanImg1920 from "./assets/coffee-beans-on-the-table1920.jpg";
const farmStoryContentData = {
  id: 1,
  image: {
    size640: coffeeBeanImg640,
    size1920: coffeeBeanImg1920,
    alt: "Different types of coffee beans on a wood table"
  },
  masthead: {
    heading: "From farm to cup with quality beans",
    tagline: "Exceptional origins"
  },
  content: "Our journey begins on carefully selected farms around the world, where dedicated farmers cultivate the highest quality beans with passion and expertise. Join us as we celebrate the remarkable origins behind every cup we serve.",
  button: {
    name: "Read more",
    url: "#0"
  }
};

export default function MenuContent() {
  return (
    <Template data={farmStoryContentData} isEven="true"/>
  )
}
