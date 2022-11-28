const d = document;

export function slider() {
    const $nextBtn = d.querySelector(".slider-btn .next"),
    $prevBtn = d.querySelector(".slider-btn .prev"),
    $slides = d.querySelectorAll(".slider-slide");

    let i = 0;

    d.addEventListener("click", (e)=>{
        if (e.target === $prevBtn) {
            e.preventDefault();
            $slides[i].classList.remove("active");
            i--;

            if (i < 0) {
                i = $slides.length -1;
            }

            $slides[i].classList.add("active");
        }

        if (e.target === $nextBtn) {
            e.preventDefault();
            $slides[i].classList.remove("active");
            i++;

            if (i >= $slides.length) {
                i = 0;
            }

            $slides[i].classList.add("active");
        }
    })
}


export function slider2() {
    const $nextBtn = d.querySelector(".slider-btn2 .next2"),
    $prevBtn = d.querySelector(".slider-btn2 .prev2"),
    $slides = d.querySelectorAll(".slider-slide2");

    let i = 0;

    d.addEventListener("click", (e)=>{
        if (e.target === $prevBtn) {
            e.preventDefault();
            $slides[i].classList.remove("active");
            i--;

            if (i < 0) {
                i = $slides.length -1;
            }

            $slides[i].classList.add("active");
        }

        if (e.target === $nextBtn) {
            e.preventDefault();
            $slides[i].classList.remove("active");
            i++;

            if (i >= $slides.length) {
                i = 0;
            }

            $slides[i].classList.add("active");
        }
    })
}