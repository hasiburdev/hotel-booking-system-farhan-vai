import { useState } from "react";

const useAuth = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authHotelBooking"))
  );
  console.log(user);
  const updateUser = (data) => {
    localStorage.setItem("authHotelBooking", JSON.stringify(data));
    setUser(data);
  };
  return {
    user,
    // setUser,
    updateUser,
  };
};

export default useAuth;
