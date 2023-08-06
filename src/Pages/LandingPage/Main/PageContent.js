import Hero from "../Hero/Hero";
import AboutLayout from "../about/AboutLayout";
import Features from "../Features/Features";
import Bookings from "../Bookings/Bookings";
import CustomerReviews from "../CustomerReviews/CustomerReviews";
import DownloadBanner from "../DownloadBanner/DownloadBanner";
import Blog from "../Blog/Blog";
import NewsletterSubscription from "../NewsletterSubscription/NewsletterSubscription";

import "./App.css";


function PageContent() {
  return (
    <>
      <Hero />
      <AboutLayout/>
      <Features />
      <Bookings />
      <CustomerReviews />
      <DownloadBanner />
      <Blog />
      <NewsletterSubscription />
    </>
  )
}

export default PageContent
