import BlogCard from "./BlogCard";
import "./styles/Blog.css";

import womenDrinking640 from "./assets/women-enjoying-a-cup-of-coffee640.jpg";
import womenDrinking1920 from "./assets/women-enjoying-a-cup-of-coffee1920.jpg";
import coffeeBeans640 from "./assets/cup-of-coffee-surrounded-by-beans-640.jpg";
import coffeeBeans1920 from "./assets/cup-of-coffee-surrounded-by-beans-1920.jpg";
import womenMakingCoffee640 from "./assets/two-women-barista-making-coffee640.jpg";
import womenMakingCoffee1920 from "./assets/two-women-barista-making-coffee1920.jpg";

import iconImage from "./assets/blog-placeholder.jpeg";


const articles = [
  {
    id: 0,
    heading: "The Art of Brewing the Perfect Cup of Coffee at Home",
    content:  "Step-by-step instructions and tips for readers who want to make a delicious cup of coffee in the comfort of their own homes.",
    image: {
      size640: womenMakingCoffee640,
      size1920: womenMakingCoffee1920,
      alt: "two women barista making a cup of coffee inside a coffee shop",
      iconUrl: iconImage,
    },
    pubInfo: {
      date: 'June 06, 2023',
      dateFormat: '2023-06-06',
      author: 'John Doe'
    }
  },
  {
    id: 1,
    heading: "Unveiling the World's Most Expensive Coffees",
    content: "A Showcase of rare and expensive coffee beans, such as Kopi Luwak, and explore their unique production processes, origins, and exquisite flavors.",
    image: {
      size640: coffeeBeans640,
      size1920: coffeeBeans1920,
      alt: "cup of coffee surrounded by coffee beans on a wood table",
      iconUrl: iconImage
    },
    pubInfo: {
      date: 'May 1, 2023',
      dateFormat: '2023-05-1',
      author: 'Jane Doe'
    }
  },
  {
    id: 2,
    heading: "Exploring the Health Benefits of Coffee",
    content:  "Covers topics such as antioxidants found in coffee, the impact of coffee on cognitive function, and its potential role in reducing the risk of certain diseases.",
    image: {
      size640: womenDrinking640,
      size1920: womenDrinking1920,
      alt: "Women enjoying a cup of coffee",
      iconUrl: iconImage
    },
    pubInfo: {
      date: 'April 1, 2023',
      dateFormat: '2023-04-01',
      author: 'Mary Doe'
    }
  }
]

function BlogCards() {
  const listItems = articles.map(
    article => (
      <li key={article.id}>
        <BlogCard cardInfo={{...article}} />
      </li>
    ))

  return <ul className="cuppa-cards">{listItems}</ul>
}


export default BlogCards
