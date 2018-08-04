import React, {
    Component
} from 'react';
import Dropdown from 'react-dropdown';
import styled from 'styled-components';
import 'react-dropdown/style.css';

const Selector = styled(Dropdown)
`
z-index: 20;
font-size: 1em;
background: white;
width: 200px;
margin: 16px 0px 16px 16px;
height: 36px;
border-radius: 4px;
display: flex;
position: absolute;
top: 10px;
left: 10px;
`;

const options = [{
        value: 1,
        label: 'Basic'
    },
    {
        value: 2,
        label: 'Dark'
    },
    {
        value: 3,
        label: 'Bright'
    },
    {
        value: 4,
        label: 'Elevation'
    },
    {
        value: 5,
        label: 'Satellite'
    },
];

export default class MapSelector extends Component {

    constructor(props) {
        super(props);
        this.saveAndUpdate = this.saveAndUpdate.bind(this);
    }

    componentDidMount(e) {
        const mapType = localStorage.mapType;
        if (mapType) this.props.updateMap(parseInt(mapType, 10));
    }

    shouldComponentUpdate(nextProps) {
        return this.props.mapIndex !== nextProps.mapIndex;
    }

    saveAndUpdate(e) {
        this.props.updateMap(e.value - 1);
        localStorage.setItem('mapType', e.value - 1);
    }

    render() {
        return ( <
            Selector style = {
                {
                    background: 'red'
                }
            }
            options = {
                options
            }
            value = {
                options[this.props.mapIndex]
            }
            onChange = {
                e => this.saveAndUpdate(e)
            }
            placeholder = "Select an option" / >
        )
    }
}



// WEBPACK FOOTER //
// ./src/modules/mapSelector/index.js