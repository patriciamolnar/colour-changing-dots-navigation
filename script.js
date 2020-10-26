window.addEventListener('DOMContentLoaded', setup);

function setup() {

    const navLinks = document.querySelectorAll('.nav-link'); 

    function showHideNav() {
                
        navLinks.forEach(navLink => {
           const opacity = window.getComputedStyle(navLink).getPropertyValue("opacity");  
            
           if(opacity == 0) {
                navLink.classList.add('fade-in');
           } else {
            navLink.classList.remove('fade-in');
           }
        });

    }

    const burger = document.getElementById('nav'); 
    burger.addEventListener('click', showHideNav, false); 

    /* Opening and closing nav when tabbing */
    burger.addEventListener('keyup', function(e) {
        if (e.key === "Tab") {
             showHideNav(); 
        }
    }); 

    const lastLink = navLinks[navLinks.length-1];
    lastLink.addEventListener('keydown', function(e) {
        if (e.key === "Tab") {
             showHideNav(); 
        }
    }); 
}