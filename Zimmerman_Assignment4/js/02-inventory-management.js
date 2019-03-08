/*eslint-env browser*/

var inventory;
function displayInventory() {
    "use strict";
    window.console.log("Welcome to your new Inventory System!");
    window.console.log("menu");
    window.console.log("products");
    window.console.log("update");
    window.console.log("exit");
}
function myInventory {
    "use strict";
    sort();
    var z = 1;
    forEach(function (stock) {
        window.console.log(z + stock);
        z += 1;
    });
}
function refreshInventory {
    "use strict";
    var sku = window.prompt("What SKU would you like to update?");
    var successful = 0;
    for (var x = 1; x < length;) {
    if (sku === (x)(0));
        var currentStock = window.prompt("How many " + (x)(1) + " are in stock");
       {alert("You must type in a number");
         refreshInventory; }
    }
       
function item() {
    "use strict";
    var employee, command;
    displayInventory();
    if ("myInventory") === "") {       
        inventory = [
            [6343, "Jeans", 22, 39.99],
            [4824, "Shirt", 10, 15.99],
            [9382, "Jacket", 5, 49.99]
            [3223, "Socks", 36, 9.99],
            [2233, "Hat", 12, 49.99],
        
        ];
    } 

    while (true) {
        command = window.prompt("Enter your command here!");
        if (command == "view") {
             myInventory(inventory);
        } else if (command == "update") {
            refreshInventory;
        } else if (command === "exit" || command === "break") {
            break;
        }
           else {
            window.console.log("Please enter a different command!");
        }
    }
}
    window.console.log("This program has been cancelled!");
}



