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
    //create new <li> and a class for the <li>
    var newLi = document.createElement('li');
    newLi.className = 'newLi';
    //add newLine to text content of new <li> created above
    newLi.textContent = '';
    //add items to ID 'listItem' as a new <li>
    reciept.appendChild(newLi);
    //create span elements and added their classes
    var spanElQty = document.createElement('span');
    spanElQty.className = 'spanElQty';
    var spanElName = document.createElement('span');
    spanElName.className = 'spanElName';
    var spanElPrice = document.createElement('span');
    spanElPrice.className = 'spanElPrice';

    //Strings for receiept line
    var spanQty = (itemQuantity+'  ');
    var spanName = ('  '+itemName);
    var spanPrice = ('$'+itemPrice*itemQuantity);
    //Assign strings to text content of spans and add spans to <li>
    spanElQty.textContent = spanQty;
    newLi.appendChild(spanElQty);
    spanElName.textContent = spanName;
    newLi.appendChild(spanElName);
    spanElPrice.textContent = spanPrice;
    newLi.appendChild(spanElPrice);
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
    //change the visbity styling from invisible to visible
    notHidden.style.visibility = 'visible';
}
