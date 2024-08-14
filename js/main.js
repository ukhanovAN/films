$(document).ready(function() {
    $(".card").click(function() {
        $(this).toggleClass("flipped");
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navList = document.getElementById('nav_list');

    burger.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
});