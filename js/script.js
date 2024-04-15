
(function() {
    "use strict";
  
    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }
  
    /**
     * Scroll top button
     */
    let scrollTop = document.querySelector('.scroll-top');
  
    function toggleScrollTop() {
      if (scrollTop) {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
    }
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  
    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);
  
    /**
     * Terapkan kelas .scrolled pada body saat halaman digulir ke bawah
     */
    function toggleScrolled() {
      const selectBody = document.querySelector('body');
      const selectHeader = document.querySelector('#header');
      if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
      window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    }
  
    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);
  
    /**
     * Header yang menempel ketika menggulir ke atas untuk header dengan kelas .scroll-up-sticky
     */
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
      const selectHeader = document.querySelector('#header');
      if (!selectHeader.classList.contains('scroll-up-sticky')) return;
  
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      if (scrollTop > lastScrollTop && scrollTop > selectHeader.offsetHeight) {
        selectHeader.style.setProperty('position', 'sticky', 'important');
        selectHeader.style.top = `-${header.offsetHeight + 50}px`;
      } else if (scrollTop > selectHeader.offsetHeight) {
        selectHeader.style.setProperty('position', 'sticky', 'important');
        selectHeader.style.top = "0";
      } else {
        selectHeader.style.removeProperty('top');
        selectHeader.style.removeProperty('position');
      }
      lastScrollTop = scrollTop;
    });
  
    /**
     * Mobile nav toggle
     */
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  
    function mobileNavToogle() {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    }
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  
    /**
     * sembunyikan mobile nav 
     */
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToogle();
        }
      });
  
    });
  
    /**
     * Toggle mobile nav dropdowns
     */
    document.querySelectorAll('.navmenu .has-dropdown i').forEach(navmenu => {
      navmenu.addEventListener('click', function(e) {
        if (document.querySelector('.mobile-nav-active')) {
          e.preventDefault();
          this.parentNode.classList.toggle('active');
          this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
          e.stopImmediatePropagation();
        }
      });
    });
  
    /**
     * Koreksi posisi penelusuran saat halaman dimuat untuk URL yang mengandung tautan hash.
     */
    window.addEventListener('load', function(e) {
      if (window.location.hash) {
        if (document.querySelector(window.location.hash)) {
          setTimeout(() => {
            let section = document.querySelector(window.location.hash);
            let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
            window.scrollTo({
              top: section.offsetTop - parseInt(scrollMarginTop),
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    });
  
  
    /**
     * Init swiper sliders
     */
    function initSwiper() {
      document.querySelectorAll('.swiper').forEach(function(swiper) {
        let config = JSON.parse(swiper.querySelector('.swiper-config').innerHTML.trim());
        new Swiper(swiper, config);
      });
    }
    window.addEventListener('load', initSwiper);
  
    /**
     * Animation on scroll function and init
     */
    function aosInit() {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
    window.addEventListener('load', aosInit);

  
  })();