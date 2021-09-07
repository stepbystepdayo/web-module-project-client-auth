import React, { useState } from "react";

const defaultValues = {
  name: "",
  age: "",
  email: "",
};

const FriendsForm = (props) => {
  const [value, setValue] = useState(defaultValues);
  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
    props.addFriend(value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={value.name}
          onChange={handleChange}
          placeholder="Your name"
        />
        <input
          type="text"
          placeholder="age"
          name="age"
          value={value.age}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={value.email}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FriendsForm;
