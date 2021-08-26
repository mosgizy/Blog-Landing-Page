const btn = document.querySelector(".nav-button");
const hamburger = document.querySelector(".main-menu");
const hambImg = document.querySelector(".nav-button img");

const btns = document.querySelectorAll(".menu-option button");
const subMainMenu = document.querySelectorAll(".sub-main-menu");

btn.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    if(hamburger.classList.contains("active")){
        hambImg.src = "images/icon-close.svg";
    }else{
        hambImg.src = "images/icon-hamburger.svg";
    }
});

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const id = btn.id;
        subMainMenu.forEach((menuItem) => {
            if(menuItem.classList.contains(id)){
                menuItem.classList.toggle("active");
            }else{
                menuItem.classList.remove("active");
            }
        })
    })
})