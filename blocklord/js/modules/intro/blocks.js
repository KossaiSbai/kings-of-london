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

class BlocksIntro extends Component {
    constructor(props) {
        super(props);
        this.doNotShow = this.doNotShow.bind(this);
    }

    doNotShow() {
        this.props.closeModal();
        localStorage.setItem('hideBlocksIntro', true);
    }

    render() {
        return ( <
            Container >
            <
            Title > This is the Blocks summary page < /Title> <
            div > Here you can find all your blocks as well as the most popular ones, here you can find: < /div> <
            div > < span role = "img"
            aria - label = "fist" > 👊 < /span>A list of all your blocks</div >
            <
            div > < span role = "img"
            aria - label = "rocket" > 🚀 < /span>The most popular blocks, based on the amount of visits they received.</div >
            <
            div > < span role = "img"
            aria - label = "money face" > 🤑 < /span>The most expensive blocks</div >
            <
            div > < span role = "img"
            aria - label = "mtrophy" > 🏆 < /span>The most recently purchased blocks</div >
            <
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
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(BlocksIntro);



// WEBPACK FOOTER //
// ./src/modules/intro/blocks.js