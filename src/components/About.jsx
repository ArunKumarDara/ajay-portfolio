import educationImg from "../assets/education.png";
import arrow from "../assets/arrow.png";
import developerImg from "../assets/developer.jpg";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src={developerImg} alt="Profile picture" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={educationImg} alt="Experience icon" className="icon" />
              <h3>Schooling</h3>
              <p>
                A.P.S.W.R.School , Naidupet
                <br />
                Srinivasa Jr College , Vidhyanagar
              </p>
            </div>
            <div className="details-container">
              <img src={educationImg} alt="Education icon" className="icon" />
              <h3>Graduation</h3>
              <p>
                B.Tech. Bachelors Degree, N.B.K.R IST
                <br />
                Mechanical Engineering
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Aspiring to evolve into a disciplined product designer
              specializing in user interface and experience design, equipped
              with foundational skills and proficient in essential tools for the
              role.
            </p>
          </div>
        </div>
      </div>
      <Link
        to="experience"
        smooth={true}
        duration={100}
        style={{ cursor: "pointer" }}
      >
        <img src={arrow} alt="Arrow icon" className="icon arrow" />
      </Link>
    </section>
  );
};

export default About;
