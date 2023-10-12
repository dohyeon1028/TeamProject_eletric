const ford = document.querySelector("#ford")
const ford_btns = ford.querySelector(".btns");
const ford_prev = ford.querySelector(".btns .prev");
const ford_next = ford.querySelector(".btns .next");

const metro_btns = document.querySelectorAll("#metro nav a");
const ford_img = document.querySelectorAll("#metro .imgBox>div");
const metroImg = document.querySelectorAll("#metro .imgBox div img");
const duration = convertSpeed(metroImg[0]);

let enableClick = false;

window.addEventListener("scroll", ()=>{
    if(scrollY == sectionTop[3]){
        ford_btns.classList.add("on");
    }else{
        ford_btns.classList.remove("on");
    }
})

window.addEventListener("load", ()=>{
    if(scrollY == sectionTop[3]){
        ford_btns.classList.add("on");
    }else{
        ford_btns.classList.remove("on");
    }
})

let ford_left = 0;
ford_prev.addEventListener("click", ()=>{
    if(ford_left === 0) return;
    ford_left = ford_left + 100;
    ford_move(ford_left)
})
ford_next.addEventListener("click", ()=>{
    if(ford_left === -200) return;
    ford_left = ford_left - 100;
    ford_move(ford_left)
})
function ford_move(ford_left){
    ford.style.left = `${ford_left}vw`;
}

metro_btns.forEach(( el, index) => {
    el.addEventListener("click",(e)=>{
        if(enableClick) return;
        enableClick = true;
        e.preventDefault();

        document.querySelector("#metro nav>a.on").classList.remove("on");
        document.querySelector("#metro .imgBox>div.on").classList.remove("on");

        metro_btns[index].classList.add("on");
        ford_img[index].classList.add("on");

        setTimeout(() => {
            enableClick = false
        }, duration);
    })
});
function convertSpeed(el){
    const duration = parseFloat(getComputedStyle(el).transitionDuration) * 1000;

    return duration;
}   