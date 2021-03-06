/*global BackboneStore, Backbone, JST*/

BackboneStore.Views = BackboneStore.Views || {};

(function () {
    'use strict';

    BackboneStore.Views.Productview = Backbone.View.extend({

        template: JST['app/scripts/templates/productView.ejs'],

        events: {},
        
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });

})();
