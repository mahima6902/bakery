// namespace bakery;

// // Value help for products
// annotate products with {
//     category @(
//         Common.ValueList: {
//             Label: 'Category',
//             CollectionPath: 'categories',
//             Parameters: [
//                 { 
//                     $Type: 'Common.ValueListParameterInOut', 
//                     LocalDataProperty: category_id, 
//                     ValueListProperty: 'id' 
//                 },

//                 { 
//                     $Type: 'Common.ValueListParameterDisplayOnly', 
//                     ValueListProperty: 'name' 
//                 }
//             ] 
//         }
//     );

//     stock @(
//         Common.ValueList: {
//             Label: 'Stock Status',
//             CollectionPath: 'ProductStockVH',
//             Parameters: [
//                 { 
//                     $Type: 'Common.ValueListParameterInOut', 
//                     LocalDataProperty: stock, 
//                     ValueListProperty: 'status' 
//                 },
//                 {
//                     $Type: 'Common.ValueListParameterDisplayOnly', 
//                     ValueListProperty: 'min_value' 
//                 },
//                 { 
//                     $Type: 'Common.ValueListParameterDisplayOnly', 
//                     ValueListProperty: 'max_value' 
//                 }
//             ]
//         }
//     );
// };

// // Value help for orders
// annotate orders with {
//     status @(
//         Common.ValueList: {
//             Label: 'Order Status',
//             CollectionPath: 'OrderStatusVH',
//             Parameters: [
//                 { 
//                     $Type: 'Common.ValueListParameterInOut', 
//                     LocalDataProperty: status, ValueListProperty: 'status' 
//                 }
//             ]
//         }
//     );

//     customer @(
//         Common.ValueList: {
//             Label: 'Customer',
//             CollectionPath: 'customers',
//             Parameters: [
//                 { 
//                     $Type: 'Common.ValueListParameterInOut', 
//                     LocalDataProperty: customer, 
//                     ValueListProperty: 'id' 
//                 },
//                 { 
//                     $Type: 'Common.ValueListParameterDisplayOnly', 
//                     ValueListProperty: 'name' 
//                 }
//             ]
//         }
//     );
// };

// // Value help for orderitems
// annotate orderitems with {
//     product @(
//         Common.ValueList: {
//             Label: 'Product',
//             CollectionPath: 'products',
//             Parameters: [
//                 { 
//                     $Type: 'Common.ValueListParameterInOut', 
//                     LocalDataProperty: product_id, 
//                     ValueListProperty: 'id' 
//                 },
//                 {
//                     $Type: 'Common.ValueListParameterDisplayOnly', 
//                     ValueListProperty: 'name' 
//                 },
//                 { 
//                     $Type: 'Common.ValueListParameterDisplayOnly', 
//                     ValueListProperty: 'price' 
//                 }
//             ]
//         }
//     );

//     quantity @(
//         Common.ValueList: {
//             Label: 'Quantity',
//             CollectionPath: 'QuantityVH',
//             Parameters: [
//                 { 
//                     $Type: 'Common.ValueListParameterInOut', 
//                     LocalDataProperty: quantity, 
//                     ValueListProperty: 'quantity' 
//                 }
//             ]
//         }
//     );
// };