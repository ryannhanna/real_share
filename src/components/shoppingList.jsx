import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listRef } from '../firebase';
import { addList } from '../actions';
import GoalItem from './GoalItem';

class shoppingList extends Component {
  componentDidMount() {
    listRef.on('value', snap => {
      let lists = [];
      snap.forEach(list => {
        const { email, title } = list.val();
        const serverKey = goal.key;
        lists.push({ email, title, serverKey });
      })
      this.props.addList(lists);
    })
  }

  render() {
    return (
      <div>
        {
          this.props.goals.map((goal, index) => {
            return (
              <GoalItem key={index} goal={goal} />
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
