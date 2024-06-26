import gmailImg from "../assets/email.png";
import linkedInImg from "../assets/linkedin.png";

const Contact = () => {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src={gmailImg}
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:mymailarun32@gmail.com">
              ajaykumarpvtone@gmail.com
            </a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src={linkedInImg}
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p>
            <a
              href="https://www.linkedin.com/in/ajay-kumar-dara/"
              target="_blank"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
