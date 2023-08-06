import CoffeeTastingEvent from "./CoffeeTastingEvent"
import CompanyHours from "./CompanyHours";
import "./styles/Bookings.css";

function Bookings() {
  return (
    <section
      className="cuppa-page-pad cuppa-bookings"
      style={{
        color: "#F2F2F2"
      }}>
      <CoffeeTastingEvent />
      <CompanyHours />
    </section>
  )
}

export default Bookings
