/*global BackboneStore, Backbone*/

BackboneStore.Collections = BackboneStore.Collections || {};

(function () {
    'use strict';

    BackboneStore.Collections.Productitems = Backbone.Collection.extend({

        model: BackboneStore.Models.Productitem,
        url: '/api/products'
    });

})();
