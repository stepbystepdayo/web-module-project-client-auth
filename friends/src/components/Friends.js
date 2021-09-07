import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import friendsData from "../data";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Friends = (props) => {
  // const { friendsData } = props;
  const [friends, setFriends] = useState(friendsData);

  useEffect(() => {
    getFriends();
  }, []);

  const getFriends = () => {
    const token = localStorage.getItem("token");
    axiosWithAuth()
      .get("friends")
      .then((res) => {
        console.log(res);
        setFriends(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>hahah</h1>
      <div>
        {friends.map((friend) => (
          <Container key={friend.id}>
            <h2>My Name is {friend.name}</h2>
            <h2>{friend.age} years old</h2>
            <h2>My email is {friend.email}</h2>
          </Container>
        ))}
      </div>
    </div>
  );
};

export default Friends;

const Container = styled.div`
  margin: 5rem auto;
`;
