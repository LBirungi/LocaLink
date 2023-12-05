import React from 'react'
import { useState } from 'react'
import '@mantine/core/styles.css';
import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Group, Skeleton, Text } from '@mantine/core';
import Headerland from './Headerland'
import Navland from './Navland'
import Footerland from './Footerland'

function Homeland(){
    return(
      <h2> This is the landing page</h2>
    );
}

export default Homeland;