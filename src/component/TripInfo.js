import React from "react";
import {
  FaMapMarkerAlt,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendar,
  FaMoneyBillWave,
} from "react-icons/fa";

const TripInfo = ({ places, count, budget, name, email, contact, days }) => {
  return (
    <div className="card trip-info">
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <p>
              <FaMapMarkerAlt className="icon text-primary" />{" "}
              <strong>Places:</strong>{" "}
              {Array.isArray(places) ? places.join(", ") : ""}
            </p>
            <p>
              <FaUser className="icon text-primary" /> <strong>Count:</strong>{" "}
              {count}
            </p>
            <p>
              <FaMoneyBillWave className="icon text-primary" />{" "}
              <strong>Budget:</strong> ${budget}
            </p>
          </div>
          <div className="col-md-6">
            <p>
              <FaUser className="icon text-primary" /> <strong>Name:</strong>{" "}
              {name}
            </p>
            <p>
              <FaEnvelope className="icon text-primary" />{" "}
              <strong>Email:</strong> {email}
            </p>
            <p>
              <FaPhone className="icon text-primary" />{" "}
              <strong>Contact:</strong> {contact}
            </p>
            <p>
              <FaCalendar className="icon text-primary" />{" "}
              <strong>Days:</strong> {days}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripInfo;
