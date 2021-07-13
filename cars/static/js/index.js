document.addEventListener("DOMContentLoaded", function () {

  ( () => {
    "use strict";
  
    // var carousels = () => {
    //   $(".owl-carousel").owlCarousel({
    //     loop: true,
    //     center: true,
    //     margin: 0,
    //     responsiveClass: true,
    //     nav: false,
    //     // autoplay: true,
    //     // autoplayTimeout: 5000,
    //     // autoplayHoverPause: true,
    //     responsive: {
    //       0: {
    //         items: 1,
    //         nav: false
    //       },
    //       680: {
    //         items: 2,
    //         nav: false,
    //         // loop: false
    //       },
    //       1000: {
    //         items: 3,
    //         nav: false
    //       }
    //     }
    //   });
    // };
    
    var carousels = () => {
      $('.owl-carousel').owlCarousel({
        // stagePadding: 200,
        // autoWidth: true,
        center: true,
        loop: true,
        // margin: 10,
        items: 3,
        lazyLoad: true,
        // responsiveClass: true,
        nav: false,
        // responsive: {
        //   0: {
        //       items: 1,
        //       stagePadding: 60
        //   },
        //   600: {
        //       items: 1,
        //       stagePadding: 100
        //   },
        //   1000: {
        //       items: 1,
        //       stagePadding: 200
        //   },
        //   1200: {
        //       items: 1,
        //       stagePadding: 250
        //   },
        //   1400: {
        //       items: 1,
        //       stagePadding: 300
        //   },
        //   1600: {
        //       items: 1,
        //       stagePadding: 350
        //   },
        //   1800: {
        //       items: 1,
        //       stagePadding: 400
        //   }
        // }
      })
    };
    // $(":checkbox").change( () => {
    //   console.log("hihi");
    // });
    ( $ => {
      carousels();
    })(jQuery);
  })();
  
  


  // var header = document.getElementById("myHeader");
  // var lastScrollY = 0;

  // window.addEventListener("scroll", function () {
  //   var st = this.scrollY;
  //   // 判斷是向上捲動，而且捲軸超過 200px
  //   if (st < lastScrollY) {
  //     header.classList.remove("hideUp");
  //   } else {
  //     header.classList.add("hideUp");
  //   }
  //   lastScrollY = st;
  // });

  let search = document.querySelector(".search");
  let searchIcon = document.querySelector(".search__icon");
  let searchInput = document.querySelector(".search__input");
  let searchClose = document.querySelector(".search__close");
  let searchDelete = document.querySelector(".search__delete");
  
  searchIcon.addEventListener("mouseover", () => {
    search.classList.add("search-open");
    searchClose.style.visibility = "visible";
    searchInput.focus();
  });

  searchInput.addEventListener("mouseout", () => {
    if( searchInput.value == "" )
    {  
      search.classList.remove("search-open");
      searchInput.blur();
      searchClose.style.visibility = "hidden";
    }
  });

  searchClose.addEventListener("click", () => {
    searchClose.style.visibility = "hidden";
    search.classList.remove("search-open");
    searchInput.value = "";
  });

  searchDelete.addEventListener("click", () => {
    searchInput.value = "";
    searchInput.focus();
  });


  let idx = 0;
  let textItem = document.querySelectorAll('.quote');
  let time = 10000;

  function changeText() {
    textItem[idx].classList.remove("active");
    ( idx < textItem.length - 1 ) ? idx++ : idx=0;
    textItem[idx].classList.add("active");
    // console.log(textItem[idx]);

    setTimeout(() => {
      changeText();
    }, time);
  }

  changeText();

  let menuToggler = document.querySelector('.menu-toggler');
  let menuClose = document.querySelector('.menu-close');
  let navItem = document.querySelector('.side-navbar');

  menuToggler.addEventListener("click", () => {
    if( navItem.classList.contains("active") )
    {
      navItem.classList.remove("active");
      // navItem.style.width = "0";
      // navItem.style.boxShadow = null;
    }
    else
    {
      navItem.classList.add("active");
      // navItem.style.width = "100px";
      // navItem.style.boxShadow = "rgba(255, 255, 255, 0.9) -2px 0px 8px 5px";
    }
  });

  menuClose.addEventListener("click", () => {
    if( navItem.classList.contains("active") )
      navItem.classList.remove("active");
  });

});
