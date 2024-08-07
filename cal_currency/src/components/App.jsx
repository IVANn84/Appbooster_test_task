import '../App.css';
import { Box } from '@chakra-ui/react';
// import Numbers from './Numbers.jsx';
import Display from './Display.jsx';
// import { useState } from 'react';

function App() {
  // const [counts, setCount] = useState('efsefse');
  // const [result, setResult] = useState('');
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
        {/* <Numbers /> */}
      </Box>
    </div>
  );
}

export default App;
