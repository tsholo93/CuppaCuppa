import "./styles/EmailSubscriptionForm.css";

function EmailSubscriptionForm() {
  return (
    <form className="cuppa-form">
      <section className="input">
        <input
          type="email"
          placeholder="Enter your email here"
          pattern={/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/}
          required={true}
        />
      </section>
      <section className="button">
        <button>subscribe</button>
      </section>
    </form>
  )
}

export default EmailSubscriptionForm
