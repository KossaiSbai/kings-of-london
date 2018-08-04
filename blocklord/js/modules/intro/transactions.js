import React, {
    Component
} from 'react'
import styled from 'styled-components';
import {
    connect
} from 'react-redux';
import Button from '../components/button';
import {
    closeModal
} from '../../redux/app/actions';

const Container = styled.div `
  max-width: 620px;
  line-height: 2em;
`;

const Buttons = styled.div `
  display: flex;
  flex-direction: row;
`;

const Title = styled.h1 `
  color: #3329a5;
`;

class TransactionsIntro extends Component {
    constructor(props) {
        super(props);
        this.doNotShow = this.doNotShow.bind(this);
    }

    doNotShow() {
        this.props.closeModal();
        localStorage.setItem('hideTransactionIntro', true);
    }

    render() {
        return ( <
            Container >
            <
            Title > This is your Transactions page < /Title> <
            div > Here you can see all the transactions involving your blocks.And relative cash balance updates(positive when you sell, negative when you buy) < /div> <
            div > We are going to the moon! < span role = "img"
            aria - label = "rocket" > 🚀 < /span></div >
            <
            Buttons >
            <
            Button onClick = {
                () => this.doNotShow()
            } > Do not show this again < /Button> <
            Button onClick = {
                () => this.props.closeModal()
            }
            primary > Hide For Now < /Button> <
            /Buttons> <
            /Container>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        closeModal: () => dispatch(closeModal()),
    };
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsIntro);



// WEBPACK FOOTER //
// ./src/modules/intro/transactions.js