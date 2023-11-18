import React from "react";
import { useParams } from "react-router-dom";
import UserDetails from "../components/UserDetails";
import { Box, Typography, Paper, Container } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const UserDetailsPage = ({ users }) => {
  const { userId } = useParams();
  const user = users.find((u) => u.id === parseInt(userId, 10));

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      {user ? (
        <UserDetails user={user} />
      ) : (
        <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
          <Box
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ErrorOutlineIcon sx={{ fontSize: 60, color: "error.main" }} />
            <Typography variant="h5" sx={{ mt: 2 }}>
              User Not Found
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              The user you are looking for does not exist or may have been
              removed.
            </Typography>
          </Box>
        </Paper>
      )}
    </Container>
  );
};

export default UserDetailsPage;
