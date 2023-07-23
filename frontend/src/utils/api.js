const auth = JSON.parse(localStorage.getItem("authHotelBooking"));
const token = auth?.token;

export const postData = async (url = "", data = {}) => {
  console.log(token);
  const response = await fetch(url, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }),
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ ...data }),
  });
  return response.json();
};

export const getData = async (url = "") => {
  const response = await fetch(url, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }),
  });
  return response.json();
};
