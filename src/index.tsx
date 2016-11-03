import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as ReactDOMServer from 'react-dom/server';
import { resolve } from 'universal-router';

import * as express from 'express';

const routes = [
  { path: '/one', action: () => <h1>Page One</h1> },
  { path: '/two', action: () => <h1>Page Two</h1> },
  { path: '*', action: () => <h1>Not Found</h1> }
];

const route = resolve(routes, { path: '/one' }).then(component => {
  ReactDOM.render(component, document.body);
});


const app = express();

app.get("*",(res,rep)=>{
  const data:any = { ...route };
  data.children = ReactDOM.renderToString(<App context={context}>{route.component}</App>);
    
  ReactDOMServer.renderToString();

})