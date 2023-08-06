import "./styles/BlogCard.css";

function BlogCard({ cardInfo }) {
  return (
    <article className="cuppa-card">
      <figure className="card-image-container">
        <picture className="card-image">
          <source media="(max-width: 767px)" srcSet={cardInfo.image.size640} />
          <source media="(min-width: 768px)" srcSet={cardInfo.image.size1920} />
          <img src={cardInfo.image.size1920} alt={cardInfo.image.alt}/>
        </picture>
      </figure>
      <section className="card-content">
        <h3 className="title">{ cardInfo.heading }</h3>
        <p className="paragraph">{cardInfo.content}
          <a href="#0" className="link">Read More</a>
        </p>
      </section>
      <figure className="card-footer">
        <div className="avatar">
          <img
            src={cardInfo.image.iconUrl} />
        </div>
        <figcaption className="footnote">
          <p className="author">{cardInfo.pubInfo.author}</p>
          <p className="date">{cardInfo.pubInfo.date}</p>
        </figcaption>
      </figure>
    </article>
  )
}

export default BlogCard
