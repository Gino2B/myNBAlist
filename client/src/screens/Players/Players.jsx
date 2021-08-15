import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPlayers } from "../../services/players";
import "./Players.css";

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
    <div className="players-screen-container">
      <div className="players-screen-header">Players</div>
      <div className="player-header">
        <div>Picture</div>
        <div>Name</div>
        <div>Team</div>
        <div>Moments</div>
      </div>
      <div className="players-container">
        {players.map((player, i) => (
          <section key={player.id} className="player-container">
            <Link
              className={i % 2 === 0 ? "even-player" : "odd-player"}
              to={`/players/${player.id}`}
            >
              <img
                src={`${player.image_url}`}
                alt={`${player.name} img`}
                className="player-image"
              ></img>
              <div className="player-name">{player.name}</div>
              <div className="player-team">{player.team}</div>
              <div className="player-moments">{player.moments?.length}</div>
            </Link>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Players;
