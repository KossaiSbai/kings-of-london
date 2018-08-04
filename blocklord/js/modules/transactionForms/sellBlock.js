import React, {
    Component
} from 'react'
import {
    connect
} from 'react-redux';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import PriceSelector from '../components/priceSelector';
import Button from '../components/button';
import {
    closeModal
} from '../../redux/app/actions';
import {
    sellBlock
} from '../../redux/tiles/actions';

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

class SellBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: props.tile.tileData.get('price'),
        }
        this.sellBlock = this.sellBlock.bind(this);
    }

    sellBlock() {
        this.props.sellBlock(
            this.props.tile.key,
            this.state.price,
        );
        this.props.closeModal();
    }

    componentDidMount() {
        ReactGA.modalview('/sellBlock');
    }

    render() {
        return ( <
            Container column >
            <
            Title > Sell Block < /Title> <
            Container >
            <
            PriceSelector sell setPrice = {
                (e) => this.setState({
                    price: e
                })
            }
            initialPrice = {
                this.props.tile.tileData.get('price')
            }
            /> <
            /Container> <
            Container >
            <
            Button onClick = {
                () => this.props.closeModal()
            } > Cancel < /Button> <
            Button onClick = {
                () => this.sellBlock()
            }
            primary > Sell Block {
                (this.state.price / 1000000000000000000).toFixed(4)
            }
            Ξ < /Button> <
            /Container> <
            /Container>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        closeModal: () => dispatch(closeModal()),
        sellBlock: (key, price) => dispatch(sellBlock(key, price)),
    };
}

const mapStateToProps = state => {
    return {
        tile: state.tileReducer.get('selectedTile'),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SellBlock);



// WEBPACK FOOTER //
// ./src/modules/transactionForms/sellBlock.js