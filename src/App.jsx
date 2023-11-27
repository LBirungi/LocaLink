import { useState } from 'react'
import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Group, Skeleton, Text } from '@mantine/core';
import Header from './assets/components/Header';
import Navbar from './assets/components/Navbar';
import Main from './assets/components/Main';
import Aside from './assets/components/Aside';
import Footer from './assets/components/Footer';

function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider>
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      aside={{ width: 300, breakpoint: 'md', collapsed: { desktop: false, mobile: true } }}
      padding="md"
    >
      <Header opened={opened} toggle={toggle} />
      <Navbar opened={opened} toggle={toggle} />
      <Main/>
      <Aside/>
      <Footer/>
    </AppShell>
    </MantineProvider>
  )
}

export default App

