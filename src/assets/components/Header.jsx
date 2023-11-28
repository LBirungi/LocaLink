import React, { useState } from "react";
import { AppShell, Burger, Group, TextInput,Popover, Text, Button} from "@mantine/core";
import {IconMessageCircle } from "@tabler/icons-react";
import { BellRinging,BrandWechat} from 'tabler-icons-react';


function Header({ opened, toggle }) {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const floating = focused || value.length > 0 || undefined;

  return (
    <AppShell.Header>
      <Group h="100%" px="md">
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
        <Button type="submit" id="popover">Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">This is uncontrolled popover, it is opened when button is clicked</Text>
      </Popover.Dropdown>
    </Popover>
       



      </Group>
    </AppShell.Header>
  );
}
export default Header;
