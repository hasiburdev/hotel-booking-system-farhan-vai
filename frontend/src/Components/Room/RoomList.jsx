import React from 'react'
import { Container, Row,Col } from 'reactstrap';
import Data from "../../assets/Data/tours"
import CommonSection from '../CommonSection copy/CommonSection';
import Navbar from '../Navbar/Navbar';
import Room from './Room';

const RoomList = () => {
  return<>
  <Navbar/>
  <CommonSection  title={"ALL Hotels"}/>
  <section>
    <Container>
        <Row>
        {
  Data?.map(
    tour =>(
        <Col lg="3" className='mb-4' key={tour.id}> 
<Room tour={tour}/>
        </Col>
    )
  )
    }
        </Row>
    </Container>
  </section>
  </>
}

export default RoomList