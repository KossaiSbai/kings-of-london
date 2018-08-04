import React, {
    Component
} from 'react';
import styled from 'styled-components';
import {
    BarChart,
    Bar,
    ReferenceLine,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

const Container = styled.div `
  display: flex;
  max-Width: 800px;
  margin: 20px auto;
`;

export default class Chart extends Component {
    render() {

        const data = this.props.data.map(i => {
            const values = i.returnValues;
            if (values.price) return {
                name: i.blockNumber,
                value: -(parseInt(values.price, 10) / 1000000000000000000).toFixed(5)
            };
            if (values.oldPrice) return {
                name: i.blockNumber,
                value: (parseInt(values.oldPrice, 10) / 1000000000000000000).toFixed(5)
            };
            return null;
        }).filter(x => x).sort((a, b) => a.name - b.name);

        return ( <
            Container >
            <
            ResponsiveContainer width = "100%"
            height = {
                200
            } >
            <
            BarChart width = {
                600
            }
            height = {
                300
            }
            data = {
                data
            }
            stackOffset = "sign"
            margin = {
                {
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }
            } >
            <
            XAxis dataKey = "name" / >
            <
            YAxis / >
            <
            CartesianGrid strokeDasharray = "3 3" / >
            <
            Tooltip / >
            <
            ReferenceLine y = {
                0
            }
            stroke = '#000' / >
            <
            Bar dataKey = "value"
            fill = "#8884d8"
            stackId = "stack" / >
            <
            /BarChart> <
            /ResponsiveContainer> <
            /Container>
        )
    }
}



// WEBPACK FOOTER //
// ./src/modules/transactions/waterfall.js