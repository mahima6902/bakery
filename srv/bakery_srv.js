const cds = require('@sap/cds');
const axios = require('axios');

module.exports = cds.service.impl(async function () {
    const { products, categories, orders, orderitems } = this.entities;
    const northwindBaseUrl = 'https://services.odata.org/V3/Northwind/Northwind.svc';

    // tableA - Products
    this.on('READ', products, async (req) => {
        const northwindUrl = `${northwindBaseUrl}/Products`;
        try {
            const response = await axios.get(northwindUrl);
            const northwindProducts = response.data.value;

            // Map Northwind products to schema
            const mappedProducts = northwindProducts.map(np => ({
                id: np.ProductID,
                name: np.ProductName,
                description: np.QuantityPerUnit,
                price: np.UnitPrice,
                stock: np.UnitsInStock,
                category_id: np.CategoryID
            }));
            return mappedProducts;
        }
        catch (error) {
            console.error('Error fetching Northwind products:', error);
            req.error(500, 'Error fetching products from Northwind service');
        }
    });

    this.on('CREATE', products, async (req) => {
        // inserting the dummy data into database
        const product = req.data;
        console.log('Creating new product:', product);
        product.id = Math.floor(Math.random() * 1000) + 1;
        return product;
    });


    //tableB - Categories
    this.on('READ', categories, async (req) => {
        const northwindUrl = `${northwindBaseUrl}/Categories`;
        try {
            const response = await axios.get(northwindUrl);
            const northwindCategories = response.data.value;

            // Map Northwind categories to schema
            const mappedCategories = northwindCategories.map(nc => ({
                id: nc.CategoryID,
                name: nc.CategoryName,
                description: nc.Description
            }));
            return mappedCategories;
        }
        catch (error) {
            console.error('Error fetching Northwind categories:', error);
            req.error(500, 'Error fetching categories from Northwind service');
        }
    });


    //tableC - Orders
    this.on('READ', orders, async (req) => {
        const northwindUrl = `${northwindBaseUrl}/Orders`;
        try {
            const response = await axios.get(northwindUrl);
            const northwindOrders = response.data.value;

            // Map Northwind orders to schema
            const mappedOrders = northwindOrders.map(no => ({
                id: no.OrderID,
                customer: no.CustomerID,
                orderdate: no.OrderDate,
                status: no.ShippedDate ? 'Shipped' : 'Pending',
                totalamount: no.amount 
            }));
            return mappedOrders;
        }
        catch (error) {
            console.error('Error fetching Northwind orders:', error);
            req.error(500, 'Error fetching orders from Northwind service');
        }
    });

    this.on('CREATE', orders, async (req) => {
        // inserting dummy value
        const order = req.data;
        if (order.status === 'urgent') {
            // Custom logic 
            console.log('Urgent order received:', order);
        }
        order.id = Math.floor(Math.random() * 1000) + 1;
        return order;
    });


    //tableD - Order Items
    this.on('READ', orderitems, async (req) => {
        const northwindUrl = `${northwindBaseUrl}/Order_Details`;
        try {
            const response = await axios.get(northwindUrl);
            const northwindOrderDetails = response.data.value;

            // Map Northwind order details to schema
            const mappedOrderItems = northwindOrderDetails.map(nod => ({
                id: nod.OrderID * 100 + nod.ProductID, // Creating a unique ID
                order_id: nod.OrderID,
                product_id: nod.ProductID,
                quantity: nod.Quantity,
                price: nod.UnitPrice
            }));
            return mappedOrderItems;
        }
        catch (error) {
            console.error('Error fetching Northwind order details:', error);
            req.error(500, 'Error fetching order items from Northwind service');
        }
    });

    // Custom function: Get Products by Category
    this.on('getProductsByCategory', async (req) => {
        const { categoryId } = req.data;
        const northwindUrl = `${northwindBaseUrl}/Products?$filter=CategoryID eq ${categoryId}`;
        try {
            const response = await axios.get(northwindUrl);
            const northwindProducts = response.data.value;

            // Map Northwind products to schema
            const mappedProducts = northwindProducts.map(np => ({
                id: np.ProductID,
                name: np.ProductName,
                description: np.QuantityPerUnit,
                price: np.UnitPrice,
                stock: np.UnitsInStock,
                category_id: np.CategoryID
            }));
            return mappedProducts;
        } catch (error) {
            console.error('Error fetching Northwind products by category:', error);
            req.error(500, 'Error fetching products by category from Northwind service');
        }
    });

    // Custom action: Create Urgent Order
    this.on('createUrgentOrder', async (req) => {
        const { customer, products } = req.data;
        console.log('Creating urgent order for customer:', customer);
        console.log('Products:', products);

    });
});