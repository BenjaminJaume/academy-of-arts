import React, { useState } from "react";
import Select from "react-select";

const Contact = (props) => {
  const { dateStart, dateEnd, tuitionPrice } = props;
  const [countries, setCountries] = useState(null);

  // Fetch Function
  fetch("./assets/json/countries.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (countries) {
      setCountries(countries);
    })
    .catch(function (err) {
      console.log(err, " error");
    });

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

      <div className="container bg-light border py-5 my-5">
        <div className="row">
          <div className="col-md-6 col-12 text-center order-1 order-md-0 my-auto">
            <p>
              Preliminary approval: we will only be accepting{" "}
              <strong>12 applicants</strong> for our{" "}
              <a href="/about-the-program" alt="" className="text-warning">
                {dateStart} through {dateEnd}
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
            <form className="border border-warning rounded-0 p-2 p-md-3 p-lg-5">
              <div className="form-group">
                <label for="date-of-bith">
                  First &amp; Last name<span class="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  required
                />
              </div>

              <div className="form-group">
                <label for="date-of-bith">
                  Date of birth<span class="text-danger">*</span>
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="date-of-birth"
                  required
                />
              </div>

              <div className="form-group">
                <label for="email">
                  Email<span class="text-danger">*</span>
                </label>
                <input type="email" className="form-control" required />
              </div>

              <div className="form-group">
                <label for="exampleInputPassword1">Country</label>
                <Select options={countries} className="form-control-lg p-0" />
              </div>

              <p className="small">
                <span class="text-danger">*</span> : this field is required
              </p>

              <button
                type="submit"
                className="btn btn-warning btn-lg text-uppercase rounded-0 hvr-glow"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
