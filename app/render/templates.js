this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/addProductView.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form class="form-horizontal">\n    <fieldset>\n        <!-- Form Name -->\n        <legend class="form-header">Add a new product</legend>\n        <!-- Text input-->\n        <div class="form-group">\n            <label class="col-md-4 control-label" for="product-name">Product name</label>\n            <div class="col-md-4">\n                <input id="product-name" name="product-name" type="text" placeholder="Insert product name" class="form-control input-md" required="">\n                \n            </div>\n        </div>\n        <!-- Textarea -->\n        <div class="form-group">\n            <label class="col-md-4 control-label" for="product-description">Product description</label>\n            <div class="col-md-4">\n                <textarea class="form-control" id="product-description" name="product-description"></textarea>\n            </div>\n        </div>\n        <!-- Select Basic -->\n        <div class="form-group">\n            <label class="col-md-4 control-label" for="product-type">Select product type</label>\n            <div class="col-md-4">\n                <select id="product-type" name="product-type" class="form-control">\n                    <option value="1">Phone</option>\n                    <option value="2">Tablet</option>\n                    <option value="3">Laptop</option>\n                </select>\n            </div>\n        </div>\n        <!-- File Button -->\n        <div class="form-group">\n            <label class="col-md-4 control-label" for="product-image-button">Add product image</label>\n            <div class="col-md-4">\n                <input id="product-image-button" name="product-image-button" class="input-file" type="file">\n            </div>\n        </div>\n        <!-- Appended Input-->\n        <div class="form-group">\n            <label class="col-md-4 control-label" for="product-price">Product price</label>\n            <div class="col-md-4">\n                <div class="input-group">\n                    <input id="product-price" name="product-price" class="form-control" placeholder="" type="text" required="">\n                    <span class="input-group-addon">zł</span>\n                </div>\n                \n            </div>\n        </div>\n        <!-- Button -->\n        <div class="form-group">\n            <label class="col-md-4 control-label" for="submit-button">Add product</label>\n            <div class="col-md-4">\n                <button id="submit-button-new-product" name="submit-button" class="btn btn-success">Submit</button>\n            </div>\n        </div>\n    </fieldset>\n</form>';

}
return __p
};

this["JST"]["app/scripts/templates/changeProductView.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p>Change product</p>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/controlPanel.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="col-md-2 control-panel-menu">\n    <ul class="nav nav-pills nav-stacked">\n        <li class="active"><a href="#/control-panel/add-product">Add a product</a></li>\n        <li><a href="#/control-panel/change-product">Change a product</a></li>\n        <li><a href="#/control-panel/remove-product">Remove a product</a></li>\n        <li><a href="#/control-panel/show-all-products">Show all products</a></li>\n        <li><a href="#/control-panel/delete-all-products">Delete all products</a></li>\n    </ul>\n</div>\n<div id="form-container" class="col-md-8 control-panel-form">\n    \n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/deleteAllProductsView.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p>Delete all products</p>\n';

}
return __p
};

this["JST"]["app/scripts/templates/filteredListView.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p>Your content here.</p>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/productListView.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p>Your content here.</p>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/productView.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="product-section col-xs-12 col-md-4">\n  <h2 class="product-name">' +
((__t = ( name )) == null ? '' : __t) +
'</h3>\n  <img src="' +
((__t = ( image )) == null ? '' : __t) +
'" alt="iPhone" class="img-thumbnail product-image">\n  <p> ' +
((__t = ( description )) == null ? '' : __t) +
' </p>\n  <div class="order">\n    <a href="#product/' +
((__t = ( id )) == null ? '' : __t) +
'" class="btn btn-lg btn-primary order-button pull-right">Zamow</a>\n    <h3>Cena: <small>' +
((__t = (price )) == null ? '' : __t) +
'</small></h3>\n  </div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/removeProductView.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p>Remove product</p>\n';

}
return __p
};

this["JST"]["app/scripts/templates/showAllProductsView.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p>Show all products</p>\n';

}
return __p
};

this["JST"]["app/scripts/templates/singleProduct.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="product-section col-md-12">\n  <h2 class="product-name">' +
((__t = ( name )) == null ? '' : __t) +
'</h3>\n  <img src="' +
((__t = ( image )) == null ? '' : __t) +
'" alt="iPhone" class="img-thumbnail product-image">\n  <p> ' +
((__t = ( description )) == null ? '' : __t) +
' </p>\n  <div class="order">\n    <a href="#product/' +
((__t = ( id )) == null ? '' : __t) +
'" class="btn btn-lg btn-primary order-button pull-right">Zamow</a>\n    <h3>Cena: <small>' +
((__t = (price )) == null ? '' : __t) +
'</small></h3>\n  </div>\n</div>';

}
return __p
};