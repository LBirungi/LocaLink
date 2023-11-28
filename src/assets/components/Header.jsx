import React, { useState } from "react";
import { AppShell, Burger, Group, TextInput } from "@mantine/core";
import {IconMessageCircle } from "@tabler/icons-react";
import { Accordion, rem } from "@mantine/core";
import { BellRinging,BrandWechat} from 'tabler-icons-react';

function Header({ opened, toggle }) {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const floating = focused || value.length > 0 || undefined;

  return (
    <AppShell.Header>
      <Group h="100%" px="md">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
       <div id="search-area">
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
       </div>

        <div id="accordion-container">
        <Accordion variant="contained" style={{ display: "flex" }}>
          <Accordion.Item value="Notifications" style={{ marginRight: "10px" }}>
            <Accordion.Control
              icon={
                <BellRinging
                  style={{
                    color: "var(--mantine-color-red-filled)",
                    width: "20px",
                    height: "20px",
                  }}
                />
              }
            >
              Notifications
            </Accordion.Control>
            <Accordion.Panel>Content</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="print" style={{ marginRight: "10px" }}>
            <Accordion.Control
              icon={
                <IconMessageCircle
                  style={{
                    color: "var(--mantine-color-blue-filled)",
                    width: "20px",
                    height: "20px",
                  }}
                />
              }
            >
              Messages
            </Accordion.Control>
            <Accordion.Panel>Content</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="camera">
            <Accordion.Control
              icon={
                <BrandWechat
                  style={{
                    color: "var(--mantine-color-teal-filled)",
                    width: "20px",
                    height: "20px",
                  }}
                />
              }
            >
              Recent Chats
            </Accordion.Control>
            <Accordion.Panel>Content</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
        </div>


      </Group>
    </AppShell.Header>
  );
}
export default Header;
