import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import rootReducer from './redux/reducers';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    );

const Root = () => {
    return (
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));