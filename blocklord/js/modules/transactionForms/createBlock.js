import React, {
    Component
} from 'react'
import {
    connect
} from 'react-redux';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import Input from '../components/input';
import PriceSelector from '../components/priceSelector';
import Button from '../components/button';
import {
    closeModal
} from '../../redux/app/actions';
import {
    createBlock
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

class CreateBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            url: '',
            imageURL: '',
            price: props.initialPrice,
        }
        this.createBlock = this.createBlock.bind(this);
    }

    createBlock() {
        if (this.state.name && this.state.imageURL) {
            const price = this.props.allowance > 0 ? 0 : this.state.price;
            this.props.createBlock(
                this.props.tile.key,
                price,
                this.state.name,
                this.state.description,
                this.state.url,
                this.state.imageURL,
                this.props.account,
            );
            this.props.closeModal();
        }
    }

    componentDidMount() {
        ReactGA.modalview('/createBlock');
    }

    render() {
        return ( <
            Container column >
            <
            Title > Buy Block < /Title> <
            Container >
            <
            Container column >
            <
            Input setValue = {
                (e) => this.setState({
                    name: e
                })
            }
            label = "Name (Required)"
            placeholder = "Give your block a name" / >
            <
            Input setValue = {
                (e) => this.setState({
                    description: e
                })
            }
            label = "Description"
            placeholder = "Give your block a short description" / >
            <
            Input setValue = {
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
            /Container> {
                this.props.initialPrice > 0 && this.props.allowance === 0 && < PriceSelector showBBL buy setPrice = {
                    (e) => this.setState({
                        price: e
                    })
                }
                initialPrice = {
                    this.props.initialPrice
                }
                /> } <
                /Container> <
                Container >
                    <
                    Button onClick = {
                        () => this.props.closeModal()
                    } > Cancel < /Button> {
                        this.props.allowance > 0 ? < Button onClick = {
                            () => this.createBlock()
                        }
                        primary > Claim Block Free < /Button> : <Button onClick={() => this.createBlock()} primary>Buy Block {(this.state.price /
                        1000000000000000000).toFixed(4)
            }
            Ξ < /Button>} <
            /Container> <
            /Container>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        closeModal: () => dispatch(closeModal()),
        createBlock: (key, price, name, description, url, image, account) => dispatch(createBlock(key, price, name, description, url, image, account)),
    };
}

const mapStateToProps = state => {
    return {
        tile: state.tileReducer.get('selectedTile'),
        initialPrice: state.appReducer.get('initialPrice'),
        account: state.web3Reducer.get('account'),
        allowance: state.appReducer.get('allowance'),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBlock);



// WEBPACK FOOTER //
// ./src/modules/transactionForms/createBlock.js