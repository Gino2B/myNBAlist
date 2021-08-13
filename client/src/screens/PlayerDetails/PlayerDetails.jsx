import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { addMomentToPlayer, getOnePlayer } from "../../services/players";
import { createMoment } from "../../services/moments";
import Youtube from "react-youtube";
import { addPlayerToUser } from "../../services/users";

const PlayerDetails = () => {
  const [player, setPlayer] = useState([]);
  const { id } = useParams();
  const [moment, setMoment] = useState({
    player_id: id,
    vid_link: "",
  });
  const [created, setCreated] = useState(false);
  const [addedText, setAddedText] = useState("Add To Favorites");
  useEffect(() => {
    const fetchPlayer = async () => {
      const player = await getOnePlayer(id);
      setPlayer(player);
    };
    fetchPlayer();
  }, [id, created]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMoment({
      ...moment,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createMoment(moment);
    await addMomentToPlayer(moment, id);
    setCreated(!created);
  };

  //COME BACK AND CHANGE THE 1 TO THE CURRENT USER ID
  const addToFavs = async () => {
    await addPlayerToUser({ name: player.name }, 1);
    setAddedText("Added!");
  };

  const opts = {
    height: "390",
    width: "640",
  };

  return (
    <>
      <header>
        <div>
          <img src={`${player.image_url}`} alt={`${player.name} img`}></img>
          <button onClick={addToFavs}>{addedText}</button>
        </div>
        <div>
          <div>{player.name}</div>
          <div>{player.bio}</div>
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
      <form onSubmit={handleSubmit}>
        <input
          className="add-moment"
          placeholder="Video Link:"
          value={moment.vid_link}
          name="vid_link"
          required
          onChange={handleChange}
        />
        <button>Add Moment</button>
      </form>
    </>
  );
};

export default PlayerDetails;
