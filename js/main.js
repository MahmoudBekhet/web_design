window.onload = function() {
  if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    window.scrollTo(0, 0);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  
  var navbar = document.getElementById('navbar');
  var joinBtn = document.getElementById("join-now")
  var navbarNav = document.getElementById('navbar-nav');
  var navbarBrand = document.getElementById("navbar-brand")
  var navbarIcon = document.getElementById("navbar-icon")
  
  function dataAdd() {
    navbar.classList.add('navbar-edited');
    joinBtn.classList.add('join-edited');
    navbarNav.classList.add("navbar-nav-edited")
    navbarBrand.classList.add("navbar-brand-edited")
    navbarIcon.classList.add("navbar-toggler-edited")
  }
  
  function dataRemove() {
    navbar.classList.remove('navbar-edited');
    joinBtn.classList.remove('join-edited');
    navbarNav.classList.remove("navbar-nav-edited")
    navbarBrand.classList.remove("navbar-brand-edited")
    navbarIcon.classList.remove("navbar-toggler-edited")
  }
  
  window.addEventListener('scroll', function () {
    
    var scrollPosition = window.scrollY;
    var scrollThreshold = window.innerHeight * 1;
    var width = window.innerWidth;
    
    if ((scrollPosition >= scrollThreshold )) {dataAdd()}
    else{
      dataRemove()
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".animated-content");
  
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }
  
  const observer = new IntersectionObserver(handleIntersection, { threshold: 0.75 });
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
});

