import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getOnePlayer } from "../../services/players";
import Youtube from "react-youtube";

const PlayerDetails = () => {
  const [player, setPlayer] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchPlayer = async () => {
      const player = await getOnePlayer(id);
      setPlayer(player);
    };
    fetchPlayer();
  }, [id]);

  const opts = {
    height: "390",
    width: "640",
  };

  return (
    <>
      <header>
        <div>
          <img src={`${player.image_url}`} alt={`${player.name} img`}></img>
          <button>Add To Favorites</button>
        </div>
        <div>
          <div>{player.bio}</div>
          <div>{player.name}</div>
          <Link to={`/players/${id}/edit`}>
            <button>Edit!</button>
          </Link>
        </div>
      </header>
      <section>
        <div>MOMENTS</div>
        {player.moments?.map((moment) => {
          const id = moment.vid_link.split("?v=")[1].substring(0, 11);
          return (
            <div key={moment.id}>
              <Youtube videoId={id} opts={opts} />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default PlayerDetails;
