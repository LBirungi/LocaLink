import React from "react";
import { Card, Title, Text, Badge,
Button } from "@mantine/core";

const CustomCard = ({ title, text, views, imageUrl }) => {
  const handleLikeClick = () => {
    // Logic to handle like button click
    console.log("Liked!");
  };

  return (
    <Card
      shadow="sm"
      radius="md"
      className="transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
    >
      <Card.Section>
        <img
          src={imageUrl}
          alt={title}
          className="rounded-t-md w-full h-40 object-cover"
        />
        <div className="p-4">
          <Title order={4} className="text-lg font-semibold mb-2">{title}</Title>
          <Text className="text-sm mb-4">{text}</Text>
          <div className="flex justify-between items-center">
            <Badge variant="outline" className="text-xs">Views: {views}</Badge>
            <Button
              onClick={handleLikeClick}
              variant="outline"
              color="blue"
              radius="xl"
              className="text-sm"
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
  const renderCustomCard = (key, title, text, views, imageUrl) => {
    return (
      <CustomCard
        key={key}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <Section title="For You">
            {renderCustomCard(
              "for-you-1",
              "Community call",
              "Residents of Rubaga for children immunisations on 12/12/2023 at the community centre",
              223,
              "/immunisation.webp"
            )}
            {/* Add more CustomCard components for other communities in this section */}
          </Section>

          <Section title="Upcoming Events">
            {renderCustomCard(
              "upcoming-event-1",
              "Santas coming to town",
              "Christmas extravaganza. Sunday, Dec 17",
              415,
              "/santa.jpeg"
            )}
            {renderCustomCard(
              "upcoming-event-2",
              "Home decor & Upholstery Workshop",
              "Saturday, Dec 16",
              171,
              "/curtains.webp"
            )}
            {/* Add more CustomCard components for other events in this section */}
          </Section>

          <Section title="Trending Posts">
            {renderCustomCard(
              "trending-post-1",
              "Flooded Roads",
              "This road is in need of major repair.",
              222324,
              "/road.png"
            )}
            {renderCustomCard(
              "trending-post-2",
              "Stray Dogs",
              "There is an increase in the amount of stray dogs intimidating residents of Mengo.",
              192021,
              "/straydogs.webp"
            )}
            {/* Add more CustomCard components for other posts in this section */}
          </Section>

          <Section title="Nearby Business Recommendations">
            {renderCustomCard(
              "business-recommendation-1",
              "Baker-Coffee shop",
              "Open until 19:30",
              121,
              "/bakery.jpeg"
            )}
            {renderCustomCard(
              "business-recommendation-2",
              "JS Plumbers",
              "Contact us for your major repairs.",
              324,
              "/plumber.jpg"
            )}
            {/* Add more CustomCard components for other business recommendations in this section */}
          </Section>
        </div>
      </div>
    </div>
  );
}

const Section = ({ title, children }) => {
  return (
    <Card shadow="sm" radius="md" className="mb-4">
      <Card.Section>
        <Title order={3} className="text-xl font-semibold mb-4">{title}</Title>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {children}
        </div>
      </Card.Section>
    </Card>
  );
};

export default Main;
