function loadingAnimation() {
  var tl = gsap.timeline();

  tl.from(".line h1", {
    y: 200,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.25,
  });

  tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      var h5Timer = document.querySelector("#line1-part1 h5");
      var count = 0;
      var timerId = setInterval(() => {
        count += 1;
        h5Timer.textContent = count;
        if (count === 100) {
          clearInterval(timerId);
        }
      }, 30);
    },
  });

  tl.to(".line h2", {
    animationName: "nowAnime",
    opacity: 1,
  });

  tl.to("#loader", {
    opacity: 0,
    duration: 0.5,
    delay: 4,
  });

  tl.from("#page1", {
    delay: 0.2,
    y: 1200,
    opacity: 0,
    duration: 0.5,
    ease: Power4,
  });

  tl.to("#loader", {
    display: "none",
  });
  tl.from("#nav", {
    opacity: 0,
  });
  tl.from(
    "#page1-center-data1 h1,#page1-center-data2 h1,#page1-center-data3 h2,#page1-center-data4 h1",
    {
      y: 200,
      duration: 0.5,
      stagger: 0.2,
      opacity: 0,
    }
  );
}
function cursorAnimation() {
  document.addEventListener("mousemove", (details) => {
    gsap.to("#crsr", {
      top: details.y,
      left: details.x,
    });
  });

  Shery.makeMagnet("#nav-part2 h4", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}

loadingAnimation();
cursorAnimation();
