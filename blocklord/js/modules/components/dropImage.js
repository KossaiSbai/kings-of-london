import React, {
    Component
} from 'react'
import styled from 'styled-components';
import Dropzone from 'react-dropzone';
import ReactGA from 'react-ga';
import Loader from '../loader';

ReactGA.initialize('UA-112834002-1');

const StyledDrop = styled(Dropzone)
`
    height: 120px;
    width: 120px;
    border-radius: 2px;
    margin: 10px;
    background: #ccdddd url(${props => props.preview}) center center}
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    color: #fff;
    text-shadow: 0px 0px 4px rgba(0,0,0,0.5);
`;

const Label = styled.span `
  color: #3329a5;
  margin-bottom: 5px;
`;


class DropImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageURL: null,
            loader: false,
        }
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(acceptedFiles, rejectedFiles) {
        this.setState({
            loader: true
        });
        if (acceptedFiles[0]) {
            const formData = new FormData();
            formData.append('image', acceptedFiles[0]);
            fetch('https://api.imgur.com/3/image', {
                    method: 'POST',
                    headers: {
                        Authorization: `Client-ID ${process.env.REACT_APP_IMGUR_CLIENT_ID}`
                    },
                    body: formData,
                }).then(response => response.json())
                .then(parsed => {
                    this.setState({
                        loader: false
                    });
                    this.props.setImageURL(parsed.data.link);
                    ReactGA.event({
                        category: 'Other',
                        action: 'Uploaded Image'
                    });
                });
        }
    }

    render() {
        const text = this.state.loader ? 'Uploading...' : 'Drop image here';
        return ( <
            div style = {
                {
                    marginTop: 10
                }
            } >
            <
            Label > Block Image(Required) < /Label> <
            StyledDrop preview = {
                this.props.preview
            }
            multiple = {
                false
            }
            onDrop = {
                (e) => this.onDrop(e)
            } > {
                this.state.loader ? < Loader / > : text
            } <
            /StyledDrop>

            <
            /div>
        );
    }
};

export default DropImage;



// WEBPACK FOOTER //
// ./src/modules/components/dropImage.js