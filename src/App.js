import { useEffect, useState } from "react";
import "./index.css";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [searchedCountries, setSearchCountries] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.log("Error fetching API"));
  });

  useEffect(() => {
    if (search) {
      setSearchCountries([
        ...countries.filter((country) => country.name.common.includes(search)),
      ]);
    }
  }, [search, countries]);
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };
  const cardStyle = {
    width: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #808080",
    padding: "10px",
    margin: "10px",
    borderRadius: "10px",
  };
  const cardImgStyle = {
    objectfit: "contain",
    width: "100px",
    height: "100px",
  };
  return (
    <div className="wrapper">
      <div className="search__wrapper">
        <input
          type="text"
          placeholder="Search for countries..."
          value={search}
          onChange={handleSearch}
        />
      </div>
      <div style={containerStyle}>
        {search &&
          searchedCountries.map((country) => (
            <div style={cardStyle}>
              <img
                src={country.flags.png}
                alt={`Flag of ${country.name.common}`}
                style={cardImgStyle}
              />
              <h2 style={{ textAlign: "center" }}>{country.name.common}</h2>
            </div>
          ))}
        {!search &&
          countries.map((country) => (
            <div style={cardStyle}>
              <img
                src={country.flags.png}
                alt={`Flag of ${country.name.common}`}
                style={cardImgStyle}
              />
              <h2 style={{ textAlign: "center" }}>{country.name.common}</h2>
            </div>
          ))}
      </div>
    </div>
  );
}
