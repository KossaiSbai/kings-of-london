import React, {
    Component
} from 'react'
import {
    connect
} from 'react-redux';
import styled from 'styled-components';
import {
    NavLink,
    withRouter,
    Link
} from 'react-router-dom';
import qs from 'query-string';
import Logo from './logo';
import Search from '../search';
import {
    findUserLocation,
    findAndSelectBlock,
    fetchAllBlocks
} from '../../redux/map/actions';
import {
    getInitialPrice,
    getCurrentBalance,
    getFeePercentage,
    getMainAccount,
    getMyAllowance,
    fetchCurrentUser
} from '../../redux/app/actions';
import {
    loadContract,
    getNetworkID
} from '../../redux/web3/actions';
import Modal from '../modal';
import NotConnected from './notConnected';

const Bar = styled.div `
    height: 60px;
    background: white;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.5);
    width: 100%;
    flex-direction: row;
    display: flex;
    align-items: center;
    z-index: 99;
    font-family: 'Exo 2', sans-serif;
`;

const LogoContainer = styled.div `
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #3329a5;
    align-self: flex-start;
    padding: 0px 10px;
`;

const BL = styled.div `
    color: white;
    margin-left: 20px;
    font-size: 1.4em;
    font-weight: lighter;
    @media (max-width: 690px) {
      display: none;
    }
`;

const NavButton = styled(NavLink)
`
    text-decoration: none;
    border-bottom: none;
    color: #aaa;
    height: 100%;
    padding: 0px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s;
    &:hover{
        color: #857de2;
    }
    &.activeClassName {
      color: #3329a5;
      height: 90%;
      border-bottom: 5px solid #3329a5;
    }
    @media (max-width: 560px) {
        &.onlyDesktop{
            display: none;
        }
        &.activeClassName {
          display: none;
        }
        padding: 0 8px;
        font-size: 0.9em;
    }
`;

const Spacer = styled.div `
    flex: 1;
`;

class TopBar extends Component {

    componentWillMount() {
        const parsed = this.props.location.search ? qs.parse(this.props.location.search) : null;
        this.props.loadContract();
        if (parsed && parsed.x && parsed.y) {
            const block = `${parsed.x}:${parsed.y}`;
            this.props.findAndSelectBlock(block);
        } else {
            this.props.findUserLocation();
        }
    }

    componentWillUpdate(nextProps) {
        if (this.props.web3.get('contract') !== nextProps.web3.get('contract')) {
            this.props.getInitialPrice();
            this.props.getFeePercentage();
            this.props.getCurrentBalance();
            this.props.getMyAllowance();
            this.props.getNetworkID();
            this.props.getMainAccount();
            this.props.fetchAllBlocks();
            this.props.fetchCurrentUser();
        }
        if (nextProps.location.search) {
            const block = nextProps.location.search.replace('?x=', '').replace('&y=', ':');
            this.props.findAndSelectBlock(block);
        }
    }

    render() {
            return ( <
                    Bar >
                    <
                    Modal / >
                    <
                    Link style = {
                        {
                            display: 'block',
                            height: '100%',
                            textDecoration: 'none'
                        }
                    }
                    to = '/' > < LogoContainer >
                    <
                    Logo / >
                    <
                    BL > Blocklord < /BL> <
                    /LogoContainer></Link > {
                        this.props.location.pathname === '/' && < Search history = {
                            this.props.history
                        }
                        /> } {
                            this.props.location.pathname !== '/' && < Spacer / >
                        } <
                        NavButton exact activeClassName = "activeClassName"
                        to = "/" > Explore < /NavButton> {
                            this.props.account && < NavButton className = "onlyDesktop"
                            activeClassName = "activeClassName"
                            to = "/transactions" > My Transactions < /NavButton>} <
                                NavButton activeClassName = "activeClassName"
                            to = "/blockexplorer" > Leaderboard < /NavButton> {
                                this.props.account && < NavButton className = "onlyDesktop"
                                activeClassName = "activeClassName"
                                to = "/balance" > {
                                    (this.props.balance / 1000000000000000000).toFixed(3)
                                }
                                Ξ < /NavButton>} {
                                        !this.props.account && < NotConnected className = "onlyDesktop" / >
                                    } <
                                    NavButton exact activeClassName = "activeClassName"
                                className = "onlyDesktop"
                                to = "/faqs" > FAQs < /NavButton> <
                                    /Bar>
                            );
                        }
                    }

                    const mapDispatchToProps = dispatch => {
                        return {
                            dispatch,
                            loadContract: () => dispatch(loadContract()),
                            getInitialPrice: () => dispatch(getInitialPrice()),
                            getFeePercentage: () => dispatch(getFeePercentage()),
                            getMainAccount: () => dispatch(getMainAccount()),
                            getNetworkID: () => dispatch(getNetworkID()),
                            getMyAllowance: (account) => dispatch(getMyAllowance(account)),
                            getCurrentBalance: () => dispatch(getCurrentBalance()),
                            findUserLocation: () => dispatch(findUserLocation()),
                            findAndSelectBlock: (e) => dispatch(findAndSelectBlock(e)),
                            fetchAllBlocks: () => dispatch(fetchAllBlocks()),
                            fetchCurrentUser: () => dispatch(fetchCurrentUser()),
                        };
                    }

                    const mapStateToProps = state => {
                        return {
                            account: state.web3Reducer.get('account'),
                            balance: state.appReducer.get('balance'),
                            web3: state.web3Reducer,
                            currentUser: state.appReducer.get('currentUser'),
                        }
                    }

                    export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopBar));



                    // WEBPACK FOOTER //
                    // ./src/modules/topBar/index.js