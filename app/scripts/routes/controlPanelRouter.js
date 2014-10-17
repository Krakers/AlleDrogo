/*global BackboneStore, Backbone*/

BackboneStore.Routers = BackboneStore.Routers || {};

(function() {
  'use strict';
  //Router powinien pobierac kolekcje produktow z API
  BackboneStore.Routers.ControlPanelRouter = Backbone.Router.extend({
    initialize: function() {
      console.log("Created control panel router");
    },
    $container: $('#backbone'),
    routes: {
      'control-panel': 'controlPanel',
      'control-panel/add-product': 'addProduct',
      'control-panel/change-product': 'changeProduct',
      'control-panel/remove-product': 'removeProduct',
      'control-panel/show-all-products': 'showAllProducts',
      'control-panel/delete-all-products': 'deleteAllProducts'
    },
    controlPanel: function() {
      console.log("Control panel");
      this.controlPanel = new BackboneStore.Views.Controlpanel();
      this.controlPanel.render();
      this.$container.html(this.controlPanel.el);
      this.navigate("control-panel/add-product", {
        trigger: true
      });
    },
    addProduct: function() {
      console.log("addProduct");
      this.addProductView = new BackboneStore.Views.AddProductView();
      this.addProductView.render();
      $('#form-container').html(this.addProductView.el);
    },
    changeProduct: function() {
      console.log("changeProduct");
      this.changeProductView = new BackboneStore.Views.ChangeProductView();
      this.changeProductView.render();
      $('#form-container').html(this.changeProductView.el);
    },
    removeProduct: function() {
      console.log("removeProduct");
      this.removeProductView = new BackboneStore.Views.RemoveProductView();
      this.removeProductView.render();
      $('#form-container').html(this.removeProductView.el);
    },
    showAllProducts: function() {
      console.log("showAllProducts");
      this.showAllProductsView = new BackboneStore.Views.ShowallProductsView();
      this.showAllProductsView.render();
      $('#form-container').html(this.showAllProductsView.el);
    },
    deleteAllProducts: function() {
      console.log("deleteAllProducts");
      this.deleteAllProductsView = new BackboneStore.Views.DeleteAllProductsView();
      this.deleteAllProductsView.render();
      $('#form-container').html(this.deleteAllProductsView.el);
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