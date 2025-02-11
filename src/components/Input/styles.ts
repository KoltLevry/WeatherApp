import styled from "@emotion/styled";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-size: 16px;
  color: #6f6f6f;
`

export const InputElement = styled.input`
  width: 540px;
  height: 50px;
  padding-left: 20px;
  outline: none;
  border: 1.8px solid whitesmoke;
  border: 2px solid #ffffffc3;
  border-radius: 30px;
  font-size: 20px;
  background-color: transparent;
  backdrop-filter: blur(10px);
  color: whitesmoke;
  font-weight: 600;

  &::placeholder {
    color: whitesmoke;
    letter-spacing: 1px;
    font-family: Arial, Tahoma, sans-serif;
}
`

export const ErrorMessage = styled.div`
  height: 18px;
  color: red;
  font-size: 18px;
`
