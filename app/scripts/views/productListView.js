/*global BackboneStore, Backbone, JST*/
BackboneStore.Views = BackboneStore.Views || {};

(function () {
    'use strict';

    BackboneStore.Views.Productlistview = Backbone.View.extend({
        render: function () {
            this.collection.forEach(this.addOne, this);
            return this;
        },
        addOne: function (product) {
            console.log("addOne");
            var productView = new BackboneStore.Views.Productview({model: product});
            this.$el.append(productView.render().el);
        }

    });

})();
