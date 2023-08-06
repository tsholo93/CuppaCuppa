import {MastheadCenter} from "../../Common/Masthead";
import "./styles/CustomerReviews.css";

const customerReviewData = {
  masthead: {
    heading: "What our visitors say",
    tagline: "Testimonials"
  }
}

function CustomerReviewIntro() {
  return (
    <div className="cuppa-review-intro">
        <MastheadCenter
          headingX2={customerReviewData.masthead.heading}
          tagline={customerReviewData.masthead.tagline}
        />

        <p className="paragraph">
          Don't just take our word for it &mdash; <br/>here's what our valued customers have to say about their experiences.
        </p>
      </div>
  )
}

export default CustomerReviewIntro
