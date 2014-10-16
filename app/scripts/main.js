/*global BackboneStore, $*/

window.JST = {};

window.devices = [
    {name: "Samsung Galaxy S3", id: 1},
    {name: "iMac", price: 3000, id: 9, type: "laptop"},
    {name: "Samsung Galaxy Young", id: 2},
    {name: "iPhone 4", id: 3},
    {name: "iPhone 5", id: 4},
    {name: "iPhone 6", id: 5},
    {name: "iPhone 6 Plus", id: 6},
    {name: "Nokia Lumia", price: 3000, id: 7},
    {name: "iPad", price: 3000, id: 8, type: "tablet"},
    {name: "iMac", price: 3000, id: 9, type: "laptop"},
    {name: "Galaxy Tab 3", price: 3000, id: 10, type: "tablet"},
    {name: "Samsung S8000", price: 3000, id: 11, type: "laptop"},
];

window.BackboneStore = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
        var storeRouter = new BackboneStore.Routers.Store();
    }
};

$(document).ready(function () {
    'use strict';
    BackboneStore.init();
});
