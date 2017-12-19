import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import ListAdd from './ListAdd';
import ShoppingList from './ShoppingList.jsx';
import BoughtItem from './BoughtItem';


class App extends Component {
  signOut() {
  firebaseApp.auth().signOut();

  }

  render(){
    return(
      <div style={{margin: '10px'}}>
          <h3>Lists</h3>
        <ListAdd />
        <hr />
        <h4>Shopping List</h4>
        <ShoppingList />
        <hr />
        <h4>Item Purchased</h4>
        <BoughtItem />
        <hr />
        <button
          className="btn btn-danger"
          onClick={() => this.signOut()}
          >
            Sign Out
          </button>
      </div>
    )
  }
}


function mapStateToProps(state) {
  // console.log('state', state);
  return {}
}

export default connect(mapStateToProps, null)(App);
