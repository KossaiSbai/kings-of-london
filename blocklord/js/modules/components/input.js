import React, {
    Component
} from 'react';
import styled from 'styled-components';

const Input = styled.input `
  border-radius: 2px;
  padding: 10px;
  border: 1px solid #efefef;
  width: 300px;
  font-size: 1em;
  font-family: 'Exo 2', sans-serif;
`;

const Label = styled.span `
  color: #3329a5;
  margin-bottom: 5px;
  margin-top: 15px;
`;

const LabelContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Error = styled.div `
    background: #fffafa;
    color: #800;
    font-size: 0.8em;
`;

const Count = styled.div `
    font-size: 0.8em;
    color: #ccc;
`;

function byteCount(s) {
    return encodeURI(s).split(/%(?:u[0-9A-F]{2})?[0-9A-F]{2}|./).length - 1;
}


class BytesInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tooLong: false,
            bytes: 0
        };
    }

    checkInput(e) {
        const length = byteCount(e.target.value);
        if (length > 32) {
            this.setState({
                bytes: length,
                tooLong: true
            });
            this.props.setValue(e.target.value);
        } else {
            this.setState({
                bytes: length,
                tooLong: false
            });
            this.props.setValue(e.target.value);
        }
    }

    render() {
            return ( <
                div >
                <
                LabelContainer >
                <
                Label > {
                    this.props.label
                } < /Label> {
                    this.state.tooLong && < Error > Too long. < a target = "_blank"
                    href = "/faqs" > Why ? < /a></Error >
                } {
                    !this.state.tooLong && < Count > {
                        32 - this.state.bytes
                    }
                    characters left. < /Count>} <
                        /LabelContainer> <
                        Input defaultValue = {
                            this.props.defaultValue
                        }
                    onChange = {
                        (e) => this.checkInput(e)
                    }
                    placeholder = {
                        this.props.placeholder
                    }
                    /> <
                    /div>);
                }
            }

            export default BytesInput;



            // WEBPACK FOOTER //
            // ./src/modules/components/input.js