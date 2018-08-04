import React, {
    Component
} from 'react'
import styled from 'styled-components';
import {
    Link
} from 'react-router-dom';

const LineItem = styled(Link)
`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: space-between;
    text-decoration: none;
    color: #3329a5;
    padding: 6px 8px;
    border-top: 1px solid #efefef;
    transition: all 0.5s;
    &:nth-child(2) {
        border-top: none;
    }
    &:hover {
        z-index: 2;
        box-shadow: 0px 0px 8px rgba(0,0,0,0.2);
        color: white;
        background: #3329a5;
    }
`;

const LineDetail = styled.div `
    flex: 1;
    text-decoration: ${props => props.striked ? 'line-through' : 'none'};
`;

const Thumbnail = styled.div `
    height: 40px;
    width: 40px;
    border-radius: 2px;
    background: center center ${props => props.src ? `url(${props.src})` : 'http://ph-files.imgix.net/7388270d-2904-481e-abc6-6512140401cc'};
    background-size: cover;
    reapeat: no-repeat;
    margin-right: 10px;
`;


class PropertyItem extends Component {

    render() {
        if (!this.props.item) return null;
        const price = this.props.item ? this.props.item.get('finalPrice') : null;
        return ( <
            LineItem to = {
                `/?x=${this.props.item.get('x')}&y=${this.props.item.get('y')}`
            } >
            <
            Thumbnail src = {
                this.props.item.get('imageURL')
            }
            /> <
            LineDetail > {
                this.props.item.get('name') !== ' ' ? this.props.item.get('name') : 'Untitled Block'
            } < /LineDetail> {
                price && < LineDetail > {
                    (price / 1000000000000000000).toFixed(4)
                }
                Ξ < /LineDetail> } <
                    /LineItem>
            );
        }
    }

    export default PropertyItem;



    // WEBPACK FOOTER //
    // ./src/modules/blocksExplorer/propertyItem.js