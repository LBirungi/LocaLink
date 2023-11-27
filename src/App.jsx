import { useState } from 'react'
import './App.css'
import '@mantine/core/styles.css';
import '@mantine/core/dist/index.css';

import { MantineProvider } from '@mantine/core';

function App() {


  return (
    <>
    <MantineProvider>
     /*Your app here */;
    </MantineProvider>;
    </>
  )
}

export default App
