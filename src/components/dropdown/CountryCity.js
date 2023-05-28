import React, { useState } from "react";

function CountryCity() {
  const countries = [
    {
      name: "India",
      value: "IN",
      cities: ["Delhi", "Mumbai"],
    },
    {
      name: "United Kingdom",
      value: "UK",
      cities: ["London", "Manchester"],
    },
    {
      name: "United States of America",
      value: "US",
      cities: ["NewYork", "Seattle"],
    },
  ];

  const [cities, setCities] = useState([]);

  const fetchCities = (code) => {
    const country = countries.find((country) => country.value === code);
    setCities(country.cities);
  };
  return (
    <>
      <select onChange={(e) => fetchCities(e.target.value)}>
        {countries.map((country) => {
          return (
            <option key={country.value} value={country.value}>
              {country.name}
            </option>
          );
        })}
      </select>
      <select>
        {cities.map((city) => {
          return <option key={city}>{city}</option>;
        })}
      </select>
    </>
  );
}

export default CountryCity;
