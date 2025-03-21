const searchBarContainerE1 = document.querySelector(".search-bar-container");

const magnifierE1 = document.querySelector(".magnifier");

const micIcon = document.querySelector(".mic-icon");


magnifierE1.addEventListener("click", () =>{
 searchBarContainerE1.classList.toggle("active");
});