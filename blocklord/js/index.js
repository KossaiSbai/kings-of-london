import React from 'react';
import {
    Provider
} from 'react-redux'
import {
    createStore,
    applyMiddleware
} from 'redux';
import styled from 'styled-components';
import CookieBanner from 'react-cookie-banner';
import Balance from './modules/balance';
import TopBar from './modules/topBar';
import Transactions from './modules/transactions';
import Admin from './modules/admin';
import BlockExplorer from './modules/blocksExplorer';
import UserProfile from './modules/userProfile';
import Faqs from './modules/faqs';
import Terms from './modules/terms';
import Privacy from './modules/privacy';
import Footer from './modules/footer';

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import thunk from 'redux-thunk';
import {
    render
} from 'react-dom';
import './index.css';
import App from './App';
import {
    unregister
} from './registerServiceWorker';
import rootReducer from './redux/reducers';

let store = createStore(rootReducer, applyMiddleware(thunk));

const RouteContainer = styled.div `
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
`;

const Bubbled = styled.div `
  background: #183b62;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 8px;
  transition: all 0.3s;
  font-size: 0.9em;
  text-decoration: none;
  &:hover {
    background: #37669a;
  }
`;

const RouteWithProps = ({
        path,
        exact,
        strict,
        component: Component,
        location,
        ...rest
    }) => ( < Route path = {
            path
        }
        exact = {
            exact
        }
        strict = {
            strict
        }
        location = {
            location
        }
        render = {
            (props) => < Component { ...props
            } { ...rest
            }
            />} / > );

        render( <
            Router >
            <
            Provider store = {
                store
            } >
            <
            RouteContainer >
            <
            Bubbled >
            <
            div style = {
                {
                    background: '#f7921e',
                    height: 18,
                    width: 18,
                    borderRadius: 9,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 10
                }
            } > ! < /div> <
            a style = {
                {
                    color: 'white',
                    textDecoration: 'none'
                }
            }
            href = "https://www.bubbled.io/presale/"
            target = "_blank" > Bubbled.io pre - sale is not live yet.Please be aware of scams. < /a><a style={{ color: 'white', marginLeft: 5 }} href="https:/ / t.me / seebubbled " target="
            _blank "> Join us on Telegram</a> <
            /Bubbled> <
            TopBar className = "topBar" / >
            <
            Switch >
            <
            RouteWithProps exact path = "/transactions"
            component = {
                Transactions
            }
            store = {
                store
            }
            /> <
            RouteWithProps exact path = "/balance"
            component = {
                Balance
            }
            store = {
                store
            }
            /> <
            RouteWithProps exact path = "/blockexplorer"
            component = {
                BlockExplorer
            }
            store = {
                store
            }
            /> <
            Route exact path = "/faqs"
            component = {
                Faqs
            }
            /> <
            Route exact path = "/terms"
            component = {
                Terms
            }
            /> <
            Route exact path = "/privacy"
            component = {
                Privacy
            }
            /> <
            RouteWithProps exact path = "/admin"
            component = {
                Admin
            }
            store = {
                store
            }
            /> <
            RouteWithProps exact path = "/u/:id"
            component = {
                UserProfile
            }
            store = {
                store
            }
            /> <
            RouteWithProps exact path = "/"
            component = {
                App
            }
            store = {
                store
            }
            /> <
            /Switch> <
            CookieBanner styles = {
                {
                    banner: {
                        backgroundColor: '#3329a5',
                        zIndex: 90
                    },
                    message: {
                        fontWeight: 400,
                        fontSize: '0.7em'
                    }
                }
            }
            message = "We use cookies. By clicking on or navigating the site, you agree to allow us to collect usage information through cookies. Learn more, including about available controls on our Privacy Policy."
            onAccept = {
                () => {}
            }
            cookie = "user-has-accepted-cookies" / >
            <
            Footer / >
            <
            /RouteContainer> <
            /Provider> <
            /Router>,
            document.getElementById('root')); unregister();



        // WEBPACK FOOTER //
        // ./src/index.js