import React from "react";
import { AppShell, Burger, Group, Skeleton, Text } from '@mantine/core';

function Navbar({opened,toggle}){
    return(
        <AppShell.Navbar p="md">
        <Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text>Localink</Text>
        </Group>
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
      </AppShell.Navbar>
    )
}
export default Navbar