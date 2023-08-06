import OperatingTimes from "./OperatingTimes";
import "./styles/CompanyHours.css";

const timeDateData = [
  {
    id: "001",
    days: "Monday ─ Friday",
    times: {
      open: "8:00 am",
      close: "6:00 pm"
    }
  },
  {
    id: "002",
    days: "Saturday",
    times: {
      open: "9:00 am",
      close: "5:00 pm"
    }
  },
  {
    id: "003",
    days: "Sunday",
    times: {
      open: "Closed"
    }
  }
]

function CompanyHours() {
  return (
    <section className="cuppa-hours">
      <h3 className="heading">Operating Hours</h3>
      <p className="paragraph">We look forward to serving you during our operating hours.</p>

      <OperatingTimes list={timeDateData}/>

      <p className="phone">
        +123 &ndash;456&ndash;7589
      </p>
    </section>
  )
}


export default CompanyHours
