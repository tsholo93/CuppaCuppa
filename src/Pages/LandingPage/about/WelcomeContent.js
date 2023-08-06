import Template from "./Template";
import threeFriendsImg640 from "./assets/three-friends-holding-cups-of-coffee640.jpg";
import threeFriendsImg1920 from "./assets/three-friends-holding-cups-of-coffee1920.jpg";

const menuContentData = {
  id: 0,
  image: {
    size640: threeFriendsImg640,
    size1920: threeFriendsImg1920,
    alt: "Three friends holding a cups of coffee forming a triangle"
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
};

export default function MenuContent() {
  return (
    <Template data={menuContentData} />
  )
}
