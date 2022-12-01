// Navbar Scroll Event
const navBar = document.querySelector(".nav-bar");
const hamburgerMenu = document.querySelector(".hamburger");
const menuBtns = document.querySelectorAll(".menu-btn");
const subMenuBtns = document.querySelectorAll(".nav-content");

// const subMenuClicks = document.querySelectorAll(".menu-content ul li a")

// ____ PARALLAX ____ 
const rightBottomContainer = document.querySelector(".hero-img-right");
const leftTopContainer = document.querySelector(".hero-img-left");
const heroRightBottom = document.querySelector(".hero-img-right img");
const heroLeftTop = document.querySelector(".hero-img-left img");
const heroWrapper = document.querySelector(".heading-wrapper");

// window.addEventListener("scroll", function (ev) {
//   console.log(ev.scrollY = "px");
// })

const cards = document.querySelectorAll('.card');

function checkScreenWidth(maxWidth) {
  if (maxWidth.matches) {
    navBar.classList.remove("active-desktop");

    // Mobile Scroll max-width 650px
    window.addEventListener('scroll', function (e) {
      if (window.scrollY > document.documentElement.clientHeight) {
        hamburgerMenu.classList.add("active");
      }
    });

    // Hamburger Menu Toggle Open & Close
    hamburgerMenu.addEventListener('click', function (e) {
        navBar.classList.toggle("active-mobile");
    });

    // Menu Button Actions
    // subMenuSearch.addEventListener("click", (e) => {

    // });

    menuBtns.forEach(menuBtn => {
      menuBtn.addEventListener("click", (e) => {
        subMenuBtns.forEach(subMenuBtn => {
          
          // REMOVE IF NOT FIXED DOWN TO COMMENT
          // if (navBar.classList.contains("active-mobile")) {
            // subMenusClicks.forEach(subMenuClick => {
            //   subMenuClick.addEventListener("click", (e) => {
            //     navBar.classList.remove("active-mobile");
            //   });
            // });


            // subMenuClick.addEventListener("click", (e) => {
            //   navBar.classList.remove("active-mobile");
            // });
          // }
          // REMOVE ABOVE IF NOT FIXED _________
          subMenuBtn.classList.remove("active");
          
        });

        let nextSibling = e.target.nextElementSibling;
        nextSibling.classList.add("active");
      });

      

    });

    // // Alternativ för MOBIL
    // ____ TEST FÖR PARALLAX ____
    document.addEventListener("scroll", (e) => {
      leftTopContainer.style.transform = `translateY(${1 + window.scrollY * -0.5 + "px"})`;
      rightBottomContainer.style.transform = `translateY(${1 + window.scrollY * 1.5 + "px"})`;
      heroLeftTop.style.transform = `scale(${1 + window.scrollY * 0.005})`;
      heroRightBottom.style.transform = `scale(${1 + window.scrollY * 0.005}), 200`;
    });
  } 
  else 
  {
    hamburgerMenu.classList.remove("active");
    navBar.classList.remove("active-mobile");
    // Desktop Scroll & Hover
    window.addEventListener('scroll', function (e) {
      if (window.scrollY > document.documentElement.clientHeight - 150) {
        navBar.classList.add("active-desktop")
      } else {
        navBar.classList.remove("active-desktop")
      }
    });
    // Menu Button Actions
    menuBtns.forEach(menuBtn => {
      menuBtn.addEventListener("mouseenter", (e) => {
        subMenuBtns.forEach(subMenuBtn => {
          subMenuBtn.classList.remove("active");
        });
        let nextSibling = e.target.nextElementSibling;
        // let nextSibling = e.target.previousElementSibling;
        nextSibling.classList.add("active");
      })
    });
    // Alternativ för DESKTOP
    // ____ TEST FÖR PARALLAX ____
    document.addEventListener("scroll", (e) => {
      rightBottomContainer.style.transform = `translateX(${1 + window.scrollY * 1 + "px"})`;
      heroRightBottom.style.transform = `scale(${1 + window.scrollY * 0.001})`;
      leftTopContainer.style.transform = `translateX(${1 + window.scrollY * -1 + "px"})`;
      heroLeftTop.style.transform = `scale(${1 + window.scrollY * 0.001})`;
      // if (window.scrollY < 200) {
      //   heroWrapper.style.transform = `translateY(${-62 + window.scrollY * 1 + "px"})`;
      // }
    }) 
  }
}

const maxWidth = window.matchMedia("(max-width: 750px)")
checkScreenWidth(maxWidth) // Call listener function at run time
maxWidth.addListener(checkScreenWidth) // Attach listener function on state changes



cards.forEach( card => {
  card.addEventListener('click', e => {
    if (e.target == card) {
      e.target.classList.add('active');
    }
  })
  const closeBtn = card.querySelector('i')
  if (closeBtn) {
    console.log(closeBtn);
    closeBtn.addEventListener('click', e => {
      e.target.offsetParent.classList.remove('active')
    })
  }
})

window.onscroll = function (e) {
  console.log(window.scrollY); // Value of scroll Y in px
};