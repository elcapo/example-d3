import React from 'react';
import D3Chart from './D3Chart';

class ChartWrapper extends React.Component {
  componentDidMount() {
    this.chart = new D3Chart(this.refs.chart);
  }

  shouldComponentUpdate() {
    return false;
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.chart.update(props.gender);
  }

  render() {
    return <div ref="chart"></div>
  }
}

export default ChartWrapper;
