console.clear();

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".st-an",
        start: "top top",
        end: "+=80%",
        pin: true,
        scrub: true,
        markers: true
      }
    })
    .fromTo(
        ".made-images-wrapper",
        {
            scale: 1.39928, // Starting scale (zoomed in)
            y: 374.322, // Starting Y position
            z: 350, // Depth (optional for 3D-like effect)
        },
        {
            scale: 1.2515, // Scale down as you scroll down
            y: 100, // Move the element up by 200px
        },
        {
            scale: 1.0515, // Scale down as you scroll down
            y: 200, // Move the element up by 200px
            ease: "power1.inOut" // Smoothing
        }
    )
    .to(
        ".made-images-wrapper",
        {
            scale: 1.0515, // Content scaling
            transformOrigin: "center center", // Scaling origin
            ease: "power1.inOut" // Smoothing
        },
        "<" // Sync this animation with the previous one
    );
});
