using bakeryservice as bs from '../srv/bakery_srv';


//tableA - Products
annotate bs.products with @(
  UI: {
    CreateHidden: false,
    UpdateHidden: false,
    DeleteHidden: false,
    HeaderInfo: {
      TypeName: 'Product',
      TypeNamePlural: 'Products',
      Title: { Value: name },
      Description: { Value: description }
    },

    SelectionFields: [ 
        id, 
        name, 
        category_id, 
        price, 
        stock 
    ],

    LineItem: [
      { 
        Value: id, 
        Label: 'Product ID' 
      },
      { 
        Value: name, 
        Label: 'Product Name' 
      },
      {
        Value: price, 
        Label: 'Price' 
      },
      { 
        Value: stock, 
        Label: 'Stock' 
      },
      { 
        Value: category.name, 
        Label: 'Category' 
      }
    ],

    Facets: [
      {
        $Type: 'UI.ReferenceFacet',
        Label: 'Product Details',
        Target: '@UI.FieldGroup#ProductDetails'
      }
    ],

    FieldGroup #ProductDetails: {
      Data: [
        { 
          Value: id, 
          Label: 'Product ID' 
        },
        { 
          Value: name, 
          Label: 'Product Name' 
        },
        { 
          Value: description, 
          Label: 'Description' 
        },
        { 
          Value: price, 
          Label: 'Price' 
        },
        { 
          Value: stock, 
          Label: 'Stock' 
        },
        { 
          Value: category_id, 
          Label: 'Category' 
        }
      ]
    },
  }
);


//tableB - Categories
annotate bs.categories with @(
  UI: {
    CreateHidden: false,
    UpdateHidden: false,
    DeleteHidden: false,
    HeaderInfo: {
      TypeName: 'Category',
      TypeNamePlural: 'Categories',
      Title: { Value: name },
      Description: { Value: description }
    },

    SelectionFields: [ 
        id, 
        name 
    ],

    LineItem: [
      { 
        Value: id, 
        Label: 'Category ID' 
      },
      { 
        Value: name, 
        Label: 'Category Name' 
      },
      { 
        Value: description, 
        Label: 'Description' 
      }
    ],

    Facets: [
      {
        $Type: 'UI.ReferenceFacet',
        Label: 'Category Details',
        Target: '@UI.FieldGroup#CategoryDetails'
      }
    ],

    FieldGroup #CategoryDetails: {
      Data: [
        { 
          Value: id, 
          Label: 'Category ID' 
        },
        { 
          Value: name, 
          Label: 'Category Name' 
        },
        { 
          Value: description, 
          Label: 'Description' 
        }
      ]
    },
  }
);


//tableC - Orders
annotate bs.orders with @(
  UI: {
    CreateHidden: false,
    UpdateHidden: false,
    DeleteHidden: false,
    HeaderInfo: {
      TypeName: 'Order',
      TypeNamePlural: 'Orders',
      Title: { Value: id },
      Description: { Value: customer }
    },

    SelectionFields: [ 
        id, 
        customer, 
        orderdate, 
        status 
    ],

    LineItem: [
      { 
        Value: id, 
        Label: 'Order ID' 
      },
      {
        Value: customer,
        Label: 'Customer' 
      },
      { 
        Value: orderdate,
        Label: 'Order Date'
      },
      { 
        Value: status,
        Label: 'Status' 
      },
      { 
        Value: totalamount,
        Label: 'Total Amount' 
      }
    ],

    Facets: [
      {
        $Type: 'UI.ReferenceFacet',
        Label: 'Order Details',
        Target: '@UI.FieldGroup#OrderDetails'
      },

      {
        $Type: 'UI.ReferenceFacet',
        Label: 'Order Items',
        Target: 'items/@UI.LineItem'
      }
    ],

    FieldGroup #OrderDetails: {
      Data: [
        { 
          Value: id, 
          Label: 'Order ID' 
        },
        { 
          Value: customer, 
          Label: 'Customer' 
        },
        { 
          Value: orderdate, 
          Label: 'Order Date' 
        },
        { 
          Value: status,  
          Label: 'Status' 
        },
        { 
          Value: totalamount, 
          Label: 'Total Amount' 
        }
      ]
    },
  }
);


//tableD - Order Items
annotate bs.orderitems with @(
  UI: {
    CreateHidden: false,
    UpdateHidden: false,
    DeleteHidden: false,
    HeaderInfo: {
      TypeName: 'Order Item',
      TypeNamePlural: 'Order Items',
      Title: { Value: id },
      Description: { Value: product.name }
    },

    SelectionFields: [ 
        id, 
        price
    ],

    LineItem: [
      { 
        Value: id, 
        Label: 'Item ID' 
      },
      { 
        Value: product.name, 
        Label: 'Product' 
      },
      { 
        Value: quantity, 
        Label: 'Quantity' 
      },
      { 
        Value: price, 
        Label: 'Price' 
      }
    ],

    Facets: [
      {
        $Type: 'UI.ReferenceFacet',
        Label: 'Order Item Details',
        Target: '@UI.FieldGroup#OrderItemDetails'
      }
    ],

    FieldGroup #OrderItemDetails: {
      Data: [
        { 
          Value: id, 
          Label: 'Item ID' 
        },
        { 
          Value: product_id, 
          Label: 'Product' 
        },
        { 
          Value: quantity, 
          Label: 'Quantity' 
        },
        { 
          Value: price, 
          Label: 'Price' 
        }
      ]
    },
  }
);

