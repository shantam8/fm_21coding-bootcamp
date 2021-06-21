let section1 = document.querySelector("#sect1");
let section2 = document.querySelector("#sect2");
let btnNext = document.querySelector("#btnNext");
let btnPrev = document.querySelector("#btnPrev");
let userAvatar = document.querySelector("#userAvatar");

function toggleDisplay() {
  if (section1.style.display == "none") {
    section1.style.display = "block";
    section2.style.display = "none";
    userAvatar.src = "../images/image-tanya.jpg";
  } else {
    section1.style.display = "none";
    section2.style.display = "block";
    userAvatar.src = "../images/image-john.jpg";
  }
}

function checkPressedKey(ev) {
  if (ev.keyCode == 37) {
    if ("btnPrev" == document.activeElement.id) {
      btnPrev.click();
    } else {
      btnPrev.focus();
    }
  } else if (ev.keyCode == 39) {
    if ("btnNext" == document.activeElement.id) {
      btnNext.click();
    } else {
      btnNext.focus();
    }
  }
}

function init() {
  btnNext.addEventListener("click", toggleDisplay);
  btnPrev.addEventListener("click", toggleDisplay);

  window.addEventListener("keydown", checkPressedKey);
}

window.onload = init();
