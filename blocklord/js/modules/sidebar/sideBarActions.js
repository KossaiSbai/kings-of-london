import React, {
    Component
} from 'react'
import {
    connect
} from 'react-redux';
import styled from 'styled-components';
import {
    openModal
} from '../../redux/app/actions';
import {
    upvoteBlock
} from '../../redux/tiles/actions';
import Button from '../components/button';
import Twitter from '../components/twitter';


const Actions = styled.div `
    display: flex;
    flex-direction: column;
    margin: 10px;
    flex: 1;
    @media (max-width: 560px) {
      display: none;
    }
`;

const UpvotesNumber = styled.span `
  opacity: 0.4;
  margin-left: 10px;
`;

const UpvotesPictures = styled.div `
  display: flex;
  flex-direction: row;
  margin-left: 10px;
`;


const Price = styled.span `
    margin-left: 10px;
    @media (max-width: 600px) {
      display: none;
    }
`;

const DownloadMetamask = styled.div `
    background: url('https://github.com/MetaMask/faq/raw/master/images/download-metamask-dark.png');
    background-size: contain;
    width: 200px;
    height: 60px;
    background-repeat: no-repeat;
    opacity: 0.8;
    transition: all 0.5s;
    cursor: pointer;
    &:hover {
        opacity: 1;
    }
    @media (max-width: 420px) {
      display: none;
    }
`;

const Instructions = styled.ul `
    font-size: 0.8em;
    padding-left: 20px;
`;

const StyledButton = styled(Button)
`
  max-width: 300px;
  max-height: 50px;
`;

const Thumbnail = styled.div `
  height: 30px;
  width: 30px;
  margin-right: -10px;
  border-radius: 15px;
  background: center center url('${props => props.imageURL}');
  background-size: cover;
  border: 1px solid rgba(255,255,255,0.3);
`;

class SideBarActions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogin: false,
            upvotes: [],
            shouldShare: true,
        };
        this.checkForUser = this.checkForUser.bind(this);
        this.handleVoteButton = this.handleVoteButton.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (!this.props.currentUser && nextProps.currentUser) this.setState({
            showLogin: false
        });
    }

    checkForUser(modal) {
        if (!this.props.currentUser) {
            this.setState({
                showLogin: true
            });
        } else if (this.props.currentUser && modal === 'upvote') {
            this.props.upvote();
        } else {
            this.props.openModal(modal)
        }
    }

    handleVoteButton(voted) {
        if (!this.props.currentUser) {
            this.setState({
                showLogin: true
            });
        } else {
            // if(!voted) this.props.upvoteBlock(this.props.tileData);
            if (this.state.shouldShare) {
                const token = this.props.currentUser.get('authData').twitter.auth_token;
                const secret = this.props.currentUser.get('authData').twitter.auth_token_secret;
                let url = process.env.REACT_APP_SERVER_URL.replace('/api', '/shareUpvote');
                url += `?url=${encodeURIComponent(`${window.location.origin}?x=${this.props.tileData.get('x')}&y=${this.props.tileData.get('y')}`)}&title=${this.props.tileData.get('name')}&token=${token}&secret=${secret}`;
                fetch(url)
                    .then(res => res.json())
                    .then(res => console.log(res));
            }
        }
    }

    render() {
            if (this.state.showLogin) {
                return ( <
                    Actions >
                    <
                    h3 > Sign in with Twitter < /h3> <
                    div > We will never post to your feed. < /div> <
                    Twitter / >
                    <
                    /Actions>);
                }
                if (this.state.account) {
                    return ( <
                        Actions >
                        <
                        h3 > Your browser is not blockchain enabled! < span aria - label = "horrified emoji!"
                        role = "img" > 😱😱😱 < /span></h
                        3 >
                        <
                        div > Here is what you need to get started: < /div> <
                        Instructions >
                        <
                        li > A computer or laptop running the desktop version of Chrome or Firefox < /li> <
                        li > MetaMask, a digital wallet used specifically with web apps < /li> <
                        li > Ether, the cryptocurrency powering it all < /li> <
                        /Instructions> <
                        a href = "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
                        rel = 'noopener noreferrer'
                        target = "_blank" > < DownloadMetamask / > < /a> <
                        /Actions>
                    );
                }
                if (this.props.network !== parseInt(process.env.REACT_APP_REQUIRED_NETWORK_ID, 10)) {
                    const requiredNetwork = this.props.network === 1 ? 'MainNet' : 'Rinkeby';
                    return ( <
                        Actions >
                        <
                        h3 > You are on the wrong Network! < span aria - label = "horrified emoji!"
                        role = "img" > 😱😱😱 < /span></h
                        3 >
                        <
                        div > Please make sure your Metamask is set up on {
                            requiredNetwork
                        }
                        network. < /div> <
                        /Actions>
                    );
                }
                const data = this.props.tileData;
                const alreadyVoted = this.props.currentUser ? this.props.upvotes.map(i => i.get('user').id === this.props.currentUser.id)[0] : null;

                return ( <
                        Actions > {!data &&
                            <
                            StyledButton onClick = {
                                () => this.checkForUser('create')
                            }
                            primary > Buy Block < Price > {
                                (this.props.price / 1000000000000000000).toFixed(3)
                            }
                            Ξ < /Price></StyledButton >
                        } {
                            data && data.get('owner') !== this.props.account &&
                                <
                                StyledButton onClick = {
                                    () => this.checkForUser('buy')
                                }
                            primary > Buy Block < Price > {
                                (this.props.price / 1000000000000000000).toFixed(3)
                            }
                            Ξ < /Price></StyledButton >
                        } {
                            data && data.get('owner') === this.props.account &&
                                <
                                StyledButton onClick = {
                                    () => this.checkForUser('edit')
                                }
                            primary > Change Content < /StyledButton> } {
                                    data && data.get('owner') === this.props.account && data.get('finalPrice') === data.get('price') * 2 &&
                                        <
                                        StyledButton onClick = {
                                            () => this.checkForUser('sell')
                                        }
                                    primary > Sell Block < /StyledButton> } {
                                            data && data.get('owner') === this.props.account && data.get('finalPrice') < data.get('price') * 2 &&
                                                <
                                                StyledButton onClick = {
                                                    () => this.checkForUser('cancelSell')
                                                }
                                            primary > Take Off Sale < /StyledButton> } {
                                                data && data.get('owner') !== this.props.account &&
                                                    <
                                                    div >
                                                    <
                                                    StyledButton onClick = {
                                                        () => this.handleVoteButton(alreadyVoted, this.state.shouldShare)
                                                    }
                                                primary = {
                                                        alreadyVoted ? false : true
                                                    } >
                                                    <
                                                    div > {
                                                        alreadyVoted ? 'Upvoted' : '▲ Upvote'
                                                    } < /div> <
                                                    UpvotesNumber > {
                                                        this.props.upvotes.length
                                                    } < /UpvotesNumber> <
                                                    UpvotesPictures > {
                                                        this.props.upvotes.map((i, key) => < Thumbnail key = {
                                                                key
                                                            }
                                                            imageURL = {
                                                                i.get('user').get('profileImage')
                                                            }
                                                            />)}</UpvotesPictures >
                                                            <
                                                            /StyledButton> {
                                                                this.props.currentUser && < div > < input id = "checkBox"
                                                                type = "checkbox"
                                                                checked = {
                                                                    this.state.shouldShare
                                                                }
                                                                onChange = {
                                                                    () => this.setState({
                                                                        shouldShare: !this.state.shouldShare
                                                                    })
                                                                }
                                                                /> Tweet your upvote</div >
                                                            } <
                                                            /div>} <
                                                            /Actions>
                                                        );
                                                    }
                                            }

                                            const mapDispatchToProps = dispatch => {
                                                return {
                                                    dispatch,
                                                    upvoteBlock: (e) => dispatch(upvoteBlock(e)),
                                                    openModal: (e) => dispatch(openModal(e)),
                                                };
                                            }

                                            const mapStateToProps = state => {
                                                return {
                                                    eth: state.web3Reducer.get('eth'),
                                                    account: state.web3Reducer.get('account'),
                                                    network: state.web3Reducer.get('currentNetwork'),
                                                    currentUser: state.appReducer.get('currentUser'),
                                                }
                                            }

                                            export default connect(mapStateToProps, mapDispatchToProps)(SideBarActions);



                                            // WEBPACK FOOTER //
                                            // ./src/modules/sidebar/sideBarActions.js