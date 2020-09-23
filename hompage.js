$(document).ready(function () {
  $(window).scroll(function () {
    // check if scroll event happened
    if ($(document).scrollTop() > 50) { 
      // check if user scrolled more than 50 from top of the browser window
      //this is for just the navbar. class is added to the navbar when not scrolled, which makes the navbar bg -color transparent.
      $(".navbar").addClass("navbarColorWhenScrolledAndHovered"); 
      //for all the nav-links
      $(".nav-link, .hamburger").addClass("nav-linkWhenScrolledAndHovered");
    } else {
      //removing transparent bg-color when not scrolled. And gets the default value "transparent" color
      $(".navbar").removeClass("navbarColorWhenScrolledAndHovered");
      $(".nav-link, .hamburger").removeClass("nav-linkWhenScrolledAndHovered");
    }
  });
});

$(".navbar").hover(function () {
  $(".navbar").addClass("navbarColorWhenScrolledAndHovered");
  $(".nav-link, .hamburger").addClass("nav-linkWhenScrolledAndHovered");

},function(){
  $(".navbar").removeClass("navbarColorWhenScrolledAndHovered");
  $(".nav-link, .hamburger").removeClass("nav-linkWhenScrolledAndHovered");
});

// $(".searchIcon").hover(function(){
//   $(".searchBar").css("display", "block");
//   // $(".firstCarousel").css("display", "none");


// });
