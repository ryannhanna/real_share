import React, { Component } from 'react'
import { IconButton } from 'material-ui';
import firebase from 'firebase/app';
import autoBind from 'react-autobind';
import base from '../Rebase.config';
import ErrorMessage from './ErrorMessage';
import TopBanner from './TopBanner';



onSignUpClick(type) {
    let provider;
    switch (type) {
        case 'google':
            provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('email');
            provider.addScope('https://www.googleapis.com/auth/plus.login');
            break;
        case 'github':
            provider = new firebase.auth.GithubAuthProvider();
            provider.addScope('repo');
            break;
        case 'twitter':
            provider =  new firebase.auth.TwitterAuthProvider();
            break;
        default:
            console.error('no type provided!')
            break;
    }

    firebase.auth().signInWithRedirect(provider);
}
