import { useState } from "react";
import { Redirect } from "react-router-dom";
import { createPlayer } from "../../services/players";

const PlayerAdd = () => {
  const [isCreated, setCreated] = useState(false);
  const [player, setPlayer] = useState({
    name: "",
    bio: "",
    team: "",
    image_url: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPlayer({
      ...player,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const createdPlayer = await createPlayer(player);
    if (createdPlayer) {
      setCreated(true);
    }
  };

  if (isCreated) {
    return <Redirect to={`/players`} />;
  }

  return (
    <div>
      <div>Add Player</div>
      <form onSubmit={handleSubmit}>
        <input
          className="add-image"
          placeholder="Image Link"
          value={player.image_url}
          name="image_url"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="add-name"
          placeholder="Name"
          value={player.name}
          name="name"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="add-bio"
          placeholder="Bio"
          value={player.bio}
          name="bio"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="add-team"
          placeholder="Team"
          value={player.team}
          name="team"
          required
          autoFocus
          onChange={handleChange}
        />
        <button>Add Player</button>
      </form>
    </div>
  );
};

export default PlayerAdd;
