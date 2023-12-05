import React from "react";
import { Container, BackgroundImage, MantineProvider } from "@mantine/core";
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
        
        </div>
      </BackgroundImage>

      <Footerland/>
    </MantineProvider>
  );
}

export default Homeland;
