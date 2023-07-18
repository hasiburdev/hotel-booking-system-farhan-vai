import React , {useEffect} from 'react'

import './popular.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
 import {BsArrowLeftShort} from "react-icons/bs";
 import {BsArrowRightShort} from "react-icons/bs";
 import {BsDot} from "react-icons/bs";
  import img1 from '../../assets/Bali.jpg';
  import img2 from '../../assets/calofonia.webp';
  import img3 from '../../assets/img3.webp';
  import img4 from '../../assets/img4.webp';
  import img5 from '../../assets/newyorkwebp.webp';
import { Link } from 'react-router-dom';
  



  const Data =[
    {
        id:1,
        imgSrc:img1,
        destTitle:'Viceroy Chicago',
        location: 'United State',
        address:'Chicago',
        grade:'CULTURAL RELAX'

    },
    {
        id:2,
        imgSrc:img2,
        destTitle:' The Lowell',
        location: 'United State',
        address:'New York',
        grade:'CULTURAL RELAX'

    },
    {
        id:3,
        imgSrc:img3,
        destTitle:'The Langham',
        location: 'United state',
        address:'Chicago',
        grade:'CULTURAL RELAX'

    },
    {
        id:4,
        imgSrc:img4,
        destTitle:'Hotel Emma',
        location: 'United State',
        
        address:'Texas',
        grade:'CULTURAL RELAX'

    },
    // {
    //     id:5,
    //     imgSrc:img5,
    //     destTitle:'Windsor Court Hotel',
    //     location: 'United State',
    //     address:'Chicago',
    //     grade:'CULTURAL RELAX'

    // },
  ]


const Popular = () => {

    useEffect(()=>{
        Aos.init({
            duration:2000
        })
    }, [])
  return (
   
        <section className="popular section container">
            <div className="secContainer">
                <div className="secHeader flex">

                    <div data-aos="fade-right" data-aos-duration ="2500" className="textDiv">
                        <h2 className="secTitle">
                            Popular Hotels
                        </h2>
                        <p> Planning a trip to Poplar? </p>
                    </div>
                    <div data-aos="fade-left" data-aos-duration ="2500" className="iconsDiv flex">

                    <BsArrowLeftShort className="icon leftIcon"/>
                    <BsArrowRightShort className="icon"/>
                    </div>
                </div>
                <div className="mainContent grid">
{
    Data.map (({id,imgSrc,destTitle,location,address,grade})=>{
        return(
<div data-aos="fade-up"  className="singleDestination">
    <div className="destImage">
        <img src={imgSrc} alt="image title" />
        <div className="overlayInfo">
            <h3>{destTitle}</h3>
            <p>{address}</p>
            <BsArrowRightShort className='icon'/>
        </div>
    </div>
    <div className="destFooter">
        <div className="number">
          {id}
        </div>
        <div className="destText flex "> 
        <h6>{location}
            </h6>
            <span className="flex">
                <span className="dot">
                <BsDot className="icon"/>
                </span>
            </span>
            </div>
    </div>
</div>

     ) })
  
}
                </div>
            </div>
        </section>
    
  )
}

export default Popular