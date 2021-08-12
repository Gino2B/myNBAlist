import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPlayers } from "../../services/players";

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const allPlayers = await getAllPlayers();
      setPlayers(allPlayers);
    };
    fetchPlayers();
  }, []);

  return (
    <div>
      <div className="player-header">
        <div>Picture</div>
        <div>Name</div>
        <div>Team</div>
        <div>Moments</div>
      </div>
      {players.map((player, i) => (
        <section
          key={player.id}
          className={i % 2 === 0 ? "evenClass" : "oddClass"}
        >
          <Link to={`/player/${player.id}`}>
            <img src={`${player.image_url}`} alt={`${player.name} img`}></img>
            <div>{player.name}</div>
            <div>{player.team}</div>
            <div>{player.moments?.length}</div>
          </Link>
        </section>
      ))}
    </div>
  );
};

export default Players;
