import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.scss";

const Contact = () => {
  return (
    <>
      <div className="text-over-image bg-success">
        <img
          src="./assets/images/beach-4.jpg"
          alt="Beach"
          className="img-cover image-background-top-page"
        />
        <p className="text-over-image-centered top-page-title">Contact Us</p>
      </div>

      <div className="container border border-warning py-5 my-5">
        <div className="row mb-3">
          <div className="col-12 text-center">
            <h1 className="h1 font-title">
              Let us know what you would like to do
            </h1>
            <p className="lead">
              You can fill the "Sign Up form", or make a general enquiry, in
              case you need more details with the "Information form"
            </p>
          </div>
        </div>
      </div>

      <div className="container bg-light border py-5 my-5">
        <div className="row">
          <div className="col-md-6 col-12 text-center order-1 order-md-0">
            <p>
              Preliminary approval: we will only be accepting{" "}
              <strong>12 applicants</strong> for our{" "}
              <a href="/about-the-program" alt="" className="text-warning">
                March 3rd through March 23rd
              </a>{" "}
              immersion to ensure proper attention and accelerated learning.
            </p>
            <p>
              Please state your interest in joining us on this great adventure.
              We will promptly answer back with a response. If there is an open
              spot for you, we will send you a confirmation aboard our ship with
              the following steps to take.
            </p>

            <p>
              Please check the{" "}
              <a href="/arrivals" alt="" className="text-warning">
                arrival details here
              </a>
            </p>
          </div>
          <div className="col-md-6 col-12 text-center order-0 order-md-1">
            <Tabs className="contact-tabs">
              <TabList>
                <Tab>Sign Up form</Tab>
                <Tab>Information form</Tab>
              </TabList>

              <TabPanel>
                <h1 id="book-a-spot" className="h1 mb-3">
                  Form to book a spot
                </h1>
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="First &amp; Last name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label for="date-of-bith">Date of birth</label>
                    <input
                      type="date"
                      className="form-control"
                      id="date-of-birth"
                      placeholder="Date of birth"
                    />
                  </div>

                  <div className="form-group">
                    <label for="email">* Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="name"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" for="exampleCheck1">
                      Check me out
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
