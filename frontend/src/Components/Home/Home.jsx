import React, { useRef } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Link, useNavigate } from "react-router-dom";
import About from "../About/About";
import Offer from "../Offers/Offer";
import Popular from "../Popular/Popular";
import "./home.css";

const Home = () => {
  const locationRef = useRef("");
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);
  const navigate = useNavigate();

  const handleSearch = async () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;
    if (location === "" || distance === "" || maxGroupSize === "") {
      return alert("All Fields are required !");
    }

    // const res = await fetch(
    //   `${BASE_URL}/hotels/search/getHotelBySearch?city=${location}&distance =${distance}&maxGroupSize =${maxGroupSize}`
    // );
    // if (!res.ok) alert("Something Wrong");
    // const result = await res.json();
    const searchString = `city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`;
    const url = new URLSearchParams(searchString);
    console.log(url.toString());

    navigate(`/hotelList?${url.toString()}`);
    // { state: result.data }
  };

  return (
    <div>
      <section className="home">
        <div className="secContainer container">
          <div className="homeText">
            <h1 data-aos="fade-up" className="title">
              Book your Room with Hotel Booking.
            </h1>
            <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
              Enjoy Your Relaxing Holiday
            </p>
            <Link to="/hotelList">
              <button
                data-aos="fade-up"
                data-aos-duration="3000"
                className="btn"
              >
                Check Now
              </button>
            </Link>
          </div>
          <div className="homeCard grid">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="locationDiv"
            >
              <label htmlFor="location">Location</label>
              <input
                ref={locationRef}
                type="text"
                name="location"
                placeholder="Dream Destination"
              />
            </div>

            <div
              data-aos="fade-right"
              data-aos-duration="2500"
              className="distDiv"
            >
              <label htmlFor="distance">Distance</label>
              <input
                type="number"
                placeholder="Distance"
                name="distance"
                ref={distanceRef}
              />
            </div>

            <div
              data-aos="fade-right"
              data-aos-duration="3000"
              className="priceDiv"
            >
              <label htmlFor="people">People</label>
              <input
                type="number"
                name="people"
                placeholder="Maximum Group Size"
                ref={maxGroupSizeRef}
              />
            </div>
            <button
              onClick={handleSearch}
              data-aos="fade-left"
              data-aos-duration="2000"
              className="btn"
            >
              Search
            </button>
          </div>
        </div>
      </section>
      <Popular />
      <Offer />
      <About />
    </div>
  );
};

export default Home;
