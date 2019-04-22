var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazonDB"
});
//Declare global variables
var itemID = 0;
var numberOfUnits = 0;

// connect to the mysql server and sql database
connection.connect(function(err) {
    //thore error if there is one
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    // run the start function after the connection is made to prompt the user
    readProducts();
  });
  
  // function which prompts the user for what action they should take
  function readProducts() {
  console.log("Displaying Products");
  connection.query("SELECT * FROM products", function(err, res) {
     if (err) throw err;
     //Log all results of the SELECT statement
     console.log(res);
     selectItemID();
  });
}

function selectItemID() {
  inquirer
    .prompt([
      {
      name: "itemID",
      type: "input",
      message: "What is the item ID of the product you would like to buy?",
      validate: function(answer) {
        if (isNaN(answer) === false) {
        return true;
        }
        return false;
      }
    }
    ])
    .then(function(answer) {
     var itemID
     // query the database for the IDs in the ID columns
     connection.query("SELECT * FROM products WHERE item_id = " + itemID, function(err, res) {
      if (answer.itemID >= 1 && answer.itemID <= 10) {
        console.log(answer.itemID);
        numberUnits();
      } 
      else if (err) {
      console.log(err);
      }
    });
    });
   
}

function numberUnits() {
  inquirer
    .prompt([
      {
      name: "numberOfUnits",
      type: "input",
      message: "How may units of the product would you like to buy?"
     
    }
    ])
    .then(function(answer) {
      var numberOfUnits;
      connection.query("SELECT * FROM products WHERE item_id = " + answer.itemID && "SELECT * FROM products WHERE stock_quantity = " + numberOfUnits, function(err, res) {
      //PLEASE START FROM HERE. Figure out a way to link the item ID to quantity
      if (answer.numberOfUnits <= "stock_quantity") {
          console.log(answer.numberOfUnits);
          updateProduct();
      }

      if (answer.numberOfUnits > "stock_quantity") {
          console.log("The number of units require exceed stock quantity");
      }

      else if (err) {
        console.log(err);
      }

      });
      });
}

function updateProduct() {
  console.log("Updating the stock quantity of the item you would like to purchase...\n");
  var query = connection.query("SELECT * FROM products WHERE item_id = " + answer.itemID && "SELECT * FROM products WHERE stock_quantity = " + numberOfUnits &&  "UPDATE products SET ? WHERE ?", function(err, res) {
   [
      {
        stock_quantity: ("stock quantity" - answer.numberOfUnits)
      },

      {
        item_id: answer.itemID
      }
   ],

   console.log(res);
   total();

   if(err) {
     console.log(err);
   }
      console.log(query.sql);
});
}

function total() {
  connection.query("SELECT * FROM products WHERE item_id = " + answer.itemID && "SELECT * FROM products WHERE stock_quantity = " + numberOfUnits && "SELECT price FROM products", function(err, res) {

  console.log("Your total is: " + ("price" * answer.numberOfUnits));
})
};
