import React from "react";

const Contact = () => {
  return (
    <>
      <div class="text-over-image">
        <img
          src="./assets/images/beach-4.jpg"
          alt="Beach"
          class="img-cover image-background-top-page"
        />
        <p class="text-over-image-centered top-page-title">Contact Us</p>
      </div>

      <div className="container bg-light border py-5 my-5">
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0">Contact us with this form</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
