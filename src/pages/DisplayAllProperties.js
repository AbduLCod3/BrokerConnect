import React, { useState, useEffect } from "react";
import "../stylesheets/displayAllProperties.css";

export default function DisplayAllProperties() {
  // State to hold the data fetched from local storage
  const [data, setData] = useState([]);

  // Fetch data from local storage when the component mounts
  useEffect(() => {
    // Parse the data stored in local storage,
    // or set it to an empty array if it doesn't exist
    const existingData = JSON.parse(localStorage.getItem("data") || "[]");
    // Update the data state with the parsed data
    setData(existingData);
  }, []);

  return (
    <section id="card">
      <div class="card-container">
        {data.length > 0 ? (
          <div>
            {data.map((property, index) => (
              <div class="card" key={index}>
                <div class="content">
                  <img src="https://placeimg.com/800/500/arch" alt="img1a" />
                  <p>
                    <strong>{property.propertyType} |</strong>
                  </p>
                  <p>
                    {property.propertySize} sqft | ${property.propertyPrice}
                  </p>
                  <p>
                    {property.propertyZipCode} | {property.city} |{" "}
                    {property.state}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No data found</p>
        )}
      </div>
    </section>
  );
}
