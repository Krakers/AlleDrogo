/*global BackboneStore, Backbone*/

BackboneStore.Routers = BackboneStore.Routers || {};

(function () {
    'use strict';
    BackboneStore.Routers.Store = Backbone.Router.extend({
      routes: {
        '': 'index',
        'product/:id' : 'showProduct',
        'filter/:product' : 'filter'
      },
      $container: $('#backbone'),
      initialize: function () {
        //Create initial product list:
        this.products = new BackboneStore.Collections.Productitems();
        this.products.reset(devices);

        this.productListView = new BackboneStore.Views.Productlistview({collection: this.products});
        this.productListView.render();
        this.$container.html(this.productListView.el);

        Backbone.history.start();
      },
      index: function () {
        console.log('index');
        //Show initial product list:
        this.fadeOutFadeIn(this.productListView);
      },
      showProduct: function (id) {
        //Display a single product:
        console.log("route show: " + id);
        this.singleProductView = new BackboneStore.Views.Singleproduct({model: this.products.at(id - 1)});
        this.singleProductView.render();

        this.$container.html(this.singleProductView.el);
      },
      filter: function (productType) {
        //Filter products by type (phone, laptop, tablet) and display products of only one type:
        var filteredProducts = this.products.where({type: productType});
        this.filteredListView = new BackboneStore.Views.Productlistview({collection: filteredProducts});
        this.filteredListView.render();
        this.fadeOutFadeIn(this.filteredListView);
      },
      fadeOutFadeIn: function (view) {
        //Helper function for making filter a little bit more smooth
        var self = this;
        this.$container.fadeOut(200, function () {
          $(this).html(view.el).fadeIn('fast');
        });
      }
    });

})();
