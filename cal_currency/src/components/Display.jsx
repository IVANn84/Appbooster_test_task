import { Box, Text, Button } from '@chakra-ui/react';
import Numbers from './Numbers.jsx';
import CountButton from './CountButton.jsx';
import { useState } from 'react';

function Display() {
  const [counts, setCount] = useState('0');
  const [result, setResult] = useState('');

  function applyExpresion(countedNumber) {
    setCount(countedNumber);
    setResult(eval(counts));
  }

  return (
    <Box
      display="flex"
      gap="5px"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      w="200px"
    >
      <Box display="flex" w="100%" justifyContent="space-between">
        <Text
          display="flex"
          justifyContent="start"
          alignItems="center"
          bg="gray.50"
          w="100%"
          h="38px"
          px="4px"
          borderRadius="8px"
        >
          {counts}
        </Text>
        <Text
          w="fit-content"
          h="38px"
          textColor="tomato"
        >
          {result}
        </Text>
      </Box>
      <Numbers data={counts} handlerClick={setCount} />
      <Box display="flex" gap="9px">
        <CountButton data={counts} expression="+" handler={applyExpresion} />
        <CountButton data={counts} expression="-" handler={applyExpresion} />
        <CountButton data={counts} expression="*" handler={applyExpresion} />
        <CountButton data={counts} expression="/" handler={applyExpresion} />
      </Box>
    </Box>
  );
}

export default Display;
