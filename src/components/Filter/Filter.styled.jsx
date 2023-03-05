import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 25px;
`;

export const Input = styled.input`
  margin-top: 10px;
  padding: 5px 10px;
  outline: none;
  border-radius: 5px;
  border: 1px solid grey;
  &:hover,
  &:focus {
    border-color: transparent;
    box-shadow: 0px 0px 4px 1px rgb(0, 0, 255);
  }
`;
