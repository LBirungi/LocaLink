import React, { useState } from "react";
import {
  AppShell,
  Burger,
  Group,
  TextInput,
  Popover,
  Text,
  Button,
  Select,
  Alert,
  Avatar,
  Notification,
} from "@mantine/core";
import { IconMessageCircle, IconHeart } from "@tabler/icons-react";
import { BellRinging, BrandWechat } from "tabler-icons-react";
import { DatePickerInput } from "@mantine/dates";

function Header({ opened, toggle }) {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const floating = focused || value.length > 0 || undefined;

  return (
    <AppShell.Header>
      <Group className="h-full px-4 bg-blue-950">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div id="search-area">
          <TextInput
            placeholder="Search"
            labelProps={{ "data-floating": floating }}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
            classNames={{
              root: "text-white",
              input: "bg-transparent text-white placeholder-gray-300",
              label: "text-white",
            }}
          />
        </div>
        <Popover width={300} position="bottom" withArrow shadow="md">
          <Popover.Target>
            <Button
              type="submit"
              className="rounded-md text-white transition-colors duration-300 hover:text-gray-300"
            >
              <BellRinging
                size={20}
                strokeWidth={1.5}
                className="mr-2 align-middle"
              />
              Notification
            </Button>
          </Popover.Target>
          <Popover.Dropdown
            placement="bottom"
            position="center"
            gutter={10}
            className="w-80" // Adjust the width using Tailwind's width utility classes
          >
            <Alert title="Notication 1" withCloseButton>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Avatar size="sm">WP</Avatar>
                <div style={{ marginLeft: "8px" }}>
                  <h4>Traffic alert</h4>
                </div>
              </div>
              Road blockage at Wandegeya junction today
            </Alert>

            <Alert title="Notification 2" withCloseButton>
              You have a group notification:
              <Avatar.Group spacing="sm">
                <div>
                  <Avatar src="image.png" radius="xl" />
                </div>
                <Avatar src="image.png" radius="xl" />
                <Avatar src="image.png" radius="xl" />
                <Avatar radius="xl">+5</Avatar>
              </Avatar.Group>
            </Alert>
          </Popover.Dropdown>
        </Popover>
        <Popover width={300} position="bottom" withArrow shadow="md">
          <Popover.Target>
            <Button
              type="submit"
              className="rounded-md text-white transition-colors duration-300 hover:text-gray-300"
            >
              <IconMessageCircle
                size={20}
                strokeWidth={1.5}
                className="mr-2 align-middle"
              />
              Messages
            </Button>
          </Popover.Target>
          <Popover.Dropdown>
            <Alert withCloseButton>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Avatar size="sm">LB</Avatar>
                <div style={{ marginLeft: "8px" }}>
                  <h4>Lillian Birungi</h4>
                </div>
              </div>
              Will you come to our Christmas party at community center
            </Alert>
          </Popover.Dropdown>
        </Popover>
        <Popover width={300} position="bottom" withArrow shadow="md">
          <Popover.Target>
            <Button
              type="submit"
              className="rounded-md text-white transition-colors duration-300 hover:text-gray-300"
            >
              <BrandWechat
                size={20}
                strokeWidth={1.5}
                className="mr-2 align-middle"
              />
              Recent Chats
            </Button>
          </Popover.Target>
          <Popover.Dropdown>
            <Text size="xs">Your Recent Chats</Text>
            <Alert withCloseButton>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Avatar size="sm">LB</Avatar>
                <div style={{ marginLeft: "8px" }}>
                  <h4>Lillian Birungi</h4>
                </div>
              </div>
              We have a road blockage at Wandegeya
            </Alert>
          </Popover.Dropdown>
        </Popover>
      </Group>
    </AppShell.Header>
  );
}

export default Header;
