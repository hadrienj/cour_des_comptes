import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { VictoryScatter } from 'victory';
import ReactTable from "react-table";
import "react-table/react-table.css";

// the data file is in public which is not good I think...
const url = "./air-quality-london-time-of-day.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      columns: [],
      isLoading: true,
    };
    this.getData();
  }
  getData() {
    // get data from url (local in this case)
    fetch(url).then( (response) => {
      return response.json()
    }).then((data) => {
      // real data is in 'fields'
      const columns = this.getHeader(data);
      console.log(columns);
      return this.setState({
        data: data,
        columns: columns, isLoading: false
      });
    });
  }
  getHeader(data) {
    // to do: check that all objects have the same keys
    const dataKeys = Object.keys(data[0]);
    const columns = [];
    dataKeys.map(x=>{
      columns.push({
        Header: x,
        accessor: x,
      });
    });
    return columns;
  }
  render() {
    if (this.state.isLoading) {
      return 'Loading...';
    }

    return (
      <div className="App">
      <Row>
        <Col xs={12} sm={8} md={6} lg={6}>
          <ReactTable
            data={this.state.data}
            columns={this.state.columns}
            defaultPageSize={10}
            className="-striped -highlight"
          />
          </Col>
          <Col xs={12} sm={8} md={6} lg={6}>
          <VictoryScatter
            data={this.state.data}
            // data accessor for x values
            x="London Mean Roadside:Oxides of Nitrogen (ug/m3)"
            // data accessor for y values
            y="London Mean Roadside:Nitrogen Dioxide (ug/m3)"
          />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
