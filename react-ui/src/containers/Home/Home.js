import React from "react";

const Home = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url("./assets/images/beach.jpg")` }}
        className="parralax"
      >
        <div className="container text-over-image-centered py-5" id="">
          <div className="row">
            <div className="col-12 text-center mb-5 mb-lg-5">
              <h1 className="display-3 text-uppercase text-brand-1 m-0">
                Academy of Arts
              </h1>
              <h2 className="display-4 font-subtitle text-brand-2 m-0">
                Costa Rica
              </h2>

              <hr className="w-75" />

              <p className="text-white mb-0">
                <span className="border border-left-0 border-right-0 border-top-0 border-warning">
                  21 Day Music and movement immersion in Beautiful Costa Rica!
                </span>
              </p>

              <p>
                <strong className="text-warning"> &#62; </strong>
                <span className="text-white font-weight-bold border border-left-0 border-right-0 border-top-0 border-warning">
                  3rd March, 2021 to 22nd March, 2021
                </span>
                <strong className="text-warning"> &#60; </strong>
              </p>

              <div>
                <a
                  href="#start"
                  className="btn btn-warning btn-lg rounded-0 hvr-grow mr-2"
                  alt=""
                >
                  Learn more
                </a>
                <a
                  href="contact"
                  className="btn btn-success btn-lg rounded-0 hvr-grow"
                  alt=""
                >
                  Book your spot
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-warning" id="start">
        <div className="container py-5 mb-5">
          <div className="row mb-3">
            <div className="col-12 mx-auto">
              <h1 className="font-title text-uppercase text-center">
                &#62; Our program includes &#60;{" "}
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-12 my-auto">
              <p className="h2 text-white text-uppercase text-center p-2">
                Voice activation
              </p>
            </div>
            <div className="col-lg-4 col-sm-6 col-12 my-auto">
              <p className="h2 text-white text-uppercase text-center p-2">
                Asana (yoga practice)
              </p>
            </div>
            <div className="col-lg-4 col-sm-6 col-12 my-auto">
              <p className="h2 text-white text-uppercase text-center p-2">
                Nutrition (plant based)
              </p>
            </div>
            <div className="col-lg-4 col-sm-6 col-12 my-auto">
              <p className="h2 text-white text-uppercase text-center p-2">
                5Rhythms dynamic movement/dance
              </p>
            </div>
            <div className="col-lg-4 col-sm-6 col-12 my-auto">
              <p className="h2 text-white text-uppercase text-center p-2">
                Guitar basics
              </p>
            </div>
            <div className="col-lg-4 col-sm-6 col-12 my-auto">
              <p className="h2 text-white text-uppercase text-center p-2">
                Djembe
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="font-title bg-light text-brand-1 text-uppercase font-weight-light border border-warning p-lg-5 p-md-4 p-3">
              We are now opening registration for our 21 day music and movement
              immersion in beautiful Costa Rica.
            </h1>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-lg-8 col-md-7 col-12 text-center">
            <p className="m-0">
              You will wake up each day in paradise and learn how to nurture the
              artistic aspects of your being. You do not need prior knowledge or
              experience to start this adventure. Our instructors will guide you
              on any level you are currently on. From novice to expert, from
              basic to advanced.
            </p>
          </div>
          <div className="col-lg-4 col-md-5 col-12 text-center my-2 my-md-auto">
            <a
              href="contact"
              className="btn btn-success btn-lg rounded-0 hvr-grow"
              alt=""
            >
              <span className="h3 font-weight-light text-uppercase">
                Book your spot
              </span>
            </a>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url("./assets/images/waves.jpg")` }}
        className="separator-image parralax my-5"
      >
        <div className="d-flex h-100 text-center">
          <h1 className="text-white text-center align-middle text-uppercase border border-warning letter-spacing-big p-lg-5 p-md-4 p-sm-3 p-2 my-auto mx-auto">
            Welcome to Costa Rica
          </h1>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div
            className="col-12 col-md-6 px-0"
            data-aos="fade-right"
            data-aos-once="true"
          >
            <div className="display-two-columns aden">
              <img
                src="./assets/images/beach-2.jpg"
                alt="Music intruments"
                className="img-cover"
              />
            </div>
          </div>
          <div
            className="col-12 col-md-6 bg-black"
            data-aos="fade-left"
            data-aos-once="true"
          >
            <div className="d-flex flex-column justify-content-center align-items-center text-center h-100 py-5 px-0 px-sm-3 px-md-5">
              <h1 className="text-brand-1 text-uppercase mb-2">
                Master the 5 elements
              </h1>
              <p className="text-white m-0 px-lg-5">
                The teachings will incorporate music theory, voice activation,
                guitar basics, djembe and 5Rhythms movement.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-12 col-md-6 bg-black order-1 order-md-0 display-two-columns"
            data-aos="fade-right"
            data-aos-once="true"
          >
            <div className="d-flex flex-column justify-content-center align-items-center text-center h-100 py-5 px-0 px-sm-3 px-md-5">
              <h1 className="text-brand-1 text-uppercase mb-2">
                Have a taste of the Costarican food
              </h1>
              <p className="text-white m-0 px-lg-5">
                We will supply you with the most delicious fruit you’ve ever
                tasted! This soil is so rich that everything tastes better here.
              </p>
            </div>
          </div>
          <div
            className="col-12 col-md-6 px-0 order-0 order-md-1"
            data-aos="fade-left"
            data-aos-once="true"
          >
            <div className="display-two-columns aden">
              <img
                src="./assets/images/beach-6.jpg"
                alt="Music intruments"
                className="img-cover"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-12 col-md-6 px-0"
            data-aos="fade-right"
            data-aos-once="true"
          >
            <div className="display-two-columns aden">
              <img
                src="./assets/images/beach-3.jpg"
                alt="Music intruments"
                className="img-cover"
              />
            </div>
          </div>
          <div
            className="col-12 col-md-6 bg-black display-two-columns"
            data-aos="fade-left"
            data-aos-once="true"
          >
            <div className="d-flex flex-column justify-content-center align-items-center text-center h-100 py-5 px-0 px-sm-3 px-md-5">
              <h1 className="text-brand-1 text-uppercase mb-2">
                Let the music flow through you
              </h1>
              <p className="text-white m-0 px-lg-5">
                Music is the key to allow universal knowledge to flow in as it
                can transport our mind and help us see how we can use our energy
                for expansion.
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="w-50 my-5" />

      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h1 className="display-4 text-brand-2 font-title text-center mb-0">
              More about the program
            </h1>
            <p className="text-center text-warning">
              21 Day Music and movement immersion in Beautiful Costa Rica!
            </p>
          </div>
          <div className="col-lg-8 col-md-10 col-12 mx-auto">
            <p>
              It has been proven that all it takes is 21 days to let go of
              patterns that hinder our growth and in turn the same is said to
              form new habits, which we will call our practice.
            </p>
            <p>
              The teachings will incorporate <strong>music theory</strong>,{" "}
              <strong>voice activation</strong>, <strong>guitar basics</strong>,{" "}
              <strong>djembe</strong> and <strong>5Rhythms movement</strong>.
            </p>
            What is Included:
            <ul id="list-chevron">
              <li>Transportation to and from airport (4 hour drive)</li>
              <li>Breakfast, Lunch, Dinner and unlimited fruit for 21 days</li>
              <li>Lodging for the 21 nights</li>
              <li>Guitar and Djembe rental</li>
              <li>Yoga mat and Towel rental</li>
              <li>Trip to the beach</li>
            </ul>
            <p>
              We will only be accepting 12 applicants for our March 3rd through
              March 23rd immersion to ensure proper attention and accelerated
              learning.
            </p>
            <h2 className="text-success text-uppercase font-title text-center my-5">
              Tuition: $3300
            </h2>
            <p className="text-center">
              <a
                href="<?php echo get_permalink($page_about_program); ?>"
                className="btn btn-warning btn-lg rounded-0 hvr-glow mr-md-2 my-2 my-md-0"
                alt=""
              >
                Learn more about the program
              </a>
              <a
                href="contact"
                className="btn btn-success btn-lg rounded-0 hvr-glow mr-lg-2"
                alt=""
              >
                Book your spot
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-success mt-5 py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="font-title text-warning">Get in touch with us</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-10 col-12 text-center mx-auto">
            <p>
              Please state your interest in joining us on this great adventure.
              We will promptly answer back with a response. If there is an open
              spot for you, we will send you a confirmation aboard our ship with
              the following steps to take.
            </p>
            <p>
              <a
                href="contact"
                className="btn btn-warning btn-lg rounded-0 hvr-grow"
                alt=""
              >
                Contact us
              </a>
            </p>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url("./assets/images/beach-7.jpg")` }}
        className="separator-image parralax my-5"
      >
        <div className="d-flex h-100 text-center">
          <h1 className="text-white text-center align-middle text-uppercase border border-warning letter-spacing-big p-lg-5 p-md-4 p-sm-3 p-2 my-auto mx-auto">
            Welcoming the new earth ambassadors!{" "}
            <span role="img" aria-label="planet">
              🌍
            </span>
          </h1>
        </div>
      </div>
    </>
  );
};

// @ts-ignore
export default Home;
