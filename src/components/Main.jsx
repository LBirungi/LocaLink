import React from "react";
import { AppShell, Card, Title, Text, Badge, Button } from "@mantine/core";

const CustomCard = ({ title, text, views, imageUrl }) => {
  const handleLikeClick = () => {
    // Logic to handle like button click
    console.log("Liked!");
  };

  return (
    <Card
      shadow="sm"
      radius="sm"
      className="transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
    >
      <Card.Section>
        <img
          src={imageUrl}
          alt={title}
          className="rounded-t-md w-full h-32 object-cover"
        />
        <div className="p-4">
          <Title order={4}>{title}</Title>
          <Text>{text}</Text>
          <div className="flex justify-between items-center mt-3">
            <Badge variant="outline">Views: {views}</Badge>
            <Button
              onClick={handleLikeClick}
              variant="outline"
              color="blue"
              radius="xl"
            >
              Like
            </Button>
          </div>
        </div>
      </Card.Section>
    </Card>
  );
};

function Main() {
  const renderCustomCard = (title, text, views, imageUrl) => {
    return (
      <CustomCard
        title={title}
        text={text}
        views={views}
        imageUrl={imageUrl}
      />
    );
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-screen-lg p-4">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          {/* For You Section */}
        
          <Section title="For You">
            {renderCustomCard(
              "Community call",
              "Residents of Rubaga for children immunisations on 12/12/2023 at the community centre",
              223,
              "/immunisation.webp"
            )}
            {/* Add more CustomCard components for other communities in this section */}
          </Section>

          {/* Upcoming Events Section */}
          <Section title="Upcoming Events">
            {renderCustomCard(
              "Santas coming to town",
              "Christmas extravaganza. Sunday, Dec 17",
              415,
              "/santa.jpeg"
            )}
            {renderCustomCard(
              "Home decor & Upholstery Workshop",
              "Saturday, Dec 16",
              171,
              "/curtains.webp"
            )}
            {/* Add more CustomCard components for other communities in this section */}
          </Section>

          {/* Trending Posts Section */}
          <Section title="Trending Posts">
            {renderCustomCard(
              "Flooded Roads",
              "This road is in need of major repair.",
              222324,
              "/road.png"
            )}
            {renderCustomCard(
              "Stray Dogs",
              "There is an increase in the amount of stray dogs intimidating residents of Mengo.",
              192021,
              "/straydogs.webp"
            )}
            {/* Add more CustomCard components for other communities in this section */}
          </Section>

          {/* Additional Trending Posts Section */}
          <Section title="Nearby Business Recommendations">
            {renderCustomCard(
              " Baker-Coffee shop",
              " Open until 19:30",
              121,
              "/bakery.jpeg"
            )}
            {renderCustomCard(
              "JS Plumbers",
              "contact us for your major repairs.",
             324,
              "/plumber.jpg"
            )}
            {/* Add more CustomCard components for other communities in this section */}
          </Section>
        </div>
      </div>
    </div>
  );
}

const Section = ({ title, children }) => {
  return (
    <Card shadow="sm" radius="md" className="mb-4 w-full">
      <Card.Section>
        <Title order={3}>{title}</Title>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-4 p-4 rounded-lg">
          {children}
        </div>
      </Card.Section>
    </Card>
  );
};

export default Main;
