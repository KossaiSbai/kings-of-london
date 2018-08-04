import React, {
    Component
} from 'react'
import styled from 'styled-components';
import {
    Link
} from 'react-router-dom';
import Web3 from 'web3';
const web3 = new Web3(Web3.givenProvider);

const TransactionContainer = styled(Link)
`
  background: #fafafa;
  border-radius: 4px;
  box-shadow: 0px 0px 5px rgba(0,0,0,0.3);
  margin: 10px auto;
  position: relative;
  display: flex;
  max-width: 800px;
  opacity: 0.9;
  text-decoration: none;
  transition: all 0.3s;
  color: #444;
  &:hover {
    background: white;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.6);
    opacity: 1;
    margin-top: -1px;
    padding: 10px;
  }
`;

const Image = styled.div `
  background: url('${props => props.image}') center center;
  height: 100px;
  width: 100px;
  background-size: cover;
  margin-right: 10px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

const Badge = styled.div `
  background: #0b3356;
  color: white;
  position: absolute;
  top:0;
  right: 0;
  padding: 5px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
`;

const Info = styled.div `
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-around;
`;

const Amount = styled.div `
  font-size: 1.3em;
  color: ${props => props.value < 0 ? '#da3b3b' : '#75ad75'}
`;

const Title = styled.h3 `
  margin: 10px;
`;

const getTemplate = tx => {
    switch (tx.event) {
        case 'WithdrawBalance':
            return {
                name: 'Withdrawal',
                value: 0 - tx.returnValues.amount,
                show: true
            };
        case 'BoughtBlock':
            return {
                name: 'Bought Block',
                value: 0 - tx.returnValues.price,
                show: true
            };
        case 'SoldBlock':
            return {
                name: 'Sold Block',
                value: 0 + tx.returnValues.oldPrice,
                show: true
            };
        case 'UnsetBlockForSale':
            return {
                name: 'Cancel Sale',
                show: true
            };
        case 'SetBlockForSale':
            return {
                name: 'Set Block For Sale',
                value: tx.returnValues.price,
                show: false
            };
        case 'CreatedBlock':
            return {
                name: 'Bought Block',
                value: 0 - tx.returnValues.price,
                show: true
            };
        case 'AllowanceGranted':
            return {
                name: 'Bought Block',
                value: 0 + tx.returnValues.price,
                show: false
            };
        default:
            return {};
    }
}

class Transaction extends Component {
    render() {
            const tx = this.props.tx;
            const template = getTemplate(tx);
            const values = tx.returnValues;
            if (!template.show) return false;
            const link = values.x ? `/?x=${values.x}&y=${values.y}` : '/balance';
            return ( <
                    TransactionContainer to = {
                        link
                    } > {!values.x && < Image image = "https://ph-files.imgix.net/7388270d-2904-481e-abc6-6512140401cc" / >
                    } {
                        values.x && < Image image = {
                            values.imageURL ? web3.utils.toUtf8(values.imageURL) : `https://cartodb-basemaps-b.global.ssl.fastly.net/light_all/17/${values.x}/${values.y}.png`
                        }
                        />} <
                        Info >
                            <
                            Badge > {
                                template.name
                            } {
                                !isNaN(template.value) ? < Amount value = {
                                    template.value
                                } > {
                                    (template.value / 1000000000000000000).toFixed(5)
                                }
                                Ξ < /Amount> : null}</Badge > {
                                    values.name && < Title > {
                                        web3.utils.toUtf8(values.name)
                                    } < /Title>} {
                                        values.description && < div > {
                                            web3.utils.toUtf8(values.description)
                                        } < /div>} {
                                            values.url && < div > {
                                                    web3.utils.toUtf8(values.url)
                                                } < /div>} <
                                                /Info> <
                                                /TransactionContainer>
                                        );
                                    }
                                };

                                export default Transaction;



                                // WEBPACK FOOTER //
                                // ./src/modules/transactions/transactionItem.js