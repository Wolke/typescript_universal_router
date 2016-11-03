"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var universal_router_1 = require('universal-router');
var routes = [
    { path: '/one', action: function () { return React.createElement("h1", null, "Page One"); } },
    { path: '/two', action: function () { return React.createElement("h1", null, "Page Two"); } },
    { path: '*', action: function () { return React.createElement("h1", null, "Not Found"); } }
];
universal_router_1.resolve(routes, { path: '/one' }).then(function (component) {
    ReactDOM.render(component, document.body);
    // renders: <h1>Page One</h1>
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLEtBQUssV0FBTSxPQUFPLENBQUMsQ0FBQTtBQUMvQixJQUFZLFFBQVEsV0FBTSxXQUFXLENBQUMsQ0FBQTtBQUN0QyxpQ0FBd0Isa0JBQWtCLENBQUMsQ0FBQTtBQUUzQyxJQUFNLE1BQU0sR0FBRztJQUNiLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsY0FBTSxPQUFBLHFCQUFDLEVBQUUsU0FBQyxVQUFRLENBQUssRUFBakIsQ0FBaUIsRUFBRTtJQUNqRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLGNBQU0sT0FBQSxxQkFBQyxFQUFFLFNBQUMsVUFBUSxDQUFLLEVBQWpCLENBQWlCLEVBQUU7SUFDakQsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxjQUFNLE9BQUEscUJBQUMsRUFBRSxTQUFDLFdBQVMsQ0FBSyxFQUFsQixDQUFrQixFQUFFO0NBQ2hELENBQUM7QUFFRiwwQkFBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFNBQVM7SUFDOUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLDZCQUE2QjtBQUMvQixDQUFDLENBQUMsQ0FBQyJ9