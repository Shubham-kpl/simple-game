const box = document.querySelector(".box");
const bg = document.querySelector(".bg");
// Playing with coordinates
const boxC = box.getBoundingClientRect();

document.documentElement.addEventListener("keypress", function (e) {
  if (e.key === "a") {
    if (
      (box.getBoundingClientRect().left || 0) >
        (bg.getBoundingClientRect().left + 20 || 0) &&
      (box.getBoundingClientRect().left + 20 || 0) <
        (bg.getBoundingClientRect().right || 0)
    ) {
      box.style.left = (parseInt(box.style.left, 10) || 0) - 10 + "px";
    }
  } else if (e.key === "s") {
    if (
      (box.getBoundingClientRect().top || 0) >=
        (bg.getBoundingClientRect().top || 0) + 10 &&
      (box.getBoundingClientRect().bottom || 0) + 20 <
        (bg.getBoundingClientRect().bottom || 0)
    ) {
      box.style.top = (parseInt(box.style.top, 10) || 0) + 10 + "px";
    }
  } else if (e.key === "e") {
    if (
      (box.getBoundingClientRect().top || 0) >
        (bg.getBoundingClientRect().top || 0) + 30 &&
      (box.getBoundingClientRect().top || 0) + 20 <
        (bg.getBoundingClientRect().bottom || 0)
    ) {
      box.style.top = (parseInt(box.style.top, 10) || 0) - 10 + "px";
    }
  } else if (e.key === "d") {
    if (
      (box.getBoundingClientRect().left || 0) >=
        (bg.getBoundingClientRect().left || 0) + 10 &&
      (box.getBoundingClientRect().right || 0) + 20 <
        (bg.getBoundingClientRect().right || 0)
    ) {
      box.style.left = (parseInt(box.style.left, 10) || 0) + 10 + "px";
    }
  }
});
