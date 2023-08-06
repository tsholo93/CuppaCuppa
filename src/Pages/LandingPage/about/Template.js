import Masthead from "../../../Masthead";
import "./styles/Template.css";

export default function Template({data, isEven = false}) {
  return (
    <Article>
      <Image
        config={data.image}
        even={isEven}
      />
      <Section>
        <Masthead
          tagline={data.masthead.tagline}
          headingX2={data.masthead.heading}
        />
        <BodyCopy>
          {data.content}
        </BodyCopy>
        <Button url={data.button.url}>
          {data.button.name}
        </Button>
      </Section>

    </Article>
  )
}

function BodyCopy({ children }) {
  return (
    <p className="template-copy">
      {children}
    </p>
  )
}

function Image({ config, even = false }) {
  const isEven = (even) ? "image-wrapper-even" : "";
  return (
    <figure className={`image-wrapper ${isEven}`}>
      <img
        src={config.url}
      />
    </figure>
  )
}

function Article({ children }) {
  return (
    <article className="template-wrapper">
      {children}
    </article>
  )
}

function Section({ children }) {
  return (
    <section className="template-section">
      {children}
    </section>
  )
}

function Button({ children, url }) {
  return (
    <div className="template-button">
      <Link _url={url}>{children}</Link>
    </div>
  )
}

function Link({ _url, children }) {
  return (
    <a href={_url} className="template-link">{children}</a>
  )
}
