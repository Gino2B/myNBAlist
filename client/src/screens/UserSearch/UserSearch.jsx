import Search from "../../components/Search.jsx";
import { useState, useEffect } from "react";
import { getAllUsers } from "../../services/users.js";
import { Link } from "react-router-dom";
import "./UserSearch.css";

function UserSearch(props) {
  const [users, setUsers] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getAllUsers();
      setUsers(users);
      setSearchResult(users);
    };
    fetchUsers();
  }, []);
  const handleSearch = (e) => {
    const results = users.filter((user) =>
      user.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResult(results);
  };
  const handleSubmit = (e) => e.preventDefault();

  return (
    <>
      <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
      <div className="user-container">
        {searchResult.map((user) => (
          <div className="user-click" key={user.id}>
            <Link to={`/users/${user.id}`}>
              <div className="users-card">
                <img
                  className="users-cover"
                  src={user.image_url}
                  alt={user.name}
                />
                <div className="users-name">{user.name}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default UserSearch;
