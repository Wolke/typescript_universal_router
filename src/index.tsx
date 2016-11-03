import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { resolve } from 'universal-router';

const routes = [
  { path: '/one', action: () => <h1>Page One</h1> },
  { path: '/two', action: () => <h1>Page Two</h1> },
  { path: '*', action: () => <h1>Not Found</h1> }
];

resolve(routes, { path: '/one' }).then(component => {
  ReactDOM.render(component, document.body);
  // renders: <h1>Page One</h1>
});