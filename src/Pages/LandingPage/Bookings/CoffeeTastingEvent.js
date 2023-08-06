import "../../../Masthead.css";
import "./styles/CoffeeTastingEvent.css";

function CoffeeTastingEvent() {
  return (
    <article className="cuppa-event">
      <header className="cuppa-masthead">
        <p className="masthead-tagline">Reservation</p>
        <h2 className="masthead-heading">A Memorable Coffee Tasting Experience</h2>
      </header>

      <div className="paragraph-group">
        <p>
          Join us for an exclusive Coffee Tasting Reservation. Discover the fascinating world of flavors as we explore a variety of specialty coffees.
        </p>
        <p>
          <strong>Limited availability, so secure your reservation today for a memorable coffee experience!</strong>
        </p>
      </div>

      <div className="link">
        <a href="#0">Book now</a>
      </div>
    </article>
  )
}

export default CoffeeTastingEvent
