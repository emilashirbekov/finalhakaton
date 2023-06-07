// import { error } from "console";
// import { url } from "inspector";

export const API_AUTH = "http://34.173.115.25/api/v1/account";

export const API_ORDERS = "http://34.173.115.25/api/v1/products";

// export const fetchStripe = () => {
//   fetch("/create-session", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       items: [{ id: 1, quantity: 3 }],
//     }),
//   })
//     .then((res) => {
//       if (res.ok) return res.json();
//       return res.json().then((json) => Promise.reject(json));
//     })
//     .then(({ url }) => {
//       window.location = url;
//     })
//     .catch((e) => {
//       console.error(e.error);
//     });
// };
