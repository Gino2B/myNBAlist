import { useParams, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { getOnePlayer, updatePlayer } from "../../services/players";
import "./PlayerEdit.css";

const PlayerEdit = () => {
  const { id } = useParams();
  const [isUpdated, setIsUpdated] = useState(false);
  const [player, setPlayer] = useState({
    name: "",
    bio: "",
    team: "",
    image_url: "",
  });

  useEffect(() => {
    const fetchPlayer = async () => {
      const playerToEdit = await getOnePlayer(id);
      setPlayer(playerToEdit);
    };
    fetchPlayer();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPlayer({
      ...player,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const editedPlayer = await updatePlayer(player, id);
    if (editedPlayer) {
      setIsUpdated(true);
    }
  };

  if (isUpdated) {
    return <Redirect to={`/players/${id}`} />;
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="edit-info">
        <div className="edit-picture">
          <img src={`${player.image_url}`} alt={`${player.name}`} />
          <input
            className="input-image"
            placeholder="Image Link"
            value={player.image_url}
            name="image_url"
            required
            autoFocus
            onChange={handleChange}
          />
        </div>
        <div className="edit-info-section">
          <input
            className="input-name"
            placeholder="Name"
            value={player.name}
            name="name"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className="input-team"
            placeholder="Team"
            value={player.team}
            name="team"
            required
            autoFocus
            onChange={handleChange}
          />
          <textarea
            className="input-bio"
            placeholder="Bio"
            value={player.bio}
            name="bio"
            required
            autoFocus
            onChange={handleChange}
          />
          <button>Changes</button>
        </div>
      </form>
    </div>
  );
};

export default PlayerEdit;
