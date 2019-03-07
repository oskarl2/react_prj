import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';
import InputWrapper from '../containers/form/InputWrapper';
import FormInner from '../containers/form/FormInner';
import FormErrors from './FormErrors';
import '../styles/Form.css';


class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      phone: '',
      formErrors: {
          phone: '',
          user: ''
        },
      userValid: '',
      phoneValid: false,
      formValid: false,
      storage: JSON.parse(localStorage.getItem('localDB')),
      your_destiny: 'def'
    };
  }

  handlerInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value}
      ,
      () => {this.validateField(name, value)}
      );

  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors,
        phoneValid = this.state.phoneValid,
        userValid = this.state.userValid;

    switch(fieldName) {
      case 'phone':
        phoneValid = value.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/);
        fieldValidationErrors.phone = phoneValid ? '' : ' Введите корректный телефон';
        break;
      case 'user':
        userValid = value.length > 0;
        fieldValidationErrors.user= userValid ? '': ' Введите Имя';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
      phoneValid: phoneValid,
      userValid: userValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.phoneValid &&
        this.state.userValid});
  }

  chooseYourDestiny = (event) => {
    this.setState({your_destiny: event.target.value});
  };

  sendData = (event, props) => {
    const localDB = JSON.parse(localStorage.getItem('localDB')) || [];

    this.user = this.state.user;
    this.phone = this.state.phone;
    this.your_destiny = this.state.your_destiny;

    let index_of_db = this.your_destiny,
        index = localDB.length ? localDB.length : 0,
        newUser = {
          'user': this.user,
          'phone': this.phone,
          'id' : index
        };

    if (this.your_destiny !== 'def') {
      if (!localDB[index_of_db].additionalUser) {
        localDB[index_of_db].additionalUser = [];
      }

      localDB[index_of_db].additionalUser.push(newUser)
    } else {
      localDB.push(newUser);
    }

    localStorage.setItem('localDB', JSON.stringify(localDB));

    this.setState({storage: localDB});

    this.props.props.localData(localDB);
    event.preventDefault();
  };

  render() {
    const {
      inputType,
      inputClass,
      buttonType,
      headerClass,
      buttonClass,
      inputWrapperClass,
      buttonText,
      selectClass
    } = this.props.dataForm;

    return (
      <FormInner className='modal-wrapper__form-wrapper'>
        <Header className={headerClass}/>
        <Close className='modal-wrapper__form-close' onClick={this.props.closeModal}/>
        <InputWrapper className={inputWrapperClass}>
          <label htmlFor="user_1">Имя
            <Input type={inputType} name='user' placeholder='Имя' id='user_1' className={inputClass}
                   value={this.state.user} onChange={this.handlerInput} />
          </label>
          <div>
            <FormErrors formErrors={this.state.formErrors.user} />
          </div>
          <label htmlFor="phone_1">Телефон
            <Input type={inputType} name='phone' placeholder='Телефон' id='phone_1' className={inputClass}
                   value={this.state.phone} onChange={this.handlerInput}/>
          </label>
          <div>
            <FormErrors formErrors={this.state.formErrors.phone} />
          </div>
          <select defaultValue="def" onChange={this.chooseYourDestiny} className={selectClass}>
            <Option value='def' item='Choose your destiny' />
            {
              this.state.storage ?
                ((this.state.storage).map(function (item, idx) {
                  return <Option key={idx} value={idx} item={item.user} />
                })) :
                null
            }
          </select>
        </InputWrapper>
        <Button type={buttonType} className={buttonClass} onClick={this.sendData} disabled={!this.state.formValid}>
          {buttonText}
        </Button>
      </FormInner>
    );
  }
}

const Header = (props) => {
  return <h1 {...props}>Добавление пользователя</h1>
};

const Close = (props) => {
  return <span {...props} />
};

const Option = (props) => {
  return <option {...props}>{props.item}</option>
};

export default Form;