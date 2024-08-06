import '../App.css';
import { Box } from '@chakra-ui/react';
import Numbers from './Numbers';


function App() {
  return (
    <div className="App">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        h="100vh"
      >
        <Numbers />
      </Box>
    </div>
  );
}

export default App;
