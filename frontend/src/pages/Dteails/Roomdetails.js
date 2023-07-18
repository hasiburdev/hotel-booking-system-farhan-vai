import React , {useRef,useState}from 'react'
import "./Details.css"
import{Container,Row,Col, Form,ListGroup, Navbar} from "reactstrap";
import { useParams } from 'react-router-dom';
import roomData from "../../assets/Data/rooms"
import calcuateAvgRating from '../../utils/avgRating';
import {AiFillStar} from "react-icons/ai";
import {FaMapMarkerAlt} from "react-icons/fa";
import {BiDollar} from "react-icons/bi";
import {BiGroup} from "react-icons/bi";
import  avater   from "../../assets/Bali.jpg";
import Book from '../../Components/Book/Book';







const Details = () => {
    const{id} =useParams();
    const reviewMsgRef = useRef('')


    const[hotelRating,setHotelRating] =useState(null)

    const roomdata = roomData.find (roomdata => roomdata.id === id);
     
     const {photo,title,desc,price,reviews,address,city,maxGroupSize}= roomData;



     const {totalRating,avgRating} =calcuateAvgRating(reviews);

     const options ={
        day: "numeric", month:"long" , year:"numeric"
     };

     const submitHandler = e=>{
e.preventDefault()
const reviewText = reviewMsgRef.current.value;
alert (`${reviewText}, ${hotelRating}`);
     }
  return <>
 
  <section>
 
    <Container>
        <Row>
            <Col lg="8">
                <div className="detail_content">
                    <img src={photo} alt="" />
                    <div className="details_info">
                        <h2>{title}</h2>
                        <div className="d-flex align-items-center gap-5">
                            <span className=" hotel_rating d-flex align-items-center gap-1">

                           < AiFillStar className='i'  style={{color:"var(--secondaryColor)"}}/>{avgRating === 0 ? null: avgRating}
                                {
                                    totalRating === 0? ('NotRated' ): (<span> ({reviews?.length})</span>
                                    
)}  <span><FaMapMarkerAlt/> {address} </span>
                            </span>
                          

                        </div>
                        <div className="extra_details">
                            <span> <FaMapMarkerAlt/> {city} </span>
                            <span> <BiDollar/> {price} </span>
                            <span> <BiGroup/> {maxGroupSize} </span>
                        </div>
                        <h5>Description</h5>
                        <p>{desc}</p>
                    </div>
                    <div className="hotel_reviews mt-4">
                        <h4> Reviews ({reviews?.length} reviews)</h4>
                        <Form onSubmit={submitHandler}>
                            <div className="d-flex align-items-center gap-3 mb-4 rating_group">
                                <span onClick={()=> setHotelRating(1)}  > <AiFillStar/></span>
                                <span  onClick={()=> setHotelRating(2)}> <AiFillStar/></span>
                                <span  onClick={()=> setHotelRating(3)}> <AiFillStar/></span>
                                <span  onClick={()=> setHotelRating(4)}> <AiFillStar/></span>
                                <span  onClick={()=> setHotelRating(5)}> <AiFillStar/></span>
                            </div>
                            <div className="review_input">
                                <input type="text"  ref={reviewMsgRef} placeholder='Share your thoughts' required />
                                <button className="btn primary_btn text-white "type="submit">submit</button>
                            </div>
                        </Form>
<ListGroup className="user_reviews">

    { reviews?.map(review =>(
        <div className="review_item">
            <img src={avater} alt="" />
            <div className="w-100">
                <div className="d-flex align-items-center justify-content-between">
                    <div> <h5>Masud</h5></div>
                    <p> { 
                    new Date("06-18-2023").toLocaleDateString ("en-US", options
                    )
                    }</p>
                     </div>
                     <span className="d-flex align-items-center">
                        5 <AiFillStar/>
                     </span>
            </div>
            <h6> amazing hotel </h6>
        </div>
    ))
    }
</ListGroup>

                    </div>
                </div>
            </Col>
            <Col lg='4'>
 <Book tour= {roomData} avgRating ={avgRating}/>
            </Col>
        </Row>
    </Container>
  </section>
  </>
}

export default Details