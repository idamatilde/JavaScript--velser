console.log("test");
window.addEventListener("load", sidenVises);
// const sodavand = document.querySelector("#sodavand");

// const img = document.querySelector("#billede");
// const sodavand = document.querySelector("#sodavand");
// const alkohol = document.querySelector("#alkohol");

function sidenVises() {
  this.addEventListener("mousedown", click);
}
function click() {
  if (this != "#sodavand") {
    console.log("Alkoholfri");
  } else {
    console.log("Alkohol");
  }
}
