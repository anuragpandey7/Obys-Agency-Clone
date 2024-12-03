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
  tl.from(
    "#page1-center-data1,#page2 ",
    {
      opacity: 0,
    },
    "-=1.2"
  );
}

function cursorAnimation() {
  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23,1,0.320,1)",
    duration: 1,
  });

  Shery.makeMagnet("#nav-part2 h4", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  var videoContainer = document.querySelector("#video-container");
  var video = document.querySelector("#video-container video");
  var image = document.querySelector("#video-container img");

  videoContainer.addEventListener("mouseenter", () => {
    videoContainer.addEventListener("mousemove", (details) => {
      gsap.to(".mousefollower", {
        opacity: 0,
      });
      gsap.to("#video-cursor", {
        left: details.x - 500,
        y: details.y - 350,
      });
    });
  });

  videoContainer.addEventListener("mouseleave", () => {
    gsap.to(".mousefollower", {
      opacity: 1,
    });

    gsap.to("#video-cursor", {
      left: "70%",
      y: "-14%",
    });
  });

  var flag = 0;

  videoContainer.addEventListener("click", () => {
    if (flag === 0) {
      video.play();
      video.style.opacity = 1;
      image.style.opacity = 0;
      document.querySelector(
        "#video-cursor"
      ).innerHTML = ` <i class="ri-pause-line"></i>`;

      gsap.to("#video-cursor", {
        scale: 0.5,
      });
      flag = 1;
    } else if (flag === 1) {
      video.pause();
      video.style.opacity = 0;
      image.style.opacity = 1;
      document.querySelector(
        "#video-cursor"
      ).innerHTML = `<i class="ri-play-line"></i>`;

      gsap.to("#video-cursor", {
        scale: 1,
      });
      flag = 0;
    }
  });
}

var video = document.querySelector("#video-container video");

function locomotiveScrollTrigger() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

function imageAnimations() {
  Shery.imageEffect(".image-div", {
    style: 5,
    gooey: true,
    // debug: true,
    config: {
      a: { value: 0.69, range: [0, 30] },
      b: { value: -0.98, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.6666584584039765 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: false },
      maskVal: { value: 1, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 1 },
      noise_speed: { value: 0.99, range: [0, 10] },
      metaball: { value: 0.6, range: [0, 2] },
      discard_threshold: { value: 0.65, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.27, range: [0, 2] },
      noise_scale: { value: 11.45, range: [0, 100] },
    },
  });

  // var k = document.querySelector(".image-div");
  // console.log(k)
}

function flagAnimation(){
  document.addEventListener("mousemove", (details) => {
    gsap.to("#flag", {
      x: details.x,
      y: details.y,
    });
  });

  document
    .querySelector("#page1-center-data3")
    .addEventListener("mouseenter", () => {
      gsap.to("#flag", {
        opacity: 1,
      });
    });

  document
    .querySelector("#page1-center-data3")
    .addEventListener("mouseleave", () => {
      gsap.to("#flag", {
        opacity: 0,
      });
    });
}

function footerAnimation() {
  var clutter = "";
  var clutter2 = "";
  document
    .querySelector("#footer h1")
    .textContent.split("")
    .forEach(function (elem) {
      clutter += `<span>${elem}</span>`;
    });
  document.querySelector("#footer h1").innerHTML = clutter;
  document
    .querySelector("#footer h2")
    .textContent.split("")
    .forEach(function (elem) {
      clutter2 += `<span>${elem}</span>`;
    });
  document.querySelector("#footer h2").innerHTML = clutter2;

  document
    .querySelector("#footer-text")
    .addEventListener("mouseenter", function () {
      gsap.to("#footer h1 span", {
        opacity: 0,
        stagger: 0.05,
      });
      gsap.to("#footer h2 span", {
        delay: 0.35,
        opacity: 1,
        stagger: 0.1,
      });
    });
  document
    .querySelector("#footer-text")
    .addEventListener("mouseleave", function () {
      gsap.to("#footer h1 span", {
        opacity: 1,
        stagger: 0.1,
        delay: 0.35,
      });
      gsap.to("#footer h2 span", {
        opacity: 0,
        stagger: 0.05,
      });
    });
}

loadingAnimation();
cursorAnimation();
locomotiveScrollTrigger();
imageAnimations();
flagAnimation()
footerAnimation();
