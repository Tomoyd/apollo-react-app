import React, {Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import routers from './router';

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
