import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { addMomentToPlayer, getOnePlayer } from "../../services/players";
import { createMoment } from "../../services/moments";
import Youtube from "react-youtube";
import { addPlayerToUser } from "../../services/users";
import "./PlayerDetails.css";

const PlayerDetails = ({ user }) => {
  const [player, setPlayer] = useState([]);
  const history = useHistory();
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
    const createdMoment = await createMoment(moment);
    await addMomentToPlayer(createdMoment, id);
    setMoment({ player_id: id, vid_link: "" });
    setCreated(!created);
  };

  const addToFavs = async () => {
    if (user) {
      await addPlayerToUser({ name: player.name }, user.id);
      setAddedText("Added!");
    } else {
      history.push("/sign-up");
    }
  };

  const opts = {
    height: "390",
    width: "640",
  };

  return (
    <>
      <header className="detail-info">
        <div className="detail-picture-section">
          <img src={`${player.image_url}`} alt={`${player.name} img`}></img>
          <button onClick={addToFavs}>{addedText}</button>
        </div>
        <div className="detail-info-section">
          <div className="detail-name">{player.name?.toUpperCase()}</div>
          <div className="detail-team">{player.team}</div>
          <div className="detail-bio">{player.bio}</div>
          <Link to={`/players/${id}/edit`}>
            <button>Edit!</button>
          </Link>
        </div>
      </header>
      <section className="details-moments-section">
        <div className="moments-header">MOMENTS</div>
        {player.moments?.map((moment) => {
          const id = moment.vid_link.split("?v=")[1].substring(0, 11);
          return (
            <div key={moment.id} className="youtube-vid">
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
