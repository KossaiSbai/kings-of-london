import React, {
    Component
} from 'react'
import {
    connect
} from 'react-redux';
import styled, {
    keyframes
} from 'styled-components';
import {
    closeModal
} from '../../redux/app/actions';
import {
    CreateBlock,
    BuyBlock,
    SellBlock,
    EditBlock,
    CancelSell
} from '../transactionForms';
import Confirmation from '../components/confirmation';
import TransactionIntro from '../intro/transactions';
import MapIntro from '../intro/map';
import BlocksIntro from '../intro/blocks';
import BalanceIntro from '../intro/balance';
import Twitter from '../components/twitter';

const ModalContainer = styled.div `
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.8);
  z-index: 100;
  justify-content: center;
  align-items: center;
  position: fixed;
  display: flex;
  visibility: ${props => props.open ? 'visible' : 'hidden' };
  transition: all 0.2s;
  animation: ${props => props.open ? fadeIn : fadeOut } 0.2s linear;
`;

const fadeIn = keyframes `
  0% {
    opacity: 0;
    height: 100%;
  }
  1% {
      opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes `
0% {
  opacity: 1;
}
99% {
  opacity: 0;
}
100% {
  opacity: 0;
}
`;

const ModalBox = styled.div `
  border-radius: 2px;
  background: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  @media (max-width:500px) {
    height: 100%;
    width: 100%;
  }
`;

var getComponent = (comp, name, key) => {
    switch (comp) {
        case 'buy':
            return <BuyBlock / > ;
        case 'edit':
            return <EditBlock / > ;
        case 'create':
            return <CreateBlock / > ;
        case 'sell':
            return <SellBlock / > ;
        case 'cancelSell':
            return <CancelSell / > ;
        case 'confirmation':
            return <Confirmation name = {
                name
            }
            key = {
                key
            }
            />;
        case 'showTransactionsIntro':
            return <TransactionIntro / > ;
        case 'showMapIntro':
            return <MapIntro / > ;
        case 'showBalanceIntro':
            return <BalanceIntro / > ;
        case 'showBlocksIntro':
            return <BlocksIntro / > ;
        case 'twitter':
            return <Twitter / > ;
        default:
            return null;
    }
};

class Modal extends Component {

    constructor(props) {
        super(props);
        this.ignoreClick = this.ignoreClick.bind(this);
    }

    ignoreClick(e) {
        e.stopPropagation();
    }

    render() {
        return ( <
            ModalContainer open = {
                this.props.modalState
            }
            onClick = {
                () => this.props.closeModal()
            } >
            <
            ModalBox onClick = {
                this.ignoreClick
            } > {
                getComponent(this.props.modalComponent, this.props.confirmedName, this.props.confirmedKey)
            } <
            /ModalBox> <
            /ModalContainer>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        closeModal: () => dispatch(closeModal()),
    };
}

const mapStateToProps = state => {
    return {
        modalState: state.appReducer.get('modalState'),
        modalComponent: state.appReducer.get('modalComponent'),
        confirmedName: state.appReducer.get('confirmedName'),
        confirmedKey: state.appReducer.get('confirmedKey'),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);



// WEBPACK FOOTER //
// ./src/modules/modal/index.js