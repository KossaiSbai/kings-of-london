import React, {
    Component
} from 'react'
import {
    connect
} from 'react-redux';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import {
    fetchProperties,
    fetchMostExpensive,
    fetchMostPopular,
    fetchLatest
} from '../../redux/app/actions';
import {
    openModal
} from '../../redux/app/actions';
import PropertyItem from './propertyItem';

ReactGA.initialize('UA-112834002-1');

const Container = styled.div `
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    color: #555;
    font-family: 'Exo 2', sans-serif;
    overflow-y: scroll;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    background-image: linear-gradient(-225deg, #2CD8D5 0%, #6B8DD6 48%, #8E37D7 100%);
`;

const Card = styled.div `
    padding: 0px 8px;
    background: white;
    border-radius: 4px;
    flex: 1;
    display: flex;
    flex-direction: column;
    font-size: 0.9em;
    align-items: center;
    box-shadow: 0px 0px 4px rgba(0,0,0,0.2);
    transition: all 0.5s;
    &:hover{
        box-shadow: -2px 2px 8px rgba(0,0,0,0.2);
    }
    margin: 20px 10px;
    @media (max-width: 560px) {
      &.OnlyDesktop {
        display: none;
      }
    }
`;

const LineItem = styled.div `
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: space-between;
    text-decoration: none;
    color: #444;
    padding: 6px 5px;
`;

const LineDetail = styled.div `
    flex: 1;
    font-weight: bold;
`;


class BlockExplorer extends Component {

    componentWillMount() {
        this.props.fetchProperties(this.props.account);
        this.props.fetchMostExpensive();
        this.props.fetchMostPopular();
        this.props.fetchLatest();
    }

    componentWillUpdate(nextProps) {
        if (this.props.account !== nextProps.account) {
            this.props.fetchProperties(nextProps.account);
        }
    }

    componentDidMount() {
        ReactGA.pageview(this.props.location.pathname + this.props.location.search);
        if (!localStorage.hideBlocksIntro) this.props.openModal('showBlocksIntro');
    }

    render() {
            return ( <
                    Container >
                    <
                    Card className = "OnlyDesktop" >
                    <
                    h3 > My Blocks < span role = "img"
                    aria - label = "" > 👊 < /span></h
                    3 >
                    <
                    LineItem >
                    <
                    LineDetail > Block Name < /LineDetail> <
                    LineDetail > For Sale at < /LineDetail> <
                    /LineItem> {
                        this.props.properties && this.props.properties.map((item, index) => item ? < PropertyItem key = {
                                    index
                                }
                                item = {
                                    item
                                }
                                /> : null)} <
                                /Card> <
                                Card >
                                <
                                h3 > Most Popular < span role = "img"
                                aria - label = "" > 🚀 < /span></h
                                3 >
                                <
                                LineItem >
                                <
                                LineDetail > Block Name < /LineDetail> <
                                LineDetail > For Sale at < /LineDetail> <
                                /LineItem> {
                                    this.props.mostPopular && this.props.mostPopular.map((item, index) => item ? < PropertyItem key = {
                                                index
                                            }
                                            item = {
                                                item.get('block')
                                            }
                                            /> : null)} <
                                            /Card> <
                                            Card >
                                            <
                                            h3 > Most Expensive < span role = "img"
                                            aria - label = "" > 🤑 < /span></h
                                            3 >
                                            <
                                            LineItem >
                                            <
                                            LineDetail > Block Name < /LineDetail> <
                                            LineDetail > For Sale at < /LineDetail> <
                                            /LineItem> {
                                                this.props.mostExpensive && this.props.mostExpensive.map((item, index) => item ? < PropertyItem key = {
                                                        index
                                                    }
                                                    item = {
                                                        item
                                                    }
                                                    /> : null)} <
                                                    /Card> <
                                                    Card >
                                                    <
                                                    h3 > Most Recent < span role = "img"
                                                    aria - label = "" > 🏆 < /span></h
                                                    3 >
                                                    <
                                                    LineItem >
                                                    <
                                                    LineDetail > Block Name < /LineDetail> <
                                                    LineDetail > For Sale at < /LineDetail> <
                                                    /LineItem> {
                                                        this.props.latest && this.props.latest.map((item, index) => item ? < PropertyItem key = {
                                                                index
                                                            }
                                                            item = {
                                                                item
                                                            }
                                                            /> : null)} <
                                                            /Card> <
                                                            /Container>
                                                        );
                                                    }
                                                }


                                                const mapDispatchToProps = dispatch => {
                                                    return {
                                                        dispatch,
                                                        fetchProperties: (account) => dispatch(fetchProperties(account)),
                                                        fetchMostExpensive: (account) => dispatch(fetchMostExpensive(account)),
                                                        fetchMostPopular: (account) => dispatch(fetchMostPopular(account)),
                                                        fetchLatest: (account) => dispatch(fetchLatest(account)),
                                                        openModal: (e) => dispatch(openModal(e)),
                                                    };
                                                }

                                                const mapStateToProps = state => {
                                                    return {
                                                        account: state.web3Reducer.get('account'),
                                                        properties: state.appReducer.get('properties'),
                                                        mostExpensive: state.appReducer.get('mostExpensive'),
                                                        mostPopular: state.appReducer.get('mostPopular'),
                                                        latest: state.appReducer.get('latest'),
                                                    }
                                                }

                                                export default connect(mapStateToProps, mapDispatchToProps)(BlockExplorer);



                                                // WEBPACK FOOTER //
                                                // ./src/modules/blocksExplorer/index.js