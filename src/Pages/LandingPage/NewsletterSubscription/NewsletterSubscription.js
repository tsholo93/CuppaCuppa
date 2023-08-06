import EmailSubscriptionForm from "./EmailSubscriptionForm";
import {MastheadCenter} from "../../Common/Masthead";

import "./styles/NewsletterSubscription.css";
function NewsletterSubscription() {
  return (
    <section className="cuppa-page-pad cuppa-subscription">
      <div className="cuppa-subscription-container">
        <MastheadCenter
          headingX2="Join Our Coffee Community"
          tagline="Hello, new friend!"
        />


        <p className="paragraph">
        Join our loyalty program and unlock exclusive rewards. Every visit brings you closer to free drinks, discounts, and special surprises. Start earning today! Together, let's create cherished memories over a perfect cup of coffee.
        </p>

        <EmailSubscriptionForm />
      </div>
    </section>
  )
}

export default NewsletterSubscription
