


export const postData = async (url = "", data = {}) => {


  const auth = JSON.parse(localStorage.getItem("authHotelBooking"));
  const token = auth?.token;

  console.log(token)
  const response = await fetch(url, {
    method: "POST",
    // mode: "cors",
    // cache: "no-cache",
    // credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({...data, token}),
  });
  return response.json();
};
