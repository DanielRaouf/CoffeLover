import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import rootSaga from './src/sagas';
import {Router} from './src/Router';
import reducers from './src/reducers';
import createSagaMiddleware from 'redux-saga';

class App extends Component {
  constructor(props) {
    super(props);
    const sagaMiddleware = createSagaMiddleware();
    this.store = createStore(reducers, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
  }
  render() {
    return (
      <Provider store={this.store}>
      <StatusBar barStyle='light-content'/>
        <Router />
      </Provider>
    );
  }
}

export default App;
