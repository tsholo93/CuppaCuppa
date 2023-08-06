import Masthead from "../../Common/Masthead";
import LinkButton from "../../Common/LinkButton";
import "./styles/Template.css";

export default function Template({ data, isEven = false }) {
  return (
    <article className="template-wrapper">
      <Image
        config={data.image}
        even={isEven}
      />
      <section className="template-section">
        <Masthead
          tagline={data.masthead.tagline}
          headingX2={data.masthead.heading}
        />
        <p className="template-copy">
          {data.content}
        </p>
        <LinkButton bgColor="maroon">
          {data.button.name}
        </LinkButton>
      </section>

    </article>
  )
}

function Image({ config, even = false }) {
  const isEven = (even) ? "image-wrapper-even" : "";
  return (
    <figure className={`image-wrapper ${isEven}`}>
      <picture className="image-wrapper">
        <source media="(max-width: 767px)" srcSet={config.size640} />
        <source media="(min-width: 768px)" srcSet={config.size1920} />
        <img src={config.size1920} alt={config.alt} />
      </picture>
    </figure>
  )
}
