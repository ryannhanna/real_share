import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCompleted } from '../actions';
import { boughtItemRef } from '../firebase';

class BoughtItem extends Component {
  componentDidMount() {
    boughtItemRef.on('value', snap => {
      let boughtItems = [];
      snap.forEach(boughtItem => {
        const { email, title } = boughtItem.val();
        boughtItems.push({email, title})
      })
      this.props.setCompleted(boughtItems);
    })
  }

  clearPurchased() {
    boughtItemRef.set([]);
  }

  render() {
    return (
      <div>
        {
          this.props.boughtItems.map((boughtItem, index) => {
            const { title, email } = boughtItem;
            return (
              <div key={index}>
                <strong>{title}</strong> has been purchased by <em>{email}</em>
              </div>
            )
          })
        }
        <button
          className="btn btn-primary"
          onClick={() => this.clearPurchased()}
        >
          Clear Purchased Items
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { boughtItems } = state;
  return {
    boughtItems
  }
}

export default connect(mapStateToProps, { setCompleted })(BoughtItem);
