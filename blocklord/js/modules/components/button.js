import React from 'react'
import styled from 'styled-components';

const Button = styled.div `
    border-radius: 4px;
    padding: 10px 20px;
    flex: 1;
    margin: 5px;
    background: ${props => props.primary ? '#3329a5' : '#fefefe'};
    color: ${props => props.primary ? '#fafafa' : '#4d43bd'};
    border: ${props => props.primary ? 'none' : '1px solid #4d43bd'};
    font-size: 1.1em;
    transition: all 0.2s;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background: ${props => props.primary ? '#4d43bd' : '#fefefe'};
      border: ${props => props.primary ? 'none' : '1px solid #4d43bd'};
      color: ${props => props.primary ? 'white' : '#4d43bd'};
      cursor: pointer;
      box-shadow: ${props => props.primary ? '-4px 4px 6px rgba(0,0,0,0.4)' : 'none' };
    }
`;


const ButtonComponent = (props) => ( <
    Button { ...props
    }
    />
);
export default ButtonComponent;



// WEBPACK FOOTER //
// ./src/modules/components/button.js