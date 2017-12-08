import React, { Component } from 'react';
import { connect } from 'react-redux';
import { boughtItemRef, listRef } from '../firebase';

class ListItem extends Component {
  boughtItem() {
    const { email } = this.props.user;
    const { title, serverKey } = this.props.list;
    listRef.child(serverKey).remove();
    boughtItemRef.push({email, title});
  }

  render() {
    const { email, title } = this.props.list;
    return (
      <div style={{margin: '10px'}}>
        <strong>{title}</strong>
        <span style={{marginRight: '10px'}}>  entered by  <em>{email}</em></span>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => this.boughtItem()}
        >
          Purchased
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  }
}

export default connect(mapStateToProps, null)(ListItem);
