import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { deletePlayerFromUser, getOneUser } from "../../services/users";
import "./UserProfile.css";

const UserProfile = () => {
  const [user, setUser] = useState([]);
  const [removed, setRemoved] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const fetchUser = async () => {
      const foundUser = await getOneUser(id);
      setUser(foundUser);
    };
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
        <Link to={`/users/${id}/edit`}>
          <button>Edit Profile</button>
        </Link>
      </div>
      <div className="user-favorites">
        <div className="fav-header">Favorite Players</div>
        {user.players?.map((player) => (
          <section key={player.id} className="player-favorites">
            <img src={`${player.image_url}`} alt={`${player.name}`} />
            <div>{player.name}</div>
            <button onClick={() => handleRemove(player.id)}>Remove</button>
          </section>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
