import styled from 'styled-components';
import { purple } from 'constants/colors';
import { buttonColoringMixin } from 'styled';

// TODO this must be split up into smaller files.
// TODO mobile styles. (vh units for starters)


export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 960px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

// FIXME bottom padding overflows the content of virtualized list,
//  but necessary so that scrolling to the bottom looks normal
export const ListWrapper = styled.div`
  position: relative;
  flex-grow: 1;
  list-style-type: none;
  margin: 0;
  padding: 0 0 10px;
  overflow: hidden;
  border: 2px solid ${purple};
  border-bottom: none;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  
  .virtualized-list {
    padding: 0 10px 0;
    outline: none;
  }
`;

export const Loader = styled.div`
  display: block;
  position: absolute;
  // Readability's sake so that animation is present. Transform is better for that particular usage.
  left: calc(50% - 20px);
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
export const Item = styled.div`
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
  min-width: 100px;
  font-size: 1.2rem;
  font-family: Consolas, monospace;
  color: #888;
  text-align: right;
  white-space: nowrap;
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
  height: 54px;
`;
export const InputArea = styled.textarea`
  overflow: auto;
  outline: none;
  border: none;
  resize: none;
  flex-grow: 1;
  height: 50px;
  padding: 5px 10px;
  margin: 0;
  font-size: 1.3rem;
  caret-color: ${purple};
  
  ${props => props.disabled && `
    background: #ddd;
    cursor: not-allowed;
  `}
  
  &::placeholder { 
    color: ${purple}; 
    opacity: 0.5;
  }
  
  // TODO some more fancyness for iOS.
  @media (max-width: 570px) {
    font-size: 1.6rem;
  }
`;
export const SubmitButton = styled.button`
  font-size: 1.2rem;
  text-transform: uppercase;
  outline: none;
  height: 100%;
  padding: 0 20px;
  margin: 0;
  cursor: pointer;
  border: none;
  border-left: 2px solid ${purple};
  
  // TODO some more fancyness for iOS.
  @media (max-width: 570px) {
    font-size: 1.4rem;
  }
  
  ${buttonColoringMixin}
`;
