/*global BackboneStore, Backbone*/

BackboneStore.Routers = BackboneStore.Routers || {};

(function() {
  'use strict';
  BackboneStore.Routers.Store = Backbone.Router.extend({
    routes: {
      '': 'index',
      'product/:id': 'showProduct',
      'filter/:product': 'filter'
    },
    $container: $('#backbone'),
    initialize: function() {
      //Create initial product list:
      this.products = new BackboneStore.Collections.Productitems();

      // //Create the main application view:
      this.productListView = new BackboneStore.Views.Productlistview({
        collection: this.products
      });
    },
    index: function() {
      //Show initial product list:
      this.fadeOutFadeIn(this.productListView);
    },
    showProduct: function(productId) {
      //Display a single product:
      console.log(this.products);
      this.singleProductView = new BackboneStore.Views.Singleproduct({
        model: this.products.get(productId)
      });
      this.singleProductView.render();

      this.$container.html(this.singleProductView.el);
    },
    filter: function(productType) {
      //Filter products by type (phone, laptop, tablet) and display products of only one type:
      console.log(this.products);

      var filteredProducts = this.products.where({
        type: productType
      });

      console.log(filteredProducts);
      this.filteredListView = new BackboneStore.Views.FilteredListView({
        collection: filteredProducts
      });
      this.filteredListView.render();
      this.fadeOutFadeIn(this.filteredListView);
    },
    fadeOutFadeIn: function(view) {
      //Helper function for making display a little bit more smooth
      var self = this;
      this.$container.fadeOut(200, function() {
        $(this).html(view.el).fadeIn('fast');
      });
    }
  });

})();