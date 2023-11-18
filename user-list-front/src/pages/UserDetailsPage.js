import React from "react";
import { useParams } from "react-router-dom";
import UserDetails from "../components/UserDetails";

const UserDetailsPage = ({ users }) => {
  const { userId } = useParams();
  const user = users.find((u) => u.id === parseInt(userId, 10));

  return (
    <div>{user ? <UserDetails user={user} /> : <p>User not found</p>}</div>
  );
};

export default UserDetailsPage;
