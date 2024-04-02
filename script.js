//locomotive js (jisse loader ke baad animation nahi ho raha hai)
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.container'),
//     smooth: true,
// });

// // following cursor
// gsap.set(".following", {xPercent: -60, yPercent: -60});

// const followdot = document.querySelector(".following");
// const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2, rotation:0 };
// const mouse = { x: pos.x, y: pos.y };

// window.addEventListener("mousemove", e => {    
//   mouse.x = e.x;
//   mouse.y = e.y;  
  
//   var dx = mouse.x - pos.x;
//   var dy = mouse.y - pos.y; 

//   gsap.to(followdot, {x:mouse.x, duration:0.5})
//   gsap.to(followdot, {y:mouse.y, duration:1.2})
  
// });



var tl = gsap.timeline()
// loader
var a = 0;
function time(){
    setInterval(function(){
     a = a + Math.floor(Math.random()*20)
     if(a<100){
      document.querySelector(".loader h1").innerHTML = a+"%"
  
     }else{
      a = 100
      document.querySelector(".loader h1").innerHTML = a+"%"
     }
    
    }, 100)  
}
time()
tl.to(".loader h1",{
  scale: 1.5,
  delay: 0,
  duration: 1.5,
})
tl.to(".loader",{
  top: "-100vh",
  delay: 0,
  duration: 1.5,
})
gsap.from(".nav-item",{
    x: -100,
    opacity: 0,
    duration: 1.1,
    delay: 0.5,
    stagger: 0.2,
})
tl.from("#sec1 img ",{
  scale: 0,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#sec1 img",
    scroll: "body",
    start: "top 10%",
    end: "top 30%",
    scrub: 5,
}
})
tl.from("#sec1 h1, #sec1 #h3, #sec1 h4, #sec1 p ",{
    y: 30,
    opacity: 0,
    duration: 1.1,
    stagger:0.4
})

tl.to(".navbar-brand",{
    y: 30,
    repeat: -1,
    duration: 0.5,
    yoyo: true,
})

// about section
tl.from("#aboutme ",{
    scale: 0,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#aboutme",
    }
  })
  tl.from("#aboutmebreef",{
    y: 30,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "aboutmebreef",
        scroll: "body",
        scrub: 5
    }
})

// sskill section start

tl.from("#skillsection ",{
    scale: 0,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: "#skillsection",
  })
  tl.from("#skillsbreef ",{
    scale: 0,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: "#skillsbreef",
  })

//   work secction start

gsap.from("#cardssection ",{
    x: -1300,
    delay: 2,
    duration: 1,
    scrollTrigger: "#cardssection",
  })

// footer
gsap.from("footer ",{
    scale: 0,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "footer",
    }
  })
  // Scroll animations
gsap.registerPlugin(ScrollTrigger);

// Example animation
gsap.to("footer", {
    opacity: 0,
    scrollTrigger: {
        trigger: "footer",
        start: "top center", // Change this according to your needs
        end: "bottom center", // Change this according to your needs
        scrub: true // Smooth animation
    }
});