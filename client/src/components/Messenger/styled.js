import styled from 'styled-components';
import { purple } from 'constants/colors';
import { buttonColoringMixin } from 'styled';


export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 960px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const List = styled.ul`
  position: relative;
  flex-grow: 1;
  list-style-type: none;
  padding: 0 10px 10px;
  margin: 0;
  overflow-y: scroll;
  border: 2px solid ${purple};
  border-bottom: none;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const Loader = styled.li`
  display: block;
  position: absolute;
  // Readability's sake so that animation is present. Transform is better for that particular usage.
  left: calc(50% - 50px);
  top: calc(50% - 25px);
  
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: ${purple};
  animation: flash 1s linear infinite;
  
  @keyframes flash {
    from {
      transform: scale(1);
    }
    
    15% {
      transform: scale(0.5);
    }
  
    to {
      transform: scale(1);
    }
  }
`;
export const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0 0;
`;

export const Username = styled.div`
  flex-grow: 1;
  color: ${purple};
  font-size: 1.2rem;
  font-weight: bold;
  min-width: 300px;
`;
export const Time = styled.div`
  min-width: 120px;
  font-size: 1.2rem;
  font-family: Consolas, monospace;
  color: #888;
  text-align: right;
`;
export const Content = styled.div`
  width: 100%;
  font-size: 1.4rem;
  white-space: pre-wrap;
`;


export const InputForm = styled.form`
  border: 2px solid ${purple};
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-shrink: 0;
`;
export const InputArea = styled.textarea`
  outline: none;
  border: none;
  resize: none;
  flex-grow: 1;
  height: 50px;
  padding: 5px 10px;
  font-size: 1.3rem;
  caret-color: ${purple};
  
  &::placeholder { 
    color: ${purple}; 
    opacity: 0.5;
  }
`;
export const SubmitButton = styled.button`
  font-size: 1.2rem;
  text-transform: uppercase;
  outline: none;
  height: 100%;
  padding: 0 20px;
  cursor: pointer;
  border: none;
  border-left: 2px solid ${purple};
  
  ${buttonColoringMixin}
`;
