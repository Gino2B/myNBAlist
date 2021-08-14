import { useParams, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { getOneUser, updateUser } from "../../services/users";

const UserEdit = () => {
  const [user, setUser] = useState({
    name: "",
    image_url: "",
  });
  const [isUpdated, setIsUpdated] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    const fetchUser = async () => {
      const userToEdit = await getOneUser(id);
      setUser(userToEdit);
    };
    fetchUser();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const editedUser = await updateUser(user, id);
    if (editedUser) {
      setIsUpdated(true);
    }
  };

  if (isUpdated) {
    return <Redirect to={`/users/${id}`} />;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="input-user-name"
          placeholder="Name"
          value={user.name}
          name="name"
          required
          autoFocus
          onChange={handleChange}
        />
        <img src={`${user.image_url}`} alt={`${user.name}`} />
        <input
          className="input-user-image"
          placeholder="Image Link"
          value={user.image_url}
          name="image_url"
          required
          autoFocus
          onChange={handleChange}
        />
        <button>Submit Changes</button>
      </form>
    </div>
  );
};

export default UserEdit;
