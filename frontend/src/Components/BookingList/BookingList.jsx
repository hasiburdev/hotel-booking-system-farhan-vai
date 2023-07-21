import { Table } from "reactstrap";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import { BASE_URL } from "../../utils/config";
const BookingList = () => {
  //   const [state, setState] = useState([]);
  const { data, error, loading } = useFetch(`${BASE_URL}/booking`);
  return (
    <>
      <h1 className="text-center my-4">All Booking History</h1>
      <Table responsive>
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Email</th>
            <th>Hotel Name</th>
            <th>Guest Size</th>
            <th>Amount</th>
            <th>Booking Time</th>
            <th>Receipt Url</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((booking, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{booking.userEmail}</td>
                <td>{booking.hotelName}</td>
                <td>{booking.guestSize}</td>
                <td className="bold">${Math.round(booking.amount / 100)}</td>
                <td>{new Date(booking.bookAt).toDateString()}</td>
                <td>
                  <a href={booking.receipt_url}>View Receipt</a>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default BookingList;
