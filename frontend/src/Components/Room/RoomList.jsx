import React, { useEffect, useState } from "react";
import { Alert, Container, Row, Col } from "reactstrap";
import Data from "../../assets/Data/tours";
import CommonSection from "../CommonSection/CommonSection";
import Navbar from "../Navbar/Navbar";
import Room from "./Room";
import { BASE_URL } from "../../utils/config";

const RoomList = () => {
  const [hotelList, setHotelList] = useState([]);
  const [isError, setIsError] = useState(false);
  //Fetch data here
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/hotels/`);
        const data = await response.json();
        setHotelList(data.data);
        console.log(data);
      } catch (error) {
        console.error(error);
        setIsError(true);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <CommonSection title={"ALL Hotels"} />
      <section>
        <Container>
          <Row>
            {isError && (
              <Alert color="danger" className="text-center">
                Oops! Something went wrong!
              </Alert>
            )}
            {hotelList.length === 0 && !isError && (
              <Alert color="secondary">
                There are currently no hotel entries.
              </Alert>
            )}
            {hotelList?.map((tour, index) => (
              <Col lg="3" className="mb-4" key={index}>
                <Room tour={tour} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default RoomList;
