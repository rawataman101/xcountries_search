import React from "react";
import "./CountryCard.css";

function CountryCard({ country }) {
  return (
    <div className="card">
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        className="card__img"
      />
      <h2 style={{ textAlign: "center" }}>{country.name.common}</h2>
    </div>
  );
}

export default CountryCard;
