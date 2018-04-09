$(document).ready(function() {

const path = "https://files.datapress.com/london/dataset/london-average-air-quality-levels/2018-03-23T11:58:28.61/air-quality-london-monthly-averages.csv";

const dataset = new recline.Model.Dataset({
  url: path,
  backend: 'dataproxy',
});
dataset.fetch();


// Show data table
const grid = new recline.View.SlickGrid({
  model: dataset,
  el:  $('#tableContainer'),
});
grid.visible = true;
grid.render();


// Plot data
const graph = new recline.View.Graph({
  model: dataset,
  state: {
    graphType: "lines-and-points",
    group: "Month",
    series: ["London Mean Background:PM10 Particulate (ug/m3)",
      "London Mean Background:Nitrogen Dioxide (ug/m3)"]
  }
});
$('#plotContainer').append(graph.el);
graph.render();
graph.redraw();

});