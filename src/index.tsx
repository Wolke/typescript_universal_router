import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as ReactDOMServer from 'react-dom/server';
import { resolve } from 'universal-router';

import * as express from 'express';

// const routes = [
//   { path: '/one', action: () => <h1>Page One</h1> },
//   { path: '/two', action: () => <h1>Page Two</h1> },
//   { path: '*', action: () => <h1>Not Found</h1> }
// ];

let r1 = {
    path: "/",
    // action: (ctx: ActionContext & C, params: Params) => R | Promise<R> | void;
    action: ()=>{}
    // children?: Routes<C, R>;
  }



// const routes = {
//   path : "/",
//   children: [
//     {
//       path : "/",
//       action(){
//         return {
//           title:"home",
//           component : <div>Home</div>
//         }
//       }
//     },
//     {
//       path : "/contact",
//       action(){
//         return {
//           title:"contact",
//           component : <div>Contact</div>
//         }
//       }
//     }
//   ],
//   action({next}){
//     const route = next();
//     route.title = `${route.title || 'Untitled Page'} - gogo`;
//     route.description = route.description || '';
//     return route;

//   } 
// }


// const route = resolve(routes, { path: '/one' }).then(component => {
//   ReactDOM.render(component, document.body);
// });
// const route = await resolve(routes, {
//       ...context,
//       path: req.path,
//       query: req.query,
//     });



const app = express();


app.get("*",(req,rep)=>{
  // export interface Route<C, R> {
  //   path: string;
  //   action: (ctx: ActionContext & C, params: Params) => R | Promise<R> | void;
  //   children?: Routes<C, R>;
  // }
  
  let home = {
    path : "/",
    action: ()=>{
      return {
      title: 'home',
      component: "<h1>home</h1>",
    };
    }
  };
  let hi = {
    path : "/hi",
    action: ()=>{
      return {
      title: 'hi',
      component: "<h1>hi</h1>",
    };
    }
  };

  let rs = [home,hi];

  const route = resolve( rs ,req.url );
  
  route.then(
        (data)=>{
            // console.log(data);
            rep.send(data.component)
        }
  );
  // const routes = [r1];

  // const route = resolve(routes,"/");
  
  // const data = { ...route } ;
  // data.children = ReactDOMServer.renderToString(<div >{route.component}</div>);
  // rep.send(ReactDOMServer.renderToString(<div >{route.component}</div>));

  // const data:any = { ...route };
    
  // ReactDOMServer.renderToString();
   

});

app.listen(3000,()=>{
  console.log("ok")
});