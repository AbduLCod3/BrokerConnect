// export default function PropertiesList() {
//   return <h4>This is the PropertiesList page</h4>;
// }

import React from "react";

function DisplayData(props) {
  return (
    <div>
      <h2>List of Form Data</h2>
      {props.formDataList ? (
        <ul>
          {props.formDataList.map((formData, index) => (
            <li key={index}>
              <p>Name: {formData.name}</p>
              <p>Number: {formData.number}</p>
              <p>Email: {formData.email}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No data to display.</p>
      )}
    </div>
  );
}

export default DisplayData;
