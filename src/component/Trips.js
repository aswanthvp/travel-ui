import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { getURL } from "../utils/utils";

import TripInfo from "./TripInfo";

const cookies = new Cookies();

export default function TripsList() {
  const [pageNumber, setPageNumber] = useState(0);
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    try {
      const token = cookies.get("TOKEN");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      axios
        .get(`${getURL()}/trips`, config)
        .then((result) => {
          setTrips(result.data);
        })
        .catch((error) => {
          alert("Error in fetching the details");
        });
    } catch (error) {}
  }, [pageNumber]);
  return (
    <div className="vstack">
      <h2 className="card-title">Trips Information:</h2>
      {trips.map((trip) => (
        <TripInfo key={trip._id} {...trip} />
      ))}
      <hr className="border-secondary border border-top-0 m-0" />
    </div>
  );
}
