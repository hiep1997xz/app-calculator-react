import React from "react";
import Button from "./Button";
import ButtonBox from "./ButtonBox";
import Screen from "./Screen";
import Wrapper from "./Wrapper";

const Calculator = () => {
  return (
    <Wrapper>
      <Screen />
      <ButtonBox>
        <Button>Calculator</Button>
      </ButtonBox>
    </Wrapper>
  );
};

export default Calculator;
