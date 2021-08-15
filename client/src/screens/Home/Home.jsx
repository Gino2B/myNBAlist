import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <>
      <header className="home-header">
        <img
          src="https://media.giphy.com/media/MB1KZC5SbTo3arEv6k/giphy.gif"
          alt="header-gif"
        />
        <div className="header-info">
          <div className="header-title">DONT MISS A MOMENT</div>
          <div className="header-dash">-</div>
          <div className="header-pitch">
            A new age of fandom is here. Search for your teams favorite players
            and see some of their greatest highlights. Update your profile to
            keep track of your own favorites.
          </div>
          <Link to="/players">
            <button>Browse Players Now</button>
          </Link>
        </div>
      </header>
      <section className="about-section">
        <div className="section-info">
          <div className="section-title">CREATE A SHOWCASE</div>
          <div className="section-bio">
            Got a highlight you just gotta share? Create and add it to a players
            showcase to keep track of all the dope moments you’ve witnessed from
            that player!
          </div>
        </div>
        <img
          src="https://s.hdnux.com/photos/44/07/63/9469165/9/rawImage.jpg"
          alt="section1image"
        />
      </section>
      <section className="about-section">
        <img
          src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2016_15/1494926/ss-160413-kobe-bryant-mn-13.jpg"
          alt="section2image"
        />
        <div className="section-info">
          <div className="section-title">SHARE WITH FRIENDS</div>
          <div className="section-bio">
            Start the conversation. Compare your favorite moments showcase with
            your friends and compare your tastes for what makes the highlight
            reel!
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
