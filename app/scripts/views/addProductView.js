/*global BackboneStore, Backbone, JST*/

BackboneStore.Views = BackboneStore.Views || {};

(function () {
    'use strict';

    BackboneStore.Views.AddProductView = Backbone.View.extend({

        template: JST['app/scripts/templates/addProductView.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
        },

        render: function () {
            this.$el.html(this.template());
        }

    });

})();
