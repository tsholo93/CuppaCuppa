import Masthead from "../../Common/Masthead";
import "../../Common/styles/common.css";
import "./styles/CoffeeTastingEvent.css";

function CoffeeTastingEvent() {
  return (
    <article className="cuppa-event">
      <Masthead
        headingX2="A Memorable Coffee Tasting Experience"
        tagline="Reservation"
      />
      <div className="paragraph-group">
        <p>
          Join us for an exclusive Coffee Tasting Reservation. Discover the fascinating world of flavors as we explore a variety of specialty coffees.
        </p>
        <p>
          <strong>Limited availability, so secure your reservation today for a memorable coffee experience!</strong>
        </p>
      </div>

      <div className="link">
        <a href="#0" className="cuppa-button cuppa-button-cream">Book now</a>
      </div>
    </article>
  )
}

export default CoffeeTastingEvent
