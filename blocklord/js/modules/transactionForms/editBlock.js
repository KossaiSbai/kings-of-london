import React, {
    Component
} from 'react'
import {
    connect
} from 'react-redux';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import Input from '../components/input';
import Button from '../components/button';
import {
    closeModal
} from '../../redux/app/actions';
import {
    editBlock
} from '../../redux/tiles/actions';
import DropImage from '../components/dropImage';

ReactGA.initialize('UA-112834002-1');

const Container = styled.div `
  display: flex;
  flex-direction: ${props => props.column ? 'column':'row'};
  flex-wrap: wrap;
`;

const Title = styled.div `
  color: #3329a5;
  font-size: 2.5em;
`;

class EditBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.tile.tileData.get('name'),
            description: props.tile.tileData.get('description'),
            url: props.tile.tileData.get('url'),
            imageURL: props.tile.tileData.get('imageURL'),
        }
        this.editBlock = this.editBlock.bind(this);
    }

    editBlock() {
        if (this.state.name && this.state.imageURL) {
            this.props.editBlock(
                this.props.tile.key,
                this.state.name,
                this.state.description,
                this.state.url,
                this.state.imageURL,
            );
            this.props.closeModal();
        }
    }

    componentDidMount() {
        ReactGA.modalview('/editBlock');
    }

    render() {
        const tileData = this.props.tile.tileData;
        return ( <
            Container column >
            <
            Title > Edit Block < /Title> <
            Container column >
            <
            Input defaultValue = {
                tileData.get('name')
            }
            setValue = {
                (e) => this.setState({
                    name: e
                })
            }
            label = "Name (Required)"
            placeholder = "Give your block a name" / >
            <
            Input defaultValue = {
                tileData.get('description')
            }
            setValue = {
                (e) => this.setState({
                    description: e
                })
            }
            label = "Description"
            placeholder = "Give your block a short description" / >
            <
            Input defaultValue = {
                tileData.get('url')
            }
            setValue = {
                (e) => this.setState({
                    url: e
                })
            }
            label = "Link URL"
            placeholder = "Give your block a url" / >
            <
            DropImage preview = {
                this.state.imageURL
            }
            setImageURL = {
                (e) => this.setState({
                    imageURL: e
                })
            }
            className = "dropImage" / >
            <
            /Container> <
            Container >
            <
            Button onClick = {
                () => this.props.closeModal()
            } > Cancel < /Button> <
            Button onClick = {
                () => this.editBlock()
            }
            primary > Save Changes < /Button> <
            /Container> <
            /Container>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        closeModal: () => dispatch(closeModal()),
        editBlock: (key, name, description, url, image) => dispatch(editBlock(key, name, description, url, image)),
    };
}

const mapStateToProps = state => {
    return {
        tile: state.tileReducer.get('selectedTile'),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBlock);



// WEBPACK FOOTER //
// ./src/modules/transactionForms/editBlock.js