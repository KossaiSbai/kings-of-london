import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import {
    scaleLinear
} from "d3-scale";
import styled, {
    keyframes
} from 'styled-components';
import {
    selectTile,
    increaseBlockCount
} from '../../redux/tiles/actions';

const fadeInOut = keyframes `
  0% {
    opacity: 0.4;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.4;
  }
`;

const BlockBackground = styled.div `
  transition: all 0.3s;
  background: ${props => props.price ? color(props.price) : 'transparent' };
  height: 100%;
  width: 100%;
  opacity: 0.2;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${fadeInOut} 2s ease-out infinite;
  &:hover {
    opacity: 0.5;
  }
`;

const Image = styled.div `
    width: 100%;
    height: 100%;
    z-index: 9;
    opacity: 0.7;
    background: url(${props => props.img}) center center;
    background-size: cover;
    transition: all 0.2s;
    position: absolute;
    animation: ${fadeInOut} 2s ease-out infinite;
`;

const BlockContainer = styled.div `
    display: flex;
    flex: 1;
    align-items: center;
    flex-direction: column;
    border: ${ props => props.selected ? '2px solid #3329a5' : '1px solid rgba(255,255,255,0.1)'};
    &:hover {
        & > .zoomButton, .image {
            opacity: 1;
        }
    }
`;

const BlockText = styled.div `
  justify-content: center;
  align-items: center;
  font-size: 2em;
  color: ${props => color(props.price)};
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  opacity: 0;
  transition: all 0.2s;
  &:hover{
      opacity: 1;
  }
`;


const color = scaleLinear()
    .domain([2000000000000000, 4000000000000000, 8000000000000000, 16000000000000000, 32000000000000000, 64000000000000000, 128000000000000000, 256000000000000000])
    .range(["#2c7bb6", "#00a6ca", "#00ccbc", "#90eb9d", "#ffff8c", "#f9d057", "#f29e2e", "#e76818", "#d7191c"]);

class Block extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
        }
        this.handleClickOnBlock = this.handleClickOnBlock.bind(this);
    }

    setDragStartLocation(e) {
        this.setState({
            x: e.clientX,
            y: e.clientY,
        });
    }

    handleClickOnBlock(e) {
        if (e.clientX === this.state.x && e.clientY === this.state.y) {
            this.props.selectTile(this.props.tileKey, this.props.center, this.props.tile);
            const [x, y] = this.props.tileKey.split(':');
            this.props.history.push({
                pathname: '/',
                search: `?x=${x}&y=${y}`,
            });
            this.props.increaseBlockCount(this.props.results[0]);
        }
    }

    render() {
        const selected = this.props.selectedTile && this.props.selectedTile.tileData && this.props.tile && this.props.selectedTile.tileData.id === this.props.tile.id ? true : false;
        const price = this.props.results[0].get('forSale') ? this.props.results[0].get('forSale') : this.props.results[0].get('price') * 2;
        return ( <
            BlockContainer price = {
                price
            }
            onMouseDown = {
                (e) => this.setDragStartLocation(e)
            }
            selected = {
                selected
            }
            onClick = {
                (e) => this.handleClickOnBlock(e)
            }
            className = "tileComponent" >
            <
            Image className = "image"
            img = {
                this.props.results[0].get('imageURL')
            }
            /> <
            BlockText price = {
                price
            } > {
                (price / 1000000000000000000).toFixed(3)
            }
            Ξ < /BlockText> <
            BlockBackground price = {
                price
            }
            /> <
            /BlockContainer>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        selectTile: (tileID, center, tileData) => dispatch(selectTile(tileID, center, tileData)),
        increaseBlockCount: (block) => dispatch(increaseBlockCount(block)),
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
        contract: state.web3Reducer.get('contract'),
        zoom: state.mapReducer.get('zoom'),
        selectedTile: state.tileReducer.get('selectedTile'),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Block);



// WEBPACK FOOTER //
// ./src/modules/maps/block.js