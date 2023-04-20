import React, { useState, useEffect } from "react";

export default function DisplayAllBrokers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem("data") || "[]");
    setData(existingData);
  }, []);

  return (
    <div className="allCard">
      {data.length > 0 ? (
        <div className="allCards">
          {data.map((item, index) => (
            <div className="card" key={index}>
              First Name: {item.brokerFName}, Last Name: {item.brokerLName},
              Email: {item.brokerEmail}, Phone: {item.brokerPhone}, Property
              Type: {item.propertyType}, Property Size: {item.propertySize},
              Property ZipCode: {item.propertyZipCode}, Property Price:{" "}
              {item.propertyPrice}
            </div>
          ))}
        </div>
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
}
