/* eslint-disable */
import { Button, Box } from '@chakra-ui/react';

function Keys({ data, handlerClick }) {
  const keys = Array.from(
    Array(10)
      .keys()
      .map((key) => (
        <Button
          onClick={(e) =>
            data === '0'
              ? handlerClick(e.target.textContent)
              : handlerClick(data + e.target.textContent)
          }
          key={key}
          w="40px"
          h="40px"
          margin="4px"
        >
          {key}
        </Button>
      ))
  );
  return (
    <Box display="flex" flexWrap="wrap" w="95%">
      {keys}
    </Box>
  );
}

export default Keys;
