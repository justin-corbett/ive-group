// Navigation Background
$(document).ready(function() {
    // Function to add or remove class based on the state of .navigation_dropdown-toggle
    function updateClasses() {
        if ($('.navigation_dropdown-toggle').hasClass('w--open')) {
            $('.navigation-dropdown-bg').addClass('is-active');
        } else {
            $('.navigation-dropdown-bg').removeClass('is-active');
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
});


// Navigation open
$(document).ready(function() {
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

// Navigation about hover
$(document).ready(function() {
    $('.navigation_dropdown-toggle.is-about').hover(function() {
        aboutHoverIn();
    }, function() {
        aboutHoverOut();
    });
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
    } else if ($('.navigation_dropdown-toggle.is-services').hasClass('w--open') || $('.navigation_dropdown-toggle.is-case_studies').hasClass('w--open') || $('.navigation_dropdown-toggle.is-investors').hasClass('w--open') )  {
        $('.navigation_dropdown-toggle.is-about').addClass('is-inactive');
    }
}

// Navigation services hover
$(document).ready(function() {
    $('.navigation_dropdown-toggle.is-services').hover(function() {
        servicesHoverIn();
    }, function() {
        servicesHoverOut();
    });
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
    } else if ($('.navigation_dropdown-toggle.is-about').hasClass('w--open') || $('.navigation_dropdown-toggle.is-case_studies').hasClass('w--open') || $('.navigation_dropdown-toggle.is-investors').hasClass('w--open') )  {
        $('.navigation_dropdown-toggle.is-services').addClass('is-inactive');
    }
}

// Navigation case studies hover
$(document).ready(function() {
    $('.navigation_dropdown-toggle.is-case_studies').hover(function() {
        casestudiesHoverIn();
    }, function() {
        casestudiesHoverOut();
    });
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
    } else if ($('.navigation_dropdown-toggle.is-about').hasClass('w--open') || $('.navigation_dropdown-toggle.is-services').hasClass('w--open') || $('.navigation_dropdown-toggle.is-investors').hasClass('w--open') )  {
        $('.navigation_dropdown-toggle.is-case_studies').addClass('is-inactive');
    }
}

// Navigation investors hover
$(document).ready(function() {
    $('.navigation_dropdown-toggle.is-investors').hover(function() {
        investorsHoverIn();
    }, function() {
        investorsHoverOut();
    });
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
    } else if ($('.navigation_dropdown-toggle.is-about').hasClass('w--open') || $('.navigation_dropdown-toggle.is-services').hasClass('w--open') || $('.navigation_dropdown-toggle.is-case_studies').hasClass('w--open') )  {
        $('.navigation_dropdown-toggle.is-investors').addClass('is-inactive');
    }
}


