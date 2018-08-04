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
  line-height: 1.5em;
  @media (max-width: 600px) {
    font-size: 0.9em;
  }
`;

const Buttons = styled.div `
  display: flex;
  flex-direction: row;
`;

const Title = styled.h1 `
  color: #3329a5;
  line-height: 1.5em;
`;

const List = styled.ul `
  list-style-type: none;
`;

const OnlyDesktop = styled.div `
  @media(max-width: 560px) {
    display: none;
  }
`;

class MapIntro extends Component {
    constructor(props) {
        super(props);
        this.doNotShow = this.doNotShow.bind(this);
    }

    doNotShow() {
        this.props.closeModal();
        localStorage.setItem('hideMapIntro', true);
    }

    render() {
        return ( <
            Container >
            <
            Title > Welcome to Blocklord! < span role = "img"
            aria - label = "rocket" > 🚀 < /span></Title >
            <
            div > Buy, customise and trade any corner of planet Earth. < /div> <
            div > You can advertise, share your thoughts / opinions or just make a profit! < span role = "img"
            aria - label = "money face" > 🤑 < /span></div >
            <
            div > There are 3 ways to make Ethereum from your blocks: < /div> <
            List >
            <
            li > < span role = "img"
            aria - label = "dollar" > 💵 < /span>Sell one of your blocks</li >
            <
            li > < span role = "img"
            aria - label = "pound" > 💷 < /span>Earn rewards for any blocks bought next to yours</li >
            <
            li > < span role = "img"
            aria - label = "euro" > 💶 < /span>Receive BBL tokens every time you buy a block on Blocklord!</li >
            <
            /List> <
            OnlyDesktop > Blocklord is powered by < a href = "https://bubbled.io/presale"
            target = "_blank" > Bubbled.io < /a>, the new de-facto registrar for AR spaces. If you have any questions, join the conversation on <a href="https:/ / t.me / seebubbled " target="
            _blank " rel="
            noopener noreferrer " >Telegram</a>, we are a friendly bunch <span role="
            img " aria-label="
            smile ">😄</span></OnlyDesktop> <
            div > Explore around and have fun! < /div> <
            Buttons >
            <
            Button onClick = {
                () => this.doNotShow()
            } > Do not show this again < /Button> <
            Button onClick = {
                () => this.props.closeModal()
            }
            primary > Play < /Button> <
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
    return {
        feePercentage: state.appReducer.get('feePercentage'),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapIntro);



// WEBPACK FOOTER //
// ./src/modules/intro/map.js