import React, {
    Component
} from 'react';
import styled from 'styled-components';
import Button from './button';

const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Value = styled.div `
    color: #888;
    font-size: 2em;
    margin-bottom: 5px;
    margin-top: 30px;
`;

const Label = styled.div `
    color: #888;
    font-size: 1em;
    margin-bottom: 5px;
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

class ValueChange extends Component {
    render() {
        return ( <
            Container >
            <
            Value > {
                this.props.type === "ETH" ? `${(this.props.value / 1000000000000000000).toFixed(5)}Ξ` : `${this.props.value}%`
            } < /Value> <
            Label > {
                this.props.label
            } < /Label> <
            div style = {
                {
                    display: 'flex',
                    flexDirection: 'row'
                }
            } >
            <
            Input / >
            <
            Button primary > Update < /Button> <
            /div> <
            /Container>);
        }
    }

    export default ValueChange;



    // WEBPACK FOOTER //
    // ./src/modules/components/adminValueChange.js