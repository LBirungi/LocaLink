import React from "react";
import { AppShell,Burger, Group,MultiSelect} from "@mantine/core";


function Header({ opened, toggle }) {
  return (
    <AppShell.Header>
      <Group h="100%" px="md">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <MultiSelect
    //   label="Explore"
      placeholder="Explore"
      clearable
    />
      </Group>
    </AppShell.Header>
  );
}
export default Header;
