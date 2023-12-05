import { useState } from 'react'
import '@mantine/core/styles.css';
import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Group, Skeleton, Text } from '@mantine/core';
import Header from './Header';
import Navbar from './Navbar';
import Main from './Main';
import Aside from './Aside';
import Footer from './Footer';

function Dashboard() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      layout="alt"
      header={{ height: 40 }}
      footer={{ height: 40 }}
      navbar={{ width: 200, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      aside={{ width: 300, breakpoint: 'md', collapsed: { desktop: false, mobile: true } }}
      padding="md"
    >
      <Header opened={opened} toggle={toggle} />
      <Navbar opened={opened} toggle={toggle} />
      <Main/>
      <Aside/>
      <Footer/>
    </AppShell>
  )
}
export default Dashboard