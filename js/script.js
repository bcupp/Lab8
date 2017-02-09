var totalArray = [];
var sum=Number(0);
//create a new <li> in ID 'totalItem' <ul>
var totalLi = document.createElement('li');
function toCart() {
    //function grabs item name input and returns the item name
    function itemNameInput() {
        //return value of element with ID 'groceryInput'
        return document.getElementById('groceryInput').value;
    }
    function itemPriceInput() {
        //return value of element with ID 'priceInput'
        return document.getElementById('priceInput').value;
    }
    function itemQuantityInput() {
        //return value of element with ID 'quantityInput'
        return document.getElementById('quantityInput').value;
    }
    //created var to hold the location of ID 'listItem' to later append with reciept lines as <ul> elements.
    var reciept = document.getElementById('listItem');
    //call functions to get values of all the inputs
    var itemName = itemNameInput();
    var itemPrice = itemPriceInput();
    var itemQuantity = itemQuantityInput();
    //create new <li>
    var newLi = document.createElement('li');
    //add items together to then send to a new <ul><li>
    var newLine = ('Item: ' + itemName + " Qty: " + itemQuantity + "     Price: $" + (itemPrice * itemQuantity));
    //add newLine to text content of new <li> created above
    newLi.textContent = newLine;
    //add items to ID 'listItem' as a new <li>
    reciept.appendChild(newLi);
    //created a variable to hold total value of price*quantity
    var total = itemPrice*itemQuantity;
    //pushing total items into an array
    totalArray.push(total);
    //created var to hold the location of ID 'totalItem' to later append with total line as a <ul> element.
    var recieptTotal = document.getElementById('totalItem');
    // sum totals with a forEach loop
    sum=0;
    totalArray.forEach(function(total){
        sum+=total;
    });
    //Change text.content to equal the sum of the totals
    totalLi.textContent = ('Total = $'+sum);
    //add item to ID 'totalItem' as a new <li>
    recieptTotal.appendChild(totalLi);
    //getElementById to store and later make hidden reciept <div> not hidden.
    var notHidden = document.getElementById('recieptList');
    notHidden.style.visibility = 'visible';

}
