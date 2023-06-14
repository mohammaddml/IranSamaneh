const swiperSlider = new Swiper(".swiper", {
  loop: true,
  speed: 2500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperAnimation = new Swiper(".swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  speed: 2700,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

(function () {
  var dialog = document.getElementById("myFirstDialog");
  document.getElementById("show").onclick = function () {
    dialog.show();
  };
  document.getElementById("hide").onclick = function () {
    dialog.close();
  };
})();

// document.getElementById("enable").onclick = function () {
//   enableScroll();
// };

// document.getElementById("disable").onclick = function () {
//   disableScroll();
// };
// var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

// function preventDefault(e) {
//   e.preventDefault();
// }

// function preventDefaultForScrollKeys(e) {
//   if (keys[e.keyCode]) {
//     preventDefault(e);
//     return false;
//   }
// }

// modern Chrome requires { passive: false } when adding event
// var supportsPassive = false;
// try {
//   window.addEventListener(
//     "test",
//     null,
//     Object.defineProperty({}, "passive", {
//       get: function () {
//         supportsPassive = true;
//       },
//     })
//   );
// } catch (e) {}

// var wheelOpt = supportsPassive ? { passive: false } : false;
// var wheelEvent =
//   "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

// call this to Disable
// function disableScroll() {
//   window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
//   window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
//   window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
//   window.addEventListener("keydown", preventDefaultForScrollKeys, false);
// }

// call this to Enable
// function enableScroll() {
//   window.removeEventListener("DOMMouseScroll", preventDefault, false);
//   window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
//   window.removeEventListener("touchmove", preventDefault, wheelOpt);
//   window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
// }

// var changeBackgroundColor = document.getElementById("map-style");

// changeBackgroundColor.addEventListener("click", function onclick() {
//   changeBackgroundColor.style.fill = "#ffa";
// });

// const target = document.getElementById("accordionExample");
// const btns = document.getElementById("toggl");
// btns.onclick = function () {
//   if (target.style.display !== "none") {
//     target.style.display = "block";
//   } else {
//     target.style.display = "none";
//   }
// };
// position: relative;
//           align-items: flex-start;
//           margin: 0;
//           list-style-type: none;
//           color: #33c5d5;
//           display: flex;
//           justify-content: space-around;
//           top: 16px;
