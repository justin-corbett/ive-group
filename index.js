// Initialize GSAP
gsap.registerPlugin(ScrollTrigger, Flip, Observer, SplitText);
    
// GSAP Scrolltrigger
ScrollTrigger.defaults({
  markers: false,
});

// Lenis smooth scroll
// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis({
  prevent: (node) => node.id === 'modal',
})

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);


/*
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
*/


// Footer back to top botton
document.querySelector('.text-link.is-back_to_top').addEventListener('click', function () {
    lenis.scrollTo('#top', {
      duration: 2.5, // Duration in seconds (e.g., 2 seconds for a slower animation)
    });
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
    ScrollTrigger.refresh(); // Ensure all triggers recalculate after height changes

  }
  
  window.addEventListener("resize", function () {
    if ($(window).width() > 991) {
        setTrackHeights();
        ScrollTrigger.refresh(); // Ensure all triggers recalculate after height changes

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
      delay: 0.3,
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

// Navigation BG Gradient Fade In – Case Studies
$(".section-case_study-hero-video").each(function (index) {
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

// Navigation BG Gradient Fade In – Gallery
$(".section-gallery_hero").each(function (index) {
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

// Navigation BG Gradient Fade In – .animate-nav-bg block
$(".animate-nav-bg").each(function (index) {
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

// Navigation Open Desktop
var tl = gsap.timeline();

tl.set('.navigation-dropdown-bg-wrapper', { display: "block" })
  .to('.navigation-dropdown-slide', { duration: 0.5, opacity: 1, y: "0%", ease: "power2.out" })
  .to('.navigation-bg-main', { duration: 0.5, opacity: 1, ease: "power2.out" }, "-=0.5")
  .to('.hr-navigation', { duration: 0.5, y: "6rem", ease: "power2.out" }, "-=0.5")
  .to('.navigation-bg-title', { 
      duration: 0.5, 
      y: "0%", 
      ease: "power2.out",
      onComplete: () => lenis.stop() // Stops Lenis smooth scrolling
  }, "-=0.5");


// Home hero title animation
const wrappers = document.querySelectorAll(".home-hero-heading-wrapper");

if (wrappers.length > 0) {
    wrappers.forEach((wrapper) => {
        let headings = wrapper.querySelectorAll(".title-home-hero.is-animate");

        if (headings.length > 0) {
            let splitTextInstances = [];

            headings.forEach((heading) => {
                // Wrap each word inside a span with overflow hidden
                let split = new SplitText(heading, { type: "words, chars" });

                // Apply overflow hidden to word containers
                split.words.forEach((word) => {
                    gsap.set(word, { overflow: "hidden", display: "inline-block", position: "relative" });
                });

                splitTextInstances.push(split);
            });

            let tl = gsap.timeline({ repeat: -1, delay: 4 });

            tl.set(wrapper, { opacity: 1 });

            headings.forEach((heading, index) => {
                let chars = splitTextInstances[index].chars;

                if (index > 0) {
                    tl.from(chars, { yPercent: 110, opacity: 0, stagger: 0.04, duration: 0.4 }, "<0.1");
                }
                if (index < headings.length - 1) {
                    tl.to(chars, { delay: 1, yPercent: -110, opacity: 0, stagger: 0.04, duration: 0.4 });
                }
            });
        }
    });
}


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

// Image scale – case studies
$(".image-full-case_study").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".image-full_screen-case_study");

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

// Image move – case studies
$(".image-full-case_study").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".image-full_screen-case_study");

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
                lenis.stop();	
            } else {
                tl.reverse() && $('.nav-link').removeClass('is-inactive') && $('.navigation_dropdown-toggle').removeClass('is-inactive');
                lenis.start();	
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

// Navigation – Case Studies – 1
$(document).ready(function() {
  if ($(window).width() >= 991) {
      $('.nav-link-secondary.is-case_study-1').hover(function() {
          caseStudy1HoverIn();
      }, function() {
        caseStudy1HoverOut();
      });
  }
});

// Case Studies – 1 – Hover In
function caseStudy1HoverIn() {
  ($('.nav-dropdown-img.is-case_study-1').addClass('is-active'))
}

// Case Studies – 1 – Hover Out
function caseStudy1HoverOut() {
  setTimeout(function() {
      $('.nav-dropdown-img.is-case_study-1').removeClass('is-active');
  }, 100);
}

// Navigation – Case Studies – 2
$(document).ready(function() {
  if ($(window).width() >= 991) {
      $('.nav-link-secondary.is-case_study-2').hover(function() {
          caseStudy2HoverIn();
      }, function() {
        caseStudy2HoverOut();
      });
  }
});

// Case Studies – 2 – Hover In
function caseStudy2HoverIn() {
  ($('.nav-dropdown-img.is-case_study-2').addClass('is-active'))
}

// Case Studies – 2 – Hover Out
function caseStudy2HoverOut() {
  setTimeout(function() {
      $('.nav-dropdown-img.is-case_study-2').removeClass('is-active');
  }, 100);
}

// Navigation – Case Studies – 3
$(document).ready(function() {
  if ($(window).width() >= 991) {
      $('.nav-link-secondary.is-case_study-3').hover(function() {
          caseStudy3HoverIn();
      }, function() {
        caseStudy3HoverOut();
      });
  }
});

// Case Studies – 3 – Hover In
function caseStudy3HoverIn() {
  ($('.nav-dropdown-img.is-case_study-3').addClass('is-active'))
}

// Case Studies – 3 – Hover Out
function caseStudy3HoverOut() {
  setTimeout(function() {
      $('.nav-dropdown-img.is-case_study-3').removeClass('is-active');
  }, 100);
}

// Navigation – Case Studies – 4
$(document).ready(function() {
  if ($(window).width() >= 991) {
      $('.nav-link-secondary.is-case_study-4').hover(function() {
          caseStudy4HoverIn();
      }, function() {
        caseStudy4HoverOut();
      });
  }
});

// Case Studies – 4 – Hover In
function caseStudy4HoverIn() {
  ($('.nav-dropdown-img.is-case_study-4').addClass('is-active'))
}

// Case Studies – 4 – Hover Out
function caseStudy4HoverOut() {
  setTimeout(function() {
      $('.nav-dropdown-img.is-case_study-4').removeClass('is-active');
  }, 100);
}

// Navigation – Case Studies – 5
$(document).ready(function() {
  if ($(window).width() >= 991) {
      $('.nav-link-secondary.is-case_study-5').hover(function() {
          caseStudy5HoverIn();
      }, function() {
        caseStudy5HoverOut();
      });
  }
});

// Case Studies – 5 – Hover In
function caseStudy5HoverIn() {
  ($('.nav-dropdown-img.is-case_study-5').addClass('is-active'))
}

// Case Studies – 5 – Hover Out
function caseStudy5HoverOut() {
  setTimeout(function() {
      $('.nav-dropdown-img.is-case_study-5').removeClass('is-active');
  }, 100);
}

// Navigation – Case Studies – 6
$(document).ready(function() {
  if ($(window).width() >= 991) {
      $('.nav-link-secondary.is-case_study-6').hover(function() {
          caseStudy6HoverIn();
      }, function() {
        caseStudy6HoverOut();
      });
  }
});

// Case Studies – 6 – Hover In
function caseStudy6HoverIn() {
  ($('.nav-dropdown-img.is-case_study-6').addClass('is-active'))
}

// Case Studies – 6 – Hover Out
function caseStudy6HoverOut() {
  setTimeout(function() {
      $('.nav-dropdown-img.is-case_study-6').removeClass('is-active');
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
  // Create a GSAP timeline
  let tl = gsap.timeline();

  // Add animations to the timeline
  tl.to(".logo-loader", {
      y: "0%",
      duration: 0.4,
      delay: 0.2,
      ease: 'power1.out',
    })
    .to(".loader_background-gradient-1", {
      y: "-100%",
      duration: 1.5,
      delay: 0.4,
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
    }, "<")
    .add(() => {
      ScrollTrigger.refresh(true);
      lenis.start();
    }, "<+0.2")
    .add(() => {
      pageTitleSplitText.play(); // Play the SplitText animation
      pageTitleSecondarySplitText.play();
    }, "<+0.2")
    .add(() => {
      pageSecondarySplitText.play();
      pageLinesSplitText.play();
    }, "<+0.2")
    .add(() => {
      heroTertiaryAnimation.play();
    }, "<+0.2");

  // Return the timeline
  return tl;
}

// GSAP timeline function for click event
function loaderOnLinkClick(destination) {
  gsap.set(".loader", { display: "block" });
  gsap.fromTo(
    ".loader_background",
    { y: "100%" },
    {
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

  // Click -> page transition (with data-no-loader bypass)
  $(document).on("click", "a", function (e) {
    const $a = $(this);
    const href = $a.attr("href") || "";

    // --- BYPASS RULE: if the link OR ANY ANCESTOR has data-no-loader, skip the loader
    if ($a.closest("[data-no-loader]").length) {
      return; // let the browser handle the navigation normally
    }

    // Respect user intent / non-left clicks
    const isNewTabIntent = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0;
    if (isNewTabIntent) return;

    // Only intercept same-origin navigations without hash, not targeting _blank
    const isSameHost = $a.prop("hostname") === window.location.host;
    const hasHash = href.indexOf("#") !== -1;
    const targetsBlank = $a.attr("target") === "_blank";

    if (isSameHost && !hasHash && !targetsBlank) {
      e.preventDefault();
      loaderOnLinkClick(href);
    }
  });

  // Handle bfcache back/forward restores
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
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


// GSAP FLIP – Home page video
if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
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
                ease: "power1.inOut",
                props: ["borderRadius"],
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
}

// GSAP FLIP – Built To Connect
if (window.location.pathname.includes("/marketing/built-to-connect"))  {
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
            start: "bottom bottom",
            endTrigger: zoneEl.last(),
            end: "center center",
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
                ease: "power4.Out",
                props: ["borderRadius"],
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
}

// GSAP FLIP – Case Studies
if (window.location.pathname.includes("/case-studies")) {
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
        start: "top top",
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
            ease: "power1.inOut",
            props: ["borderRadius"],
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
}


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


// GSAP Split Text
// All Pages Loader Animation – Page Title
const pageTitleSplitText = gsap.timeline({ paused: true });
const pageTitleSplit = new SplitText("#page-title", { type: "lines, words, chars" });

pageTitleSplitText.from(pageTitleSplit.chars, {
  duration: 0.5,
  y: "3rem",
  autoAlpha: 0,
  stagger: 0.02,
  ease: "power2.out"
});

// GSAP Split Text
// All Pages Loader Animation – Page Title Secondary 
const pageTitleSecondarySplitText = gsap.timeline({ paused: true });
const pageTitleSecondarySplit = new SplitText("#page-title-secondary", { 
  type: "lines, words", 
  mask: "lines",
  lineClass: "line",
});

pageTitleSecondarySplitText.from(pageTitleSecondarySplit.words, {
  duration: 0.5,
  y: "110%",
  autoAlpha: 0,
  stagger: 0.02,
  ease: "power2.out"
});

// GSAP Split Text
// All Pages Loader Animation – Split Lines
const pageLinesSplitText = gsap.timeline({ paused: true });
const pageLinesSplit = new SplitText("#page-loader-lines", { 
  type: "lines", 
  mask: "lines",
  lineClass: "line",
});

pageLinesSplitText.from(pageLinesSplit.lines, {
  duration: 0.5,
  y: "110%",
  autoAlpha: 0,
  stagger: 0.1,
  ease: "power4.out"
});

// GSAP Split Text
// All Pages Loader Animation – Text Secondary
const pageSecondarySplitText = gsap.timeline({ paused: true });
const pageSecondarySplit = new SplitText("#animate-secondary", { type: "words" });

pageSecondarySplitText.from(pageSecondarySplit.words, {
  duration: 0.5,
  y: "1rem",
  autoAlpha: 0,
  stagger: 0.05,
  ease: "power2.out"
});

// GSAP Split Text
// targets every [data-hero-tertiary] on the page
const heroEls = gsap.utils.toArray("[data-hero-tertiary]");

const heroTertiaryAnimation = gsap.from(heroEls, {
  autoAlpha: 0,
  duration: 0.5,
  ease: "power2.out",
  stagger: 0.2,   // each one starts 0.2s after the last
  paused: true
});


// GSAP Slplit Text – Animations
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      const lineElements = document.querySelectorAll("[data-split-lines]");
      const wordElements = document.querySelectorAll("[data-split-words]");
      const charsElements = document.querySelectorAll("[data-split-chars]");
      const caseStudyTitleElements = document.querySelectorAll("[data-split-case_study-title]");
      const caseStudyDescElements = document.querySelectorAll("[data-split-case_study-desc]");

      if (wordElements.length === 0 && lineElements.length === 0) return; // No elements found, exit
  
      lineElements.forEach(element => {
        if (!element.textContent.trim()) return; // Skip empty elements
        const lineSplit = new SplitText(element, { type: "lines" });
  
        gsap.from(lineSplit.lines, {
          autoAlpha: 0,
          translateY: "100%",
          delay: 0.3,
          duration: 1,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            toggleActions: "play none none none",
          },
        });
      });

      wordElements.forEach(element => {
        if (!element.textContent.trim()) return; // Skip empty elements
        const wordSplit = new SplitText(element, { type: "words" });
  
        gsap.from(wordSplit.words, {
          autoAlpha: 0,
          translateY: "100%",
          delay: 0.3,
          duration: 1,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            toggleActions: "play none none none",
          },
        });
      });

      charsElements.forEach(element => {
        if (!element.textContent.trim()) return; // Skip empty elements
        const charsSplit = new SplitText(element, { type: "chars, words" });
  
        gsap.from(charsSplit.chars, {
          autoAlpha: 0,
          translateY: "100%",
          duration: 1,
          delay: 0.3,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            toggleActions: "play none none none",
          },
        });
      });

      caseStudyTitleElements.forEach(element => {
        if (!element.textContent.trim()) return; // Skip empty elements
        const caseStudyTitleSplit = new SplitText(element, { type: "chars, words" });
  
        gsap.from(caseStudyTitleSplit.chars, {
          autoAlpha: 0,
          translateY: "50%",
          duration: 1,
          stagger: 0.02,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 50%",
            toggleActions: "play none none none",
          },
        });
      });

      caseStudyDescElements.forEach(element => {
        if (!element.textContent.trim()) return; // Skip empty elements
        const caseStudyDescSplit = new SplitText(element, { type: "lines" });
  
        gsap.from(caseStudyDescSplit.lines, {
          autoAlpha: 0,
          translateY: "50%",
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        });
      });
    }, 200); // Reduce delay
});


// Sub-title Waymaker – Fade In
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

// Plyr Video Gallery 
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

// Plyr Video Page Hero
$(".plyr_component.is-full-screen.is-page_hero").each(function (index) {
  let thisComponent = $(this);

  // create plyr settings
  let player = new Plyr(thisComponent.find(".plyr_video")[0], {
    controls: ["play", "progress", "current-time", "mute", "fullscreen"],
    resetOnEnd: true
  });
  
  // custom video cover
  thisComponent.find(".plyr_cover").on("click", function () {
    player.play();
  });
  
  player.on("ended", () => {
    thisComponent.removeClass("hide-cover");
  });

  // pause other playing videos when this one starts playing
  player.on("play", () => {
    $(".plyr_component.is-full-screen.is-page_hero").removeClass("hide-cover");
    thisComponent.addClass("hide-cover");

    let prevPlayingComponent = $(".plyr--playing")
      .closest(".plyr_component.is-full-screen.is-page_hero")
      .not(thisComponent);

    if (prevPlayingComponent.length > 0) {
      prevPlayingComponent.find(".plyr_pause-trigger")[0].click();
    }
  });

  thisComponent.find(".plyr_pause-trigger").on("click", function () {
    player.pause();
  });

  // exit full screen when video ends
  player.on("ended", () => {
    if (player.fullscreen.active) {
      player.fullscreen.exit();
    }
  });

  // set video to contain instead of cover when in full screen mode
  player.on("enterfullscreen", () => {
    thisComponent.addClass("contain-video");
  });

  player.on("exitfullscreen", () => {
    thisComponent.removeClass("contain-video");
  });

  // Pause video when clicking on .text-link-alternate.is-video_modal-close
  $(".text-link-alternate.is-video_modal-close").on("click", function() {
    player.pause();
  });

  // Play video service pages
  $(".image_full-service_hero-video").on("click", function() {
    player.play();
  });

    // Play video case study pages
    $(".case_study_hero-video-wrapper").on("click", function() {
      player.play();
    });

  // Play video home page
  $(".home-hero_video").on("click", function() {
    player.play();
  });
});


// Autoplay video tabs
$(function () {
  if ($(window).width() > 319) {

    function autoplayTabs($tabsMenu) {
      if ($tabsMenu.data('paused')) return;

      const $activeTab = $tabsMenu.find('.video-tabs_menu-item.is-active');
      let $nextTab = $activeTab.next('.video-tabs_menu-item');
      if ($nextTab.length === 0) {
        $nextTab = $tabsMenu.find('.video-tabs_menu-item:first');
      }
      $nextTab.trigger('click');
    }

    function startTimer($tabsMenu, timing) {
      if ($tabsMenu.data('paused')) return;

      clearInterval($tabsMenu.data('timer'));
      const timer = setInterval(() => autoplayTabs($tabsMenu), timing);
      $tabsMenu.data('timer', timer);

      animateProgressBar($tabsMenu, timing);
    }

    function animateProgressBar($tabsMenu, timing) {
      $tabsMenu.find('.video-tabs_progress-bar').stop().css({ width: '0%' });
      $tabsMenu.find('.video-tabs_menu-item.is-active .video-tabs_progress-bar')
        .animate({ width: '100%' }, timing);
    }

    function pauseTimer($tabsMenu) {
      clearInterval($tabsMenu.data('timer'));
      $tabsMenu.find('.video-tabs_progress-bar').stop();
      $tabsMenu.data('paused', true);
      console.log("tabs paused");
    }

    function resumeTimer($tabsMenu, timing) {
      $tabsMenu.data('paused', false);
      startTimer($tabsMenu, timing);
      console.log("tabs resumed");
    }

    function updateAutostart($stage) {
      const $video = $stage.find('.video-tabs-bg');
      const videoEl = $video[0];
      if ($stage.hasClass('is-active')) {
        $video.attr('autostart', '1');
        videoEl?.play().catch(err => console.log("Video play error:", err));
      } else {
        $video.attr('autostart', '0');
        if (videoEl) {
          videoEl.pause();
          videoEl.currentTime = 0;
        }
      }
    }

    function observeAutostart() {
      $('.video-tabs_stage').each(function () {
        const $stage = $(this);
        const observer = new MutationObserver(() => updateAutostart($stage));
        observer.observe($stage[0], { attributes: true, attributeFilter: ['class'] });
        updateAutostart($stage);
      });
    }

    $('[tab-function="autoplay"]').each(function () {
      const $tabsMenu = $(this);
      const timing = parseInt($tabsMenu.attr('tab-timing'));
      $tabsMenu.data('paused', false);

      $tabsMenu.find('.video-tabs_menu-item').on('click', function () {
        if ($tabsMenu.data('paused')) return;

        $tabsMenu.find('.video-tabs_menu-item').removeClass('is-active');
        $(this).addClass('is-active');
        startTimer($tabsMenu, timing);
      });

      // Start on scroll or immediately
      if ($tabsMenu.attr('tab-function-start') === 'scroll-into-view') {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              startTimer($tabsMenu, timing);
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.5 });

        observer.observe(this);
      } else {
        startTimer($tabsMenu, timing);
      }

      // Pause/resume on menu open/close
      const $navButton = $('.navigation_menu-button.w-nav-button');
      const navObserver = new MutationObserver(() => {
        if ($navButton.hasClass('w--open')) {
          pauseTimer($tabsMenu);
        } else {
          resumeTimer($tabsMenu, timing);
        }
      });
      navObserver.observe($navButton[0], { attributes: true, attributeFilter: ['class'] });
    });

    $('[tab-function="static"] .video-tabs_menu-item').on('click', function () {
      const $tabsMenu = $(this).closest('.video-tabs_menu');
      $tabsMenu.find('.video-tabs_menu-item').removeClass('is-active');
      $(this).addClass('is-active');
    });

    observeAutostart();
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
      delay: index * 0.1, // Stagger effect based on index
    }
  );
});


// Video Gallery – Show cursor on hover and follow mouse
const cursor = document.querySelector(".cursor-video_play-wrapper");
const videoStages = document.querySelectorAll(".video-tabs_stage, .case_study_hero-video-wrapper, .hero-video-wrapper, .image_full-service_hero-video");
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


// Case Studies CTA Image Effect
const root = document.querySelector('.section-case_study-cta');

if (!root) {
    // console.warn("Root element not found. Aborting script.");
} else {
    init(); // Run script only if root exists
}

function init() {
    // Store image sources in an array safely
    const imageElements = root.querySelectorAll('.case_study-cta_images-wrap img');
    const images = imageElements.length > 0 
        ? Array.from(imageElements).map(img => img.getAttribute('src')) 
        : [];

    if (images.length === 0) {
        console.warn("No images found. Aborting script.");
        return; // Exit early if no images exist
    }

    let incr = 0,               
        oldIncrX = 0,           
        oldIncrY = 0,           
        resetDist = window.innerWidth / 4, 
        indexImg = 0,           
        ticking = false;        

    const MAX_VELOCITY = 40;    

    // Update resetDist dynamically when window resizes
    window.addEventListener('resize', () => {
        resetDist = window.innerWidth / 4;
    });

    // Use requestAnimationFrame for better performance
    root.addEventListener('mousemove', e => {
        if (!ticking) {
            requestAnimationFrame(() => {
                handleMouseMove(e);
                ticking = false;
            });
            ticking = true;
        }
    });

    function handleMouseMove(e) {
        const valX = e.clientX;
        const valY = e.clientY;

        if (oldIncrX === 0 && oldIncrY === 0) {
            oldIncrX = valX;
            oldIncrY = valY;
            return;
        }

        incr += Math.abs(valX - oldIncrX) + Math.abs(valY - oldIncrY);

        if (incr > resetDist) {
            incr = 0;

            let deltaX = Math.min(Math.max(valX - oldIncrX, -MAX_VELOCITY), MAX_VELOCITY);
            let deltaY = Math.min(Math.max(valY - oldIncrY, -MAX_VELOCITY), MAX_VELOCITY);

            createMedia(valX, valY - root.getBoundingClientRect().top, deltaX, deltaY);
        }

        oldIncrX = valX;
        oldIncrY = valY;
    }

    function createMedia(x, y, deltaX, deltaY) {
        if (images.length === 0) return; // Extra safety check

        const image = document.createElement("img");
        image.setAttribute('src', images[indexImg]);
        image.style.position = 'absolute';
        image.style.pointerEvents = 'none';
        root.appendChild(image);

        const tl = gsap.timeline({
            onComplete: () => {
                image.remove();
                tl.kill();
            }
        });

        tl.fromTo(image, {
            xPercent: -50 + (Math.random() - 0.5) * 80,
            yPercent: -400 + (Math.random() - 0.5) * 10,
            scaleX: 1.3,
            scaleY: 1.3
        }, {
            scaleX: 1,
            scaleY: 1,
            ease: 'elastic.out(2, 0.6)',
            duration: 0.6
        });

        tl.fromTo(image, {
            x,
            y,
            rotation: (Math.random() - 0.5) * 20,
        }, {
            x: `+=${deltaX * 4}`,
            y: `+=${deltaY * 4}`,
            rotation: (Math.random() - 0.5) * 20,
            ease: 'power4.out',
            duration: 1.5
        }, '<');

        tl.to(image, {
            duration: 0.3,
            scale: 0.5,
            delay: 0.1,
            ease: 'back.in(1.5)'
        });

        indexImg = (indexImg + 1) % images.length;
    }
}



// Image Gallery – Infinite + Drag
let total = 0,
    xTo,
    itemValues = [],
    observerInstance; // Store Observer instance

window.addEventListener("DOMContentLoaded", () => {
    const content = document.querySelector('.gallery-wrapper');
    const cards = document.querySelectorAll('.gallery-item');
    const cardsLength = cards.length / 2;
    const half = content.clientWidth / 2;

    const wrap = gsap.utils.wrap(-content.scrollWidth / 2, 0);

    xTo = gsap.quickTo(content, "x", {
        duration: 0.5,
        ease: 'power3',
        modifiers: {
            x: gsap.utils.unitize(wrap),
        },
    });

    for (let i = 0; i < cardsLength; i++) {
        itemValues.push((Math.random() - 0.5) * 0); // Adjusted range – 0 is disabled
    }

    const tl = gsap.timeline({ paused: true });
    tl.to(cards, {
        rotate: (index) => itemValues[index % cardsLength],
        xPercent: (index) => itemValues[index % cardsLength],
        yPercent: (index) => itemValues[index % cardsLength],
        scale: 0.98,
        duration: 0.5,
        ease: 'back.inOut(3)',
    });

    function createObserver() {
        observerInstance = Observer.create({
            target: content,
            type: "pointer,touch",
            onPress: () => {
                tl.play();
                gsap.ticker.remove(tick); // Stop auto-scroll
            },
            onDrag: (self) => {
                total += self.deltaX;
                xTo(total);
            },
            onRelease: () => {
                tl.reverse();
                gsap.ticker.add(tick); // Resume auto-scroll
            },
            onStop: () => {
                tl.reverse();
                gsap.ticker.add(tick);
            },
        });
    }

    function destroyObserver() {
        if (observerInstance) {
            observerInstance.kill();
            observerInstance = null;
        }
    }

    gsap.ticker.add(tick);

    function tick(time, deltaTime) {
        total -= deltaTime / 10;
        xTo(total);
    }

    // Stop auto-scrolling when off the screen
    const visibilityObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                createObserver(); // Reinitialize GSAP Observer
                gsap.ticker.add(tick); // Resume auto-scroll
            } else {
                destroyObserver(); // Kill GSAP Observer
                gsap.ticker.remove(tick); // Stop auto-scroll
            }
        });
    }, { threshold: 0 });

    visibilityObserver.observe(content);

    // Stop auto-scrolling when tab is not visible
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            gsap.ticker.remove(tick); // Stop auto-scroll
        } else {
            gsap.ticker.add(tick); // Resume auto-scroll
        }
    });
});

// Image Gallery – Cursor follow mouse and show/hide on hover
document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".gallery-cursor-drag");
  const galleryWrapper = document.querySelector(".gallery-wrapper");

  if (!cursor || !galleryWrapper) return;

  // Make cursor always follow the mouse
  document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.2,
      ease: "power2.out"
    });
  });

  function showCursor() {
    if (window.innerWidth >= 992) {
      gsap.to(cursor, { autoAlpha: 1, duration: 0.3, ease: "power2.out" });
    }
  }

  function hideCursor() {
    gsap.to(cursor, { autoAlpha: 0, duration: 0.3, ease: "power2.out" });
  }

  galleryWrapper.addEventListener("mouseenter", showCursor);
  galleryWrapper.addEventListener("mouseleave", hideCursor);
});


// Case Studies – View all case studies link
// Scroll-triggered animation
gsap.fromTo(".text-link_line.is-case_study-link", 
  { opacity: 0, width: "0%" }, 
  { 
    opacity: 1,
    width: "100%",
    delay: 1,
    duration: 1, 
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".text-link-case_study",
      start: "top bottom",
      toggleActions: "play none none none"
    }
  }
);

// Hover animation
document.addEventListener("DOMContentLoaded", () => {
  const textLink = document.querySelector(".text-link-case_study");
  
  if (textLink) {
    textLink.addEventListener("mouseenter", () => {
      gsap.to(".text-link_line.is-case_study-link", { 
        x: "100%", 
        duration: 0.5, 
        ease: "power2.out",
        onComplete: () => {
          gsap.set(".text-link_line.is-case_study-link", { x: "-101%" });
          gsap.to(".text-link_line.is-case_study-link", { x: "0%", duration: 0.5, ease: "power2.out" });
        }
      });
    });
  }
});

// Text Link Alternate – Hover Line animation
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".text-link-alternate").forEach((textLink) => {
    const line = textLink.querySelector(".text-link_line.is-alternate");

    if (line) {
      // Scroll-triggered animation
      gsap.fromTo(line, 
        { width: "0%" }, 
        { 
          width: "100%",
          delay: 0.5,
          duration: 1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: textLink, // Trigger on the closest parent
            start: "top bottom",
            toggleActions: "play none none reset"
          }
        }
      );

      // Hover animation
      textLink.addEventListener("mouseenter", () => {
        gsap.to(line, { 
          x: "100%", 
          duration: 0.5, 
          ease: "power2.out",
          onComplete: () => {
            gsap.set(line, { x: "-101%" });
            gsap.to(line, { x: "0%", duration: 0.5, ease: "power2.out" });
          }
        });
      });
    }
  });
});

// Accordion Icon – Fade In 
gsap.utils.toArray(".accordion_icon").forEach((icon) => {
  gsap.fromTo(icon, 
    { autoAlpha: 0 }, 
    {
      autoAlpha: 1,
      delay: 0.75,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: icon,
        start: "top bottom", // adjust as needed
        toggleActions: "play none none none"
      }
    }
  );
});

// Footer Logo – Fade In 
gsap.utils.toArray(".footer_logo-link").forEach((logo) => {
  gsap.fromTo(logo, 
    { autoAlpha: 0 }, 
    {
      autoAlpha: 1,
      delay: 0.25,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: logo,
        start: "top bottom", // adjust as needed
        toggleActions: "play none none none"
      }
    }
  );
});

// Button White – Fade In 
gsap.utils.toArray(".button-white").forEach((buttonWhite) => {
  gsap.fromTo(buttonWhite, 
    { autoAlpha: 0 }, 
    {
      autoAlpha: 1,
      delay: 0.25,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: buttonWhite,
        start: "top bottom", // adjust as needed
        toggleActions: "play none none none"
      }
    }
  );
});

// Button Dark – Fade In 
gsap.utils.toArray(".button-white").forEach((buttonDark) => {
  gsap.fromTo(buttonDark, 
    { autoAlpha: 0 }, 
    {
      autoAlpha: 1,
      delay: 0.25,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: buttonDark,
        start: "top bottom", // adjust as needed
        toggleActions: "play none none none"
      }
    }
  );
});

// Social Link – Fade In 
gsap.utils.toArray(".social-link").forEach((socialLink) => {
  gsap.fromTo(socialLink, 
    { autoAlpha: 0 }, 
    {
      autoAlpha: 1,
      delay: 0.25,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: socialLink,
        start: "top bottom", // adjust as needed
        toggleActions: "play none none none"
      }
    }
  );
});


// Gallery Filter Modal – Open
document.addEventListener('DOMContentLoaded', () => {
  // Grab the core modal elements
  const modalWrap       = document.querySelector('.filter-modal-wrap');
  const modalOverlay    = document.querySelector('.filter-modal_background-overlay');
  const modalContent    = document.querySelector('.filter-modal_content-wrapper');
  const closeButton     = document.querySelector('.filter-modal_close-button');
  const openButtons     = document.querySelectorAll('.text-link-alternate.is-filters_open');
  const hasLenis        = typeof lenis !== 'undefined' && lenis !== null;

  // If any of the required modal pieces are missing, bail out
  if (!modalWrap || !modalOverlay || !modalContent) return;

  // Build GSAP timelines targeting the actual elements
  const filterModalOpen = gsap.timeline({ paused: true })
    .set(modalWrap,    { display: 'block' })
    .from(modalOverlay, { duration: 0.5, opacity: 0, ease: 'power3.inOut' })
    .from(modalContent, { duration: 0.5, x: '100%',   ease: 'power3.inOut' }, '<');

  const filterModalClose = gsap.timeline({ paused: true })
    .to(modalOverlay, { duration: 0.5, opacity: 0, ease: 'power3.inOut' })
    .to(modalContent, { duration: 0.5, x: '100%',   ease: 'power3.inOut' }, '<')
    .add(() => gsap.set(modalWrap, { display: 'none' }));

  // Attach open handlers
  openButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterModalOpen.restart();
      if (hasLenis) lenis.stop();
    });
  });

  // Attach close handlers
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      filterModalClose.restart();
      if (hasLenis) lenis.start();
    });
  }
  modalOverlay.addEventListener('click', () => {
    filterModalClose.restart();
    if (hasLenis) lenis.start();
  });
});



// SplitText 
document.fonts.ready.then(() => {
  document.querySelectorAll("[data-word-reveal='true']").forEach((text) => {

    const split = SplitText.create(text.children, {
      type: "lines",
      mask: "lines",
      linesClass: "line",
      autoSplit: true,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: text,
        start: "top bottom",
        end: "top 80%",
        toggleActions: "none play none reset",
      },
    });
    tl.from(split.lines, {
      yPercent: 110,
      delay: 0.2,
      duration: 0.8,
      stagger: { amount: 0.5 },
    });

    gsap.set(text, { visibility: "visible" });
  });
});

/*
// Split Text – Lines
document.fonts.ready.then(() => {
  // ensure targets are visible (but still masked)
  gsap.set("[data-split-lines]", { opacity: 1 });

  document.querySelectorAll("[data-split-lines]").forEach(el => {
    // 1. Split into lines, mask them, and get the SplitText instance
    const split = SplitText.create(el, {
      type: "lines",
      linesClass: "line",
      autoSplit: true,
      mask: "lines"
    });

    // 2. Animate with ScrollTrigger, then clean up on leave
    gsap.from(split.lines, {
      duration: 1,
      yPercent: 100,
      autoAlpha: 0,
      stagger: 0.1,
      ease: "power4.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: el,
        start: "top bottom",              // when el.top hits viewport bottom
        toggleActions: "play none none none",
        onLeave:    () => split.revert(), // clean up when scrolling past
        onLeaveBack:() => split.revert()  // clean up if scrolling back up
      }
    });
  });
});
*/


/*
// Masonry Grid
function initMasonryGrid() {
  document.querySelectorAll('[data-masonry-list]').forEach(container => {
    const shuffle = container.dataset.masonryShuffle !== 'false';
    let cols, gapPx, colHeights;

    // Take columns and gaps from CSS
    const getVars = () => {
      const cs = getComputedStyle(container);
      cols = parseInt(cs.getPropertyValue('--masonry-col'));
      const rawGap = cs.getPropertyValue('--masonry-gap').trim();
      if (rawGap.endsWith('px')) {
        gapPx = parseFloat(rawGap);
      } else if (rawGap.endsWith('em')) {
        gapPx = parseFloat(rawGap) * parseFloat(cs.fontSize);
      } else if (rawGap.endsWith('rem')) {
        gapPx = parseFloat(rawGap) * parseFloat(getComputedStyle(document.documentElement).fontSize);
      } else {
        gapPx = parseFloat(rawGap);
      }
    };
    
    // Set the layout
    const layout = () => {
      getVars();
      const wCalc = `(100% - ${(cols - 1)}*var(--masonry-gap)) / ${cols}`;
      colHeights = Array(cols).fill(0);
      container.style.position = 'relative';
      const items = Array.from(container.children);

      items.forEach(el => {
        el.style.position = 'absolute';
        el.style.width = `calc(${wCalc})`;
      });

      items.forEach((el, i) => {
        const h = el.offsetHeight;
        const idx = shuffle
          ? colHeights.indexOf(Math.min(...colHeights))
          : (i % cols);
        el.style.top  = `${colHeights[idx]}px`;
        el.style.left = `calc(${wCalc}*${idx} + var(--masonry-gap)*${idx})`;
        colHeights[idx] += h + gapPx;
      });

      container.style.height = `${Math.max(...colHeights)}px`;
    };

    // Debounce function to use on resize
    const debounce = (fn, delay) => {
      let t;
      return () => {
        clearTimeout(t);
        t = setTimeout(fn, delay);
      };
    };

    const onResize = debounce(layout, 100);
    window.addEventListener('resize', onResize);

    // Return promise if images are loaded
    const imgLoad = () => {
      const imgs = container.querySelectorAll('img');
      return Promise.all(Array.from(imgs).map(img =>
        img.complete ? Promise.resolve() : new Promise(r => img.addEventListener('load', r))
      ));
    };

    // When images are ready, set the layout
    imgLoad().then(layout);

    // Constructor with destroy and recalc function
    container._masonry = {
      recalc: () => imgLoad().then(layout),
      destroy: () => {
        window.removeEventListener('resize', onResize);
        const items = Array.from(container.children);
        items.forEach(el => {
          el.style.position =
          el.style.width =
          el.style.top =
          el.style.left = '';
        });
        container.style.position =
        container.style.height = '';
      }
    };
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initMasonryGrid();
});


// Lightbox
gsap.defaults({
  ease: "power4.inOut",
  duration: 0.8,
});

function createLightbox(container, {
  onStart,
  onOpen,
  onClose,
  onCloseComplete
} = {}) {
  
    // Get only visible triggers (not hidden by filters)
    const allTriggers = container.querySelectorAll('[data-lightbox="trigger"]');
    const allItems = container.querySelectorAll('[data-lightbox="item"]');
    
    const visibleTriggers = Array.from(allTriggers).filter(trigger => {
      const galleryItem = trigger.closest('.gallery-grid__item');
      if (!galleryItem) return true; // If no gallery item wrapper, assume visible
      
      const style = window.getComputedStyle(galleryItem);
      return style.display !== 'none';
    });
    
    // Get corresponding lightbox items for visible triggers only
    const visibleItems = visibleTriggers.map((trigger, index) => {
      // Find the original index of this trigger in the full list
      const originalIndex = Array.from(allTriggers).indexOf(trigger);
      return allItems[originalIndex];
    }).filter(item => item); // Remove any undefined items

    const elements = {
      wrapper: container.querySelector('[data-lightbox="wrapper"]'),
      triggers: visibleTriggers,
      triggerParents: container.querySelectorAll('[data-lightbox="trigger-parent"]'),
      items: visibleItems,
      nav: container.querySelectorAll('[data-lightbox="nav"]'),
      counter: {
        current: container.querySelector('[data-lightbox="counter-current"]'),
        total: container.querySelector('[data-lightbox="counter-total"]')
      },
      buttons: {
        prev: container.querySelector('[data-lightbox="prev"]'),
        next: container.querySelector('[data-lightbox="next"]'),
        close: container.querySelector('[data-lightbox="close"]')
      }
    };

    // Create our main timeline that will coordinate all animations
    const mainTimeline = gsap.timeline();

    // Store event listeners so we can remove them later
    const eventListeners = [];
    
    // Flag to prevent conflicts during opening/closing
    let isAnimating = false;
    
    // Failsafe to reset animation flag if it gets stuck
    let animationTimeout;
    function resetAnimationFlag() {
      clearTimeout(animationTimeout);
      animationTimeout = setTimeout(() => {
                if (isAnimating) {
        // console.log('⚠️ Animation flag stuck, resetting...');
        isAnimating = false;
      }
      }, 5000); // 5 second failsafe
    }

    // ————————— COUNTER ————————— //
    // console.log(`✅ COUNTER: ${elements.triggers.length} triggers, ${elements.items.length} items`);
    
    if (elements.counter.total) {
      elements.counter.total.textContent = elements.items.length;
    }
    
    
    // ————————— CLOSE FUNCTION ————————— //
    function closeLightbox() {
      if (isAnimating) {
        console.log('⚠️ Already animating, skipping close');
        return;
      }
      
      isAnimating = true;
      // console.log('🔒 Starting close animation...');
      resetAnimationFlag(); // Start failsafe timer
      
      // Remove outside click listener immediately
      container.removeEventListener('click', handleOutsideClick);
      // console.log('🔇 Outside click listener disabled');
      
      // on close callback
      onClose?.();
      
      // First, we clear any running animations to prevent conflicts
      mainTimeline.clear();
      gsap.killTweensOf([
        elements.wrapper, 
        elements.nav, 
        elements.triggerParents, 
        elements.items,
        container.querySelector('[data-lightbox="original"]')
      ]);
      
      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        onComplete: () => {
          elements.wrapper.classList.remove('is-active');
          
          // Show all hidden images in lightbox items
          elements.items.forEach(item => {
            item.classList.remove('is-active');
            const lightboxImage = item.querySelector('img');
            if (lightboxImage) {
              lightboxImage.style.display = '';
            }
          });
          
          // Clear any lingering transform properties on the original image
          const originalImg = container.querySelector('[data-lightbox="original"]');
          if (originalImg) { gsap.set(originalImg, { clearProps: "all" });}
          
          // Remove the fixed height from the trigger parent
          const originalParent = container.querySelector('[data-lightbox="original-parent"]');
          if (originalParent) { originalParent.parentElement.style.removeProperty('height'); }

          // Find the grid, and then re-init the layout
          const masonryGrid = document.querySelector('[data-masonry-list]');
          masonryGrid._masonry.recalc();
          
          // on close complete callback
          onCloseComplete?.();
          
                        // Reset animation flag
            clearTimeout(animationTimeout); // Clear failsafe timer
            isAnimating = false;
            // console.log('🔓 Close animation complete');
        }
      });
  
      // First, find and move back the original item
      const originalItem = container.querySelector('[data-lightbox="original"]');
      const originalParent = container.querySelector('[data-lightbox="original-parent"]');
      
      if (originalItem && originalParent) {
        // Before moving the item back, clear its transforms
        gsap.set(originalItem, { clearProps: "all" });
        
        // Find the button inside the parent to put the image back correctly
        const originalButton = originalParent.querySelector('[data-lightbox="trigger"]');
        if (originalButton) {
          // Move the image back into the button, not just the parent
          originalButton.appendChild(originalItem);
          // console.log('✅ Image restored to button correctly');
        } else {
          // Fallback: move to parent if button not found
          originalParent.appendChild(originalItem);
          // console.log('⚠️ Button not found, using parent fallback');
        }
        
        // Restore the original data-lightbox attribute instead of removing it completely
        originalParent.setAttribute('data-lightbox', 'trigger-parent');
        originalItem.removeAttribute('data-lightbox');
        // console.log('🔄 Restored trigger-parent attribute on:', originalParent);
      }
      
      // Find active slide
      let activeLightboxSlide = container.querySelector('[data-lightbox="item"].is-active')

      // Return animation
      tl.to(elements.triggerParents, {
        autoAlpha: 1,
        duration: 0.5,
        overwrite: true
      })
      .to(elements.nav, {
        autoAlpha: 0,
        y: "1rem",
        duration: 0.4,
        stagger: 0
      },"<")
      .to(elements.wrapper, {
        backgroundColor: "rgba(0,0,0,0)",
        duration: 0.4
      }, "<")
      .to(activeLightboxSlide,{
        autoAlpha:0,
        duration: 0.4,
      },"<")
      .set([elements.items, activeLightboxSlide, elements.triggerParents],  { clearProps: "all" })
    
      // Add this timeline to our main timeline
      mainTimeline.add(tl);
      
    }


    // ————————— CLICK-OUTSIDE FUNCTIONALITY ————————— //
    function handleOutsideClick(event) {
      if (event.detail === 0) {
        return;
      }
      
      // Don't allow outside clicks while animating
      if (isAnimating) {
        // console.log('⚠️ Ignoring outside click during animation');
        return;
      }
    
      const clickedElement = event.target;
      const isOutside = !clickedElement.closest('[data-lightbox="item"].is-active img, [data-lightbox="nav"], [data-lightbox="close"], [data-lightbox="trigger"]');
        
      if (isOutside) {
        // console.log('👆 Outside click detected, closing lightbox');
        closeLightbox();
      }
    }


    // ————————— TOGGLE ACTIVE ITEM IN LIGHTBOX ————————— //
    function updateActiveItem(index) {
      elements.items.forEach(item => item.classList.remove('is-active'));
      elements.items[index].classList.add('is-active');
        
      if (elements.counter.current) {
        elements.counter.current.textContent = index + 1;
      }
      
      // Always update total counter to reflect current visible items
      if (elements.counter.total) {
        elements.counter.total.textContent = elements.items.length;
      }
      
      // Force update counters directly as backup
      const currentCounterDirect = container.querySelector('[data-lightbox="counter-current"]');
      const totalCounterDirect = container.querySelector('[data-lightbox="counter-total"]');
      
      if (currentCounterDirect) {
        currentCounterDirect.textContent = index + 1;
      }
      if (totalCounterDirect) {
        totalCounterDirect.textContent = elements.items.length;
      }
    }


    // ————————— CLICK TO OPEN ————————— //
    // console.log(`📎 Setting up ${elements.triggers.length} click handlers`);
    elements.triggers.forEach((trigger, index) => {
      const clickHandler = () => {
        // console.log(`🖱️ Trigger ${index} clicked`);
        
        if (isAnimating) {
          // console.log('⚠️ Already animating, skipping open');
          return;
        }
        
        isAnimating = true;
        // console.log('🔒 Starting open animation...');
        resetAnimationFlag(); // Start failsafe timer
        
        // On start of open callback
        onStart?.();
        
        // Clear any running animations before starting new ones
        mainTimeline.clear();
        gsap.killTweensOf([
          elements.wrapper, 
          elements.nav, 
          elements.triggerParents
        ]);
        
        const img = trigger.querySelector("img")
        const state = Flip.getState(img);
        
        // Store the trigger's current height before the FLIP animation
        // So the grid does not collapse
        const triggerParentEl = trigger.closest('[data-lightbox="trigger-parent"]');
        if (!triggerParentEl) {
          // console.error('❌ trigger-parent not found for trigger:', trigger);
          // console.log('🔍 Available parents:', trigger.parentElement, trigger.closest('.gallery-grid__item'));
          // console.log('🔍 All trigger-parents in container:', container.querySelectorAll('[data-lightbox="trigger-parent"]'));
          isAnimating = false; // Reset flag to prevent getting stuck
          return;
        }
        // console.log('✅ Found trigger-parent:', triggerParentEl);
        const triggerRect = triggerParentEl.getBoundingClientRect();
        triggerParentEl.style.height = `${triggerRect.height}px`;
        
      
        // Save element and parent that was clicked
        triggerParentEl.setAttribute('data-lightbox', 'original-parent');
        img.setAttribute('data-lightbox', 'original');
        
        
        // Set correct lightbox item to visible (using filtered index)
        updateActiveItem(index);
        
        
        // Start listening for clicks outside of lightbox after a delay
        // This prevents immediate closing from the same click that opened it
        setTimeout(() => {
          if (elements.wrapper.classList.contains('is-active')) {
            container.addEventListener('click', handleOutsideClick);
            // console.log('👂 Outside click listener enabled');
          }
        }, 100);
        
        const tl = gsap.timeline({
          onComplete: () => {
            // On open callback
            onOpen?.();
            
            // Reset animation flag after open completes
            clearTimeout(animationTimeout); // Clear failsafe timer
            isAnimating = false;
            // console.log('🔓 Open animation complete');
          }
        });
        elements.wrapper.classList.add('is-active');
        const targetItem = elements.items[index];
        
        // Hide the original image in the lightbox item
        const lightboxImage = targetItem.querySelector('img');
        if (lightboxImage) {
          lightboxImage.style.display = 'none';
        }
  
        // Fade out other grid items
        elements.triggerParents.forEach(otherTriggerParent => {
          if (otherTriggerParent !== triggerParentEl) {
            gsap.to(otherTriggerParent, {
              autoAlpha: 0,
              duration: 0.4,
              stagger:0.02,
              overwrite: true
            });
          }
        });
  
        // Flip clicked image into lightbox
        if (!targetItem.contains(img)) {
          // Store reference to original button for safety
          const originalButton = img.parentElement;
          targetItem.appendChild(img);
          
          tl.add(
            Flip.from(state, {
              targets: img,
              absolute: true,
              duration: 0.6,
              ease: "power2.inOut",
              // Ensure image doesn't get orphaned during animation
              onComplete: () => {
                // console.log('📸 FLIP animation complete');
              }
            }), 0
          );
        }
        
        // Animate in our navigation and background
        tl.to(elements.wrapper, {
          backgroundColor: "rgba(14,5,102,0.95)",
          duration: 0.6
        }, 0)
        .fromTo(elements.nav, {
          autoAlpha: 0,
          y: "1rem"
        }, {
          autoAlpha: 1,
          y: "0rem",
          duration: 0.6,
          stagger: { each: 0.05, from: "center" }
        }, 0.2);
        
        // Add this timeline to our main timeline
        mainTimeline.add(tl);
        
      };

      trigger.addEventListener('click', clickHandler);
      eventListeners.push({ element: trigger, type: 'click', handler: clickHandler });
    });


    // ————————— NAV BUTTONS ————————— //
    if (elements.buttons.next) {
      const nextHandler = () => {
        const currentIndex = Array.from(elements.items).findIndex(item => 
          item.classList.contains('is-active')
        );
        const nextIndex = (currentIndex + 1) % elements.items.length;
        updateActiveItem(nextIndex);
      };
      elements.buttons.next.addEventListener('click', nextHandler);
      eventListeners.push({ element: elements.buttons.next, type: 'click', handler: nextHandler });
    }

    if (elements.buttons.prev) {
      const prevHandler = () => {
        const currentIndex = Array.from(elements.items).findIndex(item => 
          item.classList.contains('is-active')
        );
        const prevIndex = (currentIndex - 1 + elements.items.length) % elements.items.length;
        updateActiveItem(prevIndex);
      };
      elements.buttons.prev.addEventListener('click', prevHandler);
      eventListeners.push({ element: elements.buttons.prev, type: 'click', handler: prevHandler });
    }

    if (elements.buttons.close) {
      elements.buttons.close.addEventListener('click', closeLightbox);
      eventListeners.push({ element: elements.buttons.close, type: 'click', handler: closeLightbox });
    }


    // ————————— KEYBOARD NAV ————————— //
    const keyboardHandler = (event) => {
      if (!elements.wrapper.classList.contains('is-active')) return;
      switch (event.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowRight':
          elements.buttons.next?.click();
          break;
        case 'ArrowLeft':
          elements.buttons.prev?.click();
          break;
      }
    };
    document.addEventListener('keydown', keyboardHandler);
    eventListeners.push({ element: document, type: 'keydown', handler: keyboardHandler });

    // Return cleanup function
    return {
      destroy: () => {
        // Close lightbox if open
        if (elements.wrapper.classList.contains('is-active')) {
          closeLightbox();
        }
        
        // Remove all event listeners
        eventListeners.forEach(({ element, type, handler }) => {
          element.removeEventListener(type, handler);
        });
        
        // Clear animations
        mainTimeline.clear();
        gsap.killTweensOf([
          elements.wrapper, 
          elements.nav, 
          elements.triggerParents, 
          elements.items
        ]);
      }
    };
}

  document.addEventListener("DOMContentLoaded", () => {
  let lightboxInstances = new Map();
  
  // Initialize lightboxes - now only for visible items
  function initializeLightboxes() {
    // console.log('=== INITIALIZING LIGHTBOXES ===');
    let wrappers = document.querySelectorAll("[data-gallery]");
    // console.log(`Found ${wrappers.length} gallery wrappers`);
    
    wrappers.forEach((wrapper, index) => {
      // console.log(`Processing wrapper ${index + 1}:`);
      
      // Count visible triggers in this wrapper
      const allTriggers = wrapper.querySelectorAll('[data-lightbox="trigger"]');
      const visibleTriggers = Array.from(allTriggers).filter(trigger => {
        const galleryItem = trigger.closest('.gallery-grid__item');
        if (!galleryItem) return true;
        const style = window.getComputedStyle(galleryItem);
        const isVisible = style.display !== 'none';
        // console.log(`  - Trigger ${Array.from(allTriggers).indexOf(trigger)}: ${isVisible ? 'VISIBLE' : 'HIDDEN'}`);
        return isVisible;
      });
      
      // console.log(`  📊 Total: ${allTriggers.length}, Visible: ${visibleTriggers.length}`);
      
      // If we already have an instance for this wrapper, destroy it first
      if (lightboxInstances.has(wrapper)) {
        // console.log(`  - Destroying existing instance`);
        lightboxInstances.get(wrapper).destroy();
      }
      
      // Create new lightbox instance
      const instance = createLightbox(wrapper, {
        onStart: () => {
          if (typeof lenis !== 'undefined') lenis.stop();
          // console.log("Starting");
        },
        onOpen: () => {
          if (typeof lenis !== 'undefined') lenis.stop();
          // console.log("Open");
        },
        onClose: () => {
          if (typeof lenis !== 'undefined') lenis.start();
          // console.log("Closing");
        },
        onCloseComplete: () => {
          if (typeof lenis !== 'undefined') lenis.start();
          // console.log("Done");
        }
      });
      
      lightboxInstances.set(wrapper, instance);
      // console.log(`  - Created new lightbox instance`);
    });
    
    // console.log(`=== LIGHTBOX INIT COMPLETE: ${lightboxInstances.size} instances ===`);
  }
  
  // Function to get visible gallery items count
  function getVisibleGalleryCount() {
    const galleryContainer = document.querySelector('.gallery-grid.w-dyn-items');
    if (!galleryContainer) return 0;
    
    // Count only visible items (not hidden by Finsweet filter)
    const allItems = galleryContainer.querySelectorAll('.gallery-grid__item');
    const visibleItems = Array.from(allItems).filter(item => {
      const style = window.getComputedStyle(item);
      return style.display !== 'none';
    });
    
    return visibleItems.length;
  }
  
  // Initial setup
  initializeLightboxes();

      // Simple function to reinitialize lightboxes
  function reinitLightboxes() {
    // console.log('🔄 REINITIALIZING LIGHTBOXES...');
    
    // Check for and fix any broken button structures before reinit
    const brokenButtons = document.querySelectorAll('[data-lightbox="trigger"]:not(:has(img))');
    brokenButtons.forEach(button => {
      const parentItem = button.closest('.gallery-grid__item');
      const orphanedImg = parentItem?.querySelector('img:not([data-lightbox="trigger"] img)');
      if (orphanedImg) {
        // console.log('🔧 Fixing orphaned image');
        button.appendChild(orphanedImg);
      }
    });

    // Find the grid, and then re-init the layout
    const masonryGrid = document.querySelector('[data-masonry-list]');
    masonryGrid._masonry.recalc();
    
    // Destroy all existing lightbox instances
    // console.log(`Destroying ${lightboxInstances.size} existing instances`);
    lightboxInstances.forEach((instance, wrapper) => {
      instance.destroy();
    });
    lightboxInstances.clear();
    
    // Small delay to ensure DOM is stable
    setTimeout(() => {
      // console.log('🔧 Creating new lightbox instances...');
      initializeLightboxes();
    }, 50);
  }

  // Hook into Finsweet List API (simpler approach)
  window.FinsweetAttributes = window.FinsweetAttributes || [];
  window.FinsweetAttributes.push([
    'list',
    (listInstances) => {
      // console.log('Finsweet List API loaded');
      
      // Get the first list instance (assuming one gallery)
      const [listInstance] = listInstances;
      
      if (listInstance) {
        // console.log('List instance found, setting up hooks');
        
        let isFirstRender = true;
        
        // Hook into the afterRender phase - this runs after items are filtered/shown
        listInstance.addHook('afterRender', (items) => {
          // console.log(`🎯 FINSWEET AFTER RENDER: ${items.length} items visible`);
          
          // Skip the first render (initial page load) to avoid double initialization
          if (isFirstRender) {
            // console.log('⏭️ Skipping first render (already initialized)');
            isFirstRender = false;
            return items;
          }
          
          // Small delay to ensure DOM is updated
          setTimeout(() => {
            // console.log(`⏰ Triggering reinit after filter...`);
            reinitLightboxes();   
          }, 100);
          
          return items; // Always return the items
        });
      }
    },
  ]);
});


/*
$(document).ready( function () {
  setTimeout(function() {
      function resizeGridItem(item){
        grid = document.getElementsByClassName("gallery-grid")[0];
        rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
        rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
        rowSpan = Math.ceil((item.querySelector('.gallery-item__button').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
          item.style.gridRowEnd = "span "+rowSpan;
      }
  
      function resizeAllGridItems(){
        allItems = document.getElementsByClassName("gallery-grid__item");
        for(x=0;x<allItems.length;x++){
          resizeGridItem(allItems[x]);
        }
      }
  
      function resizeInstance(instance){
          item = instance.elements[0];
        resizeGridItem(item);
      }
  
      window.onload = resizeAllGridItems();
      window.addEventListener("resize", resizeAllGridItems);
  
      allItems = document.getElementsByClassName("gallery-grid__item");
      for(x=0;x<allItems.length;x++){
        imagesLoaded( allItems[x], resizeInstance);
      }
      
      setTimeout(function(){ resizeInstance() }, 100);
    }, 800);
})
*/

/*
// ————————————————————————————————————————————————————————————————
// 1) MasonryHelper: measures full item height, uses Math.ceil
// ————————————————————————————————————————————————————————————————
window.MasonryHelper = (() => {
  const grid = document.querySelector(".gallery-grid");
  let rowHeight, rowGap;

  function recalcMetrics() {
    const style = window.getComputedStyle(grid);
    rowHeight = parseInt(style.getPropertyValue("grid-auto-rows"), 10);
    rowGap    = parseInt(style.getPropertyValue("grid-row-gap"), 10);
  }

  function resizeGridItem(item) {
    // measure the *entire* item
    const h = item.getBoundingClientRect().height;
    // how many rows (plus gaps) we need
    const span = Math.ceil((h + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = `span ${span}`;
  }

  function resizeAllGridItems() {
    recalcMetrics();
    document.querySelectorAll(".gallery-grid__item")
      .forEach(resizeGridItem);
  }

  return { resizeAllGridItems, resizeGridItem };
})();


// ————————————————————————————————————————————————————————————————
// 2) Initial layout & image‐load hooks
// ————————————————————————————————————————————————————————————————
$(document).ready(() => {
  // initial layout (delay for any dynamic items)
  setTimeout(() => {
    window.MasonryHelper.resizeAllGridItems();
  }, 800);

  // recalc on viewport resize
  window.addEventListener("resize", window.MasonryHelper.resizeAllGridItems);

  // per‐item: when its images load, resize just that cell
  document.querySelectorAll(".gallery-grid__item").forEach(item => {
    imagesLoaded(item, () => {
      window.MasonryHelper.resizeGridItem(item);
    });
  });

  // once *all* grid images load, do a full recalc
  const gridEl = document.querySelector(".gallery-grid");
  if (gridEl) {
    imagesLoaded(gridEl, () => {
      window.MasonryHelper.resizeAllGridItems();
    });
  }
});


// ————————————————————————————————————————————————————————————————
// 3) GSAP lightbox factory (full implementation, reflow on close)
// ————————————————————————————————————————————————————————————————
gsap.defaults({ ease: "power4.inOut", duration: 0.8 });

function createLightbox(container, { onStart, onOpen, onClose, onCloseComplete } = {}) {
  const allTriggers = container.querySelectorAll('[data-lightbox="trigger"]');
  const allItems    = container.querySelectorAll('[data-lightbox="item"]');

  // only those not hidden by filters
  const visibleTriggers = Array.from(allTriggers).filter(trigger => {
    const item = trigger.closest(".gallery-grid__item");
    return !item || getComputedStyle(item).display !== "none";
  });
  const visibleItems = visibleTriggers
    .map(t => allItems[ Array.from(allTriggers).indexOf(t) ])
    .filter(Boolean);

  const elements = {
    wrapper:        container.querySelector('[data-lightbox="wrapper"]'),
    triggers:       visibleTriggers,
    triggerParents: container.querySelectorAll('[data-lightbox="trigger-parent"]'),
    items:          visibleItems,
    nav:            container.querySelectorAll('[data-lightbox="nav"]'),
    counter: {
      current: container.querySelector('[data-lightbox="counter-current"]'),
      total:   container.querySelector('[data-lightbox="counter-total"]')
    },
    buttons: {
      prev:  container.querySelector('[data-lightbox="prev"]'),
      next:  container.querySelector('[data-lightbox="next"]'),
      close: container.querySelector('[data-lightbox="close"]')
    }
  };

  const mainTimeline   = gsap.timeline();
  const eventListeners = [];
  let isAnimating      = false;
  let animationTimeout;

  function resetAnimationFlag() {
    clearTimeout(animationTimeout);
    animationTimeout = setTimeout(() => { isAnimating = false; }, 5000);
  }

  if (elements.counter.total) {
    elements.counter.total.textContent = elements.items.length;
  }

  // ————————— CLOSE ————————— //
  function closeLightbox() {
    if (isAnimating) return;
    isAnimating = true;
    resetAnimationFlag();
    container.removeEventListener("click", handleOutsideClick);
    onClose?.();
    mainTimeline.clear();
    gsap.killTweensOf([
      elements.wrapper, elements.nav,
      elements.triggerParents, elements.items,
      container.querySelector('[data-lightbox="original"]')
    ]);

    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      onComplete: () => {
        elements.wrapper.classList.remove("is-active");
        elements.items.forEach(it => {
          it.classList.remove("is-active");
          const img = it.querySelector("img");
          if (img) img.style.display = "";
        });
        const origImg = container.querySelector('[data-lightbox="original"]');
        if (origImg) gsap.set(origImg, { clearProps: "all" });
        const origParent = container.querySelector('[data-lightbox="original-parent"]');
        if (origParent) origParent.parentElement.style.removeProperty("height");
        onCloseComplete?.();
        // ←— reflow masonry after close
        window.MasonryHelper.resizeAllGridItems();
        clearTimeout(animationTimeout);
        isAnimating = false;
      }
    });

    const origItem   = container.querySelector('[data-lightbox="original"]');
    const origParent = container.querySelector('[data-lightbox="original-parent"]');
    if (origItem && origParent) {
      gsap.set(origItem, { clearProps: "all" });
      const btn = origParent.querySelector('[data-lightbox="trigger"]');
      (btn || origParent).appendChild(origItem);
      origParent.setAttribute("data-lightbox", "trigger-parent");
      origItem.removeAttribute("data-lightbox");
    }

    const active = container.querySelector('[data-lightbox="item"].is-active');
    tl.to(elements.triggerParents, { autoAlpha: 1, duration: 0.5 })
      .to(elements.nav, { autoAlpha: 0, y: "1rem", duration: 0.4 }, "<")
      .to(elements.wrapper, { backgroundColor: "rgba(0,0,0,0)", duration: 0.4 }, "<")
      .to(active, { autoAlpha: 0, duration: 0.4 }, "<")
      .set([elements.items, active, elements.triggerParents], { clearProps: "all" });

    mainTimeline.add(tl);
  }

  // ————————— OUTSIDE‐CLICK ————————— //
  function handleOutsideClick(e) {
    if (e.detail === 0 || isAnimating) return;
    const outside = !e.target.closest(
      '[data-lightbox="item"].is-active img, [data-lightbox="nav"], [data-lightbox="close"], [data-lightbox="trigger"]'
    );
    if (outside) closeLightbox();
  }

  // ————————— UPDATE ACTIVE ————————— //
  function updateActiveItem(i) {
    elements.items.forEach(it => it.classList.remove("is-active"));
    elements.items[i].classList.add("is-active");
    if (elements.counter.current) elements.counter.current.textContent = i+1;
    if (elements.counter.total)   elements.counter.total.textContent   = elements.items.length;
  }

  // ————————— OPEN TRIGGERS ————————— //
  elements.triggers.forEach((trigger, idx) => {
    const handler = () => {
      if (isAnimating) return;
      isAnimating = true;
      resetAnimationFlag();
      onStart?.();
      mainTimeline.clear();
      gsap.killTweensOf([elements.wrapper, elements.nav, elements.triggerParents]);

      const img    = trigger.querySelector("img");
      const state  = Flip.getState(img, {props: "borderRadius"});
      const parent = trigger.closest('[data-lightbox="trigger-parent"]');
      const rect   = parent.getBoundingClientRect();
      parent.style.height = `${rect.height}px`;
      parent.setAttribute("data-lightbox", "original-parent");
      img.setAttribute("data-lightbox", "original");

      updateActiveItem(idx);

      setTimeout(() => {
        if (elements.wrapper.classList.contains("is-active")) {
          container.addEventListener("click", handleOutsideClick);
        }
      }, 100);

      const tl = gsap.timeline({ onComplete: () => {
        onOpen?.();
        clearTimeout(animationTimeout);
        isAnimating = false;
      }});
      elements.wrapper.classList.add("is-active");

      const target = elements.items[idx];
      const lbImg  = target.querySelector("img");
      if (lbImg) lbImg.style.display = "none";

      elements.triggerParents.forEach(tp => {
        if (tp !== parent) gsap.to(tp, { autoAlpha: 0, duration: 0.4, stagger: 0.02 });
      });

      if (!target.contains(img)) {
        target.appendChild(img);
        tl.add(Flip.from(state, {
          targets: img,
          absolute: true,
          duration: 0.6,
          ease: "power2.inOut"
        }), 0);
      }

      tl.to(elements.wrapper, { backgroundColor: "rgba(14,5,102,0.95)", duration: 0.6 }, 0)
        .fromTo(elements.nav, { autoAlpha: 0, y: "1rem" }, {
          autoAlpha: 1, y: "0rem", duration: 0.6,
          stagger: { each: 0.05, from: "center" }
        }, 0.2);

      mainTimeline.add(tl);
    };

    trigger.addEventListener("click", handler);
    eventListeners.push({ element: trigger, type: "click", handler });
  });

  // ————————— NAV BUTTONS ————————— //
  if (elements.buttons.next) {
    const nextH = () => {
      const i = elements.items.findIndex(it => it.classList.contains("is-active"));
      updateActiveItem((i+1) % elements.items.length);
    };
    elements.buttons.next.addEventListener("click", nextH);
    eventListeners.push({ element: elements.buttons.next, type: "click", handler: nextH });
  }
  if (elements.buttons.prev) {
    const prevH = () => {
      const i = elements.items.findIndex(it => it.classList.contains("is-active"));
      updateActiveItem((i-1 + elements.items.length) % elements.items.length);
    };
    elements.buttons.prev.addEventListener("click", prevH);
    eventListeners.push({ element: elements.buttons.prev, type: "click", handler: prevH });
  }
  if (elements.buttons.close) {
    elements.buttons.close.addEventListener("click", closeLightbox);
    eventListeners.push({ element: elements.buttons.close, type: "click", handler: closeLightbox });
  }

  // ————————— KEYBOARD ————————— //
  const keyH = e => {
    if (!elements.wrapper.classList.contains("is-active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") elements.buttons.next?.click();
    if (e.key === "ArrowLeft")  elements.buttons.prev?.click();
  };
  document.addEventListener("keydown", keyH);
  eventListeners.push({ element: document, type: "keydown", handler: keyH });

  return {
    destroy() {
      if (elements.wrapper.classList.contains("is-active")) closeLightbox();
      eventListeners.forEach(({ element, type, handler }) => {
        element.removeEventListener(type, handler);
      });
      mainTimeline.clear();
      gsap.killTweensOf([elements.wrapper, elements.nav, elements.triggerParents, elements.items]);
    }
  };
}


// ————————————————————————————————————————————————————————————————
// 4) Initialize & re-init lightboxes + Finsweet hook
// ————————————————————————————————————————————————————————————————
document.addEventListener("DOMContentLoaded", () => {
  let lightboxInstances = new Map();

  function initializeLightboxes() {
    document.querySelectorAll("[data-gallery]").forEach(wrapper => {
      if (lightboxInstances.has(wrapper)) {
        lightboxInstances.get(wrapper).destroy();
      }
      const instance = createLightbox(wrapper, {
        onStart:         () => { if (window.lenis) lenis.stop(); },
        onOpen:          () => { if (window.lenis) lenis.stop(); },
        onClose:         () => { if (window.lenis) lenis.start(); },
        onCloseComplete: () => {
          if (window.lenis) lenis.start();
          window.MasonryHelper.resizeAllGridItems();
        }
      });
      lightboxInstances.set(wrapper, instance);
    });
  }

  initializeLightboxes();

  function reinitLightboxes() {
    lightboxInstances.forEach(inst => inst.destroy());
    lightboxInstances.clear();
    setTimeout(initializeLightboxes, 50);
  }

  window.FinsweetAttributes = window.FinsweetAttributes || [];
  window.FinsweetAttributes.push([
    "list",
    listInstances => {
      const [listInstance] = listInstances;
      if (!listInstance) return;
      let first = true;
      listInstance.addHook("afterRender", items => {
        if (first) { first = false; return items; }
        setTimeout(() => {
          window.MasonryHelper.resizeAllGridItems();
          reinitLightboxes();
        }, 100);
        return items;
      });
    }
  ]);
});
</script>
<script>
// Show/Hide 'clear all' button when filter is selected
window.FinsweetAttributes ||= [];
window.FinsweetAttributes.push([
  'list',
  (listInstances) => {
    const [listInstance] = listInstances;

    const clearBtn = document.querySelector('[fs-list-element="clear"]');
    const filtersForm = document.querySelector('[fs-list-element="filters"]');

    const isFilterActive = () =>
      Array.from(filtersForm.querySelectorAll('input, select, textarea'))
        .some(ctrl =>
          (ctrl.type === 'checkbox' || ctrl.type === 'radio')
            ? ctrl.checked
            : ctrl.value.trim() !== ''
        );

    const toggleClear = () => {
      if (clearBtn) {
        clearBtn.style.display = isFilterActive() ? 'block' : 'none';
      }
    };

    toggleClear();
    filtersForm.addEventListener('change', toggleClear);

    listInstance.addHook('afterRender', items => {
      toggleClear();
      return items;
    });
  },
]);

*/

// Button Stagger Animation
function initButtonCharacterStagger() {
  const offsetIncrement = 0.01; // Transition offset increment in seconds
  const buttons = document.querySelectorAll('[data-button-animate-chars]');

  buttons.forEach(button => {
    const text = button.textContent; // Get the button's text content
    button.innerHTML = ''; // Clear the original content

    [...text].forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.transitionDelay = `${index * offsetIncrement}s`;

      // Handle spaces explicitly
      if (char === ' ') {
        span.style.whiteSpace = 'pre'; // Preserve space width
      }

      button.appendChild(span);
    });
  });
}

// Initialize Button Character Stagger Animation
document.addEventListener('DOMContentLoaded', () => {
  initButtonCharacterStagger();
});


// CSS Marquee
// Note: The Javascript is optional. Read the documentation below how to use the CSS Only version.

function initCSSMarquee() {
  const pixelsPerSecond = 100; // Set the marquee speed (pixels per second)
  const marquees = document.querySelectorAll('[data-css-marquee]');
  
  // Duplicate each [data-css-marquee-list] element inside its container
  marquees.forEach(marquee => {
    marquee.querySelectorAll('[data-css-marquee-list]').forEach(list => {
      const duplicate = list.cloneNode(true);
      marquee.appendChild(duplicate);
    });
  });

  // Create an IntersectionObserver to check if the marquee container is in view
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.querySelectorAll('[data-css-marquee-list]').forEach(list => 
        list.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused'
      );
    });
  }, { threshold: 0 });
  
  // Calculate the width and set the animation duration accordingly
  marquees.forEach(marquee => {
    marquee.querySelectorAll('[data-css-marquee-list]').forEach(list => {
      list.style.animationDuration = (list.offsetWidth / pixelsPerSecond) + 's';
      list.style.animationPlayState = 'paused';
    });
    observer.observe(marquee);
  });
}

// Initialize CSS Marquee
document.addEventListener('DOMContentLoaded', function() {
  initCSSMarquee();
});




// Modal Popup
function initModalBasic() {

  const modalGroup = document.querySelector('[data-modal-group-status]');
  const modals = document.querySelectorAll('[data-modal-name]');
  const modalTargets = document.querySelectorAll('[data-modal-target]');

  // Open modal
  modalTargets.forEach((modalTarget) => {
    modalTarget.addEventListener('click', function () {
      const modalTargetName = this.getAttribute('data-modal-target');

      // Close all modals
      modalTargets.forEach((target) => target.setAttribute('data-modal-status', 'not-active'));
      modals.forEach((modal) => modal.setAttribute('data-modal-status', 'not-active'));

      // Activate clicked modal
      document.querySelector(`[data-modal-target="${modalTargetName}"]`).setAttribute('data-modal-status', 'active');
      document.querySelector(`[data-modal-name="${modalTargetName}"]`).setAttribute('data-modal-status', 'active');

      // Set group to active
      if (modalGroup) {
        modalGroup.setAttribute('data-modal-group-status', 'active');
      }
    });
  });

  // Close modal
  document.querySelectorAll('[data-modal-close]').forEach((closeBtn) => {
    closeBtn.addEventListener('click', closeAllModals);
  });

  // Close modal on `Escape` key
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeAllModals();
    }
  });

  // Function to close all modals
  function closeAllModals() {
    modalTargets.forEach((target) => target.setAttribute('data-modal-status', 'not-active'));
    
    if (modalGroup) {
      modalGroup.setAttribute('data-modal-group-status', 'not-active');
    }
  }
}

// Initialize Basic Modal
document.addEventListener('DOMContentLoaded', () => {
  initModalBasic();
});


// Gallery Scroll Top On Pagination Click
// Simulate click on #back-to-top when any element with data-scroll_link-top is clicked
document.addEventListener("click", function(e) {
  const target = e.target.closest("[data-scroll_link-top]");
  if (target) {
    e.preventDefault(); // optional: stop the default link behavior
    const backToTop = document.querySelector("#back-to-top");
    if (backToTop) {
      setTimeout(() => {
        backToTop.click();
      }, 1); // delay in ms (change 500 to whatever you need)
    }
  }
});

