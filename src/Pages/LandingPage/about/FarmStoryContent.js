import Template from "./Template";

const menuContentData = {
  id: 1,
  image: {
    url: "/coffeeandspices.jpg",
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
  return <Template data={menuContentData} isEven="true"/>
}
