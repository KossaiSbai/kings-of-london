import React, {
    Component
} from 'react'
import {
    connect
} from 'react-redux';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import Input from '../components/input';
import PriceSelector from '../components/priceSelector';
import Button from '../components/button';
import {
    closeModal
} from '../../redux/app/actions';
import {
    buyBlock
} from '../../redux/tiles/actions';
import DropImage from '../components/dropImage';

ReactGA.initialize('UA-112834002-1');

const Container = styled.div `
  display: flex;
  flex-direction: ${props => props.column ? 'column':'row'};
  flex-wrap: wrap;
`;

const Title = styled.div `
  color: #3329a5;
  font-size: 2.5em;
`;

const Warning = styled.div `
    font-size: 0.7em;
    padding: 10px;
    border-radius: 2px;
    margin: 10px;
    background: #fff8cc;
    color: #d28d06;
`;

class BuyBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            url: '',
            imageURL: '',
        }

        this.buyBlock = this.buyBlock.bind(this);
    }

    buyBlock() {
        if (this.state.name && this.state.imageURL) {
            this.props.buyBlock(
                this.props.tile.key,
                this.state.price,
                this.state.name,
                this.state.description,
                this.state.url,
                this.state.imageURL,
                this.props.feePercentage,
            );
            this.props.closeModal();
        }
    }

    componentDidMount() {
        ReactGA.modalview('/buyBlock');
    }

    render() {
            const forSale = this.props.tile.tileData.get('forSale');
            const price = forSale ? forSale : this.props.tile.tileData.get('price') * 2;
            return ( <
                Container column >
                <
                Title > Buy Block < /Title> {
                    !forSale && < Warning > BUYOUT: The owner of this block has not set it up
                    for sale, but you can buy him out
                    for 2 x the price < /Warning>} <
                        Container >
                        <
                        Container column >
                        <
                        Input setValue = {
                            (e) => this.setState({
                                name: e
                            })
                        }
                    label = "Name (Required)"
                    placeholder = "Give your block a name" / >
                        <
                        Input setValue = {
                            (e) => this.setState({
                                description: e
                            })
                        }
                    label = "Description"
                    placeholder = "Give your block a short description" / >
                        <
                        Input setValue = {
                            (e) => this.setState({
                                url: e
                            })
                        }
                    label = "Link URL"
                    placeholder = "Give your block a url" / >
                        <
                        DropImage preview = {
                            this.state.imageURL
                        }
                    setImageURL = {
                        (e) => this.setState({
                            imageURL: e
                        })
                    }
                    className = "dropImage" / >
                        <
                        /Container> {
                            price > 0 && < PriceSelector buy setPrice = {
                                (e) => this.setState({
                                    price: e
                                })
                            }
                            initialPrice = {
                                price
                            }
                            /> } <
                            /Container> <
                            Container >
                                <
                                Button onClick = {
                                    () => this.props.closeModal()
                                } > Cancel < /Button> <
                                Button onClick = {
                                    () => this.buyBlock()
                                }
                            primary > Buy Block {
                                (this.state.price / 1000000000000000000).toFixed(4)
                            }
                            Ξ < /Button> <
                                /Container> <
                                /Container>
                        )
                }
            }

            const mapDispatchToProps = dispatch => {
                return {
                    dispatch,
                    closeModal: () => dispatch(closeModal()),
                    buyBlock: (key, price, name, description, url, image, feePercentage) => dispatch(buyBlock(key, price, name, description, url, image, feePercentage)),
                };
            }

            const mapStateToProps = state => {
                return {
                    tile: state.tileReducer.get('selectedTile'),
                    feePercentage: state.appReducer.get('feePercentage'),
                }
            }

            export default connect(mapStateToProps, mapDispatchToProps)(BuyBlock);



            // WEBPACK FOOTER //
            // ./src/modules/transactionForms/buyBlock.js