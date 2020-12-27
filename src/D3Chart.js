import * as d3 from "d3";

const url = "http://localhost:3000/data/ages.json";

class D3Chart {
  constructor(element) {
    const svg = d3.select(element)
      .append("svg")
      .attr("width", 500)
      .attr("height", 500);

    d3.json(url).then(ages => {
      const rects = svg.selectAll("rect")
        .data(ages);

      rects.enter().append("rect")
        .attr("x", (d, i) => i * 100)
        .attr("y", 50)
        .attr("width", 50)
        .attr("height", d => d.age * 10)
        .attr("fill", d => {
          if (d.age > 10) {
            return "red";
          }
          return "green";
        });
    });
  }
}

export default D3Chart;
