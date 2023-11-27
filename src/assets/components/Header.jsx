import React from "react";
import { AppShell, Burger, Group } from "@mantine/core";

function Header({ opened, toggle }) {
  return (
    <AppShell.Header>
      <Group h="100%" px="md">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      </Group>
    </AppShell.Header>
  );
}
export default Header;
