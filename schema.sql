DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Plaid Flannel Shirt", 'Apparel', 24.95, 48);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Denim Jeans - Blue', 'Apparel', 49.95, 76);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Denim Jeans - Black', 'Apparel', 49.95, 76);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Leather Boots - Black - Sz 10', 'Shoes', 79.95, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Leather Boots - Brown - Sz 11', 'Shoes', 83.95, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Canvas Espadrilles - Blue - Sz 9', 'Shoes', 39.97, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Canvas Espadrilles - Gray - Sz 10', 'Shoes', 39.97, 16);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Thick Framed Glasses', 'Accessories', 59.95, 22);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Beanie Hat - Gray', 'Accessories', 19.95, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Beanie Hat - Black', 'Accessories', 19.95, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Wallet Chain', 'Accessories', 12.95, 19);
