import { Button, Box } from '@chakra-ui/react';

function Numbers({ data, fn }) {
  // const handler = (e) => onClick(data + e.target.innerHTML);

  const nums = Array.from(
    Array(10)
      .keys()
      .map((number) => (
        <Button 
        onClick={fn()} key={number} w="40px" h="40px" margin="4px">
          {number}
        </Button>
      ))
  );
  return (
    <Box display="flex" flexWrap="wrap" w="15%">
      {nums}
    </Box>
  );
}

export default Numbers;
