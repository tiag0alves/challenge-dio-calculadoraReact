import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';
import { StyledBtn, StyledClearBtn } from "./components/Button/styles";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0');
    setOperation('')
  };

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleSumNumbers = () => {
    
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('+');
      setOperation('+');
  }else {
    const sum = Number(firstNumber) + Number(currentNumber);
    setCurrentNumber(Number(firstNumber)+ ' + ' + Number(currentNumber) + ' - ' + String(sum));
    setOperation('')
    }
  }

  const handleMinusNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    }else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(Number(firstNumber)+ ' - ' + Number(currentNumber) + ' - ' + String(sum));
      setOperation('-')
    }
  }

  const handleDivisNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    }else{
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(Number(firstNumber)+ ' ÷ ' + Number(currentNumber) + ' = ' + String(sum));
      setOperation('')
    }
  }

  const handleDivisRestNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('%');
    }else{
      const sum = Number(firstNumber) % Number(currentNumber);
      setCurrentNumber(Number(firstNumber)+ ' % ' + Number(currentNumber) + ' = ' + String(sum) + ' Resto');
      setOperation('')
    }
  }

  const handleMultiNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    }else{
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(Number(firstNumber)+ ' * ' + Number(currentNumber) + ' = ' + String(sum));
      setOperation('')
    }
  }

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case '/':
          handleDivisNumbers();
          break;
        case '%':
          handleDivisRestNumbers();
          break;
        case '*':
          handleMultiNumbers();
          break;
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <StyledClearBtn onClick={handleOnClear}>C</StyledClearBtn>
          <Button label="%" onClick={handleDivisRestNumbers}/>
          <Button label="÷" onClick={handleDivisNumbers}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="X" onClick={handleMultiNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="."  onClick={() => handleAddNumber('.')} />
          <StyledBtn onClick={handleEquals}>=</StyledBtn>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
