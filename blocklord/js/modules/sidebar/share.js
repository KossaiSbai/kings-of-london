import React, {
    Component
} from 'react'
import styled from 'styled-components';
import {
    ShareButtons,
    generateShareIcon
} from 'react-share';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-112834002-1');

const {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    VKShareButton,
    RedditShareButton,
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const WhatsappIcon = generateShareIcon('whatsapp');
const LinkedinIcon = generateShareIcon('linkedin');
const VKIcon = generateShareIcon('vk');
const RedditIcon = generateShareIcon('reddit');

const Links = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 10px;
  cursor: pointer;
  background-transparent;
  > * {
    margin: 4px;
    height: 32px;
    width: 32px;
    border-radius: 16px;
    transition: all 0.2s;
    &:hover{
      box-shadow: -2px 2px 8px rgba(0,0,0,0.4);
    }
  }
`;

const Container = styled.div ``;

class Share extends Component {

    render() {
        return ( <
            Container >
            <
            div > Share this block: < /div> <
            Links >
            <
            FacebookShareButton quote = ''
            url = {
                this.props.shareUrl
            } >
            <
            FacebookIcon size = {
                32
            }
            round = {
                true
            }
            /> <
            /FacebookShareButton> <
            TwitterShareButton title = {
                this.props.title
            }
            via = "blocklordapp"
            hashtags = {
                ['ethereum', 'dapps', 'blocklordapp']
            }
            url = {
                this.props.shareUrl
            } >
            <
            TwitterIcon size = {
                32
            }
            round = {
                true
            }
            /> <
            /TwitterShareButton> <
            WhatsappShareButton url = {
                this.props.shareUrl
            } >
            <
            WhatsappIcon size = {
                32
            }
            round = {
                true
            }
            /> <
            /WhatsappShareButton> <
            LinkedinShareButton url = {
                this.props.shareUrl
            } >
            <
            LinkedinIcon size = {
                32
            }
            round = {
                true
            }
            /> <
            /LinkedinShareButton> <
            VKShareButton url = {
                this.props.shareUrl
            } >
            <
            VKIcon size = {
                32
            }
            round = {
                true
            }
            /> <
            /VKShareButton> <
            RedditShareButton url = {
                this.props.shareUrl
            } >
            <
            RedditIcon size = {
                32
            }
            round = {
                true
            }
            /> <
            /RedditShareButton> <
            /Links> <
            /Container>
        )
    }
}

export default Share;



// WEBPACK FOOTER //
// ./src/modules/sidebar/share.js