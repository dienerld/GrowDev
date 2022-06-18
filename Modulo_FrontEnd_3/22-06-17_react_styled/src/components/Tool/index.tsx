import React from 'react';
import { Calculator, Display, CalculatorButton, CalculatorRow } from './styles';

type toolProps = {
  title: string;
  children?: React.ReactNode;
};

export function Tool(props: toolProps) {
  return (
    <>
      <h1>{props.title}</h1>
      <Calculator>
        <Display>2 + 2 = 4</Display>

        <CalculatorRow>
          <CalculatorButton>C</CalculatorButton>
          <CalculatorButton>+/-</CalculatorButton>
          <CalculatorButton>%</CalculatorButton>
          <CalculatorButton isOperation>/</CalculatorButton>
        </CalculatorRow>

        <CalculatorRow>
          <CalculatorButton>7</CalculatorButton>
          <CalculatorButton>8</CalculatorButton>
          <CalculatorButton>9</CalculatorButton>
          <CalculatorButton isOperation>x</CalculatorButton>
        </CalculatorRow>

        <CalculatorRow>
          <CalculatorButton>4</CalculatorButton>
          <CalculatorButton>5</CalculatorButton>
          <CalculatorButton>6</CalculatorButton>
          <CalculatorButton isOperation>-</CalculatorButton>
        </CalculatorRow>

        <CalculatorRow>
          <CalculatorButton>1</CalculatorButton>
          <CalculatorButton>2</CalculatorButton>
          <CalculatorButton>3</CalculatorButton>
          <CalculatorButton isOperation>+</CalculatorButton>
        </CalculatorRow>

        <CalculatorRow>
          <CalculatorButton isLarge>0</CalculatorButton>
          <CalculatorButton>,</CalculatorButton>
          <CalculatorButton isOperation> = </CalculatorButton>
        </CalculatorRow>
      </Calculator>
    </>
  );
}
