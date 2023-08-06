import Template from "./Template";

const teamContentData = {
  id: 2,
  image: {
    url: "/barista-mixing-coffee.jpg",
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
  return <Template data={teamContentData}/>
}
