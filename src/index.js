import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import ErrorBoundary from './ErrorBourdary';
import './index.css';
import store from './store';
// const client = new ApolloClient({
//   uri: 'https://48p1r2roz4.sse.codesandbox.io',
//   cache: new InMemoryCache(),
// });

// client
//   .query({
//     query: gql`
//       query GetRates {
//         rates(currency: "USD") {
//           currency
//         }
//       }
//     `,
//   })
//   .then((result) => console.log('result', result));
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
