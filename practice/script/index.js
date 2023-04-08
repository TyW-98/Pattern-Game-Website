// Target H1 element using jQuery
// $("h1").css("color", "blue");

// Adding class to element
$("h1").addClass("title");

// Remove class from element
$("h1").removeClass("title");

// Add multiple class to element
$("h1").addClass("title spacing");

// Check if element has the class "title"
console.log($("h1").hasClass("title"));

// Change text in element
$("h1").text("New Text");

// Add html to element
$("button").html("<strong>Dont CLick Here</strong>")

// Set element's attribute
$("img").attr("src","new_image.png");

$("button").click(function () {
    $("h1").css("color", "blue")
});

$(document).keydown(function (event) {
    $("h1").text(event.key)
});

$("h1").on("click", function () {
    $(this).css("color", "red").text("Clicked")
});

$("button").on("click", function () {
    $("h1").slideToggle()
});