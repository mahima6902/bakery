namespace bakery;


//tableA - Products
entity products {
    @title: 'Product ID'
    key id: Integer;

    @title: 'Product Name'
    name: String(100);

    @title: 'Description'
    description: String(500); 
    
    @title: 'Price'
    price: Decimal; 

    @title: 'Stock'
    stock: Integer; 

    @title: 'Category'
    category: Association to categories;
}


//tableB - Categories
entity categories {
    @title: 'Category ID'
    key id: Integer; 

    @title: 'Category Name'
    name: String(100); 

    @title: 'Description'
    description: String(500); 

    @title: 'Products'
    products: Association to many products on products.category = $self; 
}


//tableC - Orders
entity orders {
    @title: 'Order ID'
    key id: Integer; 

    @title: 'Customer'
    customer: String(100); 

    @title: 'Order Date'
    orderdate: Date; 

    @title: 'Status'
    status: String(20); 

    @title: 'Total Amount'
    totalamount: Decimal(10,2);

    @title: 'Order Items'
    items: Composition of many orderitems on items.order = $self; 
}


//tableD - Order Items
entity orderitems {
    @title: 'Item ID'
    key id: Integer;

    @title: 'Order'
    order: Association to orders; 

    @title: 'Product'
    product: Association to products; 

    @title: 'Quantity'
    quantity: Integer; 
    
    @title: 'Price'
    price: Decimal(10,2); 
}