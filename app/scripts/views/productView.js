/*global BackboneStore, Backbone, JST*/

BackboneStore.Views = BackboneStore.Views || {};

(function () {
    'use strict';

    BackboneStore.Views.Productview = Backbone.View.extend({

        template: JST['app/scripts/templates/productView.ejs'],

        events: {},
        
        render: function () {
          console.log("model: " + this.model.toJSON());
          console.log("template: " + this.template);
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });

})();
