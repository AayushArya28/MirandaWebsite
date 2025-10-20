const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline();

tl.to("#page1", {
    y: "100vh",
    scale: 0.2,
    duration: 0
});
tl.to("#page1", {
    y: "10vh",
    duration: 1,
    delay: 1
});
tl.to("#page1", {
    y: "0vh",
    rotate: -360,
    scale: 1,
    duration: 1.2,
    ease: "power2.in"
});
tl.to("#page1", {
    rotate: -1080, // goes from -360 → -1080 (2 more cycles)
    duration: 0.8, // much faster
    ease: "power4.out" // ends fast
});
