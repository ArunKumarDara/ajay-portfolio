import linkedInImage from "../assets/linkedin.png";
import profilePic from "../assets/profile-pic-3.jpg";
import uiUxDev from "../assets/AjayUiUxUpdated.pdf";

import { Link } from "react-scroll";

const Profile = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img
          src={profilePic}
          alt="Ajay profile picture"
          className="profile-pic"
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I&apos;m</p>
        <h1 className="title">Ajay Kumar</h1>
        <p className="section__text__p2">UI/UX Designer</p>
        <div className="btn-container">
          <a href={uiUxDev} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-color-2">View Ressume</button>
          </a>
          <Link
            to="contact"
            smooth={true}
            duration={100}
            style={{ cursor: "pointer" }}
          >
            <button className="btn btn-color-1">Contact me</button>
          </Link>
        </div>
        <div id="socials-container">
          <a
            href="https://www.linkedin.com/in/ajay-kumar-dara/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedInImage}
              alt="My LinkedIn profile"
              className="icon"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
