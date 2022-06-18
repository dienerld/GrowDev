import styled from 'styled-components';

type CalculatorButtonProps = {
  isLarge?: boolean;
  isOperation?: boolean;
};

export const Calculator = styled.div`
  width: 100%;
  height: 200px;
  background-color: #ccc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const Display = styled.div`
  height: 70px;
  width: 200px;
  background-color: #808080;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  text-align: right;
  padding: 30px 15px;
`;

export const CalculatorRow = styled.div``;

export const CalculatorButton = styled.button<CalculatorButtonProps>`
  width: ${props => (props?.isLarge ? '100px' : '50px')};

  height: 50px;
  border: 1px solid #ccc;
  cursor: pointer;
  background-color: ${props => (props?.isOperation ? 'sandybrown' : '#fff')};
  color: ${({ isOperation }) => (isOperation ? '#fff' : '#000')};
`;
