import "./styles/common.css";

function LinkButton({ children, bgColor }) {
  return (
    <div className="template-button">
      <a
        href="#0"
        className={`cuppa-button cuppa-button-${bgColor}`}>

        {children}
      </a>
    </div>
  )
}

export default LinkButton
