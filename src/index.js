import React from 'react';
import ReactDOM from 'react-dom';
import  Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp } from "./firebase";
import { logUser } from './actions';
import reducer from './reducers';



import App from './components/App';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';



const store = createStore(reducer);



firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    // console.log('user has signed in or up', user);
    const { email } = user;
    store.dispatch(logUser(email));
    browserHistory.push('/App');
  } else {
    // console.log('user has signed out or still needs to sign in.')
    browserHistory.replace('/LogIn');
  }
})

ReactDOM.render(
  <Provider store={store}>
    <Router path="/" history={browserHistory}>
      <Route path="/app" component={App} />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
    </Router>
  </Provider>, document.getElementById('root')
)
