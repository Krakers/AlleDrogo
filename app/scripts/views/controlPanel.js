/*global BackboneStore, Backbone, JST*/

BackboneStore.Views = BackboneStore.Views || {};

(function () {
    'use strict';

    BackboneStore.Views.Controlpanel = Backbone.View.extend({

        template: JST['app/scripts/templates/controlPanel.ejs'],

        events: {},

        render: function () {
            this.$el.html(this.template());
            return this;
        },

        submit: function (e) {
            console.log("Adding new product");
        }

    });

})();
