import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import styled from 'styled-components';
import loader from '../loader/ethereum.svg';

const PendingContainer = styled.div `
  display: flex;
  flex-direction: column;
  z-index: 2;
  position: absolute;
  top: 10px;
  right: 10px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const PendingItem = styled.div `
  border-radius: 4px;
  background: white;
  box-shadow: 0px 0px 3px rgba(0,0,0,0.2);
  z-index: 11;
  flex: 1;
  display: flex;
  padding: 10px;
  margin: 0px 5px 5px 5px;
  align-items: center;
  justify-content: space-between;
`;

const Spinner = styled.img `
  height: 36px;
  width: 36px;
  margin-left: 10px;
  align-self: flex-end;
`;

class PendingTiles extends Component {
    render() {
            const pending = this.props.pending.map((i, index) => < PendingItem key = {
                    index
                } > {
                    i.type
                }: {
                    i.key
                } in progress < Spinner src = {
                    loader
                }
                className = "spinner"
                alt = "spinner" / > < /PendingItem>);
                return ( <
                    PendingContainer className = "pending" > {
                        pending
                    } <
                    /PendingContainer>);
                }
            }

            const mapDispatchToProps = dispatch => {
                return {
                    dispatch,
                };
            }

            const mapStateToProps = state => {
                return {
                    // contract: state.web3Reducer.get('contract'),
                    pending: state.tileReducer.get('pending'),
                }
            }

            export default connect(mapStateToProps, mapDispatchToProps)(PendingTiles);



            // WEBPACK FOOTER //
            // ./src/modules/pending/index.js