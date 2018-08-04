import React, {
    Component
} from 'react'
import {
    connect
} from 'react-redux';
import {
    Link
} from 'react-router-dom';
import styled from 'styled-components';
import anchorme from 'anchorme';
import SideBarActions from './sideBarActions';
import RandomButton from './random';
import Share from './share';
import {
    getUpvotes
} from '../../redux/tiles/actions';


// NOTE left: 0 and right: 0 are a fix for safari absolute positioning
const SideB = styled.div `
    background: white;
    z-index: 10;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.3);
    font-size: 1em;
    font-family: 'Exo 2', sans-serif;
    display: flex;
    flex-direction: row;
    transition: all 0.5s;
    width: 100%;
    height: 280px;
    position: absolute;
    left: 0;
    bottom: 0;
    bottom: ${props => props.open ? '0px' : '-280px'};
    justify-content space-between;
`;

const Image = styled.div `
    background: url('${props => props.image}') center center;
    background-size: cover;
    height: 260px;
    width: 260px;
    margin: 10px;
    border-radius: 2px;
    @media (max-width: 600px) {
      display: none;
    }
`;

const Details = styled.div `
    display: flex;
    flex-direction: column;
    margin: 10px;
    flex: 1;
`;

const Close = styled.svg `
    height: 12px;
    width: 12px;
    margin: 10px;
    padding: 10px;
    cursor: pointer;
    stroke: grey;
    transition: all 0.5s;
    &:hover{
        stroke: #3329a5;
    }
`;

const Title = styled.h2 `
  color: #3329a5;
`;

const MobileMessage = styled.div `
  color: #3329a5;
`;

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            upvotes: [],
        }
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.tile) {
            this.setState({
                open: true
            })
        }
        if (nextProps.tile !== this.props.tile) {
            this.setState({
                upvotes: []
            });
            this.props.getUpvotes(nextProps.tile.tileData);
        }
        if (nextProps.upvotes !== this.props.upvotes) this.setState({
            upvotes: nextProps.upvotes
        });
    }

    render() {
            const tileData = this.props.tile && this.props.tile.tileData ? this.props.tile.tileData : null;
            const basePrice = tileData ? tileData.get('price') * 2 : this.props.initialPrice;
            const price = tileData && tileData.get('forSale') ? tileData.get('forSale') : basePrice;
            const split = this.props.tile ? this.props.tile.key.split(":") : null;
            const alternative_url = split ? `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/${split[1]}/${split[0]}.png` : null;
            return ( <
                    SideB open = {
                        this.state.open
                    } >
                    <
                    RandomButton / >
                    <
                    Image image = {
                        tileData && tileData.get('imageURL') !== '' ? tileData.get('imageURL') : alternative_url
                    }
                    /> <
                    Details >
                    <
                    Title > {
                        tileData ? tileData.get('name') : 'This block is available!'
                    } < /Title> <
                    div > {
                        tileData && tileData.get('description')
                    } < /div> {
                        tileData && < div > Owned by < Link to = {
                            `/u/${tileData.get('owner')}`
                        } > {
                            tileData.get('owner')
                        } < /Link></div >
                    } {
                        tileData && < div dangerouslySetInnerHTML = {
                            {
                                __html: anchorme(tileData.get('url'), {
                                    attributes: [{
                                        name: 'target',
                                        value: 'blank'
                                    }]
                                })
                            }
                        } > < /div>} {
                            tileData && < Share title = {
                                tileData.get('name')
                            }
                            shareUrl = {
                                `${window.location.origin}/?x=${tileData.get('x')}&y=${tileData.get('y')}`
                            }
                            />} {
                                !this.props.account && < MobileMessage > Your browser does not support Ethereum transactions.Please visit the site from Chrome with the Metamask extension installed.If you are on mobile, you might need to use a Desktop instead. < /MobileMessage>} <
                                    /Details> {
                                        this.props.tile && this.state.open && < SideBarActions upvotes = {
                                            this.state.upvotes
                                        }
                                        price = {
                                            price
                                        }
                                        tileData = {
                                            tileData
                                        }
                                        />} <
                                        div onClick = {
                                                () => this.setState({
                                                    open: false
                                                })
                                            } >
                                            <
                                            Close viewPort = "0 0 12 12" >
                                            <
                                            line x1 = "1"
                                        y1 = "11"
                                        x2 = "11"
                                        y2 = "1"
                                        strokeWidth = "2" / >
                                            <
                                            line x1 = "1"
                                        y1 = "1"
                                        x2 = "11"
                                        y2 = "11"
                                        strokeWidth = "2" / >
                                            <
                                            /Close> <
                                            /div> <
                                            /SideB>
                                    );
                            }
                        }

                        const mapDispatchToProps = dispatch => {
                            return {
                                dispatch,
                                getUpvotes: (tileData) => dispatch(getUpvotes(tileData)),
                            };
                        }

                        const mapStateToProps = state => {
                            return {
                                tile: state.tileReducer.get('selectedTile'),
                                initialPrice: state.appReducer.get('initialPrice'),
                                account: state.web3Reducer.get('account'),
                                eth: state.web3Reducer.get('eth'),
                                upvotes: state.tileReducer.get('upvotes'),
                            }
                        }

                        export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);



                        // WEBPACK FOOTER //
                        // ./src/modules/sidebar/index.js