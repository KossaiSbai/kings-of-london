import React, {
    Component
} from 'react'
import {
    connect
} from 'react-redux';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import Button from '../components/button';
import {
    closeModal
} from '../../redux/app/actions';
import {
    cancelSellBlock
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

class CancelSell extends Component {
    constructor(props) {
        super(props);
        this.cancelSale = this.cancelSale.bind(this);
    }

    cancelSale() {
        this.props.cancelSellBlock(this.props.tile.key);
        this.props.closeModal();
    }

    componentDidMount() {
        ReactGA.modalview('/cancelSale');
    }

    render() {
        return ( <
            Container column >
            <
            Title > Take Block Off Sale < /Title> <
            Container >
            <
            Button onClick = {
                () => this.props.closeModal()
            } > Cancel < /Button> <
            Button onClick = {
                () => this.cancelSale()
            }
            primary > Take Off Sale < /Button> <
            /Container> <
            /Container>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        closeModal: () => dispatch(closeModal()),
        cancelSellBlock: (key) => dispatch(cancelSellBlock(key)),
    };
}

const mapStateToProps = state => {
    return {
        tile: state.tileReducer.get('selectedTile'),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CancelSell);



// WEBPACK FOOTER //
// ./src/modules/transactionForms/cancelSell.js