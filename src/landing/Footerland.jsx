import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footerland(){
    return(
        <footer>
        <div
          style={{
            backgroundColor: "#333",
            color: "#fff",
            padding: "20px",
            textAlign: "center",
          }}
        >
          This is the footer. Customize this section according to your
          requirements.
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
    )
        
    
}

export default Footerland;