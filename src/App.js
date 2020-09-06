import React, {Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import routers from './router';
// const EXCHANGE_RATES = gql`
//   query GetExchangeRates {
//     rates(currency: "USD") {
//       currency
//       rate
//     }
//   }
// `;

// const { loading, error, data } = useQuery(EXCHANGE_RATES);
// if (loading) return <p>loading....</p>;
// if (error) return <p>Error ...</p>;
// return data.rates.map(({ currency, rate }) => (
//   <div key={currency}>
//     <p>
//       {currency}:{rate}
//     </p>
//   </div>
// ));
// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Switch>
          {routers.map(({exact, path, component}) => {
            return (
              <Route
                key={path}
                exact={exact}
                path={path}
                component={component}
              ></Route>
            );
          })}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
