import React, {
    Component
} from 'react';
import {
    scaleLinear
} from "d3-scale";
import styled, {
    keyframes
} from 'styled-components';
import {
    connect
} from 'react-redux';
import {
    selectTile,
    increaseBlockCount
} from '../../redux/tiles/actions';
import {
    findAndSelectBlock
} from '../../redux/map/actions';

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
  position: absolute;
  top: 0;
  left: 0;
  animation: ${fadeInOut} 2s ease-out infinite;
`;

const Image = styled.div `
    width: 100%;
    height: 100%;
    z-index: 9;
    opacity: 0.6;
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
    position: relative;
    border: ${ props => props.selected ? '2px solid #3329a5' : '1px solid rgba(255,255,255,0.1)'};
    &:hover {
        & > .zoomButton, .image {
            opacity: 1;
        }
    }
`;

const ZoomTo = styled.div `
    color: white;
    background: #3329a5;
    padding: 5px 0px;
    border-radius: 2px;
    z-index: 10;
    margin-bottom: 10px;
    opacity: 0;
    transition: all 0.3s;
    position: absolute;
    bottom: -9px;
    width: 100%;
    text-align: center;
`;

const Badge = styled.div `
  width: 60px;
  height: 20px;
  background: #da3b3b;
  border-radius: 10px;
  color: white;
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Exo 2', sans-serif;
  z-index: 99;
  padding: 0px 4px;
`;

const color = scaleLinear()
    .domain([2000000000000000, 4000000000000000, 8000000000000000, 16000000000000000, 32000000000000000, 64000000000000000, 128000000000000000, 256000000000000000])
    .range(["#2c7bb6", "#00a6ca", "#00ccbc", "#90eb9d", "#ffff8c", "#f9d057", "#f29e2e", "#e76818", "#d7191c"]);

const avg = (data, key) => {
    const average = data.reduce((all, item) => {
        all.count++;
        all.total += item.get(key);
        return all;
    }, {
        total: 0,
        count: 0
    });
    return average.total / average.count;
};

class BlockGroup extends Component {
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

    handleClickOnBlock(e, block) {
        if (e.clientX === this.state.x && e.clientY === this.state.y) {
            const key = `${block.get('x')}:${block.get('y')}`;
            this.props.findAndSelectBlock(key, true);
            this.props.selectTile(key, this.props.center, block);
            this.props.increaseBlockCount(this.props.results[0]);
        }
    }

    render() {
            const first = this.props.results[0];
            const key = first ? "?x=" + first.get('x') + "&y=" + first.get('y') : null;
            return ( <
                BlockContainer onMouseDown = {
                    (e) => this.setDragStartLocation(e)
                }
                onClick = {
                    (e) => this.handleClickOnBlock(e, first)
                } > {
                    this.props.results && this.props.results.length > 0 && < Badge > {
                        this.props.results.length
                    }
                    blocks < /Badge> } {
                        key && < ZoomTo className = "zoomButton"
                        onClick = {
                                () => this.props.history.push(`/${key}`)
                            } > Zoom To Block < /ZoomTo>} <
                            Image className = "image"
                        img = {
                            this.props.results[0] ? this.props.results[0].get('imageURL') : null
                        }
                        /> <
                        BlockBackground className = "blockGroup"
                        price = {
                            avg(this.props.results, 'price')
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
                    findAndSelectBlock: (key, keepZoomedOut) => dispatch(findAndSelectBlock(key, keepZoomedOut)),
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

            export default connect(mapStateToProps, mapDispatchToProps)(BlockGroup);



            // WEBPACK FOOTER //
            // ./src/modules/maps/blockGroup.js