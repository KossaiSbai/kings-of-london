import React, {
    Component
} from 'react'
import {
    connect
} from 'react-redux';
import styled from 'styled-components';
import {
    randomBlock
} from '../../redux/map/actions';

const RandomButton = styled.div `
    background: #da3b3b;
    box-shadow: -5px 5px 10px rgba(0,0,0,0.4);
    height: 60px;
    width: 130px;
    position: absolute;
    border-radius: 40px;
    top: -80px;
    right: 20px;
    transition: all 0.5s;
    cursor: pointer;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

class Random extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.randomBlock();
    }
    render() {
        return ( <
            RandomButton onClick = {
                () => this.handleClick()
            } > < span aria - label = "danger - teleportation"
            role = "img" > ⚡I feel lucky! < /span> <
            /RandomButton>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        randomBlock: (tileID, price, name, description, url, imageURL, center) => dispatch(randomBlock(tileID, price, name, description, url, imageURL, center)),
    };
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Random);



// WEBPACK FOOTER //
// ./src/modules/sidebar/random.js