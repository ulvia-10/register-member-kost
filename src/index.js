import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider} from 'react-redux';
import { Globalreducer } from './reducers/ReducersCombine';
import { createStore, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'


const root = ReactDOM.createRoot(document.getElementById('root'));

// //buat ngecek loggernya dari prev action ke next action 
// const myLogger = (storeMember) =>(next) =>(action) =>{
//   console.log("Logged Action: ", action);
//   next(action)
// }

const history = createBrowserHistory();
const initialState = {}
const enhancers = []
const middleware = [thunk, routerMiddleware(history)]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const storeMember = createStore(
  connectRouter(history)(Globalreducer),
  initialState,
  composedEnhancers
)

//untuk menampilkan subscribe store member 
storeMember.subscribe(()=>{
  console.log("Store updated! ", storeMember.getState())
}) 

root.render(
  <React.StrictMode>  
    <Provider store={storeMember}>
    <BrowserRouter>
    <div className='Container'>
    <App />
    </div>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
