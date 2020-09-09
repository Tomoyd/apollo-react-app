import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import ErrorBoundary from './ErrorBourdary';
import './index.css';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    {/* <ApolloProvider client={client}> */}
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
    {/* </ApolloProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

