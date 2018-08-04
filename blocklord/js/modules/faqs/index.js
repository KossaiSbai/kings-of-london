import React, {
    Component
} from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import Logo from '../topBar/logo';

ReactGA.initialize('UA-112834002-1');

const Container = styled.div `
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    color: #555;
    font-family: 'Exo 2', sans-serif;
    overflow-y: scroll;
    background-image: linear-gradient(-225deg, #2CD8D5 0%, #6B8DD6 48%, #8E37D7 100%);
`;

const FAQ = styled.div `
    padding: 30px;
    border-radius: 2px;
    margin: 10px auto;
    background: white;
    max-width: 600px;
`;

const Section = styled.h2 `
    margin: 30px auto 20px;
    text-align: center;
    color: white;
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

const LogoContainer = styled.div `
    margin: auto;
    padding: 26px;
    background: #3329a5;
    border-radius: 4px;
    margin-top: 30px;
`;

class FAQs extends Component {

    componentDidMount() {
        ReactGA.pageview(this.props.location.pathname + this.props.location.search);
    }

    render() {
            return ( <
                    Container > {
                        ReactGA.pageview(this.props.location.pathname + this.props.location.search)
                    } <
                    LogoContainer > < Logo / > < /LogoContainer> <
                    Section > Getting Started < /Section> <
                    FAQ >
                    <
                    h3 > What Is Blocklord ? < /h3> <
                    div > Blocklord is an Ethereum - based game where you can acquire, own and personalise any location on Earth.Build your own personalised blocks with what matters to you, or search
                    for new investment opportunities.Think of us like the blockchain version of Alex Tew’ s Million Dollar homepage.Just don’ t get gazumped!
                    <
                    /div> <
                    /FAQ> <
                    FAQ >
                    <
                    h3 > What do I need to play ? < /h3> <
                        div > There are no requirements
                    if
                    you just want to browser around. < /div> <
                    div > To start playing, we suggest to use Chrome with the Metamask extension.There is a great < a rel = "noopener noreferrer"
                    target = "_blank"
                    href = "https://www.cryptocompare.com/wallets/guides/how-to-use-metamask/" > step by step guide by CryptoCompare < /a> which will guide you through if you have never done that.</div >
                    <
                    div > Once your browser is setup, Blocklord will detect your account and all you have to do is to top it up with some Ethereum to start interacting with the Blocks. < /div> <
                        /FAQ> <
                        FAQ >
                        <
                        h3 > What is Metamask ? < /h3> <
                        div > Metamask is an amazing Chrome extension built by the folks at < a rel = "noopener noreferrer"
                    target = "_blank"
                    href = "https://consensys.net/" > Consensys < /a> that unleashes the power of the blockchain diretly in your browser. Super cool!</div >
                    <
                    a href = "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
                    rel = 'noopener noreferrer'
                    target = "_blank" > < DownloadMetamask / > < /a> <
                    /FAQ> <
                    FAQ >
                    <
                    h3 > How can I get Ether ? < /h3> <
                    div > Ether(ETH or Ξ) is the digital currency of the Ethereum blockchain.There are multiple ways to get ETH,
                    if you are based in US, you can get it directly via MetaMask.If you are from outside US, you need to get it from an exchange, like Coinbase, but there might be better options out there, depending on your country.Before playing Blocklord you then need to transfer the ETH to you Metamask account. < /div> <
                    /FAQ> <
                    LogoContainer > < Logo / > < /LogoContainer> <
                    Section > Block what ? < /Section> <
                    FAQ >
                    <
                    h3 > Yeah, but why ? < /h3> <
                    div > Blocklord is a digital world built on the Blockchain.You can own a piece of the world map and customise it to your likings.Once it is on the blockchain, is there forever and can not be taken away...that is, unless somebody buys you out, in which
                    case you make a tidy profit– but you lose your space;) < /div> <
                div > So, the more you spend the less likely you are to be gazumped! < /div> <
                div > You can leave your mark on the place where you were born, the place where you met to your other half, or your office space. < /div> <
                /FAQ> <
                FAQ >
                <
                h3 > Does it cost money ? < /h3> <
                div > If you just want to browse, it is free.If you want to play however, you do need ETH to start your digital property baronage.Takes money to make money, yo! < span role = "img"
                aria -
                label = "" > 💰 < /span></div >
                <
                /FAQ> <
                FAQ >
                <
                h3 > What
            else
                do I get ? < /h3> <
                    div > Ether spent on Blocklord also grants you the token BBL as an airdrop, from < a href = "https://www.bubbled.io/presale/"
                target = "_blank" >
                Bubbled’ s presale < /a> supply, scheduled for April. The more ETH you spend to protect your block on Blocklord, the more BBL you receive as an airdrop. You even get a 20% bonus of BBL, released to your wallet 12 months after the crowdsale!</div >
                <
                /FAQ> <
                FAQ >
                <
                h3 > What’ s BBL and why should I care ? < /h3> <
                div > BBL is the native token
            for the < a href = "https://www.bubbled.io/"
            target = "_blank" > Bubbled < /a> platform and grants access to dapp’s Branded and cLAND which let you buy and sell AR content and turn virtual space bought via the Bubbled land registration tool into advertising spaces for augmented reality!</div >
                <
                /FAQ> <
                FAQ >
                <
                h3 > Does my land on Blocklord equate to the same land on Bubbled ? < /h3> <
                div > No.However, you can use the airdropped BBL to buy the land on Bubbled.You also get early access to the Bubbled land registration tool to reserve your land ahead of the BBL distribution.There are layers in the metaverse! < /div> <
                /FAQ> <
                FAQ >
                <
                h3 > How do you make money ? < /h3> <
                    div > Blocklord makes money from the initial sale of the blocks, as well as taking a small commission
                for
                each trade(currently 3 % ) < /div> <
                /FAQ> <
                FAQ >
                <
                h3 > Can I withdraw my Ether ? < /h3> <
                div > Of course you can!In order to lower transaction fees and
            for added security, Blocklord uses a "pull"
            model.What that means is that the Ether is not sent to you directly each time there is a transaction, but rather you need to click the withdrawal button to get all your Ether in one go. < /div> <
                /FAQ> <
                LogoContainer > < Logo / > < /LogoContainer> <
                Section > Market Dynamics < /Section> <
                FAQ >
                <
                h3 > How can I buy a block ? < /h3> <
                div > When you find a block that you would like to buy, simply click on it and select the Buy Block button.Once the Buy Block popup appear, enter the new block information(name, description, link and image).All the text fields are limited to 32 characters to reduce transaction costs
            if you have a long link we suggest to use Google URL shortener or Bit.ly.(we will soon integrate this feature automatically.) < /div> <
                div > Once all is looking good, select the price that you want to pay(the initial price is the minimum but you can decide to pay more
                    if you want to deter other people from buying the block from you, or
                    if you are expecting the block to be bought out and want to maximise profit) < /div> <
                div > Finally, click the Buy Block button and enter submit your transaction.If you want to reduce transaction costs you can lower the gas price, this would slow down the transaction but save you Ether! < /div> <
                /FAQ> <
                FAQ >
                <
                h3 > What are Neighbor Rewards < /h3> <
                div > When a block is sold, the 8 neighbouring blocks receive a reward from that trade.At the moment the rewards is around 1.94 % of the sale price.
            If one or more of the neighbouring blocks are empty, the reward goes towards a bonus amount which will be used
            for contests and treasure hunts < /div> <
                /FAQ> <
                FAQ >
                <
                h3 > So I get paid
            for inviting my network to become my neighbour ? ! < /h3> <
                div > Exactly!The more you build your neighbourhood the more valuable your property becomes.Basically, the same way physical land works. < /div> <
                /FAQ> <
                FAQ >
                <
                h3 > How can I sell a block ? < /h3> <
                div > There are two ways to sell a block.An active, and a passive way. < /div> <
                div > All blocks are automatically
            for sale at 2 x the price that was last paid
            for the block.This guarantees that no block goes stale. < /div> <
                div > However
            if you want a quicker sell, you can decide to lower the price of the block.Simply click on the Set
            for sale button and define the sale price. < /div> <
                /FAQ> <
                FAQ >
                <
                h3 > Why are transactions slow ? < /h3> <
                div > Blockchain technologies are really new stuff.Like piping hot...stuff.Straight out of the oven. < /div> <
                div > This means that not everything is as efficient as it should be yet, but a lot of work is been done to speed the network up.If you want to have your transactions go through quicker, you might want to increase the gas price in your Metamask window, but that can get costly! < /div> <
                /FAQ> <
                LogoContainer > < Logo / > < /LogoContainer> <
                Section > Other < /Section> <
                FAQ >
                <
                h3 > How can I update the content of one of my blocks ? < /h3> <
                div > As the owner of the block you can of course customise the content of your block multiple time.Simply navigate to your block and click on the change content button : ) < /div> <
        /FAQ> <
        FAQ >
        <
        h3 > How do you use the Bubbled platform ? < /h3> <
            div > Bubbled’ s land registration tool enables us to identify the trillions of latitude and longitude that make up the planet and wrap them up in the blockchain
        for
        purchase, creating a new type of digital asset. < /div> <
        /FAQ> <
        /Container>
);
}
};
export default FAQs;



// WEBPACK FOOTER //
// ./src/modules/faqs/index.js