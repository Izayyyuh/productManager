const ProductController = require('../controllers/productManager.controller');
module.exports = (app) => {
    app.get('/api', ProductController.findAllProducts);
    app.get('/api/products/:id', ProductController.findOneSingleProduct);
    app.patch('/api/products/:id', ProductController.updateExistingProduct);
    app.delete('/api/products/:id', ProductController.deleteAnExistingProduct);
    app.post('/api/products', ProductController.createNewProduct);
} //ORDER OF ROUTES MATTERS. Wildcard routes always come first (like :id) before your get route for a single document