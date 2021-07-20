import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <section className="page-section py-5" id="contact">
      <div className="container">
        <div className="col-md-8 mx-auto">
          <div className="contact-form">
            <h1 className="text-center">
              <span className="underline-magical">Contact</span>
            </h1>

            <form>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="inputEmail"></label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      id="inputFirstName"
                      required
                    ></input>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="inputEmail"></label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      id="inputLastName"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputEmail"></label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  id="inputEmail"
                  required
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="inputMessage"></label>
                <textarea
                  className="form-control"
                  id="inputMessage"
                  placeholder="Message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <input
                type="submit"
                className="btn btn-primary my-2"
                value="Submit"
              ></input>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
