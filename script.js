var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor_blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+30+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x-200+"px"
    blur.style.top = dets.y-200+"px"

    // gsap.to("#cursor", {
    //     x: dets.x,
    //     y: dets.y
    // })
    // gsap.to("#cursor_blur", {
    //     x: dets.x - 200,
    //     y: dets.y - 200
    // })
})
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale =3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor ="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale =1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor ="#95C11E"
    })
})

gsap.to("#nav",{
    backgroundColor: "#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers: true,
        start:"top -8%",
        end:"top -9%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})
gsap.from("#about_us img,#about_us_in", {
    y: 90,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: "#about_us",
      scroller: "body",
    //   markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 2,
    },
  });

  gsap.from(".card", {
    scale:0.8,
    opacity: 0,
    duration: 1,
    // stagger:0.1,
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
    //   markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });
  gsap.from("#quote1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#quote1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
  });
  gsap.from("#quote2",{
    y:70,
    x:-70,
    scrollTrigger:{
        trigger:"#quote2",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
  });
gsap.from("#page4 h2",{
  y:65,
  scrollTrigger:{
    trigger:"#page4 h2",
    scroller:"body",
    // markers:true,
    start:"top 75%",
    end:"top 70%",
    scrub:2
  }
})

//It also supports NodeList
// VanillaTilt.init(document.querySelectorAll(".your-element"));