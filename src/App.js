import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ReactTable from "react-table";
import "react-table/react-table.css";

// the data file is in public which is not good I think...
const url = "./base-officielle-des-codes-postaux.json";

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
      const columns = this.getHeader(data.map(x=>x.fields));

      return this.setState({
        data: data.map(x=>x.fields),
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
        <ReactTable
          data={this.state.data}
          columns={this.state.columns}
          defaultPageSize={20}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default App;
