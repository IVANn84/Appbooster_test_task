/* eslint-disable */
import { Button, Box } from '@chakra-ui/react';

function Numbers({ data, handlerClick }) {

  const nums = Array.from(
    Array(10)
      .keys()
      .map((number) => (
        <Button
          onClick={(e) =>
            data === '0'
              ? handlerClick(e.target.textContent)
              : handlerClick(data + e.target.textContent)
          }
          key={number}
          w="40px"
          h="40px"
          margin="4px"
        >
          {number}
        </Button>
      ))
  );
  return (
    <Box display="flex" flexWrap="wrap" w="95%">
      {nums}
    </Box>
  );
}

export default Numbers;
