import React, { useEffect, useState } from "react";
import { Alert, Container, Row, Col } from "reactstrap";
import Data from "../../assets/Data/tours";
import CommonSection from "../CommonSection/CommonSection";
import Navbar from "../Navbar/Navbar";
import Room from "./Room";
import { BASE_URL } from "../../utils/config";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const RoomList = () => {
  const searchParams = useSearchParams();
  console.log(searchParams[0].toString());

  //Fetch data here
  const { data, error, loading } = useFetch(
    `${BASE_URL}/hotels?${searchParams[0].toString()}`
  );

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         `${BASE_URL}/hotels?${searchParams[0].toString()}`
  //       );
  //       const data = await response.json();
  //       setHotelList(data.data);
  //       console.log(data);
  //     } catch (error) {
  //       console.error(error);
  //       setIsError(true);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <Navbar />
      <CommonSection title={"ALL Hotels"} />
      <section>
        <Container>
          <Row>
            {error && (
              <Alert color="danger" className="text-center">
                Oops! Something went wrong!
              </Alert>
            )}
            {data?.length === 0 && !error && !loading && (
              <Alert color="secondary">
                There are currently no hotel entries.
              </Alert>
            )}
            {loading && !error && (
              <Alert color="secondary" className="text-center">
                Loading hotel list...
              </Alert>
            )}
            {data &&
              data?.map((tour, index) => (
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
