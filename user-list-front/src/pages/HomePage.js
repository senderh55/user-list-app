import React, { useState } from "react";
import UserTable from "../components/UserTable";
import UserSearchBar from "../components/UserSearchBar"; // Import the updated search component
import { useNavigate } from "react-router-dom";

const HomePage = ({ initialUsers }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchField, setSearchField] = useState("name"); // State to track the search field
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (query) => {
    setSearchQuery(query);
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
    <div>
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
    </div>
  );
};

export default HomePage;
