import { Button, Box } from '@chakra-ui/react';

function Numbers(proops) {
  const nums = Array.from(
    Array(10)
      .keys()
      .map((number) => (
        <Button key={number} w="40px" h="40px" margin="4px">
          {number}
        </Button>
      ))
  );
  return <Box display="flex" flexWrap="wrap" w="15%">{nums}</Box>;
}

export default Numbers;
