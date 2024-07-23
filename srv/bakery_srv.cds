using bakery as db from '../db/bakery';

service bakeryservice {
  entity products as projection on db.products;
  entity categories as projection on db.categories;
  entity orders as projection on db.orders;
  entity orderitems as projection on db.orderitems;

  function getProductsByCategory(categoryId: Integer) returns array of products;
  action createUrgentOrder(customer: String, products: array of {id: Integer; quantity: Integer}) returns orders;
}