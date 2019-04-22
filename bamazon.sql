DROP DATABASE IF EXISTS bamazonDB;

CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INTEGER(10) NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(255) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DOUBLE(10,2),
  stock_quantity INTEGER(10) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Crayola Crayons", "Stationery", 5.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Encyclopedias", "Books", 25.00, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Calculators", "Education", 30.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Hand Sanitizer", "Health and Wellness", 3.00, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Moisturizing Hand Cream", "Health and Wellness", 5, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Lindt Chocolates", "Candies", 20.00, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Mints", "Candies", 5.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Bottled Water", "Drinks", 5.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Notebooks", "Stationery", 10.00, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Paper Weights", "Stationery", 20.00, 10)