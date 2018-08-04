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

class BalanceIntro extends Component {
    constructor(props) {
        super(props);
        this.doNotShow = this.doNotShow.bind(this);
    }

    doNotShow() {
        this.props.closeModal();
        localStorage.setItem('hideBalanceIntro', true);
    }
    render() {
        return ( <
            Container >
            <
            Title > This is your Balance Page < /Title> <
            div > Here you can find a summary of your portfolio. < /div> <
            div > < span role = "img"
            aria - label = "diamond" > 💎 < /span> On the left you can see how much liquid ETH you have, this comes from people buying blocks from you.</div >
            <
            div > < span role = "img"
            aria - label = "house" > 🏠 < /span> On the right you can see the size of your portfolio, how many blocks you have and their value.</div >
            <
            div > < span role = "img"
            aria - label = "money bag" > 💰 < /span> If you want to withdraw your ETH just click on the Withdraw button and submit the transaction. The ETH will be credited to you metamask account :)</div >
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

export default connect(mapStateToProps, mapDispatchToProps)(BalanceIntro);



// WEBPACK FOOTER //
// ./src/modules/intro/balance.js