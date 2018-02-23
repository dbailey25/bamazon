var mysql = require("mysql");
var inquirer = require("inquirer");
var orderItemID = 0;
var orderQuantity = 0;
var itemsRemaining = 0;
var itemName = '';

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
  displayItems();
});

// function to list all products
function displayItems() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    var section = '----------------------------------------------------------------------------';
    console.log(section);
    for (var i = 0; i < res.length; i++) {
      console.log('ID: ' + res[i].item_id + ' | Product: ' + res[i].product_name + ' | Price: '  + res[i].price);
    } // close loop
    console.log('\n');
    takeOrder()
  });
} // close function, transaction

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
      orderItemID = answer.product;
      orderQuantity = answer.quantity;
      getProductDetails()
    });
} // close function, takeOrder

function getProductDetails() {
  // query for item quantity
  connection.query('SELECT stock_quantity FROM products WHERE ?',
    {
      item_id: orderItemID
    }, function(err, result) {
    if (err) throw err;
    itemsRemaining = result[0].stock_quantity;
  });

    // query for item name
    connection.query('SELECT product_name FROM products WHERE ?',
      {
        item_id: orderItemID
      }, function(err, result) {
      if (err) throw err;
      itemName = result[0].product_name;
      giveOrderResponse()
      connection.end();
    });
  } // close function, getProductDetails

  function giveOrderResponse() {
    if (orderQuantity <= itemsRemaining) {
      console.log('\n Cool! Knock back a PBR while we place your order.');
      // fulfillOrder()
    }
    else {
      console.log("\n Bummer, we only have " + itemsRemaining + ' ' + itemName + ' left. Select a smaller quantity.');
      takeOrder()
    }
  } // close function, giveOrderResponse


function fulfillOrder() {
  
} // close function, fulfillOrder







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
