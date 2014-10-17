/*global BackboneStore, $*/

window.JST = {};

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
