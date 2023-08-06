import "./styles/CustomerReviewItem.css";

function CustomerReviewItem({avatar, content}) {
  return (
    <figure className="cuppa-review-card">
      <blockquote className="cuppa-review-quote">
        <span className="quote-mark">&#10077;</span>
        <p> {content} </p>
        <p className="cite">&mdash; {avatar.author}</p>
      </blockquote>

    </figure>
  )
}

export default CustomerReviewItem
