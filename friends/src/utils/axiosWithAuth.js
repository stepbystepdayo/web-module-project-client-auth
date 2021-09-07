import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "http://localhost:5000/api/",
    headers: { Authorization: token },
  });
};

// const getFriends = () => {
//   const token = localStorage.getItem("token");
//   axios
//     .get("http://localhost:5000/api/friends", {
//       headers: { Authorization: token },
//     })
//     .then((res) => {
//       console.log(res);
//       setFriends(res.data);
//     })
//     .catch((err) => console.log(err));
// };
