import * as d3 from "d3";

const url = {
  men: "http://localhost:3000/data/tallest_men.json",
  women: "http://localhost:3000/data/tallest_women.json"
};

const MARGIN = { TOP: 10, BOTTOM: 50, LEFT: 60, RIGHT: 20 };
const WIDTH = 800 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTTOM;

class D3Chart {
  constructor(element) {
    const chart = this;

    chart.svg = d3.select(element)
      .append("svg")
        .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
        .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
      .append("g")
        .attr("transform", `translate(${MARGIN.LEFT},  ${MARGIN.TOP})`);

    chart.xLabel = chart.svg.append("text")
      .attr("x", WIDTH / 2)
      .attr("y", HEIGHT + 40)
      .attr("text-anchor", "middle");

    chart.svg.append("text")
      .attr("transform", `rotate(-90)`)
      .attr("x", -(HEIGHT / 2))
      .attr("y", -40)
      .attr("text-anchor", "middle")
      .text("Height (cm)");

    chart.xAxisGroup = chart.svg.append("g")
        .attr("transform", `translate(0, ${HEIGHT})`);

    chart.yAxisGroup = chart.svg.append("g");

    Promise.all([
      d3.json(url.women),
      d3.json(url.men)
    ])
    .then(datasets => {
      chart.datasets = {
        women: datasets[0],
        men: datasets[1]
      };

      let gender = "women";
      chart.update(gender);

      d3.interval(() => {
        gender = (gender === "women") ? "men" : "women";
        chart.update(gender);
      }, 3000)
    });
  }

  update(gender) {
    const chart = this;

    chart.data = chart.datasets[gender];
    chart.xLabel.text(`The world's tallest ${gender}`);

    const y = d3.scaleLinear()
      .domain([
        d3.min(chart.data, d => d.height * 0.95),
        d3.max(chart.data, d => d.height)
      ])
      .range([HEIGHT, 0]);

    const x = d3.scaleBand()
      .domain(chart.data.map(d => d.name))
      .range([0, WIDTH])
      .padding(0.4);

    const xAxisCall = d3.axisBottom(x);
    chart.xAxisGroup
      .transition()
      .duration(500)
      .call(xAxisCall);

    const yAxisCall = d3.axisLeft(y);
    chart.yAxisGroup
      .transition()
      .duration(500)
      .call(yAxisCall);

    const rects = chart.svg.selectAll("rect")
      .data(chart.data);

    rects.exit()
      .transition()
      .duration(500)
      .attr("height", 0)
      .attr("y", HEIGHT)
      .remove();

    rects
      .transition()
      .duration(500)
      .attr("x", d => x(d.name))
      .attr("y", d => y(d.height))
      .attr("width", x.bandwidth)
      .attr("height", d => HEIGHT - y(d.height));

    rects.enter()
      .append("rect")
      .attr("x", d => x(d.name))
      .attr("y", d => y(d.height))
      .attr("width", x.bandwidth)
      .attr("height", d => HEIGHT - y(d.height))
      .attr("fill", "green");
  }
}

export default D3Chart;
