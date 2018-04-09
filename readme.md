# Data for Good - 2018

Open dataset visualization. The goal of this project is to build a visualization tool of table data (.csv, .xls...) and facilitate its access, filtering and previsualization.

# Getting started

![demo](demo.pdf)

The app can be started with `yarn start` in the root repository.

# Goals

- Previsualization: get the first few lines of the dataset to see its shape (column names, type of values etc.) before downloading it
- Filtering: select only a subset of the dataset to download
- Visualization: draw few charts from the data (eventually after filtering)

# First attempt

- Get the data with url request
- Use [recline.js](http://okfnlabs.org/recline/) to do the previsualization and the visualization

It seems that people working on recline.js moved to other projects. Also, the use of remote url to fetch csv data is not working well (503 errors).

# New directions

The current idea is to have an intermediate server written in Flask that will:

- Get the right csv file according to request parameters
- Preprocess the file
- Convert it to json
- Sending back the json to the client

On the client side, a pop-up window will be opened for previsualization containing small React (for instance) components with:

- Table display for data previsualization
- Some custom charts

Concerning the creation of table in React, we can use [react-table](https://react-table.js.org/).

