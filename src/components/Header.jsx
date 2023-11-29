import React, { useState } from "react";
import {
  AppShell,
  Burger,
  Group,
  TextInput,
  Popover,
  Text,
  Button,
} from "@mantine/core";
import { IconMessageCircle } from "@tabler/icons-react";
import { BellRinging, BrandWechat } from "tabler-icons-react";

function Header({ opened, toggle }) {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const floating = focused || value.length > 0 || undefined;

  return (
    <AppShell.Header>
      <Group h="100%" px="md" className="bg-blue-950">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        {/* <div id="search-area">
       <TextInput
          label="Search"
          labelProps={{ "data-floating": floating }}
          // classNames={{
          //   root: classes.root,
          //   input: classes.input,
          //   label: classes.label,
          // }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
       </div> */}
        <Popover width={200} position="bottom" withArrow shadow="md">
          <Popover.Target>
            <Button
              type="submit"
              id="popover"
              className="rounded-md text-white"
              style={{
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#DAC0A3";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "inherit";
              }}
            >
              <BellRinging
                size={20}
                strokeWidth={1.5}
                style={{ marginRight: "0.5em" }}
              />
              Notification
            </Button>
          </Popover.Target>
          <Popover.Dropdown>
            <Text size="xs">This is a notification</Text>
          </Popover.Dropdown>
        </Popover>
        <Popover width={200} position="bottom" withArrow shadow="md">
          <Popover.Target>
            <Button
              type="submit"
              id="popover"
              className="rounded-md text-white"
              style={{
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#DAC0A3";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "inherit";
              }}
            >
              <IconMessageCircle
                size={20}
                strokeWidth={1.5}
                style={{ marginRight: "0.5em" }}
              />
              Messages
            </Button>
          </Popover.Target>
          <Popover.Dropdown>
            <Text size="xs">Your Recent Messages</Text>
          </Popover.Dropdown>
        </Popover>
        <Popover width={200} position="bottom" withArrow shadow="md">
          <Popover.Target>
            <Button
              type="submit"
              id="popover"
              className="rounded-md text-white"
              style={{
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#DAC0A3";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "inherit";
              }}
            >
              <BrandWechat
                size={20}
                strokeWidth={1.5}
                style={{ marginRight: "0.5em" }}
              />
              Recent Chats
            </Button>
          </Popover.Target>
          <Popover.Dropdown>
            <Text size="xs">Your Recent Chats</Text>
          </Popover.Dropdown>
        </Popover>
      </Group>
    </AppShell.Header>
  );
}
export default Header;
