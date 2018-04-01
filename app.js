var dataset = new recline.Model.Dataset({
  url: 'https://files.datapress.com/london/dataset/london-average-air-quality-levels/2018-03-23T11:58:28.61/air-quality-london-monthly-averages.csv',
  backend: 'dataproxy',
});
console.log(dataset);

dataset.fetch();

// show the data for illustrations sake
var grid = new recline.View.SlickGrid({
  model: dataset,
  el:  $('#mygrid'),
});
grid.visible = true;