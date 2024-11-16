// header sticky------------
const head = document.getElementsByClassName("header");


let scrollPoint;
window.addEventListener("scroll", function () {
  scrollPoint = this.scrollY;

  if (scrollPoint > 100) {
    head[0].classList.add("sticky");
    this.setTimeout(() => {
      head[0].style.top = "0";
    }, 300);


  } else {
    head[0].classList.remove("sticky");
    this.setTimeout(() => {
      head[0].style.top = "0";
    }, 300);

  }
})
