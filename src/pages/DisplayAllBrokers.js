import React, { useState, useEffect } from "react";
import "../stylesheets/displayAllProperties.css";

export default function DisplayAllProperties() {
  // State to hold the data fetched from local storage
  const [data, setData] = useState([]);

  // Use the useEffect hook to run the code
  //inside the function when the component is mounted
  useEffect(() => {
    // Retrieve data from localStorage and parse it from a JSON string to a JavaScript object.
    //If no data is found, use an empty array.
    const existingData = JSON.parse(localStorage.getItem("data") || "[]");
    // Update the state variable "data"
    //with the parsed data from localStorage
    setData(existingData);
    // Pass an empty array as the second argument
    //to ensure that the effect only runs once
  }, []);

  return (
    <section id="card">
      <div class="card-container">
        {data.length > 0 ? (
          <div>
            {data.map((item, index) => (
              <div class="card" key={index}>
                <div class="content">
                  <img src="https://placeimg.com/800/500/arch" alt="img1a" />
                  <p>
                    <strong>
                      {item.brokerFName} {item.brokerLName}
                    </strong>
                  </p>

                  <p>
                    {item.brokerEmail} | <br />
                    {item.brokerPhone}
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
