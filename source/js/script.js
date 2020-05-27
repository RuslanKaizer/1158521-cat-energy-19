var navButton = document.querySelector(".page-header__button");
var navigation = document.querySelector(".main-nav");

navigation.classList.remove("main-nav--visible");
navigation.classList.add("main-nav--hidden");

navButton.classList.remove("page-header__button--nojs");
navButton.classList.remove("page-header__button--cross");

navButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (navigation.classList.contains("main-nav--visible")) {
    navigation.classList.remove("main-nav--visible");
    navigation.classList.add("main-nav--hidden");
    navButton.classList.remove("page-header__button--cross");
  } else {
    navigation.classList.add("main-nav--visible");
    navigation.classList.remove("main-nav--hidden");
    navButton.classList.add("page-header__button--cross");
  }
});
