import React, {
    Component
} from 'react'
import styled from 'styled-components';
import Share from '../sidebar/share';

const Container = styled.div ``;

class Block extends Component {
    render() {
        return ( <
            Container >
            <
            div > Your transaction is currently being mined < span role = "img"
            aria - label = "" > 🚀 < /span></div >
            <
            div > Share with the world your new block: {
                this.props.name
            } < /div> <
            Share shareUrl = {
                `https://blocklord.co/#${this.props.key}`
            }
            opened / >
            <
            /Container>
        )
    }
}

export default Block;



// WEBPACK FOOTER //
// ./src/modules/components/confirmation.js