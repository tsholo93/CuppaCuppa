import CustomerReviewConclusion from "./CustomerReviewConclusion";
import CustomerReviewIntro from "./CustomerReviewIntro";
import ReviewCarousel from "./ReviewCarousel";
import "./styles/CustomerReviews.css";

function CustomerReviews() {
  return (
    <section className="cuppa-page-pad testimonials" style={{
      background: "#A6845B"
    }}>
      <CustomerReviewIntro/>
      <div className="cuppa-carousel-wrapper">
        <ReviewCarousel/>
      </div>
      <CustomerReviewConclusion />
    </section>
  )
}

export default CustomerReviews
