import React, {
    Component
} from 'react';
import styled from 'styled-components';
import Button from './button';

const Container = styled.div `
    display: flex;
    align-items: flex- start;
    justify-content: center;
    flex-direction: row;
    margin-top: 20px;
`;

const Input = styled.input `
    color: #888;
    font-size: 1em;
    padding: 10px;
    width: 300px;
    outline: none;
    margin-bottom: 5px;
    align-self: flex-end;
`;

class GiveAllowance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: null,
            amount: null,
        }
    }
    render() {
        return ( <
            Container >
            <
            Input onChange = {
                (e) => this.setState({
                    address: e.target.value
                })
            }
            placeholder = "Address to credit" / >
            <
            Input onChange = {
                (e) => this.setState({
                    amount: parseInt(e.target.value, 10)
                })
            }
            placeholder = "Amount to credit" / >
            <
            Button onClick = {
                () => this.props.grantAllowance(this.state.address, this.state.amount)
            }
            primary > Update < /Button> <
            /Container>);
        }
    }

    export default GiveAllowance;



    // WEBPACK FOOTER //
    // ./src/modules/components/giveAllowance.js