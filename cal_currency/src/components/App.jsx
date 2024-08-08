import '../App.css';
import { Box } from '@chakra-ui/react';
// import Keys from './Keys.jsx';
import Display from './Display.jsx';
// import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        h="100vh"
      >
        <Display />
      </Box>
    </div>
  );
}

export default App;
