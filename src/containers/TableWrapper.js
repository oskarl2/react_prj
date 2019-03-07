import React, { Component } from 'react';
import Table from '../components/Table';

const table_columns = ['Имя','Телефон'];

class TableWrapper extends Component {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.localDataTo) {
      return nextProps.localDataTo.length !== this.props.localDataTo.length;
    } else {
      return true
    }
  }

  render() {
    return (
      <div className='main_page_table_wrapper'>
        <Table initialData={this.props.localDataTo} headers={table_columns}/>
      </div>
    );
  }
}

export default TableWrapper;