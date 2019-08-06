import React, { PureComponent } from 'react';

import { connect } from "react-redux";

import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

import { CardBody } from "../../styled/content";

class Graphic extends PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      base: this.props.data,
      data: []
    }
  }

  getData = () => {
    if (this.props.data["Time Series (1min)"]) {
      let obj = this.props.data["Time Series (1min)"];
      let result = Object.keys(obj).map(function(key) {
        return [(key), obj[key]];
      });
      
      result.map(item => {
        let close = item[1]["4. close"];
        let valueFormated = parseFloat(close).toFixed(2);
        let time = Date(item[0]);
        let obj = {name: time, uv: valueFormated, pv: valueFormated, amt: valueFormated}
        return this.setState({ ...this.state.data.push(obj) })
      })
    }
  }

  render() {
    let { data } = this.state;
    this.getData();
    if (data.length > 1) {
      return (
        <CardBody>
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 30, right: 30, left: 0, bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="uv" type="category"/>
            <YAxis dataKey="uv" />
            <Tooltip />
            <Area type="monotone" dataKey="uv" 
              stroke={data[0].uv>data[data.length-1].uv?"red":"green"} 
              fill={data[0].uv>data[data.length-1].uv?"red":"green"} 
            />
          </AreaChart>
        </CardBody>
      );
    }
    return(<div></div>)
  }
}

export default connect(state => ({
  data: state.Reducers.data
}))(Graphic);