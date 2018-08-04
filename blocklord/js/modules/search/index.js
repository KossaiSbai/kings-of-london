import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import styled from 'styled-components';
import {
    setCenter,
    setZoomLevel
} from '../../redux/map/actions';

const SearchBox = styled.input `
    background: white;
    padding: 16px;
    outline: none;
    flex: 1;
    border: none;
    font-size: 1em;
    font-family: 'Exo 2', sans-serif;
    @media (max-width: 560px) {
      padding: 8px;
      font-size: 0.9em;
    }
`;

export class Search extends Component {

    shouldComponentUpdate(nextProps) {
        return typeof this.props.setCenter !== typeof nextProps.setCenter;
    }

    searchCenter(location) {
        if (location.indexOf('$coord: ') > -1) {
            const coords = location.replace('$coord: ', '').split(',');
            this.props.setCenter([parseFloat(coords[0]), parseFloat(coords[1])]);
        } else {
            const url = `https://nominatim.openstreetmap.org/search/${location}?format=json&addressdetails=1&limit=1`;
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    const center = [parseFloat(data[0].lat), parseFloat(data[0].lon)];
                    return center;
                })
                .then(center => {
                    this.props.history.push({
                        pathname: '/',
                        search: null,
                    });
                    this.props.setCenter(center);
                })
                .catch(err => console.log(Error(err)));
        }
    }

    detectEnter(e) {
        if (e.keyCode === 13) {
            return this.searchCenter(e.target.value);
        }
        return;
    }

    render() {
        return ( <
            SearchBox placeholder = "Search for a location"
            onKeyUp = {
                (e) => this.detectEnter(e)
            }
            type = "text"
            className = "search" / >
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        setCenter: (center) => dispatch(setCenter(center)),
        setZoomLevel: (center) => dispatch(setZoomLevel(center)),
    };
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);



// WEBPACK FOOTER //
// ./src/modules/search/index.js