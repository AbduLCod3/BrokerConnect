import React, { useState, useEffect } from "react";
import "../stylesheets/displayAllProperties.css";

export default function DisplayAllProperties() {
  const [data, setData] = useState([]);

  // State to hold city and state

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem("data") || "[]");
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
                    {property.propertySize} SqFt | {property.propertyPrice}
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
