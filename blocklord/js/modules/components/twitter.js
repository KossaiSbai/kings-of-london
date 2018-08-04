import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import styled from 'styled-components';
import TwitterLogin from 'react-twitter-auth/lib/react-twitter-auth-component.js';
import Parse from 'parse';
import {
    fetchCurrentUser
} from '../../redux/app/actions';

const Twitter = styled(TwitterLogin)
`
  border-radius: 20px;
  background-image: linear-gradient(-60deg, #5641db 0%, #1f86ef 100%);
  color: white;
  border: none;
  height: 40px;
  padding: 0px 20px;
  font-family: 'Exo 2', sans-serif;
  outline: none;
  transition: all 0.4s;
  font-size: 1em;
  cursor: pointer;
  margin-top: 10px;
  & > span svg {
    fill: white;
  }

  &:hover {
    box-shadow: -5px 5px 5px rgba(0,0,0,0.3);
  }
`;

class Twitterbutton extends Component {
    constructor() {
        super();

        this.onFailed = this.onFailed.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
    }

    onSuccess(response) {
        response.json().then(user => {
            var provider = {
                authenticate(options) {
                    if (options.success) {
                        options.success(this, {});
                    }
                },
                restoreAuthentication(authData) {},
                getAuthType() {
                    return 'twitter';
                },
                deauthenticate() {}
            };

            let authData = {
                authData: {
                    id: user.tw_idStr,
                    screen_name: user.tw_screen_name,
                    consumer_key: user.tw_consumer_key,
                    auth_token: user.tw_access_token,
                    auth_token_secret: user.tw_access_token_secret,
                }
            };
            Parse.User.logInWith(provider, authData).done((saved) => {
                    saved.setUsername(user.tw_screen_name);
                    saved.setEmail(user.tw_email);
                    saved.set('profileImage', user.tw_profileImage);
                    if (this.props.account) saved.addUnique('accounts', this.props.account);
                    saved.save().then(() => this.props.fetchCurrentUser());
                })
                .fail(function(error) {
                    console.log(error);
                });
        });
    }

    onFailed(error) {
        console.log(window.location.href);
        console.log(error);
    }

    render() {
        return ( <
            Twitter loginUrl = {
                process.env.REACT_APP_TW_LOGIN_URL
            }
            onFailure = {
                this.onFailed
            }
            onSuccess = {
                this.onSuccess
            }
            requestTokenUrl = {
                `${process.env.REACT_APP_TW_REQUEST_TOKEN_URL}?callback=${window.location.href}`
            }
            showIcon = {
                true
            }
            />
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        fetchCurrentUser: () => dispatch(fetchCurrentUser()),
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
        account: state.web3Reducer.get('account'),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Twitterbutton);



// WEBPACK FOOTER //
// ./src/modules/components/twitter.js