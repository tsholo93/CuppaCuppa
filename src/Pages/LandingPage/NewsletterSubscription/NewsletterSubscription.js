import EmailSubscriptionForm from "./EmailSubscriptionForm";

import "./styles/NewsletterSubscription.css";
import "../../../Masthead.css";

function NewsletterSubscription() {
  return (
    <section className="cuppa-page-pad cuppa-subscription">
      <div className="cuppa-subscription-container">
        <header className="masthead-center">
          <p className="masthead-center-tagline">newsletter</p>
          <h2 className="masthead-center-heading">Subscribe our Newsletter</h2>
        </header>


        <p className="paragraph">
          Unlock the taste of savings with our exclusive coupons, news letters and more! Hurry in and treat yourself to a cup of pure delight.
        </p>
        <p className="paragraph-cta">
          <strong>Don't wait &mdash; this offer is only valid for a limited time!</strong>
        </p>

        <EmailSubscriptionForm />
      </div>
    </section>
  )
}

export default NewsletterSubscription
