import React, { useState } from "react";
import UserTable from "../components/UserTable";
import UserSearchBar from "../components/UserSearchBar"; // Import the updated search component
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FormControlLabel, Switch } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const HomePage = ({ initialUsers }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchField, setSearchField] = useState("name"); // State to track the search field
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const navigate = useNavigate();
  const themeContext = useContext(ThemeContext);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setPage(0); // Reset to the first page on new search
  };

  const handleSearchFieldChange = (event) => {
    setSearchField(event.target.value);
  };

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleRowClick = (user) => {
    navigate(`/user/${user.id}`);
  };

  // Filter and sort the users based on search query and selected field
  const filteredSortedUsers = initialUsers
    .filter((user) =>
      searchField === "name"
        ? user.name.toLowerCase().includes(searchQuery)
        : user.email.toLowerCase().includes(searchQuery)
    )
    .sort((a, b) => {
      if (orderBy === "age") {
        return order === "asc" ? a.age - b.age : b.age - a.age;
      } else if (orderBy === "name") {
        return order === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
      return 0;
    });

  return (
    <Box sx={{ p: 3 }}>
      {/* Center-aligned Title and Description */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontFamily: "'Roboto Slab', serif", // Custom font
            fontWeight: "bold",
          }}
        >
          User Management Dashboard
        </Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          sx={{
            fontFamily: "'Roboto', sans-serif", // Complementary font for the subtitle
          }}
        >
          Explore and manage user data effectively. Use the table below to sort,
          search, and navigate through user information.
        </Typography>
      </Box>
      {/* Padding around the main content */}
      <Box sx={{ mb: 2 }}>
        {" "}
        {/* Margin for the Dark Mode switch */}
        <FormControlLabel
          control={
            <Switch
              checked={themeContext.mode === "dark"}
              onChange={themeContext.toggleTheme}
            />
          }
          label="Dark Mode"
        />
        <UserSearchBar
          onSearchChange={handleSearchChange}
          onFieldChange={handleSearchFieldChange}
          searchField={searchField}
        />
      </Box>
      <UserTable
        users={filteredSortedUsers}
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={(event, newPage) => setPage(newPage)}
        handleChangeRowsPerPage={(event) =>
          setRowsPerPage(parseInt(event.target.value, 10))
        }
        handleSort={handleSort}
        order={order}
        orderBy={orderBy}
        handleRowClick={handleRowClick}
      />
    </Box>
  );
};

export default HomePage;
