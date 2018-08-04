import React from 'react';
import Icon from './ethereum.svg';
const Loader = () => ( <
    div style = {
        {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
        }
    } >
    <
    img alt = "loading..."
    src = {
        Icon
    }
    /> <
    /div>
);
export default Loader;



// WEBPACK FOOTER //
// ./src/modules/loader/index.js