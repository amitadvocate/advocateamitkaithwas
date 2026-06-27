/*==========================================================
    ADVOCATE AMIT KAITHWAS WEBSITE
    Version 8 Platinum
==========================================================*/

"use strict";

/*==========================================================
    LOADER
==========================================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

        }, 800);

    }

});


/*==========================================================
    STICKY HEADER
==========================================================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 60) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});


/*==========================================================
    BACK TO TOP BUTTON
==========================================================*/

const backTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (!backTop) return;

    if (window.scrollY > 500) {

        backTop.style.display = "flex";

    } else {

        backTop.style.display = "none";

    }

});

if (backTop) {

    backTop.addEventListener("click", () => {

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    });

}


/*==========================================================
    SCROLL PROGRESS BAR
==========================================================*/

const progressBar = document.getElementById("scrollProgress");

window.addEventListener("scroll", () => {

    if (!progressBar) return;

    const winScroll =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrolled =
        (winScroll / height) * 100;

    progressBar.style.width = scrolled + "%";

});


/*==========================================================
    SMOOTH SCROLL
==========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target=document.querySelector(this.getAttribute("href"));

        if(!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});


/*==========================================================
    MOBILE MENU
==========================================================*/

const mobileBtn =
document.querySelector(".mobile-menu");

const navMenu =
document.querySelector(".nav-menu");

if(mobileBtn){

mobileBtn.addEventListener("click",()=>{

navMenu.classList.toggle("active");

mobileBtn.classList.toggle("open");

});

}


/*==========================================================
    CLOSE MENU AFTER CLICK
==========================================================*/

document.querySelectorAll(".nav-menu a")
.forEach(link=>{

link.addEventListener("click",()=>{

if(navMenu){

navMenu.classList.remove("active");

}

});

});


/*==========================================================
    ACTIVE MENU ON SCROLL
==========================================================*/

const sections =
document.querySelectorAll("section[id]");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

const height=section.offsetHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

document.querySelectorAll(".nav-menu a")
.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*==========================================================
    ANIMATED COUNTERS
==========================================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = +counter.dataset.target;

        let count = 0;

        const speed = target / 120;

        const update = () => {

            count += speed;

            if (count < target) {

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target + "+";

            }

        };

        update();

        counterObserver.unobserve(counter);

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/*==========================================================
    FAQ ACCORDION
==========================================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const btn = item.querySelector("button");

    btn.addEventListener("click", () => {

        faqItems.forEach(i => {

            if (i !== item) {

                i.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});


/*==========================================================
    CONSULTATION POPUP
==========================================================*/

const popup = document.getElementById("consultPopup");

const popupClose = document.querySelector(".popup-close");

if (popup) {

    setTimeout(() => {

        popup.classList.add("show");

    }, 12000);

}

if (popupClose) {

    popupClose.addEventListener("click", () => {

        popup.classList.remove("show");

    });

}


/*==========================================================
    SEARCH MODAL
==========================================================*/

const searchModal = document.getElementById("searchModal");

const closeModal = document.querySelector(".close-modal");

document.querySelectorAll(".search-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        searchModal.classList.add("show");

    });

});

if (closeModal) {

    closeModal.addEventListener("click", () => {

        searchModal.classList.remove("show");

    });

}

window.addEventListener("click", e => {

    if (e.target === searchModal) {

        searchModal.classList.remove("show");

    }

});


/*==========================================================
    CONTACT FORM
==========================================================*/

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const inputs = this.querySelectorAll("input, textarea, select");

        let valid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                input.style.borderColor = "red";

                valid = false;

            } else {

                input.style.borderColor = "#ddd";

            }

        });

        if (!valid) {

            alert("Please fill all required fields.");

            return;

        }

        alert("Thank you! Your consultation request has been received.");

        this.reset();

    });

}


/*==========================================================
    REVEAL ANIMATION
==========================================================*/

const reveals = document.querySelectorAll(

".practice-card,.about-grid div,.why-card,.article-card,.resource-card,.achievement-card,.process-card"

);

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("animate");

        }

    });

}, {

    threshold: 0.15

});

reveals.forEach(item => {

    revealObserver.observe(item);

});


/*==========================================================
    GALLERY IMAGE EFFECT
==========================================================*/

document.querySelectorAll(".gallery-grid img").forEach(img => {

    img.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.className = "image-viewer";

        overlay.innerHTML = `

        <span class="viewer-close">&times;</span>

        <img src="${img.src}" alt="Gallery Image">

        `;

        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => {

            overlay.remove();

        });

    });

});


/*==========================================================
    CONSOLE
==========================================================*/

console.log(

"%cAdvocate Amit Kaithwas Website V8",

"color:#C7A24D;font-size:18px;font-weight:bold;"

);

console.log(

"Website Loaded Successfully."

);