import "./styles/EmailSubscriptionForm.css";

function EmailSubscriptionForm() {
  return (
    <form className="cuppa-form">
      <section className="input">
        <input
          type="email"
          placeholder="Enter your email here"
        />
      </section>
      <section className="button">
        <button>subscribe</button>
        </section>
    </form>
  )
}

export default EmailSubscriptionForm
