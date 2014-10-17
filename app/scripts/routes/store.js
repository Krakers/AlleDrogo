/*global BackboneStore, Backbone*/

BackboneStore.Routers = BackboneStore.Routers || {};

(function() {
  'use strict';
  BackboneStore.Routers.Store = Backbone.Router.extend({
    routes: {
      '': 'index',
      'product/:id': 'showProduct',
      'filter/:product': 'filter',
      'control-panel': 'controlPanel'
    },
    $container: $('#backbone'),
    initialize: function() {
      //Create initial product list:
      this.products = new BackboneStore.Collections.Productitems();

      // //Create the main application view:
      this.productListView = new BackboneStore.Views.Productlistview({
        collection: this.products
      });

      Backbone.history.start();
    },
    index: function() {
      //Show initial product list:
      this.fadeOutFadeIn(this.productListView);
    },
    showProduct: function(id) {
      //Display a single product:
      this.singleProductView = new BackboneStore.Views.Singleproduct({
        model: this.products.at(id - 1)
      });
      this.singleProductView.render();

      this.$container.html(this.singleProductView.el);
    },
    filter: function(productType) {
      //Filter products by type (phone, laptop, tablet) and display products of only one type:
      var filteredProducts = this.products.where({
        type: productType
      });
      this.filteredListView = new BackboneStore.Views.Productlistview({
        collection: filteredProducts
      });
      this.filteredListView.render();
      this.fadeOutFadeIn(this.filteredListView);
    },
    controlPanel: function() {
      console.log("Control panel");
      this.controlPanel = new BackboneStore.Views.Controlpanel({
        collection: this.products
      });
      this.controlPanel.render();
      this.fadeOutFadeIn(this.controlPanel);
    },
    fadeOutFadeIn: function(view) {
      //Helper function for making filter a little bit more smooth
      var self = this;
      this.$container.fadeOut(200, function() {
        $(this).html(view.el).fadeIn('fast');
      });
    }
  });

})();