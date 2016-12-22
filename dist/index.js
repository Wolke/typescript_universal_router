"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const React = require('react');
const react_1 = require('react');
const ReactDOMServer = require('react-dom/server');
const universal_router_1 = require('universal-router');
const express = require('express');
class Hello extends React.Component {
    constructor() {
        super();
    }
    render() {
        return React.createElement("h1", null, this.props.title);
    }
}
;
class App extends React.Component {
    render() {
        return react_1.Children.only(this.props.children);
    }
}
const app = express();
app.get("*", (req, rep) => __awaiter(this, void 0, void 0, function* () {
    var home = {
        path: '/',
        action() {
            let title = "home";
            return {
                title,
                component: React.createElement(Hello, {title: title}),
            };
        },
    };
    var contact = {
        path: '/contact',
        action() {
            let title = "contact";
            return {
                title,
                component: React.createElement(Hello, {title: title}),
            };
        },
    };
    var r = {
        path: '*',
        action() {
            let title = "***";
            return {
                title,
                component: React.createElement(Hello, {title: title}),
            };
        },
    };
    const rs = {
        path: "/",
        children: [
            home,
            contact,
            r
        ],
        action({ next }) {
            return __awaiter(this, void 0, void 0, function* () {
                const route = yield next();
                // console.log(route);
                route.title = `${route.title || 'Untitled Page'} - Great`;
                route.description = route.description || '';
                return route;
            });
        }
    };
    function Html({ title }) {
        return React.createElement("div", null, title);
    }
    // const route = resolve( r , req.url);
    const route = yield universal_router_1.resolve(rs, {
        path: req.url
    });
    const data = Object.assign(route);
    const html = ReactDOMServer.renderToStaticMarkup(React.createElement(Html, __assign({}, data)));
    rep.send(html);
}));
app.listen(3030, () => {
    console.log("ok");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBWSxLQUFLLFdBQU0sT0FBTyxDQUFDLENBQUE7QUFDL0Isd0JBQW9DLE9BQU8sQ0FBQyxDQUFBO0FBRzVDLE1BQVksY0FBYyxXQUFNLGtCQUFrQixDQUFDLENBQUE7QUFDbkQsbUNBQXdCLGtCQUFrQixDQUFDLENBQUE7QUFFM0MsTUFBWSxPQUFPLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFHbkMsb0JBQW9CLEtBQUssQ0FBQyxTQUFTO0lBQ2pDO1FBQ0UsT0FBTyxDQUFDO0lBQ1YsQ0FBQztJQUNELE1BQU07UUFDSixNQUFNLENBQUMscUJBQUMsRUFBRSxTQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBTSxDQUFLLENBQUE7SUFDcEMsQ0FBQztBQUNILENBQUM7QUFBQSxDQUFDO0FBRUYsa0JBQWtCLEtBQUssQ0FBQyxTQUFTO0lBQy9CLE1BQU07UUFDSixNQUFNLENBQUMsZ0JBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0FBQ0gsQ0FBQztBQUVELE1BQU0sR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBRXRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLENBQU8sR0FBRyxFQUFDLEdBQUc7SUFDeEIsSUFBSSxJQUFJLEdBQUc7UUFDVCxJQUFJLEVBQUUsR0FBRztRQUNULE1BQU07WUFDSixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUM7WUFDbkIsTUFBTSxDQUFDO2dCQUNMLEtBQUs7Z0JBQ0wsU0FBUyxFQUFFLG9CQUFDLEtBQUssR0FBQyxLQUFLLEVBQUUsS0FBTSxFQUFHO2FBQ25DLENBQUM7UUFDSixDQUFDO0tBQ0YsQ0FBQztJQUNELElBQUksT0FBTyxHQUFHO1FBQ2IsSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTTtZQUNKLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUN0QixNQUFNLENBQUM7Z0JBQ0wsS0FBSztnQkFDTCxTQUFTLEVBQUUsb0JBQUMsS0FBSyxHQUFDLEtBQUssRUFBRSxLQUFNLEVBQUc7YUFDbkMsQ0FBQztRQUNKLENBQUM7S0FDRixDQUFDO0lBQ0gsSUFBSSxDQUFDLEdBQUc7UUFDUCxJQUFJLEVBQUUsR0FBRztRQUNULE1BQU07WUFFSixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7WUFFbEIsTUFBTSxDQUFDO2dCQUNMLEtBQUs7Z0JBQ0wsU0FBUyxFQUFFLG9CQUFDLEtBQUssR0FBQyxLQUFLLEVBQUUsS0FBTSxFQUFHO2FBQ25DLENBQUM7UUFDSixDQUFDO0tBQ0YsQ0FBQztJQUdGLE1BQU0sRUFBRSxHQUFHO1FBQ1QsSUFBSSxFQUFFLEdBQUc7UUFDVCxRQUFRLEVBQUc7WUFDVCxJQUFJO1lBQ0osT0FBTztZQUNQLENBQUM7U0FFRjtRQUNLLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBQzs7Z0JBQ2pCLE1BQU0sS0FBSyxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7Z0JBQzNCLHNCQUFzQjtnQkFDdEIsS0FBSyxDQUFDLEtBQUssR0FBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLElBQUksZUFBZSxVQUFVLENBQUM7Z0JBQzNELEtBQUssQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7Z0JBQzVDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFFZixDQUFDO1NBQUE7S0FDRixDQUFBO0lBRUQsY0FBYyxFQUFDLEtBQUssRUFBQztRQUNuQixNQUFNLENBQUMscUJBQUMsR0FBRyxTQUFFLEtBQU0sQ0FBTSxDQUFBO0lBQzNCLENBQUM7SUFDQyx1Q0FBdUM7SUFDdkMsTUFBTSxLQUFLLEdBQUcsTUFBTSwwQkFBTyxDQUFXLEVBQUUsRUFBRztRQUN6QyxJQUFJLEVBQUMsR0FBRyxDQUFDLEdBQUc7S0FDYixDQUFDLENBQUM7SUFHSCxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWxDLE1BQU0sSUFBSSxHQUFHLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxvQkFBQyxJQUFJLGVBQUssSUFBSSxFQUFJLENBQUMsQ0FBQztJQUNyRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBR2pCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBQztJQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDbkIsQ0FBQyxDQUFDLENBQUMifQ==