import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import ReactGA from 'react-ga';
import RLeaflet from './modules/maps';
import Sidebar from './modules/sidebar';
import MapSelector from './modules/mapSelector';
import Pending from './modules/pending';
import Loader from './modules/loader';
// import Socket from './modules/socket';
// import ChatBox from './modules/chatbox';
import {
    openModal
} from './redux/app/actions';
import './App.css';


ReactGA.initialize('UA-112834002-1');

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mapIndex: 2,
        }
    }

    componentDidMount() {
        ReactGA.pageview(this.props.location.pathname + this.props.location.search);
        if (!localStorage.hideMapIntro) this.props.openModal('showMapIntro');
    }

    render() {
        if (!this.props.centerRequested) return <Loader / > ;
        return ( <
            div className = "app" >
            <
            div style = {
                {
                    display: 'flex',
                    flex: 1,
                    fontFamily: 'Exo 2',
                    overflow: 'hidden',
                    position: 'relative'
                }
            } >
            <
            RLeaflet history = {
                this.props.history
            }
            store = {
                this.props.store
            }
            mapIndex = {
                this.state.mapIndex
            }
            center = {
                this.props.center
            }
            /> <
            MapSelector mapIndex = {
                this.state.mapIndex
            }
            updateMap = {
                index => this.setState({
                    mapIndex: index
                })
            }
            /> <
            Sidebar / >
            <
            Pending / >
            <
            /div> <
            /div>);
        }
    }

    const mapDispatchToProps = dispatch => {
        return {
            dispatch,
            openModal: (e) => dispatch(openModal(e)),
        };
    }

    const mapStateToProps = state => {
        return {
            web3: state.web3Reducer,
            app: state.appReducer,
            center: state.mapReducer.get('center').toJS(),
            centerRequested: state.mapReducer.get('centerRequested'),
        }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(App);



    // WEBPACK FOOTER //
    // ./src/App.js