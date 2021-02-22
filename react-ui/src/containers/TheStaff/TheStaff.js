import React from "react";

const TheStaff = () => {
  return (
    <>
      <div className="text-over-image bg-success">
        <img
          src="./assets/images/beach-9.jpg"
          alt="Beach"
          className="img-cover image-background-top-page"
        />
        <p className="text-over-image-centered top-page-title">The Staff</p>
      </div>

      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="font-title">Meet the team</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 text-center my-3 my-md-0">
            <h3 className="text-warning text-uppercase mb-0">Michelle</h3>
            <p className="lead font-italic text-secondary">Music teacher</p>
            <img
              src="./assets/images/teachers/teacher1.jpg"
              alt="Beach"
              className="img-fluid frame-hover"
            />
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              cum voluptas maxime praesentium eveniet vitae ab ratione adipisci!
            </p>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 text-center my-3 my-md-0">
            <h3 className="text-warning text-uppercase mb-0">Sonia</h3>
            <p className="lead font-italic text-secondary">Yoga teacher</p>
            <img
              src="./assets/images/teachers/teacher2.jpg"
              alt="Beach"
              className="img-fluid frame-hover"
            />
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
              asperiores error aperiam est optio quae commodi illo molestiae ad,
              voluptates perferendis libero molestias architecto laboriosam?
            </p>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 text-center my-3 my-md-0">
            <h3 className="text-warning text-uppercase mb-0">Daniel</h3>
            <p className="lead font-italic text-secondary">Djembe teacher</p>
            <img
              src="./assets/images/teachers/teacher3.jpg"
              alt="Beach"
              className="img-fluid frame-hover"
            />
            <p className="mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur quisquam culpa sed enim cupiditate voluptatem
              repudiandae.
            </p>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 text-center my-3 my-md-0">
            <h3 className="text-warning text-uppercase mb-0">Robert</h3>
            <p className="lead font-italic text-secondary">Vegan chef</p>
            <img
              src="./assets/images/teachers/teacher4.jpg"
              alt="Beach"
              className="img-fluid frame-hover"
            />
            <p className="mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi,
              pariatur totam sint tenetur reiciendis qui quo vitae illo iure.
            </p>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url("./assets/images/beach-2.jpg")` }}
        className="separator-image parralax my-5"
      >
        <div className="d-flex h-100 text-center">
          <h1 className="text-white text-center align-middle text-uppercase border border-warning letter-spacing-big p-lg-5 p-md-4 p-sm-3 p-2 my-auto mx-auto">
            We are here for you
          </h1>
        </div>
      </div>
    </>
  );
};

export default TheStaff;
