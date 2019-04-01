import styled from 'styled-components';
import { purple } from 'constants/colors';
import { buttonColoringMixin } from 'styled';

export const FancyForm = styled.form`
  width: 300px;
`;
export const TextInput = styled.input`
  display: block;
  border: 1px solid ${purple};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom: none;
  color: black;
  height: 30px;
  width: 100%;
  outline: none;
  text-align: center;
  caret-color: ${purple};

  &::placeholder { 
    color: ${purple}; 
    opacity: 0.5;
  }
`;
export const SubmitButton = styled.input`
  width: 100%;
  height: 30px;
  display: block;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  text-transform: uppercase;
  outline: none;
  border: 1px solid ${purple};
  cursor: pointer;
  ${buttonColoringMixin}
`;
