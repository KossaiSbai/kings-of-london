import React, {
    Component
} from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import Parse from 'parse';
import {
    Link
} from 'react-router-dom';
// import Loader from '../loader';

ReactGA.initialize('UA-112834002-1');

const Container = styled.div `
    color: #555;
    font-family: 'Exo 2', sans-serif;
    height: 100%;
    overflow-y: scroll;
    width: 100%;
    background-image: linear-gradient(-225deg, #2CD8D5 0%, #6B8DD6 48%, #8E37D7 100%);
    justify-content: center;
    align-items: center;
`;

const Title = styled.h3 `
  font-weight: regular;
  color: white;
  font-size: 2em;
  font-weight: lighter;
  margin: 20px;
`;

const Block = styled(Link)
`
  border-radius: 4px;
  margin: 10px;
  box-shadow: 0px 0px 5px rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  transition: all 0.3s;
  text-decoration: none;
  &:hover > .image {
    height: 230px;
    width: 230px;
  }
  &:hover > .badge {
    width: 230px;
  }
  &:hover {
    margin: -5px;
  }
`;

const Badge = styled.div `
  background: #0b3356;
  color: white;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  font-size: 1em;
  width: 200px;
  transition: all 0.3s;
`;

const Image = styled.div `
  height: 200px;
  width: 200px;
  transition: all 0.3s;
  background: white ${props => `url('${props.img}')`} center center;
  background-size: cover;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`;

const Info = styled.div `
  margin: 5px 10px;
  width:180px;
`;

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            blocks: null,
        }
    }

    componentDidMount() {
        const blockQuery = new Parse.Query('Block');
        blockQuery.limit(1000);
        blockQuery.equalTo('owner', this.state.id);
        blockQuery.find(blocks => this.setState({
            blocks
        }));
        const UserQ = new Parse.Query('User');
        UserQ.equalTo('accounts', this.state.id);
        UserQ.first().then(user => this.setState({
            tw_user: user
        }))
    }


    render() {
            return ( <
                Container >
                <
                Title > Blocks of {
                    this.state.id
                } < /Title> <
                div style = {
                    {
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        alignItems: 'flex-start',
                        margin: 10
                    }
                } > {
                    this.state.blocks && this.state.blocks.map((i, key) =>
                        <
                        Block key = {
                            key
                        }
                        to = {
                            `/?x=${i.get('x')}&y=${i.get('y')}`
                        } >
                        <
                        Image className = "image"
                        img = {
                            i.get('imageURL')
                        }
                        /> <
                        Badge className = "badge" >
                        <
                        Info > {
                            i.get('name')
                        } < /Info> <
                        Info > {
                            (i.get('finalPrice') / 1000000000000000000).toFixed(3)
                        }
                        Ξ < /Info> <
                        /Badge> <
                        /Block>)} <
                        /div> <
                        /Container>
                    );
                }
            }

            export default UserProfile;



            // WEBPACK FOOTER //
            // ./src/modules/userProfile/index.js