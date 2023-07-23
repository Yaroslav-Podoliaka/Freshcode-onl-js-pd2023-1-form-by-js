import React, { Component } from 'react'
import './ContactForm.css';

export class ContactForm extends Component {
  state = {
    ...this.props.contactForEdit,
  };

  createEmptyContact() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    };
  };

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  onClearField = (event) => {
    const sibling = event.target.parentNode.firstChild;
    this.setState({
      [sibling.name]: '',
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      ...this.state,
    });
  };;
  
  onContactDelete = () => {
    this.props.onDelete(this.props.contactForEdit.id);
    this.setState({
      ...this.createEmptyContact(),
    });
  };

  render() {
    return (
      <form id="contact-form" onSubmit={this.onFormSubmit}>
        <div className="form-container">
          <div className="contact-info">
            <input
              type="text"
              className="text-field"
              placeholder="First name"
              name="firstName"
              value={this.state.firstName}
              onChange={this.onInputChange}
            />
            <span className="clear" onClick={this.onClearField}>
              X
            </span>
          </div>
          <div className="contact-info">
            <input
              type="text"
              className="text-field"
              placeholder="Last name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.onInputChange}
            />
            <span className="clear" onClick={this.onClearField}>
              X
            </span>
          </div>
          <div className="contact-info">
            <input
              type="email"
              className="text-field"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.onInputChange}
            />
            <span className="clear" onClick={this.onClearField}>
              X
            </span>
          </div>
          <div className="contact-info">
            <input
              type="text"
              className="text-field"
              placeholder="Phone"
              name="phone"
              value={this.state.phone}
              onChange={this.onInputChange}
            />
            <span className="clear" onClick={this.onClearField}>
              X
            </span>
          </div>
        </div>
        <div className='btns'>
          <button id='save' type='submit'>
            Save
          </button>
          {this.state.id ? <button id='delete'
              type='button' onClick={this.onContactDelete}>
              Delete</button> : ''
          }
        </div>
      </form>
    );
  }
}

export default ContactForm