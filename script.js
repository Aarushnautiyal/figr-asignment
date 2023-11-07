gsap.registerPlugin(ScrollTrigger);
const splitTypes = document.querySelectorAll(".reveal");
splitTypes.forEach((char, i) => {
  const text = new SplitTypes(char, { types: "chars" });
  console.log(text);
});
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
