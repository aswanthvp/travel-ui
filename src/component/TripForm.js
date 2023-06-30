import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";
import "../css/form.css";
import { getURL } from "../utils/utils";

const MyForm = () => {
  const [formData, setFormData] = useState({
    places: [],
    count: 0,
    budget: "",
    name: "",
    email: "",
    contact: "",
    days: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handlePlacesChange = (selectedOptions) => {
    const places = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : [];
    setFormData((prevFormData) => ({ ...prevFormData, places: places }));
  };

  const handleBudgetChange = (selectedOption) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      budget: selectedOption.value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log(formData);
    // Perform further processing or submit the form data
    axios
      .post(`${getURL()}/trips`, formData)
      .then((result) => {
        alert("Trip created");
      })
      .catch((error) => {
        alert("Error in creating the trip");
      });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 custom-card">
        <h2 className="card-title text-center mb-4">Trip Information</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="places">Places:</label>
            <Select
              id="places"
              name="places"
              isMulti
              className="basic-multi-select"
              options={[
                { value: "London", label: "London" },
                { value: "Paris", label: "Paris" },
                { value: "New York", label: "New York" },
                { value: "Tokyo", label: "Tokyo" },
                { value: "Rome", label: "Rome" },
                { value: "Barcelona", label: "Barcelona" },
                { value: "Sydney", label: "Sydney" },
              ]}
              classNamePrefix="custom-select"
              onChange={handlePlacesChange}
              value={formData.places.map((place) => ({
                value: place,
                label: place,
              }))}
            />
          </div>
          <div className="form-group">
            <label htmlFor="count">Count:</label>
            <input
              className="form-control"
              type="number"
              id="count"
              name="count"
              value={formData.count}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="budget">Budget:</label>
            <Select
              id="budget"
              name="budget"
              className="custom-select"
              options={[
                { value: "", label: "Select Budget" },
                { value: "100", label: "$100" },
                { value: "500", label: "$500" },
                { value: "1000", label: "$1000" },
              ]}
              onChange={handleBudgetChange}
              value={formData.budget}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              className="form-control"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              className="form-control"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact:</label>
            <input
              className="form-control"
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="days">Days:</label>
            <input
              className="form-control"
              type="number"
              id="days"
              name="days"
              value={formData.days}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary custom-button mt-3">
            Create Trip
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyForm;
