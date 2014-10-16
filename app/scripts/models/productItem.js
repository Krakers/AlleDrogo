/*global BackboneStore, Backbone*/

BackboneStore.Models = BackboneStore.Models || {};

(function () {
    'use strict';

    BackboneStore.Models.Productitem = Backbone.Model.extend({
        defaults: {
            id: "1",
            type: "phone",
            name: "iPhoneYolo",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            image: "images/iphone.jpg",
            price: 4999
        }
    });

})();
