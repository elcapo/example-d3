import * as d3 from "d3";

const url = "http://localhost:3000/data/tallest_men.json";
const MARGIN = { TOP: 10, BOTTOM: 20, LEFT: 30, RIGHT: 20 };
const WIDTH = 800 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTTOM;

class D3Chart {
  constructor(element) {
    const svg = d3.select(element)
      .append("svg")
        .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
        .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
      .append("g")
        .attr("transform", `translate(${MARGIN.LEFT},  ${MARGIN.TOP})`);

    d3.json(url).then(data => {
      const y = d3.scaleLinear()
        .domain([
          d3.min(data, d => d.height - MARGIN.TOP),
          d3.max(data, d => d.height)
        ])
        .range([HEIGHT, 0]);

      const x = d3.scaleBand()
        .domain(data.map(d => d.name))
        .range([0, WIDTH])
        .padding(0.4);

      const xAxisCall = d3.axisBottom(x);
      svg.append("g")
        .attr("transform", `translate(0, ${HEIGHT})`)
        .call(xAxisCall);

      const yAxisCall = d3.axisLeft(y);
      svg.append("g").call(yAxisCall);

      const rects = svg.selectAll("rect")
        .data(data);

      rects.enter().append("rect")
        .attr("x", d => x(d.name))
        .attr("y", d => y(d.height))
        .attr("width", x.bandwidth)
        .attr("height", d => HEIGHT - y(d.height))
        .attr("fill", "green");
    });
  }
}

export default D3Chart;
