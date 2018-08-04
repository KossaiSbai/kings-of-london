import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import styled from 'styled-components';
import {
    selectTile
} from '../../redux/tiles/actions';

const BlockText = styled.div `
  font-size: 2em;
  color: #8b81ff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  z-index: 10;
  opacity: ${ props => props.selected ? 1 : 0};
  transition: all 0.2s;
  &:hover{
      opacity: 1;
  }
`;

const BlockContainer = styled.div `
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: transparent;
  border: ;
  transition: all 0.5s;
  border: ${ props => props.selected ? '2px solid #8b81ff' : '1px solid rgba(255,255,255,0.1)'};
  &:hover{
    border: 2px solid #8b81ff;
    background: rgba(0,0,0,0.3);
  }
`;

class Block extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
        }
    }

    setDragStartLocation(e) {
        this.setState({
            x: e.clientX,
            y: e.clientY,
        });
    }

    handleClickOnBlock(e) {
        if (e.clientX === this.state.x && e.clientY === this.state.y) {
            this.props.selectTile(this.props.tileKey, this.props.center);
            const [x, y] = this.props.tileKey.split(':');
            this.props.history.push({
                pathname: '/',
                search: `?x=${x}&y=${y}`,
            })
        }
    }

    render() {
        const selected = this.props.selectedTile && this.props.selectedTile.key === this.props.tileKey ? true : false;
        return ( <
            BlockContainer price = {
                this.props.getInitialPrice
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
            BlockText selected = {
                selected
            } > {
                this.props.initialPrice / 1000000000000000000
            }
            Ξ < /BlockText> <
            /BlockContainer>
        );
    }
}



const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        selectTile: (tileID, center) => dispatch(selectTile(tileID, center)),
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
        contract: state.web3Reducer.get('contract'),
        zoom: state.mapReducer.get('zoom'),
        initialPrice: state.appReducer.get('initialPrice'),
        selectedTile: state.tileReducer.get('selectedTile'),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Block);



// WEBPACK FOOTER //
// ./src/modules/maps/emptyBlock.js