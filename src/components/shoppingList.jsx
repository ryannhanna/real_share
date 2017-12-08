import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listRef } from '../firebase';
import { addList } from '../actions';
import ListItem from './ListItem';

class shoppingList extends Component {
  componentDidMount() {
    listRef.on('value', snap => {
      let lists = [];
      snap.forEach(list => {
        const { email, title } = list.val();
        const serverKey = list.key;
        lists.push({ email, title, serverKey });
      })
      this.props.addList(lists);
    })
  }

  render() {
    return (
      <div>
        {
          this.props.lists.map((list, index) => {
            return (
              <ListItem key={index} list={list} />
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { lists } = state;
  return {
    lists
  }
}

export default connect(mapStateToProps, { setGoals })(shoppingList);
