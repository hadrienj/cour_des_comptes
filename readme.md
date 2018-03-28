# Data for Good - 2018

Open dataset visualization. The goal of this project is to build a visualization tool of table data (.csv, .xls...) and facilitate its access, filtering and previsualization.

# Goals

- Previsualization: get the first few lines of the dataset to see its shape (column names, type of values etc.) before downloading it
- Filtering: select only a subset of the dataset to download
- Visualization: draw few charts from the data (eventually after filtering)

# First attempt

- Get the data with url request
- Use [recline.js](http://okfnlabs.org/recline/) to do the previsualization and the visualization