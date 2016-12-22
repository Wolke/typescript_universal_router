import * as React from 'react';
import { Children, PropTypes } from 'react';
import * as ReactDOM from 'react-dom';

import * as ReactDOMServer from 'react-dom/server';
import { resolve } from 'universal-router';

import * as express from 'express';


class Hello extends React.Component<{ title: string }, {}>{
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.title}</h2>
        
        <a href="/contact" >contact</a>
        <a href="/about" >about</a>
        <a href="/" >home</a>


      </div>)
  }
};

class App extends React.Component<{}, {}>{
  render() {
    return Children.only(this.props.children)
  }
}

const app = express();

app.get("*", async (req, rep) => {
  var home = {
    path: '/',
    action() {
      let title = "home";
      return {
        title,
        component: <Hello title={title} />,
      };
    },
  };
  var contact = {
    path: '/contact',
    action() {
      let title = "contact";
      return {
        title,
        component: <Hello title={title} />,
      };
    },
  };
  var about = {
    path: '/about',
    action() {
      let title = "about";
      return {
        title,
        component: <Hello title={title} />,
      };
    },
  };
  var r = {
    path: '*',
    action() {

      let title = "***";

      return {
        title,
        component: <Hello title={title} />,
      };
    },
  };


  const rs = {
    path: "/",
    children: [
      home,
      contact,
      about,
      r

    ],
    async action({next}) {
      const route = await next();
      // console.log(route);
      route.title = `${route.title || 'Untitled Page'} - Shit`;
      route.description = route.description || '';
      return route;

    }
  }

  function Html({title}) {
    
    return (
      <div>
        <h1>{title}</h1>
        
        <a href="/contact" >contact</a>
        <br />
        <a href="/about" >about</a>
        <br />
        
        <a href="/" >home</a>


      </div>)
  }

  // const route = resolve( r , req.url);
  const route = await resolve<any, any>(rs, {
    path: req.url
  });


  const data = Object.assign(route);
  console.log("data",data);
  const html = ReactDOMServer.renderToStaticMarkup(<Html {...data} />);
  rep.send(html);


});

app.listen(3030, () => {
  console.log("ok")
});