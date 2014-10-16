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
      initialize: function () {
        this.products = new BackboneStore.Collections.Productitems();
        this.products.reset(devices);

        this.productListView = new BackboneStore.Views.Productlistview({collection: this.products});
        this.productListView.render();
        $("#backbone").html(this.productListView.el);

        Backbone.history.start();
      },
      index: function () {
        console.log('index');
        this.fadeOutFadeIn(this.productListView);
      },
      showProduct: function (id) {
        console.log("route show: " + id);
        this.singleProductView = new BackboneStore.Views.Singleproduct({model: this.products.at(id - 1)});
        this.singleProductView.render();

        $('#backbone').html(this.singleProductView.el);
      },
      filter: function (productType) {
        var filteredProducts = this.products.where({type: productType});
        this.filteredListView = new BackboneStore.Views.Productlistview({collection: filteredProducts});
        this.filteredListView.render();
        this.fadeOutFadeIn(this.filteredListView);
      },
      fadeOutFadeIn: function (view) {
        var self = this;
        $('#backbone').fadeOut(200, function () {
          $(this).html(view.el).fadeIn('fast');
        });
      }
    });

})();
