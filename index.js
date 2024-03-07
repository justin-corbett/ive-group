// Initialize GSAP
gsap.registerPlugin();

// GSAP timeline navigation desktop
var tl = gsap.timeline();

tl.set('.navigation-dropdown-bg-wrapper', { display: "block" })
  .to('.navigation-dropdown-slide', { duration: 0.5, opacity: 1, y: "0%", ease: "power2.out" })
  .to('.navigation-bg-main', { duration: 0.5, opacity: 1, ease: "power2.out" }, "-=0.5")
  .to('.hr-navigation', { duration: 0.5, y: "6rem", ease: "power2.out" }, "-=0.5")
  .to('.navigation-bg-title', { duration: 0.5, y: "0%", ease: "power2.out" }, "-=0.5")
;

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

// Desktop Navigation End