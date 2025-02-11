import styled from '@emotion/styled';

export const MainButton = styled.button`
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;

  max-height: 50px;
  outline: none;
  border: none;
  padding: 20px;
  border-radius: 30px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  letter-spacing: 1px;
  font-family: Arial, Tahoma, sans - serif;
  background-color: #3297f5;

  &:hover {
    background-color: #1a5ea8;
  }

  &:active {
    background-color: #0e3b6b;
    transform: scale(0.95);
  }

  &:disabled {
    background-color: #b5b5b5;
    cursor: not-allowed;
  }
`