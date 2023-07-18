import React , {useEffect} from 'react'
import '../Components/Offers/offer.css';
import {MdKingBed,MdBathtub} from 'react-icons/md'
import {FaWifi} from 'react-icons/fa'
import {MdAirportShuttle} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'
import { BsArrowRightShort} from 'react-icons/bs'
//
import img from '../assets/calofonia.webp';
import img1 from '../assets/calofonia.webp';
import img2 from '../assets/calofonia.webp';


import Aos from 'aos';
import 'aos/dist/aos.css';


const Offers =[


    {
        id:5,
        imgSrc:img,
        destTitle:'Windsor Court Hotel',
        location: 'United State',
 price:'$400',
 bednumber:"Double bed"

    },
    {
        id:5,
        imgSrc:img1,
        destTitle:'Windsor Court Hotel',
        location: 'United State',
        price:'$300',
        bednumber:"Single bed"


    },
    {
        id:5,
        imgSrc:img2,
        destTitle:'Windsor Court Hotel',
        location: 'United State',
        price:'$200',
        bednumber:"Double bed (seaview)"

    },
    
]



const Roomsitems = () => {

    useEffect(()=>{
        Aos.init({
            duration:2000
        })
    }, [])
  return (
   <section className='offer container section'>
    <div className="secContainer">
        <div  data-aos="fade-up" data-aos-duration ="2000" className="secIntro">
            <h2 className="secTitle">
                Rooms
            </h2>
        <p>
        By Booking 90 Days Or More In Advance, You Can Get 30% Off On Your Rooms.
        </p>
        </div>
        <div className="mainContent grid">
           {
Offers.map(({id,imgSrc,destTitle,location,price,bednumber})=>{
    return(

        <div  data-aos="fade-up" data-aos-duration ="3000" className="singleOffer">
        <div  className="destImage">
            <img src={imgSrc} alt={destTitle} />
            {/* <span className="discount">
            30% off
            </span> */}
        </div>
        <div className="offerBody">
            <div className="price flex">
                <h4>
                   {price}
                </h4>
                <span className="status">
                    Available
                </span>
            </div>
            <div className="amentities flex">
                <div className="singleAmenity flex">
            <MdKingBed className="icon"/>
            <small>{bednumber}</small>

           </div>
                <div className="singleAmenity flex">
            <MdBathtub className="icon"/>
            <small>1 Bath</small>

           </div>
                <div className="singleAmenity flex">
            <FaWifi className="icon"/>
            <small>Wifi</small>

           </div>
                <div className="singleAmenity flex">
            <MdAirportShuttle className="icon"/>
            <small>Shuttle</small>

           </div>

            </div>
            <div className="location flex">
               < MdLocationOn className="icon"/>
               <small className='location'>
             {location}
               </small>
            </div>
           <button className="btn flex"> View Details  
          < BsArrowRightShort className ="icon"/>
           </button>
        </div>
    </div>
    )
})

           }

        </div>
    </div>
     </section>
  )
}

export default Roomsitems