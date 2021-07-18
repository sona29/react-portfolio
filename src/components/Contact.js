import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <section class="page-section" id="contact">
      <div class="container">
        <div class="col-md-8 mx-auto">
          <div class="contact-form">
            <h1>Contact</h1>

            <form action="/examples/actions/confirmation.php" method="post">
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="inputFirstName">First Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputFirstName"
                      required
                    ></input>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="inputLastName">Last Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputLastName"
                      required
                    ></input>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="inputEmail">Email Address</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail"
                  required
                ></input>
              </div>
              <div class="form-group">
                <label for="inputMessage">Message</label>
                <textarea
                  class="form-control"
                  id="inputMessage"
                  rows="5"
                  required
                ></textarea>
              </div>
              <input
                type="submit"
                class="btn btn-primary"
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
