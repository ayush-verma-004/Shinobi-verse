let cursor = document.querySelector('#cursor');
let main = document.querySelector(".main");

main.addEventListener('mousemove',(dets)=>{
    
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration: 0.7,
        ease: "back.out(4)",
        rotate: 540,
    })
})
