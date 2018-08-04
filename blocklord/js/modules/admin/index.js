import React, {
    Component
} from 'react'
import {
    connect
} from 'react-redux';
import styled from 'styled-components';
import ValueChange from '../components/adminValueChange';
import GiveAllowance from '../components/giveAllowance';
import {
    grantAllowance
} from '../../redux/app/actions';

const Container = styled.div `
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    color: #555;
    font-family: 'Exo 2', sans-serif;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

class Admin extends Component {
    componentWillUpdate(nextProps) {
        if (nextProps.mainAddress && nextProps.account && nextProps.mainAddress !== nextProps.account) {
            this.props.history.push('/');
        }
    }

    render() {
        return ( <
            Container > {
                this.props.initialPrice &&
                <
                ValueChange type = "ETH"
                value = {
                    this.props.initialPrice
                }
                label = "Initial Price" / >
            } {
                this.props.feePercentage &&
                    <
                    ValueChange type = "PERCENTAGE"
                value = {
                    this.props.feePercentage * 100
                }
                label = "Fee Percentage" / >
            } <
            GiveAllowance grantAllowance = {
                this.props.grantAllowance
            }
            /> <
            /Container>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        grantAllowance: (address, amount) => dispatch(grantAllowance(address, amount)),
    };
}

const mapStateToProps = state => {
    return {
        account: state.web3Reducer.get('account'),
        mainAddress: state.appReducer.get('mainAddress'),
        feePercentage: state.appReducer.get('feePercentage'),
        initialPrice: state.appReducer.get('initialPrice'),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);



// WEBPACK FOOTER //
// ./src/modules/admin/index.js