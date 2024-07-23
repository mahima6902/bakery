// const cds = require('@sap/cds');
// const axios = require('axios');

// module.exports = cds.service.impl(async function() {
//   const { products, categories, orders, orderitems } = this.entities;
//   const northwindBaseUrl = 'https://services.odata.org/V3/Northwind/Northwind.svc';

//   // Products
//   this.on('READ', products, async (req) => {
//     const northwindUrl = `${northwindBaseUrl}/Products`;
//     try {
//       const response = await axios.get(northwindUrl);
//       const northwindProducts = response.data.value;
      
//       // Map Northwind products to our schema
//       const mappedProducts = northwindProducts.map(np => ({
//         id: np.ProductID,
//         name: np.ProductName,
//         description: np.QuantityPerUnit,
//         price: np.UnitPrice,
//         stock: np.UnitsInStock,
//         category_id: np.CategoryID
//       }));

//       return mappedProducts;
//     } catch (error) {
//       console.error('Error fetching Northwind products:', error);
//       req.error(500, 'Error fetching products from Northwind service');
//     }
//   });

//   this.on('CREATE', products, async (req) => {
//     const product = req.data;
//     console.log('Creating new product:', product);
//     // Here you would typically insert the product into your database
//     // For demo purposes, we'll just return the product with a new ID
//     product.id = Math.floor(Math.random() * 1000) + 1;
//     return product;
//   });

//   // Categories
//   this.on('READ', categories, async (req) => {
//     const northwindUrl = `${northwindBaseUrl}/Categories`;
//     try {
//       const response = await axios.get(northwindUrl);
//       const northwindCategories = response.data.value;
      
//       // Map Northwind categories to our schema
//       const mappedCategories = northwindCategories.map(nc => ({
//         id: nc.CategoryID,
//         name: nc.CategoryName,
//         description: nc.Description
//       }));

//       return mappedCategories;
//     } catch (error) {
//       console.error('Error fetching Northwind categories:', error);
//       req.error(500, 'Error fetching categories from Northwind service');
//     }
//   });

//   // Orders
//   this.on('READ', orders, async (req) => {
//     const northwindUrl = `${northwindBaseUrl}/Orders`;
//     try {
//       const response = await axios.get(northwindUrl);
//       const northwindOrders = response.data.value;
      
//       // Map Northwind orders to our schema
//       const mappedOrders = northwindOrders.map(no => ({
//         id: no.OrderID,
//         customer: no.CustomerID,
//         orderdate: no.OrderDate,
//         status: no.ShippedDate ? 'Shipped' : 'Pending',
//         totalamount: no.Freight // This is not exactly the total amount, but used as an example
//       }));

//       return mappedOrders;
//     } catch (error) {
//       console.error('Error fetching Northwind orders:', error);
//       req.error(500, 'Error fetching orders from Northwind service');
//     }
//   });

//   this.on('CREATE', orders, async (req) => {
//     const order = req.data;
//     if (order.status === 'urgent') {
//       // Custom logic for urgent orders
//       console.log('Urgent order received:', order);
//     }
//     // Here you would typically insert the order into your database
//     // For demo purposes, we'll just return the order with a new ID
//     order.id = Math.floor(Math.random() * 1000) + 1;
//     return order;
//   });

//   // Order Items
//   this.on('READ', orderitems, async (req) => {
//     const northwindUrl = `${northwindBaseUrl}/Order_Details`;
//     try {
//       const response = await axios.get(northwindUrl);
//       const northwindOrderDetails = response.data.value;
      
//       // Map Northwind order details to our schema
//       const mappedOrderItems = northwindOrderDetails.map(nod => ({
//         id: nod.OrderID * 100 + nod.ProductID, // Creating a unique ID
//         order_id: nod.OrderID,
//         product_id: nod.ProductID,
//         quantity: nod.Quantity,
//         price: nod.UnitPrice
//       }));

//       return mappedOrderItems;
//     } catch (error) {
//       console.error('Error fetching Northwind order details:', error);
//       req.error(500, 'Error fetching order items from Northwind service');
//     }
//   });

//   // Custom function: Get Products by Category
//   this.on('getProductsByCategory', async (req) => {
//     const { categoryId } = req.data;
//     const northwindUrl = `${northwindBaseUrl}/Products?$filter=CategoryID eq ${categoryId}`;
//     try {
//       const response = await axios.get(northwindUrl);
//       const northwindProducts = response.data.value;
      
//       // Map Northwind products to our schema
//       const mappedProducts = northwindProducts.map(np => ({
//         id: np.ProductID,
//         name: np.ProductName,
//         description: np.QuantityPerUnit,
//         price: np.UnitPrice,
//         stock: np.UnitsInStock,
//         category_id: np.CategoryID
//       }));

//       return mappedProducts;
//     } catch (error) {
//       console.error('Error fetching Northwind products by category:', error);
//       req.error(500, 'Error fetching products by category from Northwind service');
//     }
//   });

//   // Custom action: Create Urgent Order
//   this.on('createUrgentOrder', async (req) => {
//     const { customer, products } = req.data;
//     console.log('Creating urgent order for customer:', customer);
//     console.log('Products:', products);
    
//     // Here you would typically create the order and order items in your database
//     // For demo purposes, we'll just return a mock order
//     const mockOrder = {
//       id: Math.floor(Math.random() * 1000) + 1,
//       customer: customer,
//       orderdate: new Date().toISOString(),
//       status: 'urgent',
//       totalamount: products.reduce((total, p) => total + (p.price || 0) * p.quantity, 0),
//       items: products.map(p => ({
//         id: Math.floor(Math.random() * 1000) + 1,
//         product_id: p.id,
//         quantity: p.quantity,
//         price: p.price || 0
//       }))
//     };

//     return mockOrder;
//   });
// });