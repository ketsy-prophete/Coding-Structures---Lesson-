var groceryList = ["Bananas", "Milk", "Eggs", "Bacon"];
var message = "Please pick up the following from the store: ";

for (var i = 0; i < groceryList.length; i++) {
    message += groceryList[i];

    if (i < groceryList.length - 1) {
        message += ", ";
    }
}

console.log(message);
