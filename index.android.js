import React, {Component} from 'react';
import {
    AppRegistry
} from 'react-native';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import todoApp from './reducers'
import App from  './app/App';

let store = createStore(todoApp);

export default class TODO extends Component {


    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}
AppRegistry.registerComponent('TODO', () => App);

