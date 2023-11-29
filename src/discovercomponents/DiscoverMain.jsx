import React from "react";
import { AppShell, BackgroundImage, Center, Text } from "@mantine/core";
import "tailwindcss/tailwind.css";

function DiscoverMain() {
  return (
    <AppShell.Main>
      <div className="relative min-h-screen">
        <BackgroundImage
          src="../src/assets/discoverimage.jpg"
          radius="sm"
          className="mx-auto max-w-screen-xl w-1/3 h-1/4 bg-cover bg-center md:p-14 "
        >
          <Center className="h-full flex flex-col justify-center items-center">
            <Text className="text-white">Discover Your Area on LocaLink</Text>

          </Center>
        </BackgroundImage>
      </div>
    </AppShell.Main>
  );
}

export default DiscoverMain;


