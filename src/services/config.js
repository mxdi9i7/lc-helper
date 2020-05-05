import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

var config = {
	apiKey: 'AIzaSyDF8147jNMXUzVIQJE4pRtYgchv1qWpq_Q',
	authDomain: 'lc-helper.firebaseapp.com',
	databaseURL: 'https://lc-helper.firebaseio.com',
	projectId: 'lc-helper',
	storageBucket: 'lc-helper.appspot.com',
	messagingSenderId: '27100415251',
	appId: '1:27100415251:web:110816b0da22f504a9c6e6',
};

const app = firebase.initializeApp(config);

export const db = firebase.firestore(app);


export const auth = firebase.auth;
