import React, { useState } from "react";
import axios from "axios";

export default function Login(props) {
  const defaultcredentials = {
    username: "",
    password: "",
  };
  const [credentials, setCredentials] = useState(defaultcredentials);

  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const login = (event) => {
    event.preventDefault();
    //hit the login with post request
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friends");
      })
      .catch((err) => console.log(err));
    //if you success, store the token. if you failed you will return login page
  };

  return (
    <div>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={credentials.name}
          placeholder="Input Username"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          value={credentials.password}
          placeholder="Input Passwords"
          onChange={handleChange}
        />
        <button>Log In</button>
      </form>
    </div>
  );
}
