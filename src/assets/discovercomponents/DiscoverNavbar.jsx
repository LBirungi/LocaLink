import React from "react";
import {
  AppShell,
  Burger,
  Group,
  Text,
  Menu,
  Button,
  rem,
} from "@mantine/core";

import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from "@tabler/icons-react";
import { Home,Map,Briefcase,BellRinging} from 'tabler-icons-react';

function DiscoverNavbar({ opened, toggle }) {
  return (
    <AppShell.Navbar p="md">
      <Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Text>Localink</Text>
      </Group>

      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Button>Toggle menu</Button>
        </Menu.Target>

        <Menu.Label>Explore</Menu.Label>
        <Menu.Item
          leftSection={
            <Home
              size={20}
              strokeWidth={1}
              color={"black"}
            />
          }
        >
          Home
        </Menu.Item>
        <Menu.Item
          leftSection={
            <Map
            size={20}
            strokeWidth={1}
            color={'black'} />
          }
        >
          Discover
        </Menu.Item>
        <Menu.Item
          leftSection={
            < Briefcase
            size={20}
            strokeWidth={1}
            color={'black'}/>
          }
        >
          Opportunities
        </Menu.Item>


        <Menu.Item
          leftSection={
            <BellRinging
            size={20}
            strokeWidth={1}
            color={'black'}
          />
          }
        >
          Notifications
        </Menu.Item>

        <Menu.Item
          leftSection={
            <IconSettings style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Help/FAQs
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item
          color="red"
          leftSection={
            <IconTrash style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Delete my account
        </Menu.Item>
      </Menu>
    </AppShell.Navbar>
  );
}
export default DiscoverNavbar;