import React from "react";
import { Card, CardContent, Typography, CardMedia, Grid } from "@mui/material";

const UserDetails = ({ user }) => {
  const renderDetail = (key, value) => (
    <Typography variant="body1" key={key} sx={{ marginBottom: 1 }}>
      <strong>{`${key.charAt(0).toUpperCase() + key.slice(1)}:`}</strong>{" "}
      {value}
    </Typography>
  );

  return (
    <Card
      sx={{ maxWidth: 800, margin: "auto", overflow: "visible", boxShadow: 3 }}
    >
      <Grid container spacing={2}>
        {/* Image section */}
        {user.picture && (
          <Grid item xs={12} md={4} lg={3}>
            <CardMedia
              component="img"
              image={user.picture}
              alt={`Image of ${user.name}`}
              sx={{
                width: 150,
                height: 150,
                borderRadius: "50%",
                objectFit: "cover",
                mx: "auto",
                my: 2,
              }}
            />
          </Grid>
        )}

        {/* Details section */}
        <Grid item xs={12} md={8} lg={9}>
          <CardContent>
            {Object.entries(user).map(([key, value]) => {
              if (key === "id" || key === "picture") return null; // Exclude 'id' and 'picture' from details
              return renderDetail(key, value);
            })}
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default UserDetails;
