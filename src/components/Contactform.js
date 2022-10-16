import React from "react";

const Contactform = () => {

  return (
    <div className="form_container">
      <form className="contactform" action="https://api.web3forms.com/submit" method="POST" id="form">
        <input type="hidden" name="access_key" value="c5482dd9-1b66-4ba7-b730-8d5dc1d55e6d" />
        <input type="hidden" name="subject" value="New Submission from Garry's website" />
        <input type="hidden" name="redirect" value="https://web3forms.com/success" />
        <div className="col">
          <div className="text_group">
            <label htmlFor="firstName">First Name*</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className="text_group">
            <label htmlFor="lastName">Last Name*</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
        </div>
        <div className="col">
          <div className="text_group">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" name="phone" />
          </div>
          <div className="text_group">
            <label htmlFor="mail">Email</label>
            <input type="text" id="email" name="email" />
          </div>
        </div>
        <div className="col">
          <div className="text_group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="33"
              rows="10"
              required
            ></textarea>
          </div>
          <button className="form_button">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Contactform;
