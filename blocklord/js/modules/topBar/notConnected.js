import React, {
    Component
} from 'react'
import styled from 'styled-components';

const Container = styled.div `
    height: 30px;
    border: 2px solid orange;
    border-radius: 15px;
    width: 160px;
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    & .networkInstructions {
        opacity: 0;
        transition: all 0.2s;
    }
    &:hover {
        > .networkInstructions {
            opacity: 1;
            top: 60px;
        }
    }
    @media (max-width: 500px) {
      display: none;
    }
`;

const Text = styled.div `
    color: orange;
`;

const Description = styled.div `
    padding: 10px;
    background: white;
    border-radius: 2px;
    position: fixed;
    color: #999;
    font-size: 0.8em;
    top: -360px;
    box-shadow: -2px 2px 8px rgba(0,0,0,0.2);
    margin: 0;
`;

class NotConnected extends Component {
    render() {
        return ( <
            Container { ...this.props
            } >
            <
            Text > No Network < /Text> <
            Description className = "networkInstructions" >
            <
            ul >
            <
            li > Install Metamask < /li> <
            li > Agree to Metamask terms and add a password < /li> <
            li > Ensure you have Main Net selected < /li> <
            /ul> <
            /Description> <
            /Container>
        );
    }
}

export default NotConnected;



// WEBPACK FOOTER //
// ./src/modules/topBar/notConnected.js