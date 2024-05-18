document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header__container');
    const logo = document.querySelector('.logo');
    const logoa = document.querySelector('.logo > a');

    if (window.innerWidth >= 1280) {
        function handleScroll() {
            if (window.scrollY > 50) {
                header.style.height = "70px";
                logo.style.height = "100%";
                logo.style.padding = "11px";
                logoa.style.width = "48px";
                logoa.style.height = "48px";
            } else {
                header.style.height = "105px";
                logo.style.height = "210px";
                logo.style.padding = "31px";
                logoa.style.width = "148px";
                logoa.style.height = "148px";
            }
        }
    }

    window.addEventListener('scroll', handleScroll);
});

const searchButton = document.querySelector('.search');
const searchForm = document.querySelector('.findInf');
var bottomBlock = document.querySelector('.userblock');

searchButton.addEventListener('click', function () {
    var isActive = searchForm.classList.contains('_active');

    if (!isActive) {
        searchForm.classList.add('_active');
        if (window.innerWidth <= 1279) {
            bottomBlock.style.bottom = ('-190px');
        }
    } else {
        searchForm.classList.remove('_active');
        setTimeout(function () {
            if (window.innerWidth <= 1279) {
                bottomBlock.style.bottom = ('-130px');
            }
        }, 500);
    }
});

document.querySelectorAll('.general__link').forEach((elem) => {
    elem.addEventListener('click', () => {
        let content = elem.nextElementSibling;
        let arrow = elem.querySelector('.spoiler-arrow>img');

        document.querySelectorAll('.spoiler__list').forEach((link) => {
            if (link !== content && link.classList.contains('_active')) {
                link.classList.remove('_active');
                link.previousElementSibling.querySelector('.spoiler-arrow>img').style.transform = 'rotate(0deg)';
            }
        });
        if (content.classList.contains('_active')) {
            content.classList.remove('_active');
            arrow.style.transform = 'rotate(0deg)';
        } else {
            content.classList.add('_active');
            arrow.style.transform = 'rotate(90deg)';
        }
    });
});


const burger = document.querySelector(".icon");
if (burger) {
    const navigation = document.querySelector(".menu__list");
    const userblock = document.querySelector(".userblock");
    const header = document.querySelector(".header");
    burger.addEventListener("click", function (e) {
        burger.classList.toggle("_active");
        navigation.classList.toggle("_active");
        userblock.classList.toggle("_active");
        header.classList.toggle("_active");
        document.body.classList.toggle("_lock");
        if (document.body.classList.contains("_lock")) {
            document.body.style.overflow = 'hidden';
            navigation.style.overflow = 'auto';
        }
        else {
            document.body.style.overflow = '';
            navigation.style.overflow = 'hidden';
        }
    });
    const navLinks = document.querySelectorAll('.list__link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Закриваємо бургер-меню
            burger.classList.remove('_active');
            navigation.classList.remove('_active');
            userblock.classList.remove("_active");
            header.classList.remove('_active');
            document.body.classList.remove('_lock');
            document.body.style.overflow = '';
        });
    });
}

var cartBtn = document.querySelector(".cart");
var cartPopup = document.querySelector(".cart__popup");
var closeBtn = document.querySelector(".popup__close");

cartBtn.addEventListener("click", function () {
    cartPopup.style.display = "block";
    document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", function () {
    cartPopup.style.display = "none";
    document.body.style.overflow = "auto";
});

var logBtn = document.querySelector(".login");
var logPopup = document.querySelector(".login__popup");
var regPopup = document.querySelector(".reg__popup");
var closelogBtn = document.querySelector(".logpopup__close");

logBtn.addEventListener("click", function () {
    logPopup.style.display = "block";
    document.body.style.overflow = "hidden";
});

function openRegistration() {
    document.querySelector(".login__popup").style.display = "none";
    document.querySelector(".reg__popup").style.display = "block";
}

function openLogin() {
    document.querySelector(".login__popup").style.display = "block";
    document.querySelector(".reg__popup").style.display = "none";
}

closelogBtn.addEventListener("click", function () {
    logPopup.style.display = "none";
    document.body.style.overflow = "auto";
});

var closeregBtn = document.querySelector(".regpopup__close");

closeregBtn.addEventListener("click", function () {
    regPopup.style.display = "none";
    logPopup.style.display = "none";
    document.body.style.overflow = "auto";
});
