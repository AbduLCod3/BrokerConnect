import { useState } from "react";
import "../stylesheets/listBroker.css";

export default function ListBroker() {
  // using useState Hook define state variables to capture user inputs
  const [brokerFName, setBrokerFName] = useState("");
  const [brokerLName, setBrokerLName] = useState("");
  const [brokerEmail, setBrokerEmail] = useState("");
  const [brokerPhone, setBrokerPhone] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [propertySize, setPropertySize] = useState("");
  const [propertyZipCode, setPropertyZipCode] = useState("");
  const [propertyPrice, setPropertyPrice] = useState("");

  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  // async function to fetch data from the API and update the state variables
  const getCityState = async (zipcode) => {
    // async function fetchData() {
    // Use the fetch() function to retrieve data from the API endpoint
    const response = await fetch(`https://api.zippopotam.us/us/${zipcode}`);

    // Parse the response data as a JSON object
    const data = await response.json();

    // Extract city and state from the data object
    // set the corresponding state variables
    setCity(data.places[0]["place name"]);
    setState(data.places[0].state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newList = {
      brokerFName,
      brokerLName,
      brokerEmail,
      brokerPhone,
      propertyType,
      propertySize,
      propertyZipCode,
      propertyPrice,
      city,
      state,
    };
    const existingData = JSON.parse(localStorage.getItem("data") || "[]");

    existingData.push(newList);
    localStorage.setItem("data", JSON.stringify(existingData));

    // reset state variables to empty strings
    // use useEffect later here below
    setBrokerFName("");
    setBrokerLName("");
    setBrokerEmail("");
    setBrokerPhone("");
    setPropertyType("");
    setPropertySize("");
    setPropertyZipCode("");
    setPropertyPrice("");
  };

  return (
    <div class="formbold-main-wrapper">
      {/* <!-- Author: FormBold Team -->
    <!-- Learn More: https://formbold.com --> */}
      <div class="formbold-form-wrapper">
        <img src="https://placeimg.com/800/500/arch" alt="img1a" />

        <form onSubmit={handleSubmit}>
          <div class="formbold-form-title">
            <h2 class="">List Business</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>

          <div class="formbold-input-flex">
            <div>
              <label for="firstname" class="formbold-form-label">
                First name
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                class="formbold-form-input"
                placeholder="Abdul"
                value={brokerFName}
                onChange={(e) => setBrokerFName(e.target.value)}
              />
            </div>

            <div>
              <label for="firstname" class="formbold-form-label">
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                class="formbold-form-input"
                placeholder="Rahman"
                value={brokerLName}
                onChange={(e) => setBrokerLName(e.target.value)}
              />
            </div>
          </div>

          <div class="formbold-input-flex">
            <div>
              <label for="email" class="formbold-form-label">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                class="formbold-form-input"
                placeholder="abdul.kasmo@gmail.com"
                value={brokerEmail}
                onChange={(e) => setBrokerEmail(e.target.value)}
              />
            </div>

            <div>
              <label for="phone" class="formbold-form-label">
                Phone #
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                class="formbold-form-input"
                ///////////////////////////
                placeholder="507-000-0101"
                value={brokerPhone}
                onChange={(e) => setBrokerPhone(e.target.value)}
              />
            </div>
          </div>

          <div class="formbold-input-flex">
            <div>
              <label for="propertyType" class="formbold-form-label">
                Property Type
              </label>
              <input
                type="text"
                name="propertyType"
                id="propertyType"
                class="formbold-form-input"
                placeholder="Apartment"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              />
            </div>

            <div>
              <label for="propertySize" class="formbold-form-label">
                Property Size
              </label>
              <input
                type="text"
                name="lastpropertySizename"
                id="propertySize"
                class="formbold-form-input"
                placeholder="1200 SqFt"
                value={propertySize}
                onChange={(e) => setPropertySize(e.target.value)}
              />
            </div>
          </div>
          <div class="formbold-input-flex">
            <div>
              <label for="propertyZipCode" class="formbold-form-label">
                Property ZipCode
              </label>
              <input
                type="text"
                name="propertyZipCode"
                id="propertyZipCode"
                class="formbold-form-input"
                placeholder="60609"
                value={propertyZipCode}
                onChange={(e) => setPropertyZipCode(e.target.value)}
                onBlur={(e) => getCityState(e.target.value)}
              />
            </div>

            <div>
              <label for="propertyPrice" class="formbold-form-label">
                Property Price
              </label>
              <input
                type="text"
                name="propertyPrice"
                id="propertyPrice"
                class="formbold-form-input"
                placeholder="$ 900,000"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" class="home__button">
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
}
