import React, {Component} from 'react';
import '../styles/Table.css';

class Table extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('was rendr')
    return (
      <table>
        <thead>
          <tr>
            {this.props.headers.map((title, idx) => {
               return <th key={idx}>{title}</th>;
             },this)}
          </tr>
        </thead>
        {
          this.props.initialData.length?
          (
            <tbody>
              {this.props.initialData.map((row, idx) => {

                return (
                  [
                    [<TrowDouble row={row}/>]
                  ]
                )
              })}
            </tbody>
          ) :
            (<tbody>
              <tr>
                <td colSpan={2}>Заполните пожалуйста Данные</td>
              </tr>
            </tbody>)
        }
      </table>
    );
  }
}

const TrowDouble = (props) => {
  return (
    [
      (<tr key={props.id}>
        <td>{props.row.user}</td>
        <td>{props.row.phone}</td>
      </tr>),
      (props.row.additionalUser ?
        (Object.keys(props.row.additionalUser).map((cell, idx) => {
         return (
           <tr key={idx} className='add_user'>
              <td>{props.row.additionalUser[cell].user}</td>
              <td>{props.row.additionalUser[cell].phone}</td>
            </tr>
         )}
        )) : null)
    ]
  )
};

export default Table;