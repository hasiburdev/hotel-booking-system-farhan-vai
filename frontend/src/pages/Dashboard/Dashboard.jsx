import {
  Button,
  Container,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
} from "reactstrap";
import CommonSection from "../../Components/CommonSection/CommonSection";
import { useState } from "react";
import { Link } from "react-router-dom";
import AddHotel from "../../Components/AddHotel/AddHotel";
import BookingList from "../../Components/BookingList/BookingList";
const Dashboard = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => setToggle((prevState) => !prevState);
  return (
    <>
      <CommonSection />
      <section>
        <div>
          <Offcanvas isOpen={toggle} toggle={handleToggle}>
            <OffcanvasHeader toggle={handleToggle}>Dashboard</OffcanvasHeader>
            <OffcanvasBody>
              <Link to="/dashboard/add-hotel">Add New Hotel</Link>
              <br />
              <Link to="/dashboard/my-bookings">My Bookings</Link>
            </OffcanvasBody>
          </Offcanvas>
          <Container className="border p-4 mb-4">
            <Button color="primary" onClick={handleToggle}>
              {"<"}
            </Button>
            {/* <AddHotel /> */}
            <BookingList />
          </Container>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
