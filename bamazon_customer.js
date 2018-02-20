var mysql = require("mysql");
var inquirer = require("inquirer");
var itemID = 0;
var quantity = 0;

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "$L0cK^",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('Welcome to Bamazon, your hipster gear headquarters!');
  transaction();
});

// function to list all products
function transaction() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    var section = '----------------------------------------------------------------------------';
    console.log(section);
    for (var i = 0; i < res.length; i++) {
      console.log('ID: ' + res[i].item_id + ' | Product: ' + res[i].product_name + ' | Price: '  + res[i].price);
    } // close loop
    console.log('\n');
    takeOrder()




function takeOrder() {
  inquirer.prompt([
      {
        type: "input",
        name: "product",
        message: "Enter the ID of the item you'd like to purchase."
      },
      {
        type: "input",
        name: "quantity",
        message: "Enter the number of items you'd like to purchase."
      }
    ]).then(function(answer) {
      itemID = answer.product;
                console.log('itemID', itemID);
      quantity = answer.quantity;
                console.log('quantity', quantity);
      checkQuantity()
    });
} // close function, takeOrder

function checkQuantity() {
  connection.query('SELECT stock_quantity FROM products WHERE ?',
    {
      item_id: itemID
    }, function(err, result) {
    if (err) throw err;
    var itemsRemaining = result
    console.log('itemsRemaining', itemsRemaining);
  });
} // close function, checkQuantity



connection.end();
  });
} // close function, transaction


// function displayGenre() {
//   connection.query("SELECT * FROM songs WHERE genre = 'Dance' ", function(err, res) {
//     if (err) throw err;
//     var section = '--------------------------------------------------------------';
//     console.log(section);
//     for (var i = 0; i > res.length; i++) {
//       console.log('1) Track: ' + res[i].title + ' | Artist: ' + res[i].artist + ' | Genre: '  + res[i].genre);
//     }
//
// connection.end();
//   });
// }
