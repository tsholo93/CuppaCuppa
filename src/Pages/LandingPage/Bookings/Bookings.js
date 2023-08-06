import CoffeeTastingEvent from "./CoffeeTastingEvent";
import CompanyHours from "./CompanyHours";
import "../../Common/styles/common.css";
import "./styles/Bookings.css";

function Bookings() {
  return (
    <section
      className="cuppa-page-pad cuppa-bookings">
      <CoffeeTastingEvent />
      <CompanyHours />
    </section>
  )
}

export default Bookings
