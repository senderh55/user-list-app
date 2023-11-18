import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // useNavigate for navigation
import UserDetails from "../components/UserDetails";
import { Box, Typography, Paper, Container, Button } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // Importing Back Arrow Icon

const UserDetailsPage = ({ users }) => {
  const { userId } = useParams();
  const navigate = useNavigate(); // For navigation
  const user = users.find((u) => u.id === parseInt(userId, 10));

  const handleBack = () => {
    navigate(-1); // Navigate back
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 2 }}>
        <Button startIcon={<ArrowBackIcon />} onClick={handleBack}>
          Back
        </Button>
      </Box>
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
