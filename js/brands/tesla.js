const tesla = document.querySelector("#tesla")
const tesla_img = tesla.querySelectorAll(".imgBox img");
const tesla_btns = tesla.querySelectorAll(".active_btns li");
const btns = tesla.querySelector(".btns");
const prev = tesla.querySelector(".btns .prev");
const next = tesla.querySelector(".btns .next");
const tesla2D = document.querySelector(".tesla2D");
const teslaList = tesla2D.querySelector(".teslaList");
const cars = teslaList.querySelectorAll("li");
const ListPrev = tesla2D.querySelector(".teslaPrev");
const ListNext = tesla2D.querySelector(".teslaNext");
let enableClickTesla = true;

tesla_btns.forEach((el, index) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();

        tesla.querySelector(".imgBox img.on").classList.remove("on");
        tesla.querySelector(".active_btns li.on").classList.remove("on");


        tesla_btns[index].classList.add("on");
        tesla_img[index].classList.add("on");
    })
});

window.addEventListener("scroll", () => {
    if (scrollY == sectionTop[1]) {
        btns.classList.add("on");
    } else {
        btns.classList.remove("on");
    }
})

window.addEventListener("load", () => {
    if (scrollY == sectionTop[1]) {
        btns.classList.add("on");
    } else {
        btns.classList.remove("on");
    }
})

let tesla_left = 0;
prev.addEventListener("click", () => {
    if (tesla_left === 0) return;
    tesla_left = tesla_left + 100;
    tesla_move(tesla_left)
})
next.addEventListener("click", () => {
    if (tesla_left === -200) return;
    tesla_left = tesla_left - 100;
    tesla_move(tesla_left)
})


ListPrev.addEventListener("click", (e) => {
    if (enableClickTesla) {
        e.preventDefault();
        ListPrevSlide();
        enableClickTesla = false;
    }
})
ListNext.addEventListener("click", (e) => {
    if (enableClickTesla) {
        e.preventDefault();
        ListNextSlide();
        enableClickTesla = false;
    }
})

function tesla_move(tesla_left) {
    tesla.style.left = `${tesla_left}vw`;
}

function ListPrevSlide() {
    teslaList.prepend(teslaList.lastElementChild);
    teslaList.firstElementChild.style.left = "-40%";
    setTimeout(() => {
        setTimeout(() => {
            enableClickTesla = true;
        }, 1000)
        teslaList.firstElementChild.style.left = "0%";
    }, 1000);
}

function ListNextSlide() {
    teslaList.append(teslaList.firstElementChild);
    teslaList.firstElementChild.style.left = "40%";
    teslaList.firstElementChild.style.opacity = "0";
    teslaList.firstElementChild.style.transition = "opacity 0s"
    setTimeout(() => {
        setTimeout(() => {
            enableClickTesla = true;
        }, 1000)
        teslaList.firstElementChild.style.opacity = "1";
        teslaList.firstElementChild.style.left = "0%";
    }, 1000);
    setTimeout(() => {
        teslaList.firstElementChild.style.transition = "1s"
    }, 0)
}