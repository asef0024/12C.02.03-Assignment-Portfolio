// window.addEventListener("load", sidenVises);

// function sidenVises() {
//   console.log("sidenVises");

//   document.querySelector("#menuknap").addEventListener("click", toggleMenu);
// }

// function toggleMenu() {
//   console.log("toggleMenu");

//   document.querySelector("#menu").classList.toggle("hidden");

//   let erSkjult = document.querySelector("#menu").classList.contains("hidden");

//   if (erSkjult == true) {
//     document.querySelector("#menuknap").textContent = "MENU";
//   } else {
//     document.querySelector("#menuknap").textContent = "X";
//   }
// }

// let animation_elements = ".box1";
// window = window;

// function check_if_in_view() {
//   let window_height = window.height();
//   let window_top_position = window.scrollTop();
//   let window_bottom_position = window_top_position + window_height;

//   each(animation_elements, function () {
//     var element = this;
//     var element_height = element.outerHeight();
//     var element_top_position = element.offset().top;
//     var element_bottom_position = element_top_position + element_height;

//     //check to see if this current container is within viewport
//     if (
//       element_bottom_position >= window_top_position &&
//       element_top_position <= window_bottom_position
//     ) {
//       element.addClass("inview");
//     } else {
//       element.removeClass("inview");
//     }
//   });
// }

// window.addEventListener("scroll resize", check_if_in_view);
