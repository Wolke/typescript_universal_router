"use strict";
const universal_router_1 = require('universal-router');
const express = require('express');
// const routes = [
//   { path: '/one', action: () => <h1>Page One</h1> },
//   { path: '/two', action: () => <h1>Page Two</h1> },
//   { path: '*', action: () => <h1>Not Found</h1> }
// ];
let r1 = {
    path: "/",
    // action: (ctx: ActionContext & C, params: Params) => R | Promise<R> | void;
    action: () => { }
};
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
app.get("*", (req, rep) => {
    // export interface Route<C, R> {
    //   path: string;
    //   action: (ctx: ActionContext & C, params: Params) => R | Promise<R> | void;
    //   children?: Routes<C, R>;
    // }
    let home = {
        path: "/",
        action: () => {
            return {
                title: 'home',
                component: "<h1>home</h1>",
            };
        }
    };
    let hi = {
        path: "/hi",
        action: () => {
            return {
                title: 'hi',
                component: "<h1>hi</h1>",
            };
        }
    };
    let rs = [home, hi];
    const route = universal_router_1.resolve(rs, req.url);
    route.then((data) => {
        // console.log(data);
        rep.send(data.component);
    });
    // const routes = [r1];
    // const route = resolve(routes,"/");
    // const data = { ...route } ;
    // data.children = ReactDOMServer.renderToString(<div >{route.component}</div>);
    // rep.send(ReactDOMServer.renderToString(<div >{route.component}</div>));
    // const data:any = { ...route };
    // ReactDOMServer.renderToString();
});
app.listen(3000, () => {
    console.log("ok");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFJQSxtQ0FBd0Isa0JBQWtCLENBQUMsQ0FBQTtBQUUzQyxNQUFZLE9BQU8sV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUVuQyxtQkFBbUI7QUFDbkIsdURBQXVEO0FBQ3ZELHVEQUF1RDtBQUN2RCxvREFBb0Q7QUFDcEQsS0FBSztBQUVMLElBQUksRUFBRSxHQUFHO0lBQ0wsSUFBSSxFQUFFLEdBQUc7SUFDVCw2RUFBNkU7SUFDN0UsTUFBTSxFQUFFLFFBQUssQ0FBQztDQUVmLENBQUE7QUFJSCxtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixRQUFRO0FBQ1Isb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQixtQkFBbUI7QUFDbkIsMEJBQTBCO0FBQzFCLHdDQUF3QztBQUN4QyxZQUFZO0FBQ1osVUFBVTtBQUNWLFNBQVM7QUFDVCxRQUFRO0FBQ1IsMkJBQTJCO0FBQzNCLGtCQUFrQjtBQUNsQixtQkFBbUI7QUFDbkIsNkJBQTZCO0FBQzdCLDJDQUEyQztBQUMzQyxZQUFZO0FBQ1osVUFBVTtBQUNWLFFBQVE7QUFDUixPQUFPO0FBQ1Asb0JBQW9CO0FBQ3BCLDRCQUE0QjtBQUM1QixnRUFBZ0U7QUFDaEUsbURBQW1EO0FBQ25ELG9CQUFvQjtBQUVwQixPQUFPO0FBQ1AsSUFBSTtBQUdKLHNFQUFzRTtBQUN0RSwrQ0FBK0M7QUFDL0MsTUFBTTtBQUNOLHdDQUF3QztBQUN4QyxvQkFBb0I7QUFDcEIsd0JBQXdCO0FBQ3hCLDBCQUEwQjtBQUMxQixVQUFVO0FBSVYsTUFBTSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFHdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxHQUFHLEVBQUMsR0FBRztJQUNsQixpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLCtFQUErRTtJQUMvRSw2QkFBNkI7SUFDN0IsSUFBSTtJQUVKLElBQUksSUFBSSxHQUFHO1FBQ1QsSUFBSSxFQUFHLEdBQUc7UUFDVixNQUFNLEVBQUU7WUFDTixNQUFNLENBQUM7Z0JBQ1AsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsU0FBUyxFQUFFLGVBQWU7YUFDM0IsQ0FBQztRQUNGLENBQUM7S0FDRixDQUFDO0lBQ0YsSUFBSSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUcsS0FBSztRQUNaLE1BQU0sRUFBRTtZQUNOLE1BQU0sQ0FBQztnQkFDUCxLQUFLLEVBQUUsSUFBSTtnQkFDWCxTQUFTLEVBQUUsYUFBYTthQUN6QixDQUFDO1FBQ0YsQ0FBQztLQUNGLENBQUM7SUFFRixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBQyxFQUFFLENBQUMsQ0FBQztJQUVuQixNQUFNLEtBQUssR0FBRywwQkFBTyxDQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFFLENBQUM7SUFFckMsS0FBSyxDQUFDLElBQUksQ0FDSixDQUFDLElBQUk7UUFDRCxxQkFBcUI7UUFDckIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDNUIsQ0FBQyxDQUNOLENBQUM7SUFDRix1QkFBdUI7SUFFdkIscUNBQXFDO0lBRXJDLDhCQUE4QjtJQUM5QixnRkFBZ0Y7SUFDaEYsMEVBQTBFO0lBRTFFLGlDQUFpQztJQUVqQyxtQ0FBbUM7QUFHckMsQ0FBQyxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBQztJQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDbkIsQ0FBQyxDQUFDLENBQUMifQ==