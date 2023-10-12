const header = document.querySelector("header")
const sections = document.querySelectorAll("main section");
let sectionTop = [];
let y_axis = 0;
let currentPage = 0;
let currentPage_len = sections.length - 1;
let wheelTimer;
let enableScrolled = false;

sections.forEach((el) => {
    sectionTop.push(el.offsetTop);
});

window.addEventListener("load", function () {
    window.addEventListener("wheel", (e) => {
        if (!enableScrolled) {
            enableScrolled = true;
            let delta = e.deltaY;
            doScroll(delta);

            setTimeout(() => {
                enableScrolled = false;
            }, 500);
        }
    })
    function doScroll(delta) {
        if (delta > 0) {
            // currentPage = (currentPage + 1 + currentPage_len + 1) % (currentPage_len + 1) ;

            if (currentPage >= 0 && currentPage < 5) currentPage++;

            else return;
        } else if (delta < 0) {
            // currentPage = (currentPage + currentPage_len - 1 + currentPage_len + 1) % (currentPage_len + 1);

            if (currentPage > 0 && currentPage <= 5) currentPage--;
            else return;
        }

        window.scrollTo({ top: sectionTop[currentPage], behavior: "smooth" });
    }
})
