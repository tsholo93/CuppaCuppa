import {MastheadCenter} from "../../Common/Masthead";
import menuIcon from "./assets/menu-256x256.png";
import coffeeIcon from "./assets/coffee-256x256.png";
import baristaIcon from "./assets/barista-256x256.png";
import './Features.css';

const  masthead = {
  title: "Why choose us: Elevating your coffee journey",
  tagline: "Features",
  bodyCopy: "We are passionate about delivering an unparalleled coffee experience that sets us apart from the rest."
};

const featuresData = [
  {
    id: 0,
    header: {
      title: "Unique Creations and Variety",
      bodyContent: "Discover a world of delightful surprises with our range of signature creations."
    },
    image: {
      url: menuIcon
    }
  },
  {
    id: 1,
    header: {
      title: "Quality Beyond Compare",
      bodyContent: "We take pride in sourcing the finest, specialty-grade beans from around the world."
    },
    image: {
      url: coffeeIcon
    }
  },
  {
    id: 2,
    header: {
      title: "Craftsmanship and Expertise",
      bodyContent: "Our skilled baristas are true artisans, trained in the art of coffee preparation."
    },
    image: {
      url: baristaIcon
    }
  }
];

export default function Features() {
  return (
    <section className="features-wrapper cuppa-page-pad" style={{
      background: "#595842",
      color: "#F2F2F2"
    }}>
      <div className="header">
        <MastheadCenter
          headingX2={masthead.title}
          tagline={masthead.tagline}
        />
        <p className="content">
          {masthead.bodyCopy}
        </p>
      </div>

      <FeatureItems
        list={featuresData}
        classNames={{
          list: 'features-list',
          item: 'features-list-item'
        }}
      />

    </section>
  )
}



function ContentItem({ headingX3, mainText }) {
  return (
    <section className="content">
      <h3 className="headingX3">{headingX3}</h3>
      <p className="paragraph">{mainText}</p>
    </section>
  )
}

function Card({ image, content }) {
  return (
    <>
      <Image
        config={image}
      />
      <ContentItem
        headingX3={content.title}
        mainText={content.bodyContent}
      />
    </>
  )
}

function Image({ config }) {
  return (
    <figure className="image">
      <img
        src={config.url}
      />
    </figure>
  )
}

function FeatureItems({ list }) {
  const listItems = list.map(
    item => (
      <li className="feature-card" key={item.id}>
        <Card
          image={item.image}
          content={item.header}
        />
      </li>
    ))
  return (
    <ul className="feature-items">
      {listItems}
    </ul>
  )
}

