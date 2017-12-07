import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp } from "./firebase";
import { logUser } from './actions';
import reducer from './reducers';
import { GoogleAPI,GoogleLogin,GoogleLogout } from 'react-google-oauth';


import App from './components/App';
import SignIn from './components/SignIn';


const store = createStore(reducer);



firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    // console.log('user has signed in or up', user);
    const { email } = user;
    store.dispatch(logUser(email));
    browserHistory.push('/app');
  } else {
    // console.log('user has signed out or still needs to sign in.')
    browserHistory.replace('/signin');
  }
})

ReactDOM.render(

    <GoogleAPI clientId="49317521904-m1kq74o3hit38n36cf79msa8j97o87kp.apps.googleusercontent.com"
      onUpdateSigninStatus={Function}
      onInitFailure={Function} >
      <div>
               <div><GoogleLogin /></div>
               <div><GoogleLogout /></div>
       </div>
      <Real-Share />
    </GoogleAPI>
    <Router path="/" history={browserHistory}>
    <Route path="/app" component={App} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    </Router>, document.getElementById('root')
)
//
//
// ReactDOM.render(
//         <GoogleAPI clientId="49317521904-m1kq74o3hit38n36cf79msa8j97o87kp.apps.googleusercontent.com"
//             onUpdateSigninStatus={Function}
//             onInitFailure={Function} >
//          	<YourApp />
//         </GoogleAPI>, document.getElementById('root'));
