import React, {
    Component
} from 'react';
import styled from 'styled-components';
import {
    connect
} from 'react-redux';
import ReactGA from 'react-ga';
import {
    getTransactions
} from '../../redux/app/actions';
import Transaction from './transactionItem';
import Loader from '../loader';
import {
    openModal
} from '../../redux/app/actions';
import Waterfall from './waterfall';
import Twitter from '../components/twitter';

ReactGA.initialize('UA-112834002-1');

const Container = styled.div `
    color: #555;
    font-family: 'Exo 2', sans-serif;
    height: 100%;
    overflow-y: scroll;
    width: 100%;
    background-image: linear-gradient(-225deg, #2CD8D5 0%, #6B8DD6 48%, #8E37D7 100%);
`;

const Empty = styled.div `
  background: white;
  border-radius: 4px;
  box-shadow: 0px 0px 5px rgba(0,0,0,0.3);
  margin: 10px;
  position: relative;
  display: flex;
  width:100%;
  height: 100px;
  width: 400px;
  justify-content: center;
  align-items:center;
  padding: 30px;
`;

const Title = styled.h1 `
  color: #3329a5;
  text-align: center;
  color: white;
`;

class Transactions extends Component {

    componentDidMount() {
        if (this.props.contract) this.props.getTransactions(this.props.account);
        ReactGA.pageview(this.props.location.pathname + this.props.location.search);
        if (!localStorage.hideTransactionIntro) this.props.openModal('showTransactionsIntro');
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.contract !== nextProps.contract || this.props.account !== nextProps.account) this.props.getTransactions(nextProps.account);
    }

    render() {
            if (!this.props.currentUser) return <Container style = {
                {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }
            } > < Twitter / > < /Container>
            const transactions = this.props.transactions;
            return ( <
                    Container > {
                        transactions && transactions.length > 0 && < Title > Last 30 days transactions < /Title>} {
                            !true && < Waterfall data = {
                                transactions
                            }
                            /> } {
                                !transactions && < Loader / >
                            } {
                                transactions && transactions.length > 0 && transactions.sort((a, b) => b.blockNumber - a.blockNumber)
                                    .map((i, key) => < Transaction key = {
                                            key
                                        }
                                        tx = {
                                            i
                                        }
                                        />)} {
                                            transactions && transactions.length === 0 && < Empty > < span role = "img"
                                            aria - label = "" > 😱 < /span> There have been no transactions in the last 30 days.</Empty >
                                        } <
                                        /Container>
                                    );
                            }
                        };

                        const mapDispatchToProps = dispatch => {
                            return {
                                dispatch,
                                getTransactions: (tileID, center, tileData) => dispatch(getTransactions(tileID, center, tileData)),
                                openModal: (e) => dispatch(openModal(e)),
                            };
                        }

                        const mapStateToProps = (state, ownProps) => {
                            return {
                                transactions: state.appReducer.get('transactions'),
                                currentUser: state.appReducer.get('currentUser'),
                                contract: state.web3Reducer.get('contract'),
                                account: state.web3Reducer.get('account'),
                            }
                        }

                        export default connect(mapStateToProps, mapDispatchToProps)(Transactions);



                        // WEBPACK FOOTER //
                        // ./src/modules/transactions/index.js