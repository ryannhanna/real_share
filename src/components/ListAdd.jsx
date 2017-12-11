import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listRef } from '../firebase';

class ListAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  addtoList() {
    console.log('this', this);
    const { title } = this.state;
    const { email } = this.props.user;
    listRef.push({email, title});
  }

  render() {
    return (
      <div className="form-inline">
        <div className="form-group">
          <input
            type="text"
            placeholder="Add an Item?"
            className="form-control"
            style={{marginRight: '10px'}}
            onChange={event => this.setState({title: event.target.value})}
          />
          <button
            className="btn btn-success"
            type="button"
            onClick={() => this.addtoList()}
          >
            Add to the list!
          </button>
        </div>
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


export default connect(mapStateToProps, null)(ListAdd);
