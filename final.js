function locomotive(){
    
 gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
locomotive();

function loadingAnimation(){
var tl= gsap.timeline()
tl.from(".line h1",{
    y:100,
    delay:0.6,
    duration:0.6,
    opacity:0,
    stagger:0.2,
})
tl.from("#line1-part1, .line h2",{
    opacity:0,
    onStart:function(){    // onStart is a builtin with a function
        var h5= document.querySelector("#line1-part1 h5");
var count=0;
var int = setInterval(function(elem){
  count++;
  if(count==100){
    clearInterval(int);
}
  h5.textContent=count;
},35 )
    }
})
tl.to(".line h2",{
    animationName:"anime",
    opacity:1
})
tl.to("#loader",{
    opacity:0,
    delay:4,
    duration:0.8,
})
tl.from("#page1",{
    delay:0.5,
    opacity:0,
    y:1500,
    duration:0.7,
    ease:Power4
})
tl.to("#loader",{
    display:"none",
})
tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1",{
    y:160,
    stagger:0.1,
})
}
function cursorAnimation(){
document.addEventListener('mousemove',function(dets){
   gsap.to("#crsr",{
    left:dets.x,
    top:dets.y,
    
   })
    var videoContainer=  document.querySelector('#video-container');
    var video= document.querySelector('#video-container video');
    var videoImg= document.querySelector('#video-container img');
    videoContainer.addEventListener('mouseenter',    function(){
      videoContainer.addEventListener('mousemove',function(dets){
        gsap.to("#crsr",{
          opacity:0,
        })
        gsap.to('#video-cursor',{
          left:dets.x - 580,
          top:dets.y - 330,
        })
      })
   })
    videoContainer.addEventListener('mouseleave',    function(){
      gsap.to("#crsr",{
        display:"initial",
      })
      gsap.to('#video-cursor',{
        top:"-18%",
        left:"70%",
      })
    })
    var flag=0;
    videoContainer.addEventListener('click', function(){
      if(flag==0){
        video.play();
        video.style.opacity= 1;
        videoImg.style.display="none";
       document.querySelector("#video-cursor").innerHTML=`<i class="ri-pause-fill"></i>`
        gsap.to("#video-cursor",{
          scale:0.5,
  
        })
        flag=1;
      }
      else{
        video.pause();
        video.style.opacity= 0;
        videoImg.style.display="initial";
       document.querySelector("#video-cursor").innerHTML=`<i class="ri-arrow-right-s-fill"></i>`
        gsap.to("#video-cursor",{
          scale:1,
  
        })
        flag=0;
      }
  
    })

})
Shery.makeMagnet("#nav-part2 h4");
}
loadingAnimation();
 cursorAnimation();

function sheryAnimation(){
    Shery.imageEffect(".image-div",{
        style:5,
        config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272611844751101},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.31,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.43,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        gooey:true
    })
}
sheryAnimation();

document.addEventListener("mousemove",function(dets){
   gsap.to("#flag",{
    left:dets.x,
    top:dets.y,
   })
})
document.querySelector("#hero3").addEventListener("mouseenter",function(dets){
  gsap.to("#flag",{
    opacity:1,
  })
})
document.querySelector("#hero3").addEventListener("mouseleave",function(dets){
  gsap.to("#flag",{
    opacity:0,
  })
})