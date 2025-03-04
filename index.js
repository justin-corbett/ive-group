// Initialize GSAP
gsap.registerPlugin();
gsap.registerPlugin(ScrollTrigger, Flip);
    
// GSAP Scrolltrigger
ScrollTrigger.defaults({
  markers: false,
});

// GSAP Horizontal Scroll – Desktop
$(document).ready(function () {
    loaderOnPageLoad().then(() => {
        // Use gsap.delayedCall to introduce a slight delay
        gsap.delayedCall(0, () => { // Adjust the delay as needed
            if ($(window).width() > 991) {
                setTrackHeights(); // Set heights before initializing ScrollTrigger
                let tlMain = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".section-height",
                        start: "top top",
                        end: "98% bottom",
                        scrub: 1,
                    },
                })
                .to(".track", { 
                    xPercent: -100, 
                    ease: "none",
                });
            }
        });
    });
});

// Optional - Set sticky section heights based on inner content width
// Makes scroll timing feel more natural
function setTrackHeights() {
    $(".section-height").each(function (index) {
      let trackWidth = $(this).find(".track").outerWidth();
      $(this).height(trackWidth);
    });
  }
  
  window.addEventListener("resize", function () {
    if ($(window).width() > 991) {
        setTrackHeights();
    }
});

  


// Horizontal rule 
$(".horizontal-rule").each(function (index, element) {
    let triggerElement = $(this);
    let targetElement = $(element);
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom",
        end: "bottom top", // Animation ends when the top of the element fully leaves the viewport
        toggleActions: "play none none none", // Reset animation when scrolling back up
      },
    });
    tl.from(targetElement, {
      width: "0%",
      duration: 1,
      delay: 0.2,
      ease: "power1.out",
    });
});

// News list image hover
$(".news-list-link").each(function (index, element) {
    let triggerElement = $(this);
    let targetElement = $(this).find(".image");

    $(triggerElement).hover(
        function() { // Hover in
            let tl = gsap.timeline();
            tl.to(targetElement, {
                scale: 1.05,
                filter: "blur(10px)",
                duration: 0.5,
                ease: "power1.out",
            });
        },
        function() { // Hover out
            let tl = gsap.timeline();
            tl.to(targetElement, {
                scale: 1,
                filter: "blur(0px)",
                duration: 0.5,
                ease: "power1.out",
            });
        }
    );
});

// News featured image hover
$(".news_featured-link").each(function (index, element) {
    let triggerElement = $(this);
    let targetElement = $(this).find(".image");

    $(triggerElement).hover(
        function() { // Hover in
            let tl = gsap.timeline();
            tl.to(targetElement, {
                scale: 1.05,
                filter: "blur(10px)",
                duration: 0.5,
                ease: "power1.out",
            });
        },
        function() { // Hover out
            let tl = gsap.timeline();
            tl.to(targetElement, {
                scale: 1,
                filter: "blur(0px)",
                duration: 0.5,
                ease: "power1.out",
            });
        }
    );
});

// Service list image hover
$(".service-list_item-link").each(function (index, element) {
    let triggerElement = $(this);
    let targetElement = $(this).find(".service-list-image");

    $(triggerElement).hover(
        function() { // Hover in
            let tl = gsap.timeline();
            tl.to(targetElement, {
                scale: 1.05,
                filter: "blur(10px)",
                duration: 0.5,
                ease: "power1.out",
            });
        },
        function() { // Hover out
            let tl = gsap.timeline();
            tl.to(targetElement, {
                scale: 1,
                filter: "blur(0px)",
                duration: 0.5,
                ease: "power1.out",
            });
        }
    );
});

// About/Services list image link hover
$(".list-image-link").each(function (index, element) {
    let triggerElement = $(this);
    let targetElement = $(this).find(".list_image");

    $(triggerElement).hover(
        function() { // Hover in
            let tl = gsap.timeline();
            tl.to(targetElement, {
                scale: 1.05,
                filter: "blur(10px)",
                duration: 0.5,
                ease: "power1.out",
            });
        },
        function() { // Hover out
            let tl = gsap.timeline();
            tl.to(targetElement, {
                scale: 1,
                filter: "blur(0px)",
                duration: 0.5,
                ease: "power1.out",
            });
        }
    );
});

// News list image hover – cursor
$(".news-list-link").each(function (index, element) {
    let triggerElement = $(this);
    let targetElement = $(this).find(".cursor-hover");

    $(triggerElement).hover(
        function() { // Hover in
            let tl = gsap.timeline();
            tl.to(targetElement, {
                opacity: 1,
                duration: 0.2,
                ease: "power1.out",
            });
        },
        function() { // Hover out
            let tl = gsap.timeline();
            tl.to(targetElement, {
                opacity: 0,
                duration: 0.2,
                ease: "power1.out",
            });
        }
    );
});

// News featured image hover – cursor
$(".news_featured-link").each(function (index, element) {
    let triggerElement = $(this);
    let targetElement = $(this).find(".cursor-hover");

    $(triggerElement).hover(
        function() { // Hover in
            let tl = gsap.timeline();
            tl.to(targetElement, {
                opacity: 1,
                duration: 0.2,
                ease: "power1.out",
            });
        },
        function() { // Hover out
            let tl = gsap.timeline();
            tl.to(targetElement, {
                opacity: 0,
                duration: 0.2,
                ease: "power1.out",
            });
        }
    );
});

// Service Gallery – cursor
$(".splide").each(function (index, element) {
    let triggerElement = $(this);
    let targetElement = $(this).find(".cursor-drag");

    $(triggerElement).hover(
        function() { // Hover in
            let tl = gsap.timeline();
            tl.to(targetElement, {
                opacity: 1,
                duration: 0.2,
                ease: "power1.out",
            });
        },
        function() { // Hover out
            let tl = gsap.timeline();
            tl.to(targetElement, {
                opacity: 0,
                duration: 0.2,
                ease: "power1.out",
            });
        }
    );
});

// Case study list image hover – landscape
$(".image-case_study_list-landscape").each(function (index, element) {
    let triggerElement = $(this);
    let targetElement = $(this).find(".image");

    $(triggerElement).hover(
        function() { // Hover in
            let tl = gsap.timeline();
            tl.to(targetElement, {
                scale: 1.05,
                filter: "blur(10px)",
                duration: 0.5,
                ease: "power1.out",
            });
        },
        function() { // Hover out
            let tl = gsap.timeline();
            tl.to(targetElement, {
                scale: 1,
                filter: "blur(0px)",
                duration: 0.5,
                ease: "power1.out",
            });
        }
    );
});

// Case study list image hover – portrait
$(".image-case_study_list-portrait").each(function (index, element) {
    let triggerElement = $(this);
    let targetElement = $(this).find(".image");

    $(triggerElement).hover(
        function() { // Hover in
            let tl = gsap.timeline();
            tl.to(targetElement, {
                scale: 1.05,
                duration: 0.5,
                ease: "power1.out",
            });
        },
        function() { // Hover out
            let tl = gsap.timeline();
            tl.to(targetElement, {
                scale: 1,
                duration: 0.5,
                ease: "power1.out",
            });
        }
    );
});

// Case study list image hover – landscape – cursor
$(".image-case_study_list-landscape").each(function (index, element) {
    let triggerElement = $(this);
    let targetElement = $(this).find(".cursor-hover");

    $(triggerElement).hover(
        function() { // Hover in
            let tl = gsap.timeline();
            tl.to(targetElement, {
                opacity: 1,
                duration: 0.2,
                ease: "power1.out",
            });
        },
        function() { // Hover out
            let tl = gsap.timeline();
            tl.to(targetElement, {
                opacity: 0,
                duration: 0.2,
                ease: "power1.out",
            });
        }
    );
});

// Service list hover – cursor
$(".service-image-wrapper").each(function (index, element) {
    let triggerElement = $(this);
    let targetElement = $(this).find(".cursor-hover");

    $(triggerElement).hover(
        function() { // Hover in
            let tl = gsap.timeline();
            tl.to(targetElement, {
                opacity: 1,
                duration: 0.2,
                ease: "power1.out",
            });
        },
        function() { // Hover out
            let tl = gsap.timeline();
            tl.to(targetElement, {
                opacity: 0,
                duration: 0.2,
                ease: "power1.out",
            });
        }
    );
});

// About / Service Page list hover – cursor
$(".list-image-link").each(function (index, element) {
    let triggerElement = $(this);
    let targetElement = $(this).find(".cursor-hover");

    $(triggerElement).hover(
        function() { // Hover in
            let tl = gsap.timeline();
            tl.to(targetElement, {
                opacity: 1,
                duration: 0.2,
                ease: "power1.out",
            });
        },
        function() { // Hover out
            let tl = gsap.timeline();
            tl.to(targetElement, {
                opacity: 0,
                duration: 0.2,
                ease: "power1.out",
            });
        }
    );
});

// Button Hover BG
$(".button").each(function (index, element) {
    let triggerElement = $(this);
    let targetElement = $(this).find(".button-inner");

    $(triggerElement).hover(
        function() { // Hover in
            let tl = gsap.timeline();
            tl.to(targetElement, {
                opacity: 0,
                duration: 0.5,
                ease: "power1.out",
            });
        },
        function() { // Hover out
            let tl = gsap.timeline();
            tl.to(targetElement, {
                opacity: 1,
                duration: 0.5,
                ease: "power1.out",
            });
        }
    );
});

// Button Hover Text
$(".button").each(function (index, element) {
    let triggerElement = $(this);
    let targetElement = $(this).find(".button-text");

    $(triggerElement).hover(
        function() { // Hover in
            let tl = gsap.timeline();
            tl.to(targetElement, {
                color: "#fff",
                duration: 0.5,
                ease: "power1.out",
            });
        },
        function() { // Hover out
            let tl = gsap.timeline();
            tl.to(targetElement, {
                color: "#0e0566",
                duration: 0.5,
                ease: "power1.out",
            });
        }
    );
});

// Button Dark Hover BG
$(".button-dark").each(function (index, element) {
    let triggerElement = $(this);
    let targetElement = $(this).find(".button-inner-dark");

    $(triggerElement).hover(
        function() { // Hover in
            let tl = gsap.timeline();
            tl.to(targetElement, {
                opacity: 0,
                duration: 0.5,
                ease: "power1.out",
            });
        },
        function() { // Hover out
            let tl = gsap.timeline();
            tl.to(targetElement, {
                opacity: 1,
                duration: 0.5,
                ease: "power1.out",
            });
        }
    );
});

// Button Dark Hover Text
$(".button-dark").each(function (index, element) {
    let triggerElement = $(this);
    let targetElement = $(this).find(".button-text-dark");

    $(triggerElement).hover(
        function() { // Hover in
            let tl = gsap.timeline();
            tl.to(targetElement, {
                color: "#0e0566",
                duration: 0.5,
                ease: "power1.out",
            });
        },
        function() { // Hover out
            let tl = gsap.timeline();
            tl.to(targetElement, {
                color: "#fff",
                duration: 0.5,
                ease: "power1.out",
            });
        }
    );
});

// Button Icon Hover BG
$(".button-icon").each(function (index, element) {
    let triggerElement = $(this);
    let targetElement = $(this).find(".button-icon-inner");

    $(triggerElement).hover(
        function() { // Hover in
            let tl = gsap.timeline();
            tl.to(targetElement, {
                opacity: 0,
                duration: 0.5,
                ease: "power1.out",
            });
        },
        function() { // Hover out
            let tl = gsap.timeline();
            tl.to(targetElement, {
                opacity: 1,
                duration: 0.5,
                ease: "power1.out",
            });
        }
    );
});

// Button Icon Hover Waymaker
$(".button-icon").each(function (index, element) {
    let triggerElement = $(this);
    let targetElement = $(this).find(".button-icon-waymaker");

    $(triggerElement).hover(
        function() { // Hover in
            let tl = gsap.timeline();
            tl.to(targetElement, {
                color: "#fff",
                duration: 0.5,
                ease: "power1.out",
            });
        },
        function() { // Hover out
            let tl = gsap.timeline();
            tl.to(targetElement, {
                color: "#0e0566",
                duration: 0.5,
                ease: "power1.out",
            });
        }
    );
});

// Button Icon Dark Hover BG
$(".button-icon-dark").each(function (index, element) {
    let triggerElement = $(this);
    let targetElement = $(this).find(".button-icon-inner-dark");

    $(triggerElement).hover(
        function() { // Hover in
            let tl = gsap.timeline();
            tl.to(targetElement, {
                opacity: 0,
                duration: 0.5,
                ease: "power1.out",
            });
        },
        function() { // Hover out
            let tl = gsap.timeline();
            tl.to(targetElement, {
                opacity: 1,
                duration: 0.5,
                ease: "power1.out",
            });
        }
    );
});

// Button Icon Dark Hover Waymaker
$(".button-icon-dark").each(function (index, element) {
    let triggerElement = $(this);
    let targetElement = $(this).find(".button-icon-waymaker-dark");

    $(triggerElement).hover(
        function() { // Hover in
            let tl = gsap.timeline();
            tl.to(targetElement, {
                color: "#0e0566",
                duration: 0.5,
                ease: "power1.out",
            });
        },
        function() { // Hover out
            let tl = gsap.timeline();
            tl.to(targetElement, {
                color: "#fff",
                duration: 0.5,
                ease: "power1.out",
            });
        }
    );
});

// Button White Hover
$(".button-white").each(function (index, element) {
    let triggerElement = $(this);
    let targetElement = $(this).find(".button-white-inner");

    $(triggerElement).hover(
        function() { // Hover in
            let tl = gsap.timeline();
            tl.to(targetElement, {
                opacity: 0,
                duration: 0.5,
                ease: "power1.out",
            });
        },
        function() { // Hover out
            let tl = gsap.timeline();
            tl.to(targetElement, {
                opacity: 1,
                duration: 0.5,
                ease: "power1.out",
            });
        }
    );
});

// Button White Hover Text
$(".button-white").each(function (index, element) {
    let triggerElement = $(this);
    let targetElement = $(this).find(".button-text");

    $(triggerElement).hover(
        function() { // Hover in
            let tl = gsap.timeline();
            tl.to(targetElement, {
                color: "#fff",
                duration: 0.5,
                ease: "power1.out",
            });
        },
        function() { // Hover out
            let tl = gsap.timeline();
            tl.to(targetElement, {
                color: "#0e0566",
                duration: 0.5,
                ease: "power1.out",
            });
        }
    );
});


// GSAP home hero text fade
$(".scroll-track.is-home_hero").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".home-hero-content-wrapper");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top top",
        end: "bottom 50%",
        scrub: 1,
      },
    });
    tl.to(targetElement, {
      opacity: "0",
      filter: "blur(20px)",
      duration: 1,
    });
});


// GSAP Navigation BG Gradient Fade In – Services
$(".section-services_overview").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".navigation-bg-gradient");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom",
        end: "top top",
        scrub: 1,
      },
    });
    tl.to(targetElement, {
      opacity: "100%",
      duration: 1,
    });
});

// Navigation Home BG Gradient Fade In
$(".scroll-track.is-home_hero").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".navigation-bg-gradient");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });
    tl.to(targetElement, {
      opacity: "100%",
      duration: 1,
    });
});

// Navigation Hero Secondary BG Gradient Fade In
$(".image_full-hero_secondary").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".navigation-bg-gradient");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top 50%",
        end: "bottom top",
        scrub: 1,
      },
    });
    tl.to(targetElement, {
      opacity: "100%",
      duration: 1,
    });
});

/*
// Home Video Cursor Fade In
$(".horizontal-spacer").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".cursor-hover-video");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top 75%",
        end: "top 25%",
        scrub: 1,
      },
    });
    tl.to(targetElement, {
      opacity: "100%",
      duration: 1,
    });
});
*/


/*
// 404 cursor hover in/out
gsap.set(".cursor-hover-video", { opacity: 0 }); // Initial opacity set to 0
*/

$(".scroller").hover(
  function() {
    gsap.to(".cursor-hover-video", { opacity: 1, duration: 0.3 }); // On hover, change opacity to 100%
  },
  function() {
    gsap.to(".cursor-hover-video", { opacity: 0, duration: 0.3 }); // On hover out, change opacity back to 0%
  }
);

// Video Cursor Fade In
$(".image_full-hero_secondary").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".cursor-hover-video");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top 50%",
        end: "top 25%",
        scrub: 1,
      },
    });
    tl.to(targetElement, {
      opacity: "100%",
      duration: 1,
    });
});

// Video Cursor Fade In
$(".image_full-service_hero-video").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".cursor-hover-video");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top 50%",
        end: "top 25%",
        scrub: 1,
      },
    });
    tl.to(targetElement, {
      opacity: "100%",
      duration: 1,
    });
});

// Service Video Cursor Fade In
$(".image_full-service_hero-video").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".cursor-hover-video.is-service_hero");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top 50%",
        end: "top 25%",
        scrub: 1,
      },
    });
    tl.to(targetElement, {
      opacity: "100%",
      duration: 1,
    });
});

// Navigation desktop
var tl = gsap.timeline();

tl.set('.navigation-dropdown-bg-wrapper', { display: "block" })
  .to('.navigation-dropdown-slide', { duration: 0.5, opacity: 1, y: "0%", ease: "power2.out" })
  .to('.navigation-bg-main', { duration: 0.5, opacity: 1, ease: "power2.out" }, "-=0.5")
  .to('.hr-navigation', { duration: 0.5, y: "6rem", ease: "power2.out" }, "-=0.5")
  .to('.navigation-bg-title', { duration: 0.5, y: "0%", ease: "power2.out" }, "-=0.5")
;

// Home hero title animation
let typeSplit = new SplitType(".title-home-hero.is-animate", {
    types: "words, chars",
    tagName: "span"
  });
  
  $(".home-hero-heading-wrapper").each(function (index) {
    let headings = $(this).find(".title-home-hero.is-animate");
    let tl = gsap.timeline({ repeat: -1, delay: 2.5 }); // Adding the delay here
    tl.set($(this), { opacity: 1 });
    headings.each(function (index) {
      if (index > 0) {
        tl.from($(this).find(".char"), { yPercent: 110, stagger: { amount: 0.4 }, duration: 0.4 }, "<0.1");
      }
      if (index < headings.length - 1) {
        tl.to($(this).find(".char"), { delay: 1, yPercent: -110, stagger: { amount: 0.4 }, duration: 0.4 });
      }
    });
  });
  

// Image scale full projects
$(".image_full-content-wrapper").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".image-full_screen");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
    tl.to(targetElement, {
      scale: "1",
      duration: 1,
    });
});

// Image scale hero secondary
$(".image_full-hero_secondary").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".image-full_screen.is-hero_secondary");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
    tl.to(targetElement, {
      scale: "1",
      duration: 1,
    });
});

// Service hero video scale
$(".image_full-service_hero-video").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".video-bg.is-service_hero");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
    tl.to(targetElement, {
      scale: "1",
      duration: 1,
    });
});

// Service hero video move
$(".image_full-service_hero-video").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".video-bg.is-service_hero");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
    tl.to(targetElement, {
      y: "-10%",
      duration: 1,
    });
});


// Image scale CTA team member
$(".cta-team-image-wrapper").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".cta-team_image");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
    tl.to(targetElement, {
      scale: "1",
      duration: 1,
    });
});

// Image scale service feature
$(".feature_image-wrapper").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".feature_image");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
    tl.to(targetElement, {
      scale: "1",
      duration: 1,
    });
});

// Image scale feature image 2
$(".feature_image-2-wrapper").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".feature_image-2");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
    tl.to(targetElement, {
      scale: "1",
      duration: 1,
    });
});

// Image scale feature image 3
$(".feature_image-3-wrapper").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".feature_image-3");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
    tl.to(targetElement, {
      scale: "1",
      duration: 1,
    });
});

// Image scale feature image 4
$(".feature_image-4-wrapper").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".feature_image-4");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
    tl.to(targetElement, {
      scale: "1",
      duration: 1,
    });
});

// Image scale full footer
$(".image_full-footer").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".image-full_screen-footer");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
    tl.to(targetElement, {
      scale: "1",
      duration: 1,
    });
});

// Image scale ive care wellbeing
$(".image_full-ive_care-wellbeing").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".image-full_screen-ive_care-wellbeing");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
    tl.to(targetElement, {
      scale: "1",
      duration: 1,
    });
});

// Image scale full esg
$(".image_full-esg").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".image-full_screen-esg");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
    tl.to(targetElement, {
      scale: "1",
      duration: 1,
    });
});

// Image scale services – service page
$(".image_full-services").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".image-full_screen-services");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
    tl.to(targetElement, {
      scale: "1",
      duration: 1,
    });
});

// Image move services – service page
$(".image_full-services").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".image-full_screen-services");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
    tl.to(targetElement, {
      y: "-10%",
      duration: 1,
    });
});

// Image scale case studies – service page
$(".image_full-case_studies").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".image-full_screen-case_studies");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
    tl.to(targetElement, {
      scale: "1",
      duration: 1,
    });
});

// Footer scroll into view – Top navigation fade out
$(".section-footer").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".navigation");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top 75%",
        end: "top 25%",
        scrub: 1,
      },
    });
    tl.to(targetElement, {
      opacity: "0",
      duration: 1,
    });
});

/*
// Force reload tablet and mobile
$(document).ready(function() {
    // Flag to track whether the page has been refreshed
    var pageRefreshed = false;

    // Function to check window width and reload if necessary
    function checkWindowWidth() {
        if ($(window).width() < 991 && !pageRefreshed) {
            location.reload(); // Reload the page if window width is less than 991px and page hasn't been refreshed yet
            pageRefreshed = true; // Set the flag to true to indicate that the page has been refreshed
        }
    }

    // Call the function on page load if the initial width is below 991 pixels
    if ($(window).width() < 991) {
        pageRefreshed = true; // Set the flag to true to indicate that the page doesn't need to be refreshed
    } else {
        checkWindowWidth(); // Otherwise, check the window width
    }

    // Add an event listener to check window width on resize
    $(window).resize(function() {
        checkWindowWidth();
    });
});

*/

// Mobile Navigation Start
$(document).ready(function() {
    if ($(window).width() < 991) {
        // Function to add or remove class based on the state of .navigation_dropdown-toggle
        function updateNavMobile() {
            var navButton = $('.navigation_menu-button.w-nav-button');
            var navButtonText = $('.nav-mobile-menu-btn-text');

            if (navButton.hasClass('w--open')) {
                tl.play();
                lenis.stop()	
                navButtonText.text('Close');
                
            } else {
                tl.reverse();
                lenis.start()	
                navButtonText.text('Menu');
                
            }
        }

        // Initial call to update classes
        updateNavMobile(); 

        // Navigation background
        const observer = new MutationObserver(function(mutationsList, observer) {
            for(let mutation of mutationsList) {
                // Check if the mutation involves changes to the class attribute
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    // Update classes when class attribute changes
                    updateNavMobile();
                }
            }
        });

        // Start observing changes to attributes of elements with class 'navigation_dropdown-toggle'
        observer.observe(document.body, { attributes: true, subtree: true, attributeFilter: ['class'] });
    }
});

// Desktop Navigation Start
// Navigation Background Desktop & Nav links active
$(document).ready(function() {
    if ($(window).width() > 991) {
        // Function to add or remove class based on the state of .navigation_dropdown-toggle
        function updateClasses() {
            if ($('.navigation_dropdown-toggle').hasClass('w--open')) {
                tl.play();
            } else {
                tl.reverse() && $('.nav-link').removeClass('is-inactive') && $('.navigation_dropdown-toggle').removeClass('is-inactive');
            }
        }

        // Initial call to update classes
        updateClasses(); 

        // Navigation background
        const observer = new MutationObserver(function(mutationsList, observer) {
            for(let mutation of mutationsList) {
                // Check if the mutation involves changes to the class attribute
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    // Update classes when class attribute changes
                    updateClasses();
                }
            }
        });

        // Start observing changes to attributes of elements with class 'navigation_dropdown-toggle'
        observer.observe(document.body, { attributes: true, subtree: true, attributeFilter: ['class'] });
    }
});



// Navigation open desktop
$(document).ready(function() {
    if ($(window).width() > 991) {
        $('.navigation_dropdown-toggle.is-about').click(function() {
            // Adding a delay to prevent no open class found
            setTimeout(function() {
                updateAbout();
            }, 110);
        });
        $('.navigation_dropdown-toggle.is-services').click(function() {
            // Adding a delay to prevent no open class found
            setTimeout(function() {
                updateServices();
            }, 110);
        });
        $('.navigation_dropdown-toggle.is-case_studies').click(function() {
            // Adding a delay to prevent no open class found
            setTimeout(function() {
                updateCasestudies();
            }, 110);
        });
        $('.navigation_dropdown-toggle.is-investors').click(function() {
            // Adding a delay to prevent no open class found
            setTimeout(function() {
                updateInvestors();
            }, 110);
        });
         // Navigation about open
         function updateAbout() {
            if ($('.navigation_dropdown-toggle.is-about').hasClass('w--open')) {
                $('.navigation_dropdown-toggle.is-about').removeClass('is-inactive');
                $('.navigation_dropdown-toggle.is-services').addClass('is-inactive');
                $('.navigation_dropdown-toggle.is-case_studies').addClass('is-inactive');
                $('.navigation_dropdown-toggle.is-investors').addClass('is-inactive');
                $('.nav-link.is-news').addClass('is-inactive');
                $('.nav-link.is-contact').addClass('is-inactive');
            } else {
                $('.navigation_dropdown-toggle.is-services').removeClass('is-inactive');
                $('.navigation_dropdown-toggle.is-case_studies').removeClass('is-inactive');
                $('.navigation_dropdown-toggle.is-investors').removeClass('is-inactive');
                $('.nav-link.is-news').removeClass('is-inactive');
                $('.nav-link.is-contact').removeClass('is-inactive');
            }
        }

        // Navigation services open
        function updateServices() {
            if ($('.navigation_dropdown-toggle.is-services').hasClass('w--open')) {
                $('.navigation_dropdown-toggle.is-services').removeClass('is-inactive');
                $('.navigation_dropdown-toggle.is-about').addClass('is-inactive');
                $('.navigation_dropdown-toggle.is-case_studies').addClass('is-inactive');
                $('.navigation_dropdown-toggle.is-investors').addClass('is-inactive');
                $('.nav-link.is-news').addClass('is-inactive');
                $('.nav-link.is-contact').addClass('is-inactive');
            } else {
                $('.navigation_dropdown-toggle.is-about').removeClass('is-inactive');
                $('.navigation_dropdown-toggle.is-case_studies').removeClass('is-inactive');
                $('.navigation_dropdown-toggle.is-investors').removeClass('is-inactive');
                $('.nav-link.is-news').removeClass('is-inactive');
                $('.nav-link.is-contact').removeClass('is-inactive');
            }
        }   

        // Navigation case studies open
        function updateCasestudies() {
            if ($('.navigation_dropdown-toggle.is-case_studies').hasClass('w--open')) {
                $('.navigation_dropdown-toggle.is-case_studies').removeClass('is-inactive');
                $('.navigation_dropdown-toggle.is-about').addClass('is-inactive');
                $('.navigation_dropdown-toggle.is-services').addClass('is-inactive');
                $('.navigation_dropdown-toggle.is-investors').addClass('is-inactive');
                $('.nav-link.is-news').addClass('is-inactive');
                $('.nav-link.is-contact').addClass('is-inactive');
            } else {
                $('.navigation_dropdown-toggle.is-about').removeClass('is-inactive');
                $('.navigation_dropdown-toggle.is-services').removeClass('is-inactive');
                $('.navigation_dropdown-toggle.is-investors').removeClass('is-inactive');
                $('.nav-link.is-news').removeClass('is-inactive');
                $('.nav-link.is-contact').removeClass('is-inactive');
            }
        }    

        // Navigation investors open
        function updateInvestors() {
            if ($('.navigation_dropdown-toggle.is-investors').hasClass('w--open')) {
                $('.navigation_dropdown-toggle.is-investors').removeClass('is-inactive');
                $('.navigation_dropdown-toggle.is-about').addClass('is-inactive');
                $('.navigation_dropdown-toggle.is-services').addClass('is-inactive');
                $('.navigation_dropdown-toggle.is-case_studies').addClass('is-inactive');
                $('.nav-link.is-news').addClass('is-inactive');
                $('.nav-link.is-contact').addClass('is-inactive');
            } else {
                $('.navigation_dropdown-toggle.is-about').removeClass('is-inactive');
                $('.navigation_dropdown-toggle.is-services').removeClass('is-inactive');
                $('.navigation_dropdown-toggle.is-case_studies').removeClass('is-inactive');
                $('.nav-link.is-news').removeClass('is-inactive');
                $('.nav-link.is-contact').removeClass('is-inactive');
            }
        }
    }
});



// Navigation about hover
$(document).ready(function() {
    if ($(window).width() >= 991) {
        $('.navigation_dropdown-toggle.is-about').hover(function() {
            aboutHoverIn();
        }, function() {
            aboutHoverOut();
        });
    }
});

// About hover in
function aboutHoverIn() {
    if ($('.navigation_dropdown-toggle.is-about').hasClass('is-inactive')) {
        $('.navigation_dropdown-toggle.is-about').removeClass('is-inactive');
    }
}

// About hover out
function aboutHoverOut() {
    if ($('.navigation_dropdown-toggle.is-about').hasClass('w--open')) {
        $('.navigation_dropdown-toggle.is-about').removeClass('is-inactive');
    } else if ($('.navigation_dropdown-toggle.is-services').hasClass('w--open') || $('.navigation_dropdown-toggle.is-case_studies').hasClass('w--open') || $('.navigation_dropdown-toggle.is-investors').hasClass('w--open')) {
        $('.navigation_dropdown-toggle.is-about').addClass('is-inactive');
    }
}

// Navigation services hover
$(document).ready(function() {
    if ($(window).width() >= 991) {
        $('.navigation_dropdown-toggle.is-services').hover(function() {
            servicesHoverIn();
        }, function() {
            servicesHoverOut();
        });
    }
});

// Services hover in
function servicesHoverIn() {
    if ($('.navigation_dropdown-toggle.is-services').hasClass('is-inactive')) {
        $('.navigation_dropdown-toggle.is-services').removeClass('is-inactive');
    }
}

// Services hover out
function servicesHoverOut() {
    if ($('.navigation_dropdown-toggle.is-services').hasClass('w--open')) {
        $('.navigation_dropdown-toggle.is-services').removeClass('is-inactive');
    } else if ($('.navigation_dropdown-toggle.is-about').hasClass('w--open') || $('.navigation_dropdown-toggle.is-case_studies').hasClass('w--open') || $('.navigation_dropdown-toggle.is-investors').hasClass('w--open')) {
        $('.navigation_dropdown-toggle.is-services').addClass('is-inactive');
    }
}

// Navigation case studies hover
$(document).ready(function() {
    if ($(window).width() >= 991) {
        $('.navigation_dropdown-toggle.is-case_studies').hover(function() {
            casestudiesHoverIn();
        }, function() {
            casestudiesHoverOut();
        });
    }
});

// Case studies hover in
function casestudiesHoverIn() {
    if ($('.navigation_dropdown-toggle.is-case_studies').hasClass('is-inactive')) {
        $('.navigation_dropdown-toggle.is-case_studies').removeClass('is-inactive');
    }
}

// Case studies hover out
function casestudiesHoverOut() {
    if ($('.navigation_dropdown-toggle.is-case_studies').hasClass('w--open')) {
        $('.navigation_dropdown-toggle.is-case_studies').removeClass('is-inactive');
    } else if ($('.navigation_dropdown-toggle.is-about').hasClass('w--open') || $('.navigation_dropdown-toggle.is-services').hasClass('w--open') || $('.navigation_dropdown-toggle.is-investors').hasClass('w--open')) {
        $('.navigation_dropdown-toggle.is-case_studies').addClass('is-inactive');
    }
}

// Navigation investors hover
$(document).ready(function() {
    if ($(window).width() >= 991) {
        $('.navigation_dropdown-toggle.is-investors').hover(function() {
            investorsHoverIn();
        }, function() {
            investorsHoverOut();
        });
    }
});

// Investors hover in
function investorsHoverIn() {
    if ($('.navigation_dropdown-toggle.is-investors').hasClass('is-inactive')) {
        $('.navigation_dropdown-toggle.is-investors').removeClass('is-inactive');
    }
}

// Investors hover out
function investorsHoverOut() {
    if ($('.navigation_dropdown-toggle.is-investors').hasClass('w--open')) {
        $('.navigation_dropdown-toggle.is-investors').removeClass('is-inactive');
    } else if ($('.navigation_dropdown-toggle.is-about').hasClass('w--open') || $('.navigation_dropdown-toggle.is-services').hasClass('w--open') || $('.navigation_dropdown-toggle.is-case_studies').hasClass('w--open')) {
        $('.navigation_dropdown-toggle.is-investors').addClass('is-inactive');
    }
}

// Navigation news hover
$(document).ready(function() {
    if ($(window).width() >= 991) {
        $('.nav-link.is-news').hover(function() {
            newsHoverIn();
        }, function() {
            newsHoverOut();
        });
    }
});

// News hover in
function newsHoverIn() {
    if ($('.nav-link.is-news').hasClass('is-inactive')) {
        $('.nav-link.is-news').removeClass('is-inactive');
    }
}

// News hover out
function newsHoverOut() {
    if ($('.navigation_dropdown-toggle').hasClass('w--open')) {
        $('.nav-link.is-news').addClass('is-inactive');
    } else {
        $('.nav-link.is-news').removeClass('is-inactive');
    }
}

// Navigation contact hover
$(document).ready(function() {
    if ($(window).width() >= 991) {
        $('.nav-link.is-contact').hover(function() {
            contactHoverIn();
        }, function() {
            contactHoverOut();
        });
    }
});

// Contact hover in
function contactHoverIn() {
    if ($('.nav-link.is-contact').hasClass('is-inactive')) {
        $('.nav-link.is-contact').removeClass('is-inactive');
    }
}

// Contact hover out
function contactHoverOut() {
    if ($('.navigation_dropdown-toggle').hasClass('w--open')) {
        $('.nav-link.is-contact').addClass('is-inactive');
    } else {
        $('.nav-link.is-contact').removeClass('is-inactive');
    }
}

// Navigation our story hover image
$(document).ready(function() {
    if ($(window).width() >= 991) {
        $('.nav-link-secondary.is-our_story').hover(function() {
            ourStoryHoverIn();
        }, function() {
            ourStoryHoverOut();
        });
    }
});

// Our story hover in
function ourStoryHoverIn() {
    ($('.nav-dropdown-img.is-our_story').addClass('is-active'))
}

// Our story hover out
function ourStoryHoverOut() {
    setTimeout(function() {
        $('.nav-dropdown-img.is-our_story').removeClass('is-active');
    }, 100);
}


// Navigation our team hover image
$(document).ready(function() {
    if ($(window).width() >= 991) {
        $('.nav-link-secondary.is-our_team').hover(function() {
            ourTeamHoverIn();
        }, function() {
            ourTeamHoverOut();
        });
    }
});

// Our team hover in
function ourTeamHoverIn() {
    ($('.nav-dropdown-img.is-our_team').addClass('is-active'))
}

// Our team hover out
function ourTeamHoverOut() {
    setTimeout(function() {
        $('.nav-dropdown-img.is-our_team').removeClass('is-active');
    }, 100);
}


// Navigation our clients hover image
$(document).ready(function() {
    if ($(window).width() >= 991) {
        $('.nav-link-secondary.is-our_clients').hover(function() {
            ourClientsHoverIn();
        }, function() {
            ourClientsHoverOut();
        });
    }
});

// Our clients hover in
function ourClientsHoverIn() {
    ($('.nav-dropdown-img.is-our_clients').addClass('is-active'))
}

// Our clients hover out
function ourClientsHoverOut() {
    setTimeout(function() {
        $('.nav-dropdown-img.is-our_clients').removeClass('is-active');
    }, 100);
}


// Navigation ESG hover image
$(document).ready(function() {
    if ($(window).width() >= 991) {
        $('.nav-link-secondary.is-esg').hover(function() {
            esgHoverIn();
        }, function() {
            esgHoverOut();
        });
    }
});

// ESG hover in
function esgHoverIn() {
    ($('.nav-dropdown-img.is-esg').addClass('is-active'))
}

// ESG hover out
function esgHoverOut() {
    setTimeout(function() {
        $('.nav-dropdown-img.is-esg').removeClass('is-active');
    }, 100);
}


// Navigation IVE Care hover image
$(document).ready(function() {
    if ($(window).width() >= 991) {
        $('.nav-link-secondary.is-ive_care').hover(function() {
            iveCareHoverIn();
        }, function() {
            iveCareHoverOut();
        });
    }
});

// IVE Care hover in
function iveCareHoverIn() {
    ($('.nav-dropdown-img.is-ive_care').addClass('is-active'))
}

// IVE Care hover out
function iveCareHoverOut() {
    setTimeout(function() {
        $('.nav-dropdown-img.is-ive_care').removeClass('is-active');
    }, 100);
}


// Navigation secondary hover in/out
$(document).ready(function() {
    if ($(window).width() >= 991) {
        $('.nav-link-secondary').hover(
            function() {
                // Hover in
                $('.nav-link-secondary').not($(this)).addClass('is-inactive');
            },
            function() {
                // Hover out
                $('.nav-link-secondary').not($(this)).removeClass('is-inactive');
            }
        );
    }
});

// Footer primary links hover in/out
$(document).ready(function() {
    if ($(window).width() >= 991) {
        $('.footer-link-primary').hover(
            function() {
                // Hover in
                $('.footer-link-primary').not($(this)).addClass('is-inactive');
            },
            function() {
                // Hover out
                $('.footer-link-primary').not($(this)).removeClass('is-inactive');
            }
        );
    }
});

// Desktop Navigation End

/*
// Add a delay before stopping the scroll (adjust the delay time as needed)
    setTimeout(function() {
    window.SScroll.call.stop();
    }, 1000); // 1000 milliseconds = 1 second
*/



// Loader And Page Transition Start

// GSAP timeline function for pageload
function loaderOnPageLoad() {
 
    // Create a GSAP timeline
    let tl = gsap.timeline();

     // Stops flicker on homepage
     gsap.set(".section-home-services", { display: "none" });

  
    // Add animations to the timeline
    tl.to(".logo-loader", {
        y: "0%",
        duration: 0.4,
        delay: 0.2,
        ease: 'power1.out',
        onComplete: () => {
            lenis.scrollTo('#top', {
                onComplete: () => {
                  lenis.stop(); // Stops the scroll animation
                }
              });
        }
    }, "<+0.3")
      
      .to(".loader_background-gradient-1", {
        y: "-100%",
        duration: 1.5,
        delay: 0.8,
        ease: 'power2.out',
      })
      .to(".loader_background-gradient-2", {
        y: "-100%",
        duration: 1.5,
        delay: 0,
        ease: 'power2.out',
      }, "<+0.2")
      .to(".loader_background-gradient-3", {
        y: "-100%",
        duration: 1.5,
        delay: 0,
        ease: 'power2.out',
      }, "<+0.2")
      .to(".loader_background-gradient-4", {
        y: "-100%",
        duration: 1.5,
        delay: 0,
        ease: 'power2.out',
      }, "<+0.2")
      .to(".loader_background", {
        y: "-100%",
        duration: 1.5,
        delay: 0,
        ease: 'power2.out',
        onComplete: () => {
            gsap.set(".loader", { display: "none" });
            }
      }, "<+0.3")
      .to(".logo-loader", {
        y: "-100%",
        duration: 0.2,
        delay: 0,
        ease: 'power1.out',
        onComplete: () => {
            lenis.start()
            gsap.set(".section-home-services", { display: "block" });
            }
      }, "<")
      
  
    // Return the timeline
    return tl;
}

// GSAP timeline function for click event
  function loaderOnLinkClick(destination) {
    gsap.set(".loader", { display: "block" });
    gsap.fromTo(
      ".loader_background", {
        y: "100%"
      }, {
        y: "0%",
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => {
          window.location = destination;
        }
      }
    );
  }
  
// Call loaderOnPageLoad when the page loads
  $(document).ready(function () {
    loaderOnPageLoad();
  
// Code for click event
    $(document).on("click", "a", function (e) {
      if (
        $(this).prop("hostname") === window.location.host &&
        $(this).attr("href").indexOf("#") === -1 &&
        $(this).attr("target") !== "_blank"
      ) {
        e.preventDefault();
        let destination = $(this).attr("href");
        gsap.set(".loader", { display: "block" });
  
        // Call loaderOnLinkClick when a link is clicked
        loaderOnLinkClick(destination);
      }
    });
  
// On click of the back button
    window.onpageshow = function (event) {
      if (event.persisted) {
        window.location.reload();
      }
    }
  });

// Loader And Page Transition End

// Scroll to top on page refresh
document.addEventListener("DOMContentLoaded", function() {
    const scrollTopButton = document.querySelector('.scroll-top');
    
    if (scrollTopButton) {
      const clickEvent = new Event('click');
      scrollTopButton.dispatchEvent(clickEvent);
      
      
    }
});


// GSAP FLIP
window.addEventListener("DOMContentLoaded", (event) => {
    
    // SETUP ELEMENTS
    let zoneEl = $("[js-scrollflip-element='zone']"),
      targetEl = $("[js-scrollflip-element='target']").first();

    // SETUP TIMELINE
    let tl;
    function createTimeline() {
      if (tl) {
        tl.kill();
        gsap.set(targetEl, { clearProps: "all" });
      }
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: zoneEl.first(),
          start: "top 25%",
          endTrigger: zoneEl.last(),
          end: "bottom bottom",
          scrub: true
        }
      });
      zoneEl.each(function (index) {
        let nextZoneEl = zoneEl.eq(index + 1);
        if (nextZoneEl.length) {
          let nextZoneDistance =
            nextZoneEl.offset().top + nextZoneEl.innerHeight() / 2;
          let thisZoneDistance = $(this).offset().top + $(this).innerHeight() / 2;
          let zoneDifference = nextZoneDistance - thisZoneDistance;
          tl.add(
            Flip.fit(targetEl[0], nextZoneEl[0], {
              duration: zoneDifference,
              ease: "power1.inOut"
            })
          );
        }
      });
    }
    createTimeline();

    // SETUP RESIZE
    let resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        createTimeline();
      }, 250);
    });
});


// Function to animate all images title .image-array in a loop  
function animateImages() {
    // Select all images with the class .image-array
    const images = document.querySelectorAll('.image-array');
  
    // Set initial opacity of each image to 0
    images.forEach(image => {
      gsap.set(image, { opacity: 0 });
    });
  
    // Ensure the first image is visible initially
    if (images.length > 0) {
      gsap.set(images[0], { opacity: 1 });
    }
  
    // Create a GSAP timeline
    const tl = gsap.timeline({ repeat: -1 });
  
    // Transition speed (2.5 seconds for each image)
    const transitionSpeed = 2.5; // 2.5 seconds
  
    // Add fade in and fade out animations to the timeline with overlap equal to the transition speed
    images.forEach((image, index) => {
      if (index > 0) {
        tl.to(image, { opacity: 1, duration: transitionSpeed }, index * transitionSpeed)
          .to(image, { opacity: 0, duration: transitionSpeed }, (index * transitionSpeed) + transitionSpeed);
      }
    });
  
    // Ensure the last image fades out and the first image fades in seamlessly
    tl.to(images[0], { opacity: 1, duration: transitionSpeed }, images.length * transitionSpeed)
      .to(images[0], { opacity: 1, duration: 0 }, (images.length * transitionSpeed) + transitionSpeed);
  }
  
  // Call the function to start the animation
  animateImages();
  
  // Handle window resize for responsive design
  let resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      animateImages();
    }, 250);
});


// Lenis smooth scroll
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
  ScrollTrigger.update()
})

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

// Page refresh on resize
const breakpoints = [479, 767, 991, 1239, 1439, 1919];

// Store the initial window width
let initialWidth = window.innerWidth;

// Function to check if the width crosses any breakpoints
function shouldRefresh(newWidth) {
  for (let breakpoint of breakpoints) {
    if ((initialWidth <= breakpoint && newWidth > breakpoint) ||
        (initialWidth > breakpoint && newWidth <= breakpoint)) {
      return true;
    }
  }
  return false;
}

// Add event listener for resize
window.addEventListener('resize', function () {
  let newWidth = window.innerWidth;
  if (shouldRefresh(newWidth)) {
    window.location.reload();
  }
});


// Footer back to top botton
document.querySelector('.text-link.is-back_to_top').addEventListener('click', function () {
    lenis.scrollTo('#top', {
      duration: 2.5, // Duration in seconds (e.g., 2 seconds for a slower animation)
    });
});

// GSAP Slplit Text – Animations
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      const wordElements = document.querySelectorAll("[data-split-words]");
      const lineElements = document.querySelectorAll("[data-split-lines]");
  
      if (wordElements.length === 0 && lineElements.length === 0) return; // No elements found, exit
  
      wordElements.forEach(element => {
        if (!element.textContent.trim()) return; // Skip empty elements
        const wordSplit = new SplitText(element, { type: "words" });
  
        gsap.from(wordSplit.words, {
          autoAlpha: 0,
          translateY: "100%",
          delay: 0.2,
          duration: 1,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play none none none",
          },
        });
      });
  
      lineElements.forEach(element => {
        if (!element.textContent.trim()) return; // Skip empty elements
        const linesSplit = new SplitText(element, { type: "lines" });
  
        gsap.from(linesSplit.lines, {
          autoAlpha: 0,
          translateY: "100%",
          duration: 1,
          delay: 0.2,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            toggleActions: "play none none none",
          },
        });
      });
    }, 200); // Reduce delay
});

// Subtitle Waymaker – Fade In
gsap.utils.toArray(".icon-waymaker-subtitle").forEach((el) => {
gsap.fromTo(el, 
    { opacity: 0, y: '100%' }, 
    { 
    opacity: 1, 
    y: '0%',
    delay: 0.2,
    duration: 1, 
    ease: "power2.out",
    scrollTrigger: {
        trigger: el,
        start: "top bottom",
        toggleActions: "play none none none"
    }
    }
);
});

// Plyr Videos
$(document).ready(function () {
    $(".plyr_component").each(function () {
      let thisComponent = $(this);
  
      // Initialize Plyr for each component
      let player = new Plyr(thisComponent.find(".plyr_video")[0], {
        controls: ["play", "progress", "current-time", "mute", "fullscreen"],
        resetOnEnd: true,
      });
  
      // Custom video cover click
      thisComponent.find(".plyr_cover").on("click", function () {
        player.play();
      });
  
      player.on("ended", () => {
        thisComponent.removeClass("hide-cover");
        if (player.fullscreen.active) {
          player.fullscreen.exit();
        }
      });
  
      // Pause other playing videos when this one starts
      player.on("play", () => {
        $(".plyr_component").removeClass("hide-cover");
        thisComponent.addClass("hide-cover");
  
        let prevPlayingComponent = $(".plyr--playing").closest(".plyr_component").not(thisComponent);
        if (prevPlayingComponent.length > 0) {
          prevPlayingComponent.find(".plyr_pause-trigger")[0].click();
        }
      });
  
      // Pause when clicking the custom pause trigger
      thisComponent.find(".plyr_pause-trigger").on("click", function () {
        player.pause();
      });
  
      // Change video container mode when entering/exiting fullscreen
      player.on("enterfullscreen", () => {
        thisComponent.addClass("contain-video");
      });
      player.on("exitfullscreen", () => {
        thisComponent.removeClass("contain-video");
      });
  
      // Pause video when closing the modal
      $(".text-link-alternate.is-video_modal-close").on("click", function () {
        player.pause();
      });
  
      // Store player instance inside the element for later use
      thisComponent.data("player", player);
    });
  
    // Handle video modal logic
    $(".video-tabs_menu-item").each(function () {
      const item = $(this);
      const stage = item.find(".video-tabs_stage");
      const modal = item.find(".video_modal");
      const player = modal.find(".plyr_video").closest(".plyr_component").data("player"); // Get associated Plyr instance
  
      // Observe class changes to detect active state
      new MutationObserver(() => {
        stage.toggleClass("is-active", item.hasClass("is-active"));
      }).observe(item[0], { attributes: true, attributeFilter: ["class"] });
  
      // Open modal and play video on click
      stage.on("click", function () {
        if (stage.hasClass("is-active")) {
          gsap.set(modal, { display: "block" });
          gsap.to(modal, { opacity: 1, duration: 0.3 });
  
          // Play the correct video inside the modal
          if (player) {
            player.play();
          }
        }
      });
    });
});

// Video tabs auto change timer
$(function () {
    if ($(window).width() > 319) {
  
      function autoplayTabs($tabsMenu) {
        var $activeTab = $tabsMenu.find('.video-tabs_menu-item.is-active');
        var $nextTab = $activeTab.next('.video-tabs_menu-item');
        if ($nextTab.length === 0) {
          $nextTab = $tabsMenu.find('.video-tabs_menu-item:first');
        }
        $nextTab.trigger('click');
      }
  
      function startTimer($tabsMenu, timing) {
        var interval = timing;
        var timer = setInterval(function () {
          autoplayTabs($tabsMenu);
        }, interval);
        $tabsMenu.data('timer', timer);
        console.log("tabs timer started!");
      }
  
      function resetTimer($tabsMenu, timing) {
        var timer = $tabsMenu.data('timer');
        clearInterval(timer);
        startTimer($tabsMenu, timing);
      }
  
      $('[tab-function="autoplay"]').each(function () {
        var $tabsMenu = $(this);
        var timing = parseInt($tabsMenu.attr('tab-timing'));
  
        // Autoplay tab change
        $tabsMenu.find('.video-tabs_menu-item').on('click', function () {
          $tabsMenu.find('.video-tabs_menu-item').removeClass('is-active');
          $(this).addClass('is-active');
          resetTimer($tabsMenu, timing);
          $tabsMenu.find('.video-tabs_progress-bar').stop().css({ width: '0%' });
          $(this).find('.video-tabs_progress-bar').css({ width: 0 })
            .animate({ width: '100%' }, timing);
        });
  
        var startType = $tabsMenu.attr('tab-function-start');
        if (startType === 'scroll-into-view') {
          // Check if tabs are in view and start autoplay
          var options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
          };
  
          var observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                // Start timer and play active tab animation
                startTimer($tabsMenu, timing);
                $tabsMenu.find('.video-tabs_menu-item.is-active').find(
                    '.video-tabs_progress-bar')
                  .css({ width: 0 })
                  .animate({ width: '100%' }, timing);
  
                observer.unobserve(entry.target);
              }
            });
          }, options);
  
          observer.observe(this);
        } else {
          // Start autoplay on page load
          startTimer($tabsMenu, timing);
          $tabsMenu.find('.video-tabs_menu-item.is-active').find('.video-tabs_progress-bar')
            .css({ width: 0 })
            .animate({ width: '100%' }, timing);
        }
      });
  
      // Static tab change
      $('[tab-function="static"] .video-tabs_menu-item').on('click', function () {
        var $tabsMenu = $(this).closest('.video-tabs_menu');
        $tabsMenu.find('.video-tabs_menu-item').removeClass('is-active');
        $(this).addClass('is-active');
      });
    }
});
  

// .video-tabs_link-wrapper fade in on scroll
// Select all elements with the class .video-tabs_link-wrapper
const videoTabLinks = gsap.utils.toArray(".video-tabs_link-wrapper");

videoTabLinks.forEach((link, index) => {
  gsap.fromTo(
    link,
    { opacity: 0, y: '100%' },
    {
      opacity: 1,
      y: '0%',
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: link,
        start: "top 90%", // Adjust to control when each item animates
        toggleActions: "play none none none",
      },
      delay: index * 0.05, // Stagger effect based on index
    }
  );
});

// Cursor Video Play Text Infinite Carousel
// Initially position text in a row
gsap.utils.toArray(".cursor-video_play-wrapper").forEach((wrapper) => {
    let texts = wrapper.querySelectorAll(".cursor-video_play-text");

    // Initially position text in a row
    gsap.set(texts, {
        x: (i) => i * 140
    });

    // Animate text carousel
    gsap.to(texts, {
        duration: 5,
        ease: "none",
        x: "-=140", // Move left
        modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % 540) 
        },
        repeat: -1
    });
});


// Video Gallery – Show cursor on hover and follow mouse
const cursor = document.querySelector(".cursor-video_play-wrapper");
const videoStages = document.querySelectorAll(".video-tabs_stage");
const cursorHoverVideos = document.querySelectorAll(".cursor-hover-video");

// Make cursor follow the mouse
document.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.2,
    ease: "power2.out",
  });
});

// Loop through all .video-tabs_stage elements
videoStages.forEach((stage) => {
  stage.addEventListener("mouseenter", () => {
    // Show cursor
    gsap.to(cursor, {
      autoAlpha: 1,
      duration: 0.3,
      ease: "power2.out",
    });

    // Hide all elements with .cursor-hover-video
    gsap.to(cursorHoverVideos, {
      autoAlpha: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  stage.addEventListener("mouseleave", () => {
    // Hide cursor
    gsap.to(cursor, {
      autoAlpha: 0,
      duration: 0.3,
      ease: "power2.out",
    });

    // Show all elements with .cursor-hover-video
    gsap.to(cursorHoverVideos, {
      autoAlpha: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  });
});




