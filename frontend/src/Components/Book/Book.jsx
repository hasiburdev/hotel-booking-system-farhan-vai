import React, { useState } from "react";
import "./book.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Book = ({ tour, avgRating }) => {
  const { title, desc, price, reviews, address, city, distance, maxGroupSize } =
    tour;
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    userId: "01",
    UserEmail: "example@gmail.com",
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
  });
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(credentials);
  };

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(credentials.guestSize) + Number(serviceFee);
  return (
    <div className="booking">
      <div className="booking_top d-flex align-items-center justify-content-between">
        <h3>${price}</h3>

        <span className=" hotel_rating d-flex align-items-center gap-1">
          <AiFillStar className="i" />
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>
      <div className="booking_form">
        <h5>INFORMATION</h5>
        <Form className="booking_info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="number"
              placeholder=" phone Number"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number "
              placeholder="Guest"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>
      <div className="booking_bottom">
        <ListGroup>
          <ListGroupItem className="border-0  px-0">
            <h5 className="d-flex align_item-center gap-1"> ${price}</h5>
            <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0  px-0">
            <h5> Service Charge</h5>
            <span>${serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0  px-0 total">
            <h5> Total</h5>
            <span>${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>
        <Button className="btn primary_btn w-100 mt-4" onClick={handleClick}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Book;
