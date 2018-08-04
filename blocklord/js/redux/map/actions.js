import Parse from 'parse';
import {
    selectTile,
    increaseBlockCount
} from '../tiles/actions';
import {
    tile2long,
    tile2lat
} from '../../utils/tileToCoordinates';
Parse.initialize(process.env.REACT_APP_APP_ID);
Parse.serverURL = process.env.REACT_APP_SERVER_URL;

export function setZoomLevel(zoom) {
    return {
        type: 'SET_ZOOM_LEVEL',
        zoom,
    }
}

export function setCenter(center) {
    return {
        type: 'SET_CENTER',
        center,
    }
}

export function userCenterRequested() {
    return {
        type: 'USER_CENTER_REQUESTED',
    }
}

export function randomBlock() {
    return function(dispatch, getState) {
        const Query = new Parse.Query('Block');
        Query.count()
            .then(count => {
                const skip = Math.floor(Math.random() * count);
                Query.skip(skip);
                dispatch(setZoomLevel(17));
                return Query.first()
                    .then(block => {
                        const key = `${block.get('x')}:${block.get('y')}`;
                        const center = [block.get('center')._latitude, block.get('center')._longitude];
                        dispatch(increaseBlockCount(block))
                        dispatch(selectTile(key, center, block));
                        return dispatch(setCenter(center));
                    });
            });
    };
}

export function findAndSelectBlock(block, keepZoomedOut) {
    return function(dispatch, getState) {
        const [x, y] = block.split(':');
        const center = [tile2lat(y), tile2long(x)];
        if (!isNaN(center[0]) && !isNaN(center[1])) {
            if (!keepZoomedOut) dispatch(setZoomLevel(17));
            dispatch(setCenter(center));
            setTimeout(() => {
                dispatch(userCenterRequested())
            }, 2000);
        }
    };
}

export function findUserLocation() {
    return async function(dispatch, getState) {
        const {
            ip
        } = await fetch(process.env.REACT_APP_SERVER_URL.replace('/api', '/getIp'), {
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
            .then((response) => response.json());
        try {
            const location = await fetch(`https://freegeoip.net/json/${ip}`)
                .then(res => res.json());
            dispatch(setCenter([location.latitude, location.longitude]));
            setTimeout(function() {
                dispatch(userCenterRequested())
            }, 200);
        } catch (err) {
            dispatch(setZoomLevel(2));
            setTimeout(function() {
                dispatch(userCenterRequested())
            }, 200);
            console.log(err);
        }
    };
}

export function fetchAllBlocks() {
    return async function(dispatch, getState) {
        const Query = new Parse.Query('Block');
        Query.limit(1000000);
        Query.descending('updatedAt');
        const blocks = await Query.find();
        dispatch(allBlocks(blocks));
    };
}

export function allBlocks(blocks) {
    return {
        type: 'ALL_BLOCKS_FETCHED',
        blocks,
    }
}



// WEBPACK FOOTER //
// ./src/redux/map/actions.js