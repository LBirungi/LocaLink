import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Bold } from "tabler-icons-react";

function Footeropp() {
  return (
    <>
      <footer>
        <div
          style={{
            backgroundColor: "#000000",
            color: "#fff",
            padding: "20px",
            textAlign: "center",
            font: "Bold",
          }}
        >
          Enjoy your Experience with LocaLink
          <section id="contact">
            <div id="contact-title">
              <h1>Connect With Me</h1>
            </div>
            <div id="contacticons">
              <a href="#" className="fa fa-facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="fa fa-twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="fa fa-linkedin-square">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#" className="fa fa-github">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" className="fa fa-whatsapp">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a href="#" className="glyphicon glyphicon-envelope">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
            <div>
              <h4>Copyright ©2023, Localink</h4>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
}
export default Footeropp;
g
