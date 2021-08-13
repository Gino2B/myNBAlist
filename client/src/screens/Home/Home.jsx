import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header>
        {/* <iframe
          width="420"
          height="315"
          src="https://www.youtube.com/embed/QsBuiVBEaLk?autoplay=1&mute=1"
        ></iframe> */}
        <img
          src="https://media.giphy.com/media/MB1KZC5SbTo3arEv6k/giphy.gif"
          alt="header-gif"
        />
        <div>
          <div>DONT MISS A MOMENT</div>
          <div>_</div>
          <div>
            A new age of fandom is here. Search for your teams favorite players
            and see some of their greatest highlights. Even keep track of your
            own favorites.
          </div>
        </div>
        <Link to="/players">
          <button>Browse Players Now</button>
        </Link>
      </header>
      <section>
        <div>CREATE A SHOWCASE</div>
        <div>
          Got a highlight you just gotta share? Create it to a players showcase
          to keep track of all the dope moments you’ve witnessed from that
          player!
        </div>
        <img
          src="https://s.hdnux.com/photos/44/07/63/9469165/9/rawImage.jpg"
          alt="section1image"
        />
      </section>
      <section>
        <img
          src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2016_15/1494926/ss-160413-kobe-bryant-mn-13.jpg"
          alt="section2image"
        />
        <div>SHARE WITH FRIENDS</div>
        <div>
          Start the conversation. Compare your favorite moments showcase with
          your friends and compare your tastes for what makes the highlight
          reel!
        </div>
      </section>
    </>
  );
};

export default Home;
