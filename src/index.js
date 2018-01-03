import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { createStore } from "redux"
import { Provider } from "react-redux";
import config from "./config.js"
import speedReducer from "./reducers/speedIndex.js"
import reducer from "./reducers/index.js"


const store = createStore(config.SPEED ? speedReducer : reducer)
console.log(store);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
