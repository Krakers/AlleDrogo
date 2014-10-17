/*global BackboneStore, Backbone*/

BackboneStore.Routers = BackboneStore.Routers || {};

(function() {
  'use strict';
  //Router powinien pobierac kolekcje produktow z API
  BackboneStore.Routers.ControlPanelRouter = Backbone.Router.extend({
    initialize: function () {
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
      this.fadeOutFadeIn(this.controlPanel);
    },
    addProduct: function() {
      console.log("addProduct");
    },
    changeProduct: function() {
      console.log("changeProduct");
    },
    removeProduct: function() {
      console.log("removeProduct");
    },
    showAllProducts: function() {
      console.log("showAllProducts");
    },
    deleteAllProducts: function() {
      console.log("deleteAllProducts");
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