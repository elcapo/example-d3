import React from 'react';
import D3Chart from './D3Chart';

class ChartWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chart: null };
  }

  componentDidMount() {
    this.setState({
      chart: new D3Chart(this.refs.chart)
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  static getDerivedStateFromProps(props, state) {
    if(props.gender !== state.gender) {
      if(state.chart) {
        state.chart.update(props.gender);
      }

      return {
        gender: props.gender
      }
    }
    return null;
  }

  /*componentDidUpdate(props, state) {
    if(this.state.chart.datasets) {
      console.log("Datasets are ready and gender changed");
      this.state.chart.update(state.gender);
    }
  }*/

  render() {
    return (
      <div ref="chart"></div>
    );
  }
}

export default ChartWrapper;
