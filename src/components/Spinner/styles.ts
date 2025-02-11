import styled from '@emotion/styled';

export const SpinnerComponent = styled.div`
 border: 10px solid rgba(0,0,0,0.1);
 border-left-color: #1f27f5;
 border-radius: 50%;
 width: 150px;
 height: 150px;
 margin-left: 50%;
 animation: spin 1s linear infinite;

 @keyframes spin {
  to {
    transform: rotate(360deg);
  }
 }
`
