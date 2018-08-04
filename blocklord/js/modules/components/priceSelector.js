import React, {
    Component
} from 'react';
import styled from 'styled-components';

const Price = styled.div `
    font-size: 3em;
    color: #75ad75;
    text-align: center;
    width: 200px;
`;

const MiniTitle = styled.h4 `
  color: #3329a5;
  line-height: 1.2em;
`;

const Small = styled.div `
  max-width: 300px;
`;

const Button = styled.div `
    background: ${props => props.disabled ? '#ccc' : '#75ad75'};
    height: 40px;
    width: 40px;
    line-height: 32px;
    border-radius: 20px;
    text-align: center;
    color: white;
    font-size: 40px;
    cursor: ${props => props.disabled ? 'default' : 'pointer' };
    margin: 10px;
    transition: all 0.2s;
    &:hover{
        box-shadow: -2px 2px 5px rgba(0,0,0,0.2);
        background: ${props => props.disabled ? '#ccc' : '#42908a'};
    }
`;

const Container = styled.div `
    display: flex;
    padding: 30px;
    flex-direction: ${props => props.column ? 'column' : 'row'};
    flex: 1;
    justify-content: center;
`;

let interval = null;

class PriceSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: props.initialPrice,
            conversion: null,
        }
        this.UpPrice = this.UpPrice.bind(this);
        this.LowerPrice = this.LowerPrice.bind(this);
        this.handlePress = this.handlePress.bind(this);
        this.getConversionRate = this.getConversionRate.bind(this);
    }

    componentWillMount() {
        this.props.setPrice(this.props.initialPrice);
        this.getConversionRate();
    }

    getConversionRate() {
        fetch('https://api.coinmarketcap.com/v1/ticker/ethereum/')
            .then(res => res.json())
            .then(res => this.setState({
                conversion: parseInt(res[0].price_usd, 10)
            }));

    }

    UpPrice() {
        if (this.props.buy || (this.props.sell && this.state.price < this.props.initialPrice * 2)) {
            const newPrice = this.state.price + this.props.initialPrice * 0.1;
            this.setState({
                price: newPrice
            });
            this.props.setPrice(newPrice);
        }
    }

    LowerPrice() {
        if ((this.state.price > this.props.initialPrice) || (this.props.buy && this.state.price > this.props.initialPrice) || (this.props.sell && this.state.price > 0)) {
            const newPrice = this.state.price - this.props.initialPrice * 0.1;
            this.setState({
                price: newPrice
            });
            this.props.setPrice(newPrice);
        }
    }

    handlePress(direction, ev) {
        if (direction === 'up' && ev === 'started') {
            interval = setInterval(this.UpPrice, 70);
        } else if (direction === 'down' && ev === 'started') {
            interval = setInterval(this.LowerPrice, 70);
        } else if (ev === 'ended') {
            clearInterval(interval);
            interval = null;
        }
    }

    render() {
            const lowDisabled = (this.props.buy && this.state.price <= this.props.initialPrice);
            const upDisabled = this.props.sell && this.state.price >= this.props.initialPrice * 1.9;

            console.log(this.props.showBBL);
            return ( <
                Container column >
                <
                Price > {
                    (this.state.price / 1000000000000000000).toFixed(5)
                }
                Ξ < /Price> <
                Container >
                <
                Button disabled = {
                    upDisabled
                }
                onMouseDown = {
                    (e) => this.handlePress('up', 'started')
                }
                onMouseUp = {
                    (e) => this.handlePress('up', 'ended')
                }
                onClick = {
                    this.UpPrice
                } > + < /Button> <
                Button onMouseDown = {
                    (e) => this.handlePress('down', 'started')
                }
                onMouseUp = {
                    (e) => this.handlePress('down', 'ended')
                }
                disabled = {
                    lowDisabled
                }
                onClick = {
                    this.LowerPrice
                } > - < /Button> <
                /Container> {
                    this.props.showBBL && < div >
                        <
                        MiniTitle > BBL Tokens Airdrop < /MiniTitle> <
                        Small > Earn free BBL tokens and access to the presale
                    for bubbled.io!With this purchase you will get: < /Small> <
                        br / >
                        <
                        Small > Est.BBL Tokens: < span style = {
                            {
                                color: '#75ad75'
                            }
                        } > {
                            (this.state.conversion * this.state.price / 1000000000000000000 / 0.0567).toFixed(0)
                        } < /span></Small >
                        <
                        Small > Est.parcels on Bubbled.io: < span style = {
                            {
                                color: '#75ad75'
                            }
                        } > {
                            (this.state.conversion * this.state.price / 1000000000000000000 / 2.99).toFixed(1)
                        } < /span></Small >
                        <
                        /div>} <
                        /Container>);
                }
            }

            export default PriceSelector;



            // WEBPACK FOOTER //
            // ./src/modules/components/priceSelector.js