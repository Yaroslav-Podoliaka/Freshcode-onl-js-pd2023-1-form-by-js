import React, { Component } from 'react'
import './ContactItem.css';

export class ContactItem extends Component {
  onItemDelete = (event) => {
    event.stopPropagation();
    this.props.onDelete(this.props.contact.id)
  }
  onContactEdit = (event) => {
    event.stopPropagation()
    this.props.onEdit(this.props.contact)
  }
  render() {
    return (
      <div className='contact-item'>
        <p className='content'
        onDoubleClick={this.onContactEdit}>
          {this.props.contact.firstName} {this.props.contact.lastName}
        </p>
        <span className='delete-btn'
        onClick={this.onItemDelete}>
          X
        </span>
      </div>
    )
  }
}

export default ContactItem