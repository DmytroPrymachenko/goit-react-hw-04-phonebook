import { Component } from 'react';
import {
  ButtonType,
  FormsDiv,
  InputName,
  InputPhone,
  LabelName,
  LabelPhone,
} from './StylesJSX/FormStyles';

export default class Form extends Component {
  state = {
    number: '',
    name: '',
  };
  onChangeState = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };
  onSubmitForm = e => {
    e.preventDefault();
    this.props.contactsState(this.state);
  };

  render() {
    const { name, number } = this.state;
    return (
      <FormsDiv onSubmit={this.onSubmitForm}>
        <LabelName htmlFor="name">Name</LabelName>
        <InputName
          onChange={this.onChangeState}
          id="name"
          name="name"
          type="text"
          value={name}
        />
        <LabelPhone htmlFor="phone">Phone</LabelPhone>
        <InputPhone
          onChange={this.onChangeState}
          id="phone"
          name="number"
          type="tel"
          value={number}
        />
        <ButtonType type="submit">BUTTON</ButtonType>
      </FormsDiv>
    );
  }
}
