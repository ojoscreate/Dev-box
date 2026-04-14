// alert("JQuery is working!");
$(document).ready(() => {
  $("body").css("background-color", "yellow");
});

// $(".title").css("color", "blue");

// $(".title").addClass("increase");
// console.log($(".title").hasClass("increase"));

// $("title").removeClass("increase");
console.log($(".title").hasClass("increase"));

$(".title").text("JQuery is awesome!");
// this will add html tags and replace inner Html used in vanilla js
$("p").html("<em>JQuery is awesome!</em>");

// adding attributes with jquery
$("a").attr("href", "https://www.ask.com");

// adding event listeners with jquery

$(".title").click(() => {
  alert("you clicked the title");
});

// adding event listeners to multiple elements
$(".testerBtn").click(() => {
  $(".title").css("font-size", "50px");
});
// adding toggle class on click
$(".testerBtn").click(() => {
  $(".title").toggleClass("increase");
});

// adding keydown event listener
$("input").keydown((event) => {
  console.log(event.target.value);
  console.log(event.key);
  $(".title").text(event.key);
});

// using the method ON to add event listeners
$(".title").on("mouseover", () => {
  $(".title").css("font-family", "cursive");
});

// ADDING AND REMOVING ELEMENTS WITH JQUERY
// adding elements
// The new element will be added before the selected element
$(".title").before("<button>The Before Button</button>");
// The new element will be added after the selected element
$(".title").after("<button>The After Button</button>");
// The new element will be added inside the selected element, at the beginning
$(".title").prepend("<button>The Prepend Button</button>");
// The new element will be added inside the selected element, at the end
$(".title").append("<button>The Append Button</button>");

// removing elements
$("img").remove();

// ADDING ANIMATIONS WITH JQUERY
//HIDE AND SHOW METHODS
// $(".title").hide();

$(".tester").click(() => {
  // $(".title").hide();
  // $("title").show();

  // toggle method lets it show and hide on alternate clicks
  // $(".title").toggle();

  // for fade effects
  // $(".title").fadeOut();
  // $(".title").fadeIn();
  // $(".title").fadeToggle();

  // for slide effects
  // $("p").slideUp();
  // $("p").slideDown();
  // $("p").slideToggle();

  // custom animation with animate method
  $("p").animate({ opacity: 0.3, fontSize: "30px" });

  // you can chain multiple animations together called chaining
  $(".title").slideUp().slideDown().animate({ opacity: 0.5 });
});
