"use strict";

const menuButton = document.getElementById("menu");
const menuList = document.getElementById("menu-list");
const links = Array(
    document.getElementById("item-1"),
    document.getElementById("item-2"),
    document.getElementById("item-3")
);

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("show");
    menuList.classList.toggle("show");
});

links.forEach((e) => {
    e.addEventListener("click", () => {
        menuButton.classList.remove("show");
        menuList.classList.remove("show");
    });
});