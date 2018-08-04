import React from 'react'
import {
    Map,
    TileLayer,
    ZoomControl
} from 'react-leaflet';
import {
    connect
} from 'react-redux';
import styled from 'styled-components';
import BlockLayer from './blockLayer';
import {
    setZoomLevel,
    fetchAllBlocks
} from '../../redux/map/actions';

const MapBox = styled(Map)
`
    background: lightgrey;
    flex: 1;
    z-index: 1;
`;

export class MapView extends React.Component {
    constructor(props) {
        super(props);
        this.onZoomEvent = this.onZoomEvent.bind(this);
    }

    onZoomEvent(zoom) {
        this.props.setZoomLevel(zoom.target._zoom);
    }

    componentWillMount() {
        this.props.fetchAllBlocks();
    }

    render() {
        const map = {};
        switch (this.props.mapIndex) {
            case 0:
                map.url = "https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png";
                break;
            case 1:
                map.url = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png";
                break;
            case 2:
                map.url = "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png";
                break;
            case 3:
                map.url = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';
                break;
            case 4:
                map.url = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";
                break;
            default:
                map.url = "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png";
                break;
        }

        const Blocks = this.props.allBlocks ? < BlockLayer
        blocks = {
            this.props.allBlocks
        }
        history = {
            this.props.history
        }
        store = {
            this.props.store
        }
        zoom = {
            this.props.zoom
        }
        zIndex = {
            2
        }
        opacity = {
            0.2
        }
        /> : null;
        return ( <
            MapBox zoomControl = {
                false
            }
            center = {
                this.props.center
            }
            zoom = {
                this.props.zoom
            }
            maxZoom = {
                16
            }
            minZoom = {
                2
            }
            attributionControl = {
                false
            }
            onZoomend = {
                this.onZoomEvent
            } >
            <
            TileLayer url = {
                map.url
            }
            attribution = {
                false
            }
            /> {
                Blocks
            } <
            ZoomControl position = "bottomleft" / >
            <
            /MapBox>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        setZoomLevel: (tileID) => dispatch(setZoomLevel(tileID)),
        fetchAllBlocks: () => dispatch(fetchAllBlocks()),
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
        zoom: state.mapReducer.get('zoom'),
        allBlocks: state.mapReducer.get('allBlocks'),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapView);



// WEBPACK FOOTER //
// ./src/modules/maps/index.js