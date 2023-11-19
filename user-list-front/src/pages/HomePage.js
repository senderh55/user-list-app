import React, { useState, useEffect, useContext } from "react";
import {
  CircularProgress,
  Box,
  Typography,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { fetchUsers } from "../services/api";
import UserTable from "../components/UserTable";
import UserSearchBar from "../components/UserSearchBar";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { Alert } from "@mui/material";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchField, setSearchField] = useState("name");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const navigate = useNavigate();
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    const fetchUsersAsync = async () => {
      setIsLoading(true);
      const response = await fetchUsers();
      console.log(response);
      if (response.error) {
        setError(response.error);
      } else {
        setUsers(response);
      }
      setIsLoading(false);
    };
    fetchUsersAsync();
  }, []);

  const handleSearchChange = (query) => {
    setSearchQuery(query.toLowerCase());
    setPage(0);
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
    console.log(user);
    navigate(`/user/${user.id}`, { state: { user } });
  };

  const filteredSortedUsers = users
    .filter((user) => user[searchField]?.toLowerCase().includes(searchQuery))
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
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          User Management Dashboard
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Explore and manage user data effectively. Use the table below to sort,
          search, and navigate through user information.
        </Typography>
      </Box>

      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : error ? (
        <Box sx={{ my: 2 }}>
          <Alert severity="error">{error}</Alert>
        </Box>
      ) : (
        <>
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
        </>
      )}
    </Box>
  );
};

export default HomePage;
