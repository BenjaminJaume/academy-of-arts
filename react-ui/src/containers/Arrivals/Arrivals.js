import React from "react";

const Arrivals = (props) => {
  const { dateStart, dateEnd, tuitionPrice } = props;
  return (
    <>
      <div className="text-over-image bg-success">
        <img
          src="./assets/images/beach-3.jpg"
          alt="Beach"
          className="img-cover image-background-top-page"
        />
        <p className="text-over-image-centered top-page-title">Arrivals</p>
      </div>

      <div className="container border border-warning my-5">
        <div className="row py-4">
          <div className="col-12 text-center">
            <h1 className="h1 font-title mt-0 pt-0">
              Here are some important reminders
            </h1>
            <h3>
              Starting date: <span className="text-warning">{dateStart}</span> -{" "}
              Ending date - <span className="text-warning">{dateEnd}</span> -{" "}
              Tuition price:{" "}
              <span className="text-warning">USD${tuitionPrice}</span>
            </h3>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-sm-10 col-12 mx-auto text-center">
            <p>
              Once your travel arrangements have been made, you will send us an
              email including travel information and confirmation of arrival
              time in SJO airport.
            </p>
            <p>
              Arrival time must be before 3pm on March 3rd or must travel one
              day ahead (February 21st) and book a hotel room for one night
              close to airport.
            </p>
            <p>
              We will pick you up on {dateStart} at SJO airport at 3pm.
              Departure (return trip) must be made for anytime after 1pm (1300)
              on {dateEnd} We will have an early morning transport to the
              airport, arriving to airport just before 11am.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Arrivals;
