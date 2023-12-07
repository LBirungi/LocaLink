import React, { useState } from "react";

import {
  Burger,
  Group,
  TextInput,
  Popover,
  Text,
  Button,
  Alert,
  Avatar,
  MantineProvider
} from "@mantine/core";

import { BellRinging,BrandWechat } from 'tabler-icons-react';

function Header({ opened, toggle }) {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const floating = focused || value.length > 0 || undefined;

  return (
    
        <div className="h-full px-4 bg-blue-950">
      <Group>
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

        {/* Notification Popover */}
        <Popover width={300} position="bottom" withArrow shadow="md">
          <Popover.Target>
            <Button
              type="submit"
              className="rounded-md text-white transition-colors duration-300 hover:text-gray-300"
            >
              <BellRinging size={20} strokeWidth={1.5} className="mr-2 align-middle" />
              Notification
            </Button>
          </Popover.Target>
          <Popover.Dropdown placement="bottom" position="center" gutter={10} className="w-80">
            {/* Notification 1 */}
            <Alert title="Traffic alert" withCloseButton>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Avatar size="sm">WP</Avatar>
                <div style={{ marginLeft: "8px" }}>
                  <h4>Traffic alert</h4>
                </div>
              </div>
              Road blockage at Wandegeya junction today
            </Alert>

            {/* Notification 2 */}
            <Alert title="Group notification" withCloseButton>
              You have a group notification:
              <Avatar.Group spacing="sm">
                <Avatar src="image.png" radius="xl" />
                <Avatar src="image.png" radius="xl" />
                <Avatar src="image.png" radius="xl" />
                <Avatar radius="xl">+5</Avatar>
              </Avatar.Group>
            </Alert>
          </Popover.Dropdown>
        </Popover>

        {/* Messages */}
        <Popover width={300} position="bottom" withArrow shadow="md">
          <Popover.Target>
            <Button
              type="submit"
              className="rounded-md text-white transition-colors duration-300 hover:text-gray-300"
            >
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

        {/* Recent Chats */}
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
    </div>
    
  
  );
}

export default Header;
