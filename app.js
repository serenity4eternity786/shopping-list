/* How to write JS apps

Milestone one: create the basic structure (explainign in plain english what steps we will be doing)
- first define the main parts of the JS code (function deifnistion and functions calls)
- inside of each of them describe in plain english what each function is going to do
- create the functions with names but no content
- create the connection between the functions and the html buttons which are activating them

Milestone two: start complete the functions definitions and test them line by line
- inside each functions write in plain english what are the steps to follow
- complete one step at a time and test it

*/


/* Debugging strategies
debugging level 1 => check if JS syntax is correct (check console in Web Dev)
    --> a real life example: make sure that your TV remote has batteries
debugging level 2 => check if the targeting is working (check the connection between the HTML element and equivalent JS functionality ==> alert("here"); inside the function)
    --> a real life example: make sure that your remote connects to your own TV
debugging level 3 => check if the logic makes sense (check if the JS functionality returns what we expect ==> alert(VALUE-NAME); inside the function)
    --> a real life example: make sure that when you click on the volume up button on your remote, you don't get to change channels or similar
*/

/*******************************************
STEP 1
before document ready we are defining all the functions and we explain what they should be doing when used
********************************************/

/*Functionality to add items in the list*/
function addItem() {
    //check if the targeting is working
    //alert("I've just activated the addItem() function");

    //Get value from the input box
    var itemValue = $('#shopping-list-entry').val();

    //check the value above (check if the logic makes sense)
    //alert(itemValue);

    //validate input
    if (itemValue.length === 0) {
        //if input is not valid, error to the user
        alert('You have to add something!!!');
    }

    //if input is valid
    else {

        //create new box, add input value from user (inputValue)
        var row =
            '<li>' +
            '<span class="shopping-item">' + itemValue + '</span>' +
            '<div class="shopping-item-controls">' +
            '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span>' +
            '</button>' +
            '<button class="shopping-item-delete">' +
            '<span class="button-label">delete</span>' +
            '</button>' +
            '</div>' +
            '</li>';

        //show it in the front end
        /*
            append = add stuff at the end of the queue
            prepend = add stuff at the begining of the queue
        */
        $('.shopping-list').append(row);

        //erase value once new box for value has been created
        $('#shopping-list-entry').val('');
    }
}

/*Functionality to check items in the list*/
function checkItem() {
    //check if the targeting is working
    //alert("I've just activated the checkItem() function");
    $(this).closest('div').siblings('.shopping-item').toggleClass('shopping-item__checked');
}

/*Functionality to delete items in the list*/
function deleteItem() {
    //check if the targeting is working
    //alert("I've just activated the deleteItem() function");
    $(this).parent().parent().remove();
}


/********************************************
STEP 2
Inside document ready we are calling all the functions (we used them) and connect them with the containers in HTML (for example the #add-button from HTML will be connected with the addItem function)
********************************************/

/*the following function should be INSIDE the $(document).ready(function() because the targeted containers were created WHEN the page was loaded*/

$(document).ready(function () {
    /*One click on the submit button activate function addItem() from above*/
    $('#js-shopping-list-form').submit(function (event) {
        event.preventDefault();
        addItem();
    });
});


/*the following 2 function calls should be OUTSIDE the $(document).ready(function() because the targeted containers were created AFTER the page was loaded*/

/*One click on the shopping-item-toggle button activate function checkItem() from above*/
$(document).on('click', '.shopping-item-toggle', checkItem);

/*One click on the shopping-item-delete button activate function deleteItem() from above*/
$(document).on('click', '.shopping-item-delete', deleteItem);
