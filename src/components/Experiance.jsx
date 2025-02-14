import checkMark from "../assets/checkmark.png";
import arrow from "../assets/arrow.png";
import { Link } from "react-scroll";

const Experiance = () => {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Skills</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Skills</h2>
            <div className="article-container">
              <article>
                <img src={checkMark} alt="Experience icon" className="icon" />
                <div>
                  <h3>User Research</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkMark} alt="Experience icon" className="icon" />
                <div>
                  <h3>Prototyping</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkMark} alt="Experience icon" className="icon" />
                <div>
                  <h3>Visual Design</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkMark} alt="Experience icon" className="icon" />
                <div>
                  <h3>Wire Framing</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkMark} alt="Experience icon" className="icon" />
                <div>
                  <h3>User Flows</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img src={checkMark} alt="Experience icon" className="icon" />
                <div>
                  <h3>Design Thinking</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Tools</h2>
            <div className="article-container">
              <article>
                <img src={checkMark} alt="Experience icon" className="icon" />
                <div>
                  <h3>Figma</h3>
                  <p>Advanced</p>
                </div>
              </article>
              <article>
                <img src={checkMark} alt="Experience icon" className="icon" />
                <div>
                  <h3>Adobe XD</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkMark} alt="Experience icon" className="icon" />
                <div>
                  <h3>Adobe After Effects</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkMark} alt="Experience icon" className="icon" />
                <div>
                  <h3>Adobe Illustrator</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkMark} alt="Experience icon" className="icon" />
                <div>
                  <h3>Adobe Photoshop</h3>
                  <p>Advanced</p>
                </div>
              </article>
              <article>
                <img src={checkMark} alt="Experience icon" className="icon" />
                <div>
                  <h3>Canva</h3>
                  <p>Advanced</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <Link
        to="projects"
        smooth={true}
        duration={100}
        style={{ cursor: "pointer" }}
      >
        <img src={arrow} alt="Arrow icon" className="icon arrow" />
      </Link>
    </section>
  );
};

export default Experiance;
