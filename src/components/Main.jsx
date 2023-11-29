import React from "react";
import { AppShell, Card, Title, Text, Badge, Button } from '@mantine/core';

function Main() {
  return (
    <div style={{ maxHeight: 'calc(100vh - 100px)', overflowY: 'auto' }}>
      <AppShell.Main className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
        <Section title="Nearby Communities">
          <CustomCard
            title="Community 1"
            text="Some text describing Community 1."
            views={123}
            imageUrl="https://via.placeholder.com/50x50"
          />
          <CustomCard
            title="Community 2"
            text="Some text describing Community 2."
            views={456}
            imageUrl="https://via.placeholder.com/50x50"
          />
        </Section>

        <Section title="Community Updates">
          <CustomCard
            title="Update 1"
            text="Content of the first update."
            views={789}
            imageUrl="https://via.placeholder.com/150x100"
          />
          <CustomCard
            title="Update 2"
            text="Content of the second update."
            views={101}
            imageUrl="https://via.placeholder.com/150x100"
          />
        </Section>

        <Section title="Trending Posts">
          <CustomCard
            title="Trending Post 1"
            text="Content of the first trending post."
            views={222}
            imageUrl="https://via.placeholder.com/150x100"
          />
          <CustomCard
            title="Trending Post 2"
            text="Content of the second trending post."
            views={333}
            imageUrl="https://via.placeholder.com/50x50"
          />
        </Section>
      </AppShell.Main>
    </div>
  );
}

// Section Component
const Section = ({ title, children }) => {
  return (
    <Card shadow="sm" radius="md" className="mb-4">
      <Card.Section>
        <Title order={3}>{title}</Title>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {children}
        </div>
      </Card.Section>
    </Card>
  );
};

// Custom Card Component
const CustomCard = ({ title, text, views, imageUrl }) => {
  const handleLikeClick = () => {
    // Logic to handle like button click
    console.log('Liked!');
  };

  return (
    <Card shadow="sm" radius="sm">
      <Card.Section>
        <img src={imageUrl} alt={title} className="rounded-t-md w-full h-32 object-cover" />
        <div className="p-4">
          <Title order={4}>{title}</Title>
          <Text>{text}</Text>
          <div className="flex justify-between items-center mt-3">
            <div>
              <Badge variant="outline">Views: {views}</Badge>
            </div>
            <div>
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
        </div>
      </Card.Section>
    </Card>
  );
};

export default Main;
