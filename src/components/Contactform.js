import React from "react";

const Contactform = () => {
  return (
    <div className="form_container">
      <form className="contactform">
        <div className="col">
          <div className="text_group">
            <label htmlFor="firstName">First Name*</label>
            <input type="text" id="firstName" required />
          </div>
          <div className="text_group">
            <label htmlFor="lastName">Last Name*</label>
            <input type="text" id="lastName" required />
          </div>
        </div>
        <div className="col">
          <div className="text_group">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" />
          </div>
          <div className="text_group">
            <label htmlFor="mail">Email</label>
            <input type="text" id="email" />
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
            ></textarea>
          </div>

          <button className="form_button">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Contactform;
