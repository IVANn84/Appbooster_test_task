import { Button } from '@chakra-ui/react';

function CountButton({ data, expression, handler }) {
  const expressions = / \+|\-|\/|\*|/;
  const lastSymbol = data[data.length - 1];
  function checkExpresionType() {
    if (expressions.test(lastSymbol)) {
      return handler(data + expression);
    }
  }
  return (
    <Button bg="blue" onClick={() => checkExpresionType()}>
      {expression}
    </Button>
  );
}

export default CountButton;
