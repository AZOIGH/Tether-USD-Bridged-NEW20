/*
Template Name: TEHTER USDT.w – Landing Page
Author: GrayGrids
*/

(function () {
    //===== Prealoder

    window.onload = function () {
        window.setTimeout(fadeout, 500);
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }


    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        var logo = document.querySelector('.navbar-brand img')
        if (window.pageYOffset > sticky) {
          header_navbar.classList.add("sticky");
          logo.src = 'assets/images/logo/Newlogo.png';
        } else {
          header_navbar.classList.remove("sticky");
          logo.src = 'assets/images/logo/Newlogo.png';
        }

        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    // WOW active
    new WOW().init();

    //===== mobile-menu-btn
    let navbarToggler = document.querySelector(".mobile-menu-btn");
    navbarToggler.addEventListener('click', function () {
        navbarToggler.classList.toggle("active");
    });

    //===== Theme system (light/dark + accents)
    (function () {
        var docEl = document.documentElement;

        // Default to dark regardless of OS preference
        var savedTheme = localStorage.getItem('theme') || 'dark';
        var savedAccent = localStorage.getItem('accent') || 'green';
        docEl.setAttribute('data-theme', savedTheme);
        docEl.setAttribute('data-accent', savedAccent);

        var toggleBtn = document.querySelector('.theme-toggle-nav') || document.querySelector('.theme-switcher .toggle-mode');
        var accentBtns = document.querySelectorAll('.theme-switcher .accent-dot');

        function setIcon(mode) {
            if (!toggleBtn) return;
            var i = toggleBtn.querySelector('i');
            if (!i) return;
            i.className = (mode === 'light') ? 'lni lni-moon' : 'lni lni-sun';
        }
        setIcon(savedTheme);

        if (toggleBtn) {
            toggleBtn.addEventListener('click', function () {
                var current = docEl.getAttribute('data-theme') || 'dark';
                var next = current === 'light' ? 'dark' : 'light';
                docEl.setAttribute('data-theme', next);
                localStorage.setItem('theme', next);
                setIcon(next);
            });
        }

        if (accentBtns && accentBtns.length) {
            accentBtns.forEach(function (btn) {
                btn.classList.toggle('active', (btn.getAttribute('data-accent') === savedAccent));
                btn.addEventListener('click', function () {
                    var value = btn.getAttribute('data-accent') || 'green';
                    docEl.setAttribute('data-accent', value);
                    localStorage.setItem('accent', value);
                    accentBtns.forEach(function (b) {
                        b.classList.toggle('active', b === btn);
                    });
                });
            });
        }
    })();


})();