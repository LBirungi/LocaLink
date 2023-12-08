import React from "react";
import "tailwindcss/tailwind.css";

const CustomCard = ({ title, text, imageUrl, link }) => {
  return (
    <div className="shadow-sm rounded-md transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
      <img
        src={imageUrl}
        alt={title}
        className="rounded-t-md w-full h-40 object-cover"
      />
      <div className="p-4">
        <h4 className="text-white text-lg font-semibold mb-2">{title}</h4>

        <p className="text-blue">{text}</p>

        {link && (
          <a href={link} className="text-blue-500 hover:underline">
            Learn More
          </a>
        )}
      </div>
    </div>
  );
};

const Section = ({ title, children }) => {
  return (
    <div className=" bg-black p-4 rounded-md mb-8">
      <h2 className="text-white text-2xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {children}
      </div>
    </div>
  );
};

function Cardsopp() {
  //const customBackgroundColor = "#171717";

  const renderCustomCard = (key, title, text, imageUrl, link, details) => {
    return (
      <CustomCard
        key={key}
        title={title}
        text={text}
        imageUrl={imageUrl}
        link={link}
      >
        <div className="mt-4">
          <p className="text-sm text-gray-600">{details}</p>
        </div>
      </CustomCard>
    );
  };

  return (
    <div>
      <div>
        <h1 className="text-white font-bold">
          Community development is our pride
        </h1>
      </div>

      <div className="min-h-screen flex justify-center items-center">
        <div className="w-full max-w-screen-lg p-4">
          <Section title="Parish Development Model (PDM)">
            {renderCustomCard(
              "PDM-1",
              "The Purpose of PDM",
              "Learn More",
              "/card1.jpg",
              //"/ https://molg.go.ug/parish-development-model/"
            )}
            {renderCustomCard(
              "PDM-2",
              "Wealth Creation",
              "Learn More",
              "/card2.jpg",
              //"/https://www.modva.go.ug/operation-wealth-creation-owc/"
            )}
          </Section>

          <Section title="Job Opportunities">
            {renderCustomCard(
              "job-1",
              "Pharmaceutical workers at Abacus Parenteral Drugs ltd",
              "Learn More",

              "/jobs1.jpg"
            )}
            {renderCustomCard(
              "job-2",
              "Network with ambitious engineers",
              "Learn More",
              "/eng3.jpg"
            )}
          </Section>

          <Section title="Community Skilling">
            {renderCustomCard(
              "skilling-1",
              "Learn basic computing and adult education at Jomanji adult school",
              "Learn More",
              "/computer2.jpg"
            )}
            {renderCustomCard(
              "skilling-2",
              "Empowering the girl child with hair care skills at Nakawa hair learning center",
              "Learn More",
              "/hair.jpg"
            )}
          </Section>

          <Section title="Service Providers">
            {renderCustomCard(
              "Service Provider-1",
              "Catering Services at affordable costs",
              "Learn More",
              "/catering.jpg"
            )}
            {renderCustomCard(
              "Service Provider-2",
              "Awesome Bridal Services",
              "Learn More",
              "/bridal.jpg"
            )}
          </Section>
        </div>
      </div>
    </div>
  );
}

export default Cardsopp;
