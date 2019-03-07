import React, { Component } from 'react';
import Form from '../components/Form';

class ModalWrapper extends Component {
  render() {
    const dataForm = {
      inputClass: 'modal-wrapper__form-input_item',
      headerClass: 'modal-wrapper__form-header',
      buttonClass: 'modal-wrapper__form-button',
      inputWrapperClass: 'modal-wrapper__form-input_wrapper',
      selectClass: 'modal-wrapper__form-select',
      inputType: 'text',
      buttonType: 'submit',
      buttonText: 'Сохранить',
    };

    return (
      <div className='main_page_modal_wrapper'>
        {
          this.props.isShowModal ?
            <Form dataForm={dataForm} props={this.props} closeModal={this.props.closeModal}/> :
            null
        }
      </div>
    );
  }
}

export default ModalWrapper;