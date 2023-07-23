import Aos from "aos";
import React, { useEffect, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { FaWifi } from "react-icons/fa";
import {
  MdAirportShuttle,
  MdBathtub,
  MdKingBed,
  MdLocationOn,
} from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { Alert } from "reactstrap";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";
import PayWithStripe from "../../Components/PayWithStripe/PayWithStripe";

const RoomList = () => {
  const { hotelId } = useParams();
  const [modal, setModal] = useState(false);
  const { data, error, loading } = useFetch(`${BASE_URL}/rooms`);
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <section className="offer container section">
      <div className="secContainer">
        <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
          <h2 className="secTitle">Rooms</h2>
          <p>
            By Booking 90 Days Or More In Advance, You Can Get 30% Off On Your
            Rooms.
          </p>
        </div>
        <div className="mainContent grid">
          {error && <Alert color="danger">Error loading room data!</Alert>}
          {loading && <Alert>Loading room data...</Alert>}
          {!error && !loading && data.length === 0 && (
            <Alert>No room found!</Alert>
          )}
          {data &&
            data.map(
              ({
                _id: id,
                photo,
                title,
                destTitle,
                location,
                price,
                bednumber,
                maxGroupSize,
              }) => {
                return (
                  <div
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    className="singleOffer"
                    key={id}
                  >
                    <div className="destImage">
                      <img src={photo} alt={destTitle} />
                    </div>
                    <div className="offerBody">
                      <Link to={`/rooms/${hotelId}/${id}`}>
                        <h4>{title}</h4>
                      </Link>
                      <div className="price flex">
                        <h4>{price}</h4>
                        <span className="status">Available</span>
                      </div>
                      <div className="amentities flex">
                        <div className="singleAmenity flex">
                          <MdKingBed className="icon" />
                          <small>{bednumber}</small>
                        </div>
                        <div className="singleAmenity flex">
                          <MdBathtub className="icon" />
                          <small>1 Bath</small>
                        </div>
                        <div className="singleAmenity flex">
                          <FaWifi className="icon" />
                          <small>Wifi</small>
                        </div>
                        <div className="singleAmenity flex">
                          <MdAirportShuttle className="icon" />
                          <small>Shuttle</small>
                        </div>
                      </div>
                      <div className="location flex">
                        <MdLocationOn className="icon" />
                        <small className="location">{location}</small>
                      </div>
                      <button
                        className="btn flex"
                        onClick={() => setModal(!modal)}
                      >
                        Book Now
                        <BsArrowRightShort className="icon" />
                      </button>
                      <PayWithStripe
                        setModal={setModal}
                        modal={modal}
                        price={price}
                        guestSize={maxGroupSize}
                        hotelName={title}
                      />
                    </div>
                  </div>
                );
              }
            )}
        </div>
      </div>
    </section>
  );
};

export default RoomList;