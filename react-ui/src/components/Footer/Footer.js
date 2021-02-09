import React from "react";

const Footer = () => {
  return (
    <footer className="container-fluid bg-warning py-5">
      <div className="row mb-3">
        <div className="col-lg-4 col-12 text-center mt-3 mt-lg-0">
          <p className="my-auto">
            <img src="./assets/images/logo-small.jpg" alt="logo" />
          </p>
        </div>
        <div className="col-lg-4 col-12 text-center my-auto">
          <h1 className="text-uppercase text-white mb-0">Academy of Arts</h1>
          <h2 className="font-subtitle text-white mt-0">Costa Rica</h2>
          <p>21 Day Music and movement immersion in Beautiful Costa Rica!</p>
        </div>
        <div className="col-lg-4 col-12 text-center my-auto">
          <p>
            <a
              href="contact"
              className="btn btn-success btn-lg rounded-0 hvr-glow"
              alt=""
            >
              <span className="font-weight-bold text-uppercase">
                Book your spot
              </span>
            </a>
          </p>
          <p>
            <a
              href="<?php echo get_permalink($page_about_program); ?>"
              className="btn btn-outline-success btn-lg rounded-0 hvr-glow"
              alt=""
            >
              Learn more about the program
            </a>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <p className="text-uppercase font-small mb-0">
            &copy; 2021 Academy of Arts - All Rights Reserved
          </p>
          <p className="font-small">
            Web Designer: Benjamin Jaume -{" "}
            <a
              href="http://www.benjaminjau.me"
              alt=""
              className="text-success"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.benjaminjau.me
            </a>
          </p>
        </div>
      </div>
      {/* </div> */}
    </footer>
  );
};

// @ts-ignore
export default Footer;
