/* =========================================================
   UMAR NAVEED PORTFOLIO
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        menuBtn.innerHTML =
            navLinks.classList.contains("active")
                ? "✕"
                : "☰";

    });


    const navigationLinks =
        document.querySelectorAll(".nav-links a");


    navigationLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuBtn.innerHTML = "☰";

        });

    });

}


/* =========================================================
   ESC KEY CLOSE MOBILE MENU
========================================================= */

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        navLinks &&
        navLinks.classList.contains("active")
    ) {

        navLinks.classList.remove("active");

        menuBtn.innerHTML = "☰";

    }

});


/* =========================================================
   DEVELOPMENT SPRINT AUTO-FILL
========================================================= */

const hireButtons =
    document.querySelectorAll(".hire-card-btn");

const projectInput =
    document.getElementById("project");

const messageInput =
    document.getElementById("message");


hireButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const selectedPlan =
            button.getAttribute("data-plan");


        if (projectInput) {

            projectInput.value =
                selectedPlan;

        }


        if (messageInput) {

            messageInput.value =
`Hi Umar,

I'm interested in the ${selectedPlan}.

My project details:
`;

        }


        setTimeout(() => {

            if (messageInput) {

                messageInput.focus();

                messageInput.setSelectionRange(
                    messageInput.value.length,
                    messageInput.value.length
                );

            }

        }, 700);

    });

});


/* =========================================================
   UPWORK INQUIRY AUTO-FILL
========================================================= */

const catalogInquiryButton =
    document.querySelector(".catalog-secondary-btn");


if (catalogInquiryButton) {

    catalogInquiryButton.addEventListener("click", () => {

        if (projectInput) {

            projectInput.value =
                "Upwork Landing Page Project";

        }


        if (messageInput) {

            messageInput.value =
`Hi Umar,

I'm interested in your Responsive HTML CSS JavaScript Landing Page service.

My project details:
`;

        }


        setTimeout(() => {

            if (messageInput) {

                messageInput.focus();

                messageInput.setSelectionRange(
                    messageInput.value.length,
                    messageInput.value.length
                );

            }

        }, 700);

    });

}


/* =========================================================
   CONTACT FORM - FORMSPREE
========================================================= */

const contactForm =
    document.getElementById("contact-form");


if (contactForm) {

    const submitButton =
        contactForm.querySelector(".contact-btn");


    const formStatus =
        document.createElement("div");


    formStatus.classList.add("form-status");

    contactForm.appendChild(formStatus);


    contactForm.addEventListener(
        "submit",
        async (event) => {

            event.preventDefault();


            submitButton.disabled = true;

            submitButton.innerText =
                "Sending...";


            formStatus.innerText = "";

            formStatus.className =
                "form-status";


            const formData =
                new FormData(contactForm);


            try {

                const response =
                    await fetch(
                        contactForm.action,
                        {
                            method: "POST",

                            body: formData,

                            headers: {
                                Accept: "application/json"
                            }
                        }
                    );


                if (response.ok) {

                    formStatus.innerText =
                        "✓ Message sent successfully!";


                    formStatus.classList.add(
                        "success"
                    );


                    contactForm.reset();


                    setTimeout(() => {

                        formStatus.innerText = "";

                        formStatus.className =
                            "form-status";

                    }, 6000);


                } else {

                    formStatus.innerText =
                        "Something went wrong. Please try again.";


                    formStatus.classList.add(
                        "error"
                    );

                }


            } catch (error) {

                formStatus.innerText =
                    "Network error. Please try again.";


                formStatus.classList.add(
                    "error"
                );

            }


            submitButton.disabled = false;

            submitButton.innerText =
                "Send Message";

        }
    );

}


/* =========================================================
   SCROLL REVEAL ANIMATIONS
========================================================= */

const revealElements =
    document.querySelectorAll(
        `
        .about-left,
        .about-card,
        .skills-heading,
        .skill-card,
        .projects-heading,
        .project-card,
        .book-card,
        .book-content,
        .services-heading,
        .service-card,
        .hire-heading,
        .hire-card,
        .catalog-card,
        .contact-heading,
        .contact-form,
        .contact-info-card
        `
    );


revealElements.forEach((element, index) => {

    element.classList.add("reveal-item");

    element.style.transitionDelay =
        `${(index % 3) * 0.08}s`;

});


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "reveal-visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================================
   ACTIVE NAVBAR LINK ON SCROLL
========================================================= */

const navAnchorLinks =
    document.querySelectorAll(".nav-links a");

const pageSections = [];


navAnchorLinks.forEach((link) => {

    const targetId =
        link.getAttribute("href");


    if (
        targetId &&
        targetId.startsWith("#")
    ) {

        const targetSection =
            document.querySelector(targetId);


        if (targetSection) {

            pageSections.push({
                link: link,
                section: targetSection
            });

        }

    }

});


function updateActiveNav() {

    const scrollPosition =
        window.scrollY + 180;


    let currentItem = null;


    pageSections.forEach((item) => {

        const sectionTop =
            item.section.offsetTop;

        const sectionBottom =
            sectionTop +
            item.section.offsetHeight;


        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionBottom
        ) {

            currentItem = item;

        }

    });


    navAnchorLinks.forEach((link) => {

        link.classList.remove("active");

    });


    if (currentItem) {

        currentItem.link.classList.add(
            "active"
        );

    }

}


window.addEventListener(
    "scroll",
    updateActiveNav
);


window.addEventListener(
    "load",
    updateActiveNav
);