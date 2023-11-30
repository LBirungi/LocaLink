import React from "react";
import { AppShell, Card, Title, Text, Badge, Button } from "@mantine/core";

function Main() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-screen-lg p-4">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          <Section title="Nearby Communities">
            {/* CustomCard components for Nearby Communities */}
            {/* ... */}
          </Section>

          <Section title="Other Communities">
            {/* Additional CustomCard components for Other Communities */}
            <CustomCard
              title="Community 5"
              text="Some text describing Community 5."
              views={131415}
              imageUrl="https://via.placeholder.com/50x50"
            />
            <CustomCard
              title="Community 6"
              text="Some text describing Community 6."
              views={161718}
              imageUrl="https://via.placeholder.com/50x50"
            />
            {/* Add more CustomCard components for other communities in this section */}
          </Section>

          <Section title="Trending Posts">
            {/* Additional CustomCard components for More Communities */}

            <CustomCard
              title="Flooded Roads"
              text="This road is in need of major repair ."
              views={222324}
              imageUrl="/road.png"
            />
            <CustomCard
              title="Stray Dogs"
              text="there is an increase in the amount of  stray dogs intimidating residemts of Mengo"
              views={192021}
              imageUrl="/straydogs.webp"
            />
            {/* Add more CustomCard components for other communities in this section */}
          </Section>

          <Section title="Additional Communities">
            {/* Additional CustomCard components for Additional Communities */}
            <CustomCard
              title="Community 9"
              text="Some text describing Community 9."
              views={252627}
              imageUrl="https://via.placeholder.com/50x50"
            />
            {/* Add more CustomCard components for other communities in this section */}
          </Section>

          <Section title="Trending Posts">
            {/* Additional CustomCard components for More Communities */}
            <CustomCard
              title="Stray Dogs"
              text="there is an increase in the amount of  stray dogs intimidating residemts of Mengo"
              views={192021}
              imageUrl="/straydogs.webp"
            />
            <CustomCard
              title="Flooded Roads"
              text="This road is in need of major repair ."
              views={222324}
              imageUrl="/road.png"
            />
            {/* Add more CustomCard components for other communities in this section */}
          </Section>

          <Section title="Additional Communities">
            {/* Additional CustomCard components for Additional Communities */}
            <CustomCard
              title="Community 9"
              text="Some text describing Community 9."
              views={252627}
              imageUrl="https://via.placeholder.com/50x50"
            />
            <CustomCard
              title="Community 10"
              text="Some text describing Community 10."
              views={282930}
              imageUrl="https://via.placeholder.com/50x50"
            />
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-4 p-4 rounded-lg">
          {children}
        </div>
      </Card.Section>
    </Card>
  );
};

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

export default Main;
