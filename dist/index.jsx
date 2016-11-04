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
    action: () => { return {component : "<h1>hello</h1>" }}
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
app.get("*", (res, rep) => {
    const routes = [r1];
    const route = universal_router_1.resolve(routes, "/");
    // const data = { ...route } ;
    // data.children = ReactDOMServer.renderToString(<div >{route.component}</div>);
    // console.log(route);
    route.then(
        (data)=>{
            // console.log(data);
            rep.send(data.component)
        }
    );
    // console.log(route);
    // console.log(route.then().);

    // rep.send(route.then().component);
    // const data:any = { ...route };
    // ReactDOMServer.renderToString();
});
app.listen(3000, () => {
    console.log("ok");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFJQSxtQ0FBd0Isa0JBQWtCLENBQUMsQ0FBQTtBQUUzQyxNQUFZLE9BQU8sV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUVuQyxtQkFBbUI7QUFDbkIsdURBQXVEO0FBQ3ZELHVEQUF1RDtBQUN2RCxvREFBb0Q7QUFDcEQsS0FBSztBQUVMLElBQUksRUFBRSxHQUFHO0lBQ0wsSUFBSSxFQUFFLEdBQUc7SUFDVCw2RUFBNkU7SUFDN0UsTUFBTSxFQUFFLFFBQUssQ0FBQztDQUVmLENBQUE7QUFJSCxtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixRQUFRO0FBQ1Isb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQixtQkFBbUI7QUFDbkIsMEJBQTBCO0FBQzFCLHdDQUF3QztBQUN4QyxZQUFZO0FBQ1osVUFBVTtBQUNWLFNBQVM7QUFDVCxRQUFRO0FBQ1IsMkJBQTJCO0FBQzNCLGtCQUFrQjtBQUNsQixtQkFBbUI7QUFDbkIsNkJBQTZCO0FBQzdCLDJDQUEyQztBQUMzQyxZQUFZO0FBQ1osVUFBVTtBQUNWLFFBQVE7QUFDUixPQUFPO0FBQ1Asb0JBQW9CO0FBQ3BCLDRCQUE0QjtBQUM1QixnRUFBZ0U7QUFDaEUsbURBQW1EO0FBQ25ELG9CQUFvQjtBQUVwQixPQUFPO0FBQ1AsSUFBSTtBQUdKLHNFQUFzRTtBQUN0RSwrQ0FBK0M7QUFDL0MsTUFBTTtBQUNOLHdDQUF3QztBQUN4QyxvQkFBb0I7QUFDcEIsd0JBQXdCO0FBQ3hCLDBCQUEwQjtBQUMxQixVQUFVO0FBSVYsTUFBTSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFHdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxHQUFHLEVBQUMsR0FBRztJQUVsQixNQUFNLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRXBCLE1BQU0sS0FBSyxHQUFHLDBCQUFPLENBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRWxDLDhCQUE4QjtJQUM5QixnRkFBZ0Y7SUFDaEYsMEVBQTBFO0lBRTFFLGlDQUFpQztJQUVqQyxtQ0FBbUM7QUFHckMsQ0FBQyxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBQztJQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDbkIsQ0FBQyxDQUFDLENBQUMifQ==