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
        return (React.createElement("div", null, 
            React.createElement("h1", null, this.props.title), 
            React.createElement("h2", null, this.props.title), 
            React.createElement("a", {href: "/contact"}, "contact"), 
            React.createElement("a", {href: "/about"}, "about"), 
            React.createElement("a", {href: "/"}, "home")));
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
    var about = {
        path: '/about',
        action() {
            let title = "about";
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
            about,
            r
        ],
        action({ next }) {
            return __awaiter(this, void 0, void 0, function* () {
                const route = yield next();
                // console.log(route);
                route.title = `${route.title || 'Untitled Page'} - Shit`;
                route.description = route.description || '';
                return route;
            });
        }
    };
    function Html({ title }) {
        return (React.createElement("div", null, 
            React.createElement("h1", null, title), 
            React.createElement("a", {href: "/contact"}, "contact"), 
            React.createElement("br", null), 
            React.createElement("a", {href: "/about"}, "about"), 
            React.createElement("br", null), 
            React.createElement("a", {href: "/"}, "home")));
    }
    // const route = resolve( r , req.url);
    const route = yield universal_router_1.resolve(rs, {
        path: req.url
    });
    const data = Object.assign(route);
    console.log("data", data);
    const html = ReactDOMServer.renderToStaticMarkup(React.createElement(Html, __assign({}, data)));
    rep.send(html);
}));
app.listen(3030, () => {
    console.log("ok");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBWSxLQUFLLFdBQU0sT0FBTyxDQUFDLENBQUE7QUFDL0Isd0JBQW9DLE9BQU8sQ0FBQyxDQUFBO0FBRzVDLE1BQVksY0FBYyxXQUFNLGtCQUFrQixDQUFDLENBQUE7QUFDbkQsbUNBQXdCLGtCQUFrQixDQUFDLENBQUE7QUFFM0MsTUFBWSxPQUFPLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFHbkMsb0JBQW9CLEtBQUssQ0FBQyxTQUFTO0lBQ2pDO1FBQ0UsT0FBTyxDQUFDO0lBQ1YsQ0FBQztJQUNELE1BQU07UUFDSixNQUFNLENBQUMsQ0FDTCxxQkFBQyxHQUFHO1lBQ0YscUJBQUMsRUFBRSxTQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBTSxDQUFLO1lBQzNCLHFCQUFDLEVBQUUsU0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQU0sQ0FBSztZQUUzQixxQkFBQyxDQUFDLElBQUMsSUFBSSxFQUFDLFVBQVUsR0FBRSxTQUFPLENBQUk7WUFDL0IscUJBQUMsQ0FBQyxJQUFDLElBQUksRUFBQyxRQUFRLEdBQUUsT0FBSyxDQUFJO1lBQzNCLHFCQUFDLENBQUMsSUFBQyxJQUFJLEVBQUMsR0FBRyxHQUFFLE1BQUksQ0FBSSxDQUdqQixDQUFDLENBQUE7SUFDWCxDQUFDO0FBQ0gsQ0FBQztBQUFBLENBQUM7QUFFRixrQkFBa0IsS0FBSyxDQUFDLFNBQVM7SUFDL0IsTUFBTTtRQUNKLE1BQU0sQ0FBQyxnQkFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQzNDLENBQUM7QUFDSCxDQUFDO0FBRUQsTUFBTSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFFdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBTyxHQUFH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