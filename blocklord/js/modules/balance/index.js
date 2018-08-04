import React, {
    Component
} from 'react'
import {
    connect
} from 'react-redux';
import styled from 'styled-components';
import {
    Link
} from 'react-router-dom';
import ReactGA from 'react-ga';
import {
    withdraw,
    fetchProperties,
    getMyAllowance
} from '../../redux/app/actions';
import {
    openModal
} from '../../redux/app/actions';
import Twitter from '../components/twitter';

ReactGA.initialize('UA-112834002-1');

const Container = styled.div `
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    color: #555;
    font-family: 'Exo 2', sans-serif;
    overflow: hidden;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    background-image: linear-gradient(-225deg, #2CD8D5 0%, #6B8DD6 48%, #8E37D7 100%);
    justify-content: center;
    align-items: center;
`;

const BalanceAmount = styled.div `
    font-size: 3em;
    color: #75ad75;
`;

const BalanceDescription = styled.div `
    font-size: 1.5em;
    color: #75ad75;
`;

const PropertyAmount = styled.div `
    font-size: 3em;
    color: #5196b9;
`;

const PropertyDescription = styled.div `
    font-size: 1.5em;
    color: #5196b9;
`;

const Withdraw = styled.div `
    font-size: 1em;
    color: #75ad75;
    border-radius: 20px;
    padding: 10px 20px;
    border: 1px solid #75ad75;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.5s;
    &:hover{
        box-shadow: -2px 2px 8px rgba(0,0,0,0.2);
        background: #75ad75;
        color: white;
    }
`;

const Portfolio = styled(Link)
`
    font-size: 1em;
    color: #5196b9;
    border-radius: 20px;
    padding: 10px 20px;
    border: 1px solid #5196b9;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.5s;
    text-decoration: none;
    &:hover{
        box-shadow: -2px 2px 8px rgba(0,0,0,0.2);
        background: #5196b9;
        color: white;
    }
`;

const Card = styled.div `
    padding: 30px;
    background: white;
    border-radius: 4px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 4px rgba(0,0,0,0.2);
    transition: all 0.5s;
    &:hover{
        box-shadow: -2px 2px 8px rgba(0,0,0,0.2);
    }
    margin: 20px;
`;

class Balance extends Component {

    componentWillMount() {
        this.props.fetchProperties(this.props.account);
    }

    componentWillUpdate(nextProps) {
        if (this.props.account !== nextProps.account) {
            this.props.fetchProperties(nextProps.account);
        }
    }

    componentDidMount() {
        ReactGA.pageview(this.props.location.pathname + this.props.location.search);
        if (!localStorage.hideBalanceIntro) this.props.openModal('showBalanceIntro');
    }

    render() {
        if (!this.props.currentUser) return <Container > < Twitter / > < /Container>
        const totalPortfolio = this.props.properties ? this.props.properties.reduce((sum, item) => {
            sum += item.get('finalPrice');
            return sum;
        }, 0) : 0;

        const propertyDesc = this.props.properties ? `Value of your ${this.props.properties.length} blocks.` : `You don't own any block! Time to go shopping!`
        return ( <
            Container >
            <
            Card >
            <
            BalanceAmount > {
                (this.props.balance / 1000000000000000000).toFixed(6)
            }
            Ξ < /BalanceAmount> <
            BalanceDescription > Your liquid balance. < /BalanceDescription> <
            Withdraw onClick = {
                () => this.props.withdraw()
            } > Withdraw Balance < /Withdraw> <
            /Card> <
            Card >
            <
            PropertyAmount > {
                (totalPortfolio / 1000000000000000000).toFixed(6)
            }
            Ξ < /PropertyAmount> <
            PropertyDescription > {
                propertyDesc
            } < /PropertyDescription> <
            Portfolio to = "/blockexplorer" > Go to Portfolio < /Portfolio> <
            /Card> {
                this.props.allowance > 0 &&
                    <
                    Card >
                    <
                    BalanceAmount > {
                        this.props.allowance
                    } < /BalanceAmount> <
                    BalanceDescription > Your Early User Allowance < /BalanceDescription> <
                    /Card> } <
                    /Container>
            );
        }
    }


    const mapDispatchToProps = dispatch => {
        return {
            dispatch,
            withdraw: () => dispatch(withdraw()),
            fetchProperties: (account) => dispatch(fetchProperties(account)),
            getMyAllowance: () => dispatch(getMyAllowance()),
            openModal: (e) => dispatch(openModal(e)),
        };
    }

    const mapStateToProps = state => {
        return {
            account: state.web3Reducer.get('account'),
            balance: state.appReducer.get('balance'),
            allowance: state.appReducer.get('allowance'),
            properties: state.appReducer.get('properties'),
            currentUser: state.appReducer.get('currentUser'),
        }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(Balance);



    // WEBPACK FOOTER //
    // ./src/modules/balance/index.js