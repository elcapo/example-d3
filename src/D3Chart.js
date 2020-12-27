import * as d3 from "d3";

const url = "http://localhost:3000/data/tallest_men.json";

class D3Chart {
  constructor(element) {
    const svg = d3.select(element)
      .append("svg")
      .attr("width", 800)
      .attr("height", 500);

    d3.json(url).then(data => {
      const rects = svg.selectAll("rect")
        .data(data);

      rects.enter().append("rect")
        .attr("x", (d, i) => i * 100)
        .attr("y", 50)
        .attr("width", 50)
        .attr("height", d => d.height)
        .attr("fill", "green");
    });
  }
}

export default D3Chart;
