/*global BackboneStore, Backbone, JST*/
BackboneStore.Views = BackboneStore.Views || {};

(function() {
  'use strict';

  BackboneStore.Views.Productlistview = Backbone.View.extend({
    $container: $('#backbone'),
    render: function() {
      this.collection.forEach(this.addOne, this);
      this.$container.html(this.el);
      return this;
    },
    addOne: function(product) {
      var productView = new BackboneStore.Views.Productview({
        model: product
      });
      this.$el.append(productView.render().el);
    },
    initialize: function() {
      this.collection.fetch({
        reset: true
      });
      this.collection.on('add', this.render, this);
      this.collection.on('reset', this.render, this);
    }

  });

})();