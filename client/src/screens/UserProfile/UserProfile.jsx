import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { deletePlayerFromUser, getOneUser, verify } from "../../services/users";
import "./UserProfile.css";

const UserProfile = () => {
  const [user, setUser] = useState([]);
  const [activeUser, setActiveUser] = useState([]);
  const [removed, setRemoved] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const fetchUser = async () => {
      const foundUser = await getOneUser(id);
      setUser(foundUser);
    };
    const reverify = async () => {
      const currentUser = await verify();
      currentUser ? setActiveUser(currentUser) : setUser(null);
    };
    reverify();
    fetchUser();
  }, [removed, id]);
  const handleRemove = async (playerID) => {
    await deletePlayerFromUser(playerID, id);
    setRemoved(!removed);
  };

  return (
    <div className="user-profile-container">
      <div className="user-info">
        <div>{user.name}'s Profile</div>
        <img src={`${user.image_url}`} alt={`${user.name}`} />
        {activeUser.id === Number(id) && (
          <Link to={`/users/${id}/edit`}>
            <button>Edit Profile</button>
          </Link>
        )}
      </div>
      <div className="user-favorites">
        <div className="fav-header">Favorite Players</div>
        {user.players?.map((player) => (
          <section key={player.id} className="player-favorites">
            <img src={`${player.image_url}`} alt={`${player.name}`} />
            <div>{player.name}</div>
            {activeUser.id === Number(id) && (
              <button onClick={() => handleRemove(player.id)}>Remove</button>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
