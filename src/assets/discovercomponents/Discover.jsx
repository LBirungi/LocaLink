import React from "react";
import { useDisclosure } from '@mantine/hooks';
import { AppShell} from '@mantine/core';
import DiscoverHeader from "./DiscoverHeader";
import DiscoverMain from "./DiscoverMain";
import DiscoverNavbar from "./DiscoverNavbar";
import DiscoverAside from "./DiscoverAside";
import DiscoverFooter from "./DiscoverFooter";

function Discover() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      layout="alt"
      discoverheader={{ height: 60 }}
      discoverfooter={{ height: 60 }}
      discovernavbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      discoveraside={{
        width: 300,
        breakpoint: "md",
        collapsed: { desktop: false, mobile: true },
      }}
      padding="md"
    >
      <DiscoverHeader opened={opened} toggle={toggle} />
      <DiscoverNavbar opened={opened} toggle={toggle} />
      <DiscoverMain />
      <DiscoverAside />
      <DiscoverFooter/>
    </AppShell>
  );
}

export default Discover;
