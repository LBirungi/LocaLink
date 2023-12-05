import { useState } from 'react'
import '@mantine/core/styles.css';
import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Group, Skeleton, Text } from '@mantine/core';
import React from "react";
import Headeropp from './Headeropp';
import Navopp from './Navopp';
import Footeropp from './Footeropp';
import Asideopp from './Asideopp';
import Cardsopp from './Cardsopp';



function Opportunities(){
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
        layout="alt"
        header={{ height: 60 }}
        footer={{ height: 60 }}
        navopp={{ width: 200, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        asideopp={{ width: 200, breakpoint: 'md', collapsed: { desktop: false, mobile: true } }}
        padding="md"
      >
        <Headeropp opened={opened} toggle={toggle} />
        <Navopp opened={opened} toggle={toggle} />
        <Cardsopp/>
        <Asideopp/>
        <Footeropp/>
      </AppShell>
    )
}

export default Opportunities


