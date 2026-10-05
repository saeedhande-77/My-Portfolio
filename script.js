/* =========================================================
   SAEE DHANDE — INTERACTIVE PORTFOLIO
   ========================================================= */


/* =========================================================
   PAGE LOADER
   ========================================================= */

window.addEventListener("load", () => {

    const loader =
        document.querySelector(".page-loader");

    setTimeout(() => {

        loader.classList.add("hidden");

    }, 700);

});



document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       NAVBAR
       ===================================================== */

    const navbar =
        document.querySelector(".navbar");


    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });



    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const menuToggle =
        document.querySelector(".menu-toggle");

    const mobileNav =
        document.querySelector(".mobile-nav");


    menuToggle.addEventListener("click", () => {

        mobileNav.classList.toggle("active");

    });


    document
        .querySelectorAll(".mobile-nav a")
        .forEach(link => {

            link.addEventListener("click", () => {

                mobileNav.classList.remove("active");

            });

        });



    /* =====================================================
       SCROLL PROGRESS
       ===================================================== */

    const progress =
        document.querySelector(".scroll-progress");


    function updateProgress() {

        const scrollTop =
            window.scrollY;

        const totalHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;


        const percentage =
            totalHeight > 0
                ? (scrollTop / totalHeight) * 100
                : 0;


        progress.style.width =
            percentage + "%";

    }


    window.addEventListener(
        "scroll",
        updateProgress
    );



    /* =====================================================
       MOUSE GLOW
       ===================================================== */

    const mouseGlow =
        document.querySelector(".mouse-glow");


    if (window.innerWidth > 900) {

        window.addEventListener(
            "mousemove",
            (event) => {

                mouseGlow.style.left =
                    event.clientX + "px";

                mouseGlow.style.top =
                    event.clientY + "px";

            }
        );

    }



    /* =====================================================
       CUSTOM CURSOR
       ===================================================== */

    const cursorDot =
        document.querySelector(".cursor-dot");

    const cursorRing =
        document.querySelector(".cursor-ring");


    if (window.innerWidth > 900) {


        let mouseX = 0;

        let mouseY = 0;

        let ringX = 0;

        let ringY = 0;


        window.addEventListener(
            "mousemove",
            (event) => {

                mouseX =
                    event.clientX;

                mouseY =
                    event.clientY;


                cursorDot.style.left =
                    mouseX + "px";

                cursorDot.style.top =
                    mouseY + "px";

            }
        );


        function animateCursor() {

            ringX +=
                (mouseX - ringX) * 0.14;

            ringY +=
                (mouseY - ringY) * 0.14;


            cursorRing.style.left =
                ringX + "px";

            cursorRing.style.top =
                ringY + "px";


            requestAnimationFrame(
                animateCursor
            );

        }


        animateCursor();


        const interactive =
            document.querySelectorAll(
                "a, button, .skill-card, .project-card"
            );


        interactive.forEach(element => {

            element.addEventListener(
                "mouseenter",
                () => {

                    cursorRing.classList.add(
                        "hover"
                    );

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    cursorRing.classList.remove(
                        "hover"
                    );

                }
            );

        });

    }



    /* =====================================================
       REVEAL ANIMATIONS
       ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    const revealObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );


                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach(element => {

        revealObserver.observe(
            element
        );

    });



    /* =====================================================
       ACTIVE NAVIGATION
       ===================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            ".nav-link"
        );


    function updateActiveNavigation() {

        let currentSection =
            "";


        sections.forEach(section => {

            const top =
                section.offsetTop - 220;

            const bottom =
                top + section.offsetHeight;


            if (
                window.scrollY >= top &&
                window.scrollY < bottom
            ) {

                currentSection =
                    section.id;

            }

        });


        navLinks.forEach(link => {

            link.classList.remove(
                "active"
            );


            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );


    updateActiveNavigation();



    /* =====================================================
       DYNAMIC ROLE TEXT
       ===================================================== */

    const roleText =
        document.getElementById(
            "role-text"
        );


    const roles = [

        "CSE Student",

        "Web Developer",

        "Tech Explorer",

        "AI Enthusiast",

        "Problem Solver"

    ];


    let roleIndex = 0;


    setInterval(() => {


        roleIndex =
            (roleIndex + 1) %
            roles.length;


        roleText.style.opacity =
            "0";


        setTimeout(() => {

            roleText.textContent =
                roles[roleIndex];

            roleText.style.opacity =
                "1";

        }, 220);


    }, 2400);



    /* =====================================================
       PROJECT CARD TILT
       ===================================================== */

    const tiltCards =
        document.querySelectorAll(
            ".tilt-card"
        );


    if (window.innerWidth > 900) {


        tiltCards.forEach(card => {


            card.addEventListener(
                "mousemove",
                (event) => {


                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left;


                    const y =
                        event.clientY -
                        rect.top;


                    const centerX =
                        rect.width / 2;


                    const centerY =
                        rect.height / 2;


                    const rotateX =
                        ((y - centerY) /
                            centerY) * -4;


                    const rotateY =
                        ((x - centerX) /
                            centerX) * 4;


                    card.style.transform =
                        `perspective(1000px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)
                         translateY(-5px)`;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "";

                }
            );

        });

    }



    /* =====================================================
       MAGNETIC BUTTONS
       ===================================================== */

    const magneticElements =
        document.querySelectorAll(
            ".magnetic"
        );


    if (window.innerWidth > 900) {


        magneticElements.forEach(element => {


            element.addEventListener(
                "mousemove",
                (event) => {


                    const rect =
                        element.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left -
                        rect.width / 2;


                    const y =
                        event.clientY -
                        rect.top -
                        rect.height / 2;


                    element.style.transform =
                        `translate(${x * 0.15}px,
                                   ${y * 0.15}px)`;

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    element.style.transform =
                        "";

                }
            );

        });

    }



    /* =====================================================
       SMOOTH ANCHOR SCROLLING
       ===================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(link => {


            link.addEventListener(
                "click",
                function(event) {


                    const targetID =
                        this.getAttribute(
                            "href"
                        );


                    if (
                        !targetID ||
                        targetID === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetID
                        );


                    if (!target) {

                        return;

                    }


                    event.preventDefault();


                    const offset =
                        navbar.offsetHeight;


                    const targetPosition =
                        target.offsetTop -
                        offset;


                    window.scrollTo({

                        top:
                            targetPosition,

                        behavior:
                            "smooth"

                    });

                }
            );

        });



    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const year =
        document.getElementById(
            "year"
        );


    if (year) {

        year.textContent =
            new Date().getFullYear();

    }

});