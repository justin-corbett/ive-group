// Initialize GSAP
gsap.registerPlugin();
gsap.registerPlugin(ScrollTrigger);

// GSAP Scrolltrigger
ScrollTrigger.defaults({
  markers: false,
});

// GSAP Horizontal scroll – Desktop
if ($(window).width() > 991) {
let tlMain = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section-height",
      start: "top top",
      end: "98% bottom",
      scrub: 1
    }
  })
  .to(".track", {
    xPercent: -100,
    ease: "none"
});
}

// Optional - Set sticky section heights based on inner content width
// Makes scroll timing feel more natural
if ($(window).width() > 768) {
function setTrackHeights() {
    $(".section-height").each(function (index) {
      let trackWidth = $(this).find(".track").outerWidth();
      $(this).height(trackWidth);
    });
  }
  setTrackHeights();
  window.addEventListener("resize", function () {
    setTrackHeights();
});
}


// Horizontal rule 
$(".horizontal-rule").each(function (index, element) {
    let triggerElement = $(this);
    let targetElement = $(element);
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom",
      },
    });
    tl.from(targetElement, {
      width: "0%",
      duration: 1,
      delay: 0.1,
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

// ESG Video Cursor Fade In
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



// Mobile Navigation Start

$(document).ready(function() {
    if ($(window).width() < 991) {
        // Function to add or remove class based on the state of .navigation_dropdown-toggle
        function updateNavMobile() {
            var navButton = $('.navigation_menu-button.w-nav-button');
            var navButtonText = $('.nav-mobile-menu-btn-text');

            if (navButton.hasClass('w--open')) {
                tl.play();
                navButtonText.text('Close');
            } else {
                tl.reverse();
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




// Mobile Navigation End

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

// Loader And Page Transition Start

// GSAP timeline function for pageload
function loaderOnPageLoad() {

    // Add a delay before stopping the scroll (adjust the delay time as needed)
    setTimeout(function() {
    window.SScroll.call.stop();
    }, 1000); // 1000 milliseconds = 1 second
    
    // Create a GSAP timeline
    let tl = gsap.timeline();
  
    // Add animations to the timeline
    tl.to(".logo-loader", {
        y: "0%",
        duration: 0.4,
        delay: 0.2,
        ease: 'power1.out'
      })
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
            window.SScroll.call.start();
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
    // SETUP PLUGINS
    gsap.registerPlugin(ScrollTrigger, Flip);
    ScrollTrigger.normalizeScroll(true);
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

// Home images fade in/out repeating animation
function fadeImage() {
    let master = gsap.timeline({ repeat: -1 });

    const images = document.querySelectorAll(".image-array");
    images.forEach((image, index) => {
        let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: images.length - 1 });
        tl.to(image, { autoAlpha: 1, duration: 2 })
          .to(image, { autoAlpha: 0, duration: 2 });
        master.add(tl, index * 2); // Stagger the start time by the duration (2 seconds) of each animation
    });
}

fadeImage();

