import React, { useRef } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate } from "react-router-dom";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Offer from "../Offers/Offer";
import Popular from "../Popular/Popular";
import { BASE_URL } from "./../../utils/config";
import "./home.css";

const Home = () => {
  const locationRef = useRef("");
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);
  const navigate = useNavigate();

  const searchbar = async () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;
    if (location === "" || distance === "" || maxGroupSize === "") {
      return alert("All Fields are required !");
    }

    // const [destination, setDestination] = useState("");

    //     const[openDate ,setOpenDate] =useState(false)
    //     const [date, setDate] = useState([
    //         {
    //           startDate: new Date(),
    //           endDate:  new Date(),
    //           key: 'selection'
    //         },
    //       ]);

    //       //
    //       const[openOptions ,setOpenOptions] =useState(false)
    //       const [options, setOptions] = useState(
    //           {
    //             adult:1,
    //             children :0,
    //             room:1,
    //           }
    //         );
    //         const navigate = useNavigate()

    // const handleOption =(name,operation) =>{
    //     setOptions(prev=>{
    //         return{
    //             ...prev, [name] : operation === "i" ? options[name] + 1 : options[name] - 1,
    //         };
    //     });
    // }

    // const handleSearch = async () => {
    //     navigate("/roomList", { state: { destination, date, options } });
    //   };
    // const roomsgo = () => {
    //     navigate("/roomList", { state: { destination, date, options } });
    //   };

    // useEffect(()=>{
    //     Aos.init({
    //         duration:2000
    //     })
    // }, [])

    const res = await fetch(
      `${BASE_URL}/hotels/search/getHotelBySearch?city=${location}&distance =${distance}&maxGroupSize =${maxGroupSize}`
    );
    if (!res.ok) alert("Something Wrong");
    const result = await res.json();

    navigate(
      `/hotels/search?city=${location}&distance ={distance}$maxGroupSize =${maxGroupSize}`,
      { state: result.data }
    );
  };

  return (
    <div>
      {/* <Navbar /> */}
      <section className="home">
        {/* <div className="overlay"></div>
<video src={video} muted autoPlay loop type="video/mp4"></video> */}
        <div className="secContainer container">
          <div className="homeText">
            <h1 data-aos="fade-up" className="title">
              Book your Room with Hotel Booking.
            </h1>
            <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
              Enjoy Your Relaxing Holiday
            </p>
            <button data-aos="fade-up" data-aos-duration="3000" className="btn">
              Check Now
            </button>
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
              {/* <label htmlFor="distance">{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")} `}</label> */}
              <input
                type="number"
                placeholder="Distance"
                name="distance"
                ref={distanceRef}
              />
              {/* {
       openDate &&       <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className ="date"
              minDate={new Date()}
            />
  } */}
            </div>

            <div
              data-aos="fade-right"
              data-aos-duration="3000"
              className="priceDiv"
            >
              <label htmlFor="people">People</label>
              {/* <label htmlFor="price" onClick={()=>setOpenOptions(!openOptions)}> {`${options.adult} adult . ${options.children} children . ${options.room} room`}</label> */}
              <input
                type="number"
                name="people"
                placeholder="Maximum Group Size"
                ref={maxGroupSizeRef}
              />
              {/* {
          
{/* {
    openOptions &&  <div className="options">
    <div className="optionItem">

        <span className="optionText"> Adult</span>
        <div className="optionCounter">
        <button
        disabled={options.adult <=1}
        className="optionCounterButton"  onClick={()=>handleOption("adult","d")}>-</button>
        <span className="openCounterNumber">{options.adult}</span>
        <button className="optionCounterButton"  onClick={()=>handleOption("adult","i")}>+</button>
    </div>
    </div>

    <div className="optionItem">
        <span className="optionText">Children</span>
        <div className="optionCounter">
        <button 
          disabled={options.children <=0}
        className="optionCounterButton"  onClick={()=>handleOption("children","d")}>-</button>
        <span className="openCounterNumber">{options.children}</span>
        <button className="optionCounterButton" onClick={()=>handleOption("children","i")}>+</button>
    </div>
    </div>
    <div className="optionItem">
        <span className="optionText">Room</span>
        <div className="optionCounter">
        <button 
          disabled={options.room <=1}
        className="optionCounterButton" onClick={()=>handleOption("room","d")}>-</button>
        <span className="openCounterNumber">{options.room}</span>
        <button className="optionCounterButton" onClick={()=>handleOption("room","i")}>+</button>
    </div>
    </div>
   </div>
} */}
            </div>
            <button
              onClick={searchbar}
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
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
