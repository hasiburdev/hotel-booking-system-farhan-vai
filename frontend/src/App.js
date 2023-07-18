import React from "react";
import "./App.css";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Offer from "./Components/Offers/Offer";
import Popular from "./Components/Popular/Popular";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/Dteails/Details";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Book from "./Components/Book/Book";
import Room from "./Components/Room/Room";
import RoomList from "./Components/Room/RoomList";
import Roomsitems from "./Rooms/Roomsitems";
import SerachResultList from "./pages/SerachResultList";
import SearchItem from "./Components/searchItem/SearchItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/book" element={<Book />} />
        <Route path="/room" element={<Room />} />
        <Route path="/hotelList" element={<RoomList />} />
        {/* <Route path="/hotels/:id" element={<Hotel/>}/> */}
        <Route path="/room/:id" element={<Details />} />
        <Route path="/roomList" element={<Roomsitems />} />
        <Route path="/hotels/search" element={<SerachResultList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
