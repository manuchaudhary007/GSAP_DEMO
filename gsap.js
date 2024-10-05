let tl = gsap.timeline()
tl.from("#nav h3", {
    duration: 0.3,
    opacity:0,
    delay:0.1,
    y:-50,
    stagger:0.3
});

tl.from("#main h1", {
    x:-500,
    duration:0.5,
    opacity:0,
    stagger:0.3
});
tl.from("img", {
    duration:0.4,
    x:100,
    rotate:45,
    delay:0.3,
    opacity:0,
    stagger:0.5
});
tl.from("#lst h3", {
    duration: 0.3,
    opacity:0,
    delay:0.1,
    x:-50,
    stagger:0.3
});