import Template from "./Template";

const menuContentData = {
  id: 0,
  image: {
    url: "/three-cups-of-coffee.jpg",
  },
  masthead: {
    heading: "We invite you to visit our coffee house",
    tagline: "About us"
  },
  content: "Indulge in a sensory journey as we extend a warm invitation to our coffee house, where rich aromas and exquisite flavors await. Join us for an unforgettable experience of specialty brews, delightful ambiance, and moments of pure caffeinated bliss.",
  button: {
    name: "View menu",
    url: "#0"
  }
}

export default function MenuContent() {
  return <Template data={menuContentData}/>
}
