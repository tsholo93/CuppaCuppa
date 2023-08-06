import { Fragment } from "react";
import "./styles/OperatingTimes.css";

function OperatingTimes({ list }) {
  const timeDates = list.map(
    timeDate => (
      <section key={timeDate.id}>
        <h4>{timeDate.days}</h4>
        <p>
          {timeDate.times.open} {(timeDate.times.close) ? ` ─ ${timeDate.times.close}` : ""}
        </p>
      </section>
    ))
  return (
    <div className="cuppa-times">
      {timeDates}
    </div>
  )
}

export default OperatingTimes
