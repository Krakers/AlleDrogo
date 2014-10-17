/*global BackboneStore, Backbone, JST*/

BackboneStore.Views = BackboneStore.Views || {};

(function () {
    'use strict';

    BackboneStore.Views.ShowallProductsView = Backbone.View.extend({

        template: JST['app/scripts/templates/showAllProductsView.ejs'],

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
