import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ContactText = styled.span`
  font-size: 18px;
`;

export const ButtonContact = styled.button`
  background-color: white;
  border: 1px solid grey;
  border-radius: 5px;
  cursor: pointer;
  &:hover,
  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: 0px 0px 4px 2px rgb(0, 0, 255);
  }
  &:active {
    background-color: rgb(255, 0, 0);
    color: white;
    box-shadow: 0px 0px 10px 4px rgb(255, 0, 0);
  }
`;
