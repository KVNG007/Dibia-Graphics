var about = document.getElementById("about");
var service = document.getElementById("service");
var portfolio = document.getElementById("portfolio");
var contact = document.getElementById("contact");
var toTop = document.getElementById("backtotop");
var devWidth = window.innerWidth;
console.log(devWidth)

about.addEventListener("click", (e)=> {
    e.preventDefault();
    
   if(devWidth >= 780) {
    window.scrollTo({
        top: 600,
        left: 0,
        behavior: "smooth"
    });
   }
   else if (devWidth <= 480) {
    window.scrollTo({
        top: 420,
        left: 0,
        behavior: "smooth"
    });
   }
   else {
    window.scrollTo({
        top: 600,
        left: 0,
        behavior: "smooth"
    });
   }
});

service.addEventListener("click", (e)=> {
    e.preventDefault();
    
   if(devWidth >= 780) {
    window.scrollTo({
        top: 1250,
        left: 0,
        behavior: "smooth"
    });
   }
   else if (devWidth <= 480) {
    window.scrollTo({
        top: 820,
        left: 0,
        behavior: "smooth"
    });
   }
   else {
    window.scrollTo({
        top: 1160,
        left: 0,
        behavior: "smooth"
    });
   }
});
portfolio.addEventListener("click", (e)=> {
    e.preventDefault();
    
   if(devWidth >= 780) {
    window.scrollTo({
        top: 1865,
        left: 0,
        behavior: "smooth"
    });
   }
   else if (devWidth <= 480) {
    window.scrollTo({
        top: 1540,
        left: 0,
        behavior: "smooth"
    });
   }
   else {
    window.scrollTo({
        top: 1940,
        left: 0,
        behavior: "smooth"
    });
   }
});
contact.addEventListener("click", (e)=> {
    e.preventDefault();
    
   if(devWidth >= 780) {
    window.scrollTo({
        top: 3000,
        left: 0,
        behavior: "smooth"
    });
   }
   else if (devWidth <= 480) {
    window.scrollTo({
        top: 3540,
        left: 0,
        behavior: "smooth"
    });
   }
   else {
    window.scrollTo({
        top: 3000,
        left: 0,
        behavior: "smooth"
    });
   }
});

toTop.addEventListener("click", (e)=> {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})