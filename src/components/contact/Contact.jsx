import { useForm, ValidationError } from "@formspree/react";
import "./contact.scss";

export default function Contact() {
  const [state, handleSubmit] = useForm("myyogbyl");

  if (state.succeeded) {
    return <p className="reply-message">Thanks, I'll reply ASAP :)</p>;
  }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="name" />
          <input
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <ValidationError
            prefix="Email:"
            className="error-msg"
            field="email"
            errors={state.errors}
          />
          <textarea
            id="message"
            placeholder="Message"
            name="message"
            required
          ></textarea>
          <ValidationError
            prefix="Message:"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
