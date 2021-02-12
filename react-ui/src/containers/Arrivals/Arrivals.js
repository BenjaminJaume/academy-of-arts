import React from "react";
import Select from "react-select";

// fetch("https://restcountries.eu/rest/v2/all")

function logChange(val) {
  console.log("Selected: " + val);
}

const Arrivals = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-4">Arrivals page</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <Select options={options} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Arrivals;
