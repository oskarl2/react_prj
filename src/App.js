import React, { Component } from 'react';
import TableWrapper from './containers/TableWrapper';
import ModalWrapper from './containers/ModalWrapper';
import Button from './components/Button';
import './App.css';
import './styles/reset.css'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.initialData,
      isShowButton: true,
      isShowModal: false
    };
  }

  localData = (local_data) => {
    this.setState({data: local_data})
  };

  show = () => {
    this.setState({
      isShowButton: !this.state.isShowButton,
      isShowModal: !this.state.isShowModal
    })
  };

  closeModal = () => {
    this.setState({
      isShowButton: !this.state.isShowButton,
      isShowModal: !this.state.isShowModal
    });
  };

  render() {
    let text = this.state.isShowButton ? 'Показать форму' : 'Скрыть форму';

    return (
      <div className='main_page'>
        <div className='main_page_inner'>
          <Button type='button' onClick={this.show}
                  className='main_page_button modal-wrapper__form-button'>
            {text}
          </Button>
          <TableWrapper localDataTo={this.state.data}/>
          </div>
        <ModalWrapper localData={this.localData} isShowModal={this.state.isShowModal} closeModal={this.closeModal}/>
      </div>
    );
  }
}

export default App;
