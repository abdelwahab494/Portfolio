let scroll = document.querySelector(".up");
window.onscroll = function () {
    (this.scrollY >= 70) ? scroll.classList.add("show") : scroll.classList.remove("show");
}

const menu = document.getElementById("menu");
const action = document.getElementById("action");

menu.addEventListener("click", ()=>{
    handleMenu();
})
action.addEventListener("click", ()=>{
    handleMenu();
})

function handleMenu(){
    menu.classList.toggle("is-active");
    action.classList.toggle("is-active");
}