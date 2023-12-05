import React from "react";
import { Container, BackgroundImage, MantineProvider } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import backgroundImage from "/vite.svg"; // Corrected path to backgroundImage

import Headerland from "./Headerland";
import Footerland from "./Footerland";

function Homeland() {
  return (
    <MantineProvider>
      <BackgroundImage src={backgroundImage} alt="African woman">
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Headerland />
          <main style={{ flex: 1 }}>
            <Container size="xl">
              <div style={{ backgroundColor: "#000435", padding: "20px" }}>
                <div className="lg:flex">
                  <div className="lg:w-1/2 bg-cover bg-right">
                    <div className="p-8 flex flex-col justify-center items-center">
                      <h4 className="text-4xl font-bold text-white">
                        A Society where neighbors come together to create a
                        better, safer, stronger, more inclusive communities.
                      </h4>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 p-8 flex flex-row justify-center items-center">
                    {/* <Footerland /> */}
                  </div>
                </div>
              </div>
            </Container>
          </main>
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
        </div>
      </BackgroundImage>
    </MantineProvider>
  );
}

export default Homeland;
