this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/controlPanel.ejs"] = function(obj) {
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