import BlogCard from "./BlogCard";
import "./styles/Blog.css";

const articles = [
  {
    id: 0,
    heading: "The Art of Brewing the Perfect Cup of Coffee at Home",
    content:  "Step-by-step instructions and tips for readers who want to make a delicious cup of coffee in the comfort of their own homes.",
    image: {
      url: '/three-cups-of-coffee-on-table.jpg',
      iconUrl: '/blog-placeholder.jpeg',
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
    content: "A Showcase of rare and expensive coffee beans, such as Kopi Luwak or Black Ivory Coffee, and explore their unique production processes, origins, and exquisite flavors.",
    image: {
      url: '/coffee-beans.jpg',
      iconUrl: '/blog-placeholder.jpeg'
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
    content:  "Covers topics such as antioxidants found in coffee, the impact of coffee on cognitive function and alertness, and its potential role in reducing the risk of certain diseases.",
    image: {
      url: 'friendly-service.jpg',
      iconUrl: '/blog-placeholder.jpeg'
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
