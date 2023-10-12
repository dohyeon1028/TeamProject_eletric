const chevrolet = document.querySelector("#chevrolet")
const chevrolet_btns = chevrolet.querySelector(".btns");
const chevrolet_prev = chevrolet.querySelector(".btns .prev");
const chevrolet_next = chevrolet.querySelector(".btns .next");
const logochange_btns = chevrolet.querySelectorAll(".logochange li");
const logochange = chevrolet.querySelectorAll(".logo img");

let enableClick1 = true;

let delay = convertSpeed(logochange_btns[0]);

for(let el of logochange){el.classList.remove("show")};

logochange_btns.forEach((el, index)=>{
    el.addEventListener("click", ()=>{
        if(el.classList.contains("on")) return;

        if(enableClick1){
            enableClick1 = false;
            active(index);
        }
    })
})

function active(index){
    for(let i = 0; i<logochange_btns.length; i++){
        logochange_btns[i].classList.remove("on");
        logochange_btns[i].classList.add("smaller");
        if(logochange[i].classList.contains("on")) logochange[i].classList.add("show");
    }
    logochange_btns[index].classList.add("on");
    logochange_btns[index].classList.remove("smaller");
    logochange[index].classList.add("lower");

    setTimeout(()=>{
        for(let i = 0; i<logochange_btns.length; i++){
            if(logochange[i].classList.contains("on")){
                logochange[i].classList.remove("on");
                logochange[i].classList.remove("show");
            }
        }    
        logochange[index].classList.remove("lower");
        logochange[index].classList.add("on");
        setTimeout(()=>{enableClick1 = true;}, delay)
    }, 1400)
}

function convertSpeed(el){
    const duration = parseFloat(getComputedStyle(el).transitionDuration) * 1000;
    return duration;
}

window.addEventListener("scroll", ()=>{
    if(scrollY == sectionTop[2]){
        chevrolet_btns.classList.add("on");
    }else{
        chevrolet_btns.classList.remove("on");
    }
})

window.addEventListener("load", ()=>{
    if(scrollY == sectionTop[2]){
        chevrolet_btns.classList.add("on");
    }else{
        chevrolet_btns.classList.remove("on");
    }
})

let chevrolet_left = 0;
chevrolet_prev.addEventListener("click", ()=>{
    if(chevrolet_left === 0) return;
    chevrolet_left = chevrolet_left + 100;
    chevrolet_move(chevrolet_left)
})
chevrolet_next.addEventListener("click", ()=>{
    if(chevrolet_left === -200) return;
    chevrolet_left = chevrolet_left - 100;
    chevrolet_move(chevrolet_left)
})

function chevrolet_move(chevrolet_left){
    chevrolet.style.left = `${chevrolet_left}vw`;
}

