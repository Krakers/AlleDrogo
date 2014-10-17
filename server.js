var application_root = __dirname,
    express = require('express'), //Web framework
    path = require('path'), //Utilities for dealing with file paths
    mongoose = require('mongoose'); //MongoDB integration


//Create server
var app = express();

//Where to serve static content:
app.use(express.static(path.join(application_root, 'app')));
app.use(express.bodyParser());
app.use(app.router);

//Start server
var port = 9000;

app.listen(port, function() {
    console.log('Express server listening on port %d in %s mode', port, app.settings.env);
});

//Routes
app.get('/api', function(request, response) {
    response.send('Store API is running');
})

//Connect to database
mongoose.connect('mongodb://localhost/store_database');

//Create a product Schema
var Product = new mongoose.Schema({
    type: String,
    name: String,
    description: String,
    image: String,
    price: Number
});

//Models
var ProductModel = mongoose.model('Product', Product);

//Get a list of all products
app.get('/api/products', function(request, response) {
    return ProductModel.find(function(err, products) {
        if (!err) {
            return response.send(products);
        } else {
            return console.log(err); //Whoops!
        }
    })
});

//Insert a new product
app.post('/api/products', function(request, response) {
    var product = new ProductModel({
        type: request.body.type,
        name: request.body.name,
        description: request.body.description,
        image: request.body.image,
        price: request.body.price
    });

    return product.save(function(err) {
        if (!err) {
            console.log('Created a new product in the database');
            return response.send(product);
        } else {
            console.log(err);
        }
    });
});

//Get a single product by id:
app.get('/api/products/:id', function (request, response) {
    return ProductModel.findById(request.params.id, function (err, product) {
      if (!err) {
        return response.send(product);
      } else {
        return console.log(err);
      }
    });
});

//Update a product:
app.put('/api/products/:id', function (request, response) {
  console.log('Updating product ' + request.body.title);
  return ProductModel.findById(request.params.id, function (err, product) {
    product.type = request.body.type;
    product.name = request.body.name;
    product.description = request.body.description;
    product.image = request.body.image;
    product.price = request.body.price;

    return product.save(function (err) {
      if (!err) {
        console.log('product ' + product.name + ' updated');
        return response.send(product);
      } else {
        console.log(err);
      }
    });
  });
});

//Delete a product:
app.delete('/api/products/:id', function(request, response) {
  console.log('Deleting a product with id ' + request.params.id);
  return ProductModel.findById(request.params.id, function(err, product) {
    return product.remove(function(err) {
      if (!err) {
        console.log('product removed');
        return response.send('');
      } else {
        console.log(err);
      }
    });
  });
});