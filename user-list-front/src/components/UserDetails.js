import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const UserDetails = ({ user }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{user.name}</Typography>
        <Typography variant="body1">Email: {user.email}</Typography>
        <Typography variant="body1">Age: {user.age}</Typography>
        {/* Display other user details here */}
      </CardContent>
    </Card>
  );
};

export default UserDetails;
