import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducer/combinedReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/firbaseConfig';


const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reduxFirebase(fbConfig,
      { 
        userProfile: 'users', useFirestoreForProfile: true,
      attachAuthIsReady: true,
    })
  ));

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    // Provider should connect all the store of application.
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
})

serviceWorker.unregister();


/* all you need to fix the problem of “TypeError: Object(…) is not a function” is typing:
1- npm uninstall react-redux
2- npm uninstall react-redux-firebase
3- npm i --save react-redux@5.1.1 react-redux-firebase@2.2.4 */