// Is content for each category, going to be dynamically displayed or will it be a display on or off type of thing. 
// Ask about the 30 results per page or 30 total in class 
// Run a basic API fetch to see what data we get.

// Split into two teams of getting more of the HTML Fleshed out and umm getting a test API call to see what info we are receiving. 


// Function for generating search results. 
    // Includes image, and includes Title of Recipe and both are a link to the recipe page. 
    // At the bottom there should a a previous button and a next button

// Function that fetches the API and uses our object that has the "include array" and "restrict array". 
    // That will be adding to the parameters of the fetch. 
    // Will then start the function that generated the search results.
function runAPI() {
  let apiOdy = "872fa65d52a2467f9914c55d89dbf2ba";
  // query = The (natural language) recipe search query
  // let query = query
  // cuisine = The The cuisine(s) of the recipes. One or more, comma separated (will be interpreted as 'OR').
  // excludeCuisine = The cuisine(s) the recipes must not match. One or more, comma separated (will be interpreted as 'AND').
  // diet = 	The diet for which the recipes must be suitable.
  // intolerances = A comma-separated list of intolerances. All recipes returned must not contain ingredients that are not suitable for people with the intolerances entered.
  // includeIngredients = A comma-separated list of ingredients that should/must be used in the recipes.
  // excludeIngredients = A comma-separated list of ingredients or ingredient types that the recipes must not contain. (boolean)
  // sort = The strategy to sort recipes by.
  // sortDirection = The direction in which to sort. Must be either 'asc' (ascending) or 'desc' (descending).
  // number = The number of expected results (between 1 and 100)
  requestURL = "https://api.spoonacular.com/recipes/complexSearch?includeIngredients=chicken,broccoli&number=10&apiKey=" + apiOdy;

  fetch (requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("Complex search data.")
      console.log(data)
    })
  }

runAPI();

// Section 1
// Event listeners for the sections to determine if they are being included or not & then event listeners on the section div to listen for the individual items and then add them to our search array. 
let selections = [];

let meatArray = [];
let seafoodArray = [];
let meatSubArray = [];
let vegArray = [];
let grainsArray = [];
let fruitsArray = [];
let dairiesArray = [];
let spicesArray = [];
let oilsArray = [];
let nutsArray = [];
let dessertsArray = [];
let saucesArray = [];
let cuisineArray = [];
let dietArray = [];
let allergensArray = [];


//


//function menu()



$("#diet").on("click", function(event) {
    event.preventDefault;
    selections.push($("#diet").val())
});

$("#cuisine").on("click", function(event) {
    event.preventDefault;
    selections.push($("#cuisine").val())
});

$("#meat").on("click", function(event) {
    event.preventDefault;
    selections.push($("#meat").val())
});

$("#meatSubstitute").on("click", function(event) {
    event.preventDefault;
    selections.push($("#meatSubstitute").val())
});

$("#seafood").on("click", function(event) {
    event.preventDefault;
    selections.push($("#seafood").val())
});

$("#vegetables").on("click", function(event) {
    event.preventDefault;
    selections.push($("#vegetables").val())
});

$("#grains").on("click", function(event) {
    event.preventDefault;
    selections.push($("#grains").val())
});

$("#fruits").on("click", function(event) {
    event.preventDefault;
    selections.push($("#fruits").val())
});

$("#dairies").on("click", function(event) {
    event.preventDefault;
    selections.push($("#dairies").val())
});

$("#spices").on("click", function(event) {
    event.preventDefault;
    selections.push($("#spices").val())
});

$("#oils").on("click", function(event) {
    event.preventDefault;
    selections.push($("#oils").val())
});

$("#nuts").on("click", function(event) {
    event.preventDefault;
    selections.push($("#nuts").val())
});

$("#desserts").on("click", function(event) {
    event.preventDefault;
    selections.push($("#desserts").val())
});

$("#sauces").on("click", function(event) {
    event.preventDefault;
    selections.push($("#sauces").val())
});
// event listener for the search button.


// Section 2
// Function that takes the input and both adds the item to the search array and lists the item out in the visible page of what is being included in the search. 
    // The items will need to be able to be closed/removed from the list. 
    // Look up jQuery spell checker in include some stop for if they enter items wrong. 
        // <script src="js/jquery.spellchecker.min.js"></script>
        // <link href="css/jquery.spellchecker.css" rel="stylesheet" /> 
        // https://github.com/badsyntax/jquery-spellchecker/wiki/Documentation
    // Some sort of stop if they try to search with having no items 
    // Discuss route for how we are going to add restrictions/ checkbox vs. search input. Should be added to separate array.

// Event listener for the two buttons that determine seach one or search two.


// Errors to keep an eye out for "fixing"
    // If search results pull up no recipes
        // Try again
        // Use less ingredients
        // Use different ingredients
        // Check your ingredients are actual ingredients
    // Require a minimum of three ingredients

    // var acc = document.getElementsByClassName("accordion");
    // var i;
    
    // for (i = 0; i < acc.length; i++) {
    //   acc[i].addEventListener("click", function() {
    //     /* Toggle between adding and removing the "active" class,
    //     to highlight the button that controls the panel */
    //     this.classList.toggle("active");
    
    //     /* Toggle between hiding and showing the active panel */
    //     var panel = this.nextElementSibling;
    //     if (panel.style.display === "block") {
    //       panel.style.display = "none";
    //     } else {
    //       panel.style.display = "block";
    //     }
    //   });
    // }

    // var accordions = bulmaAccordion.attach(); // accordions now contains an array of all Accordion instances