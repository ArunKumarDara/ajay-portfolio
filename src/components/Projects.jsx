import arrow from "../assets/arrow.png";
import ecommerce from "../assets/ecommerce.jpg";
import shopping from "../assets/shopping.jpg";
import saloon from "../assets/saloon.jpg";
import hospital from "../assets/hospital.jpg";
import { Link } from "react-scroll";

const Projects = () => {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img src={saloon} alt="saloon" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Saloon</h2>
            <div className="btn-container">
              <a
                href="https://www.figma.com/design/OKS4qilYWTkSeQeADeLSDV/Billing-%26-Booking-Software?node-id=0-1&m=dev&t=o3bvE6kQkTuqNikc-1"
                target="_blank"
              >
                <button className="btn btn-color-2 project-btn">Figma</button>
              </a>
              <a
                href="https://www.figma.com/design/OKS4qilYWTkSeQeADeLSDV/Billing-%26-Booking-Software?node-id=0-1&m=dev&t=o3bvE6kQkTuqNikc-1"
                target="_blank"
              >
                <button className="btn btn-color-2 project-btn">
                  Live Demo
                </button>
              </a>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img src={hospital} alt="saloon" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Hospital</h2>
            <div className="btn-container">
              <a
                href="https://www.figma.com/design/UzQnraA4tvQF45QvYDVEhj/Appointment-Booking-For-Mythili?node-id=0-1&m=dev&t=HwosRM9baGlv29iz-1"
                target="_blank"
              >
                <button className="btn btn-color-2 project-btn">Figma</button>
              </a>
              <a
                href="https://www.figma.com/design/UzQnraA4tvQF45QvYDVEhj/Appointment-Booking-For-Mythili?node-id=0-1&m=dev&t=HwosRM9baGlv29iz-1"
                target="_blank"
              >
                <button className="btn btn-color-2 project-btn">
                  Live Demo
                </button>
              </a>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={ecommerce}
                alt="Html&Css-Project"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">E-Commerce</h2>
            <div className="btn-container">
              <a
                href="https://www.figma.com/file/Zh3tkZv1aOJBVDjq2cfKmx/Wireframe?type=design&node-id=0-1&mode=design"
                target="_blank"
              >
                <button className="btn btn-color-2 project-btn">Figma</button>
              </a>
              <a
                href="https://www.figma.com/file/Zh3tkZv1aOJBVDjq2cfKmx/Wireframe?type=design&node-id=0-1&mode=design"
                target="_blank"
              >
                <button className="btn btn-color-2 project-btn">
                  Live Demo
                </button>
              </a>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={shopping}
                alt="Javascript-Project"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">
              Shopping Influence
            </h2>
            <div className="btn-container">
              <a
                href="https://www.figma.com/file/B8Pji3SuRAMMfPvkPtbl6s/Fashion-Fluence?type=design&node-id=0-1&mode=design"
                target="_blank"
              >
                <button className="btn btn-color-2 project-btn">Figma</button>
              </a>

              <a
                href="https://www.figma.com/file/B8Pji3SuRAMMfPvkPtbl6s/Fashion-Fluence?type=design&node-id=0-1&mode=design"
                target="_blank"
              >
                <button className="btn btn-color-2 project-btn">
                  Live Demo
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Link
        to="contact"
        smooth={true}
        duration={100}
        style={{ cursor: "pointer" }}
      >
        <img src={arrow} alt="Arrow icon" className="icon arrow" />
      </Link>
    </section>
  );
};

export default Projects;
