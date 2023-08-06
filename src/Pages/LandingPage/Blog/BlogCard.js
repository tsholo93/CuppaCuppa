import "./styles/BlogCard.css";

function BlogCard({ cardInfo }) {
  return (
    <article className="cuppa-card page-pad">
      <figure className="card-image">
        <img
          src={cardInfo.image.url} />
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
