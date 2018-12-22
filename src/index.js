import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'mobx-react';
import { RootStore } from './store';

ReactDOM.render((
    <Provider store={new RootStore()}>
      <App/>
    </Provider>
), document.getElementById('root'));
