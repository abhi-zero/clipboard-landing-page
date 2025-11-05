import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const hero = document.querySelector(".hero");
const heroLogo = hero.querySelector(".hero-logo");
const heroHeading = hero.querySelector(".hero-title");
const heroSubtext = hero.querySelector(".hero-subtext");
const heroCtas = hero.querySelectorAll(".cta");

const section = document.querySelector(".section.one");
const heading = section.querySelector(".section-heading");
const subtext = section.querySelector(".section-subtext");
const image = section.querySelector("img");
const listItems = section.querySelectorAll(".section-text-content li");

const sectionTwo = document.querySelector(".section.two");
const headingTwo = sectionTwo.querySelector(".section-heading");
const subtextTwo = sectionTwo.querySelector(".section-subtext");
const imageTwo = sectionTwo.querySelector("img");

const sectionThree = document.querySelector(".section.three");
const headingThree = sectionThree.querySelector(".section-heading");
const subtextThree = sectionThree.querySelector(".section-subtext");
const cards = sectionThree.querySelectorAll(".section-card");

const sectionFour = document.querySelector(".section.four");
const logos = sectionFour.querySelectorAll(".brand-icon");

const sectionFive = document.querySelector(".section.five");
const sectionLogo = sectionFive.querySelector(".hero-logo");
const sectionHeading = sectionFive.querySelector(".hero-title");
const sectionSubtext = sectionFive.querySelector(".hero-subtext");
const sectionCtas = sectionFive.querySelectorAll(".cta");


const tl = gsap.timeline({
  defaults: {
    ease: "power1.out",
    duration: 1,
  },
});

tl.fromTo(
  heroLogo,
  {
    y: -20,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
  },
  "+=0.5"
)
  .fromTo(
    heroHeading,
    {
      y: 30,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
    },
    "-=0.5"
  )
  .fromTo(
    heroSubtext,
    {
      y: 30,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
    },
    "-=0.4"
  )
  .fromTo(
    heroCtas,
    {
      y: 40,
    },
    {
      y: 0,
      opacity: 1,
      stagger: {
        each: 0.3,
        ease: "power3.out",
      },
    },
    "-=0.3"
  );

const sectionTl = gsap.timeline({
  scrollTrigger: {
    trigger: section,
    start: "top 90%",
    end: "bottom 60%",
    markers: false,
    scrub: 0.5,
  },
  defaults: {
    ease: "power2.out",
  },
});

sectionTl
  .from([heading, subtext], {
    y: 50,
    opacity: 0,
    duration: 1,

    stagger: 0.3,
  })
  .from(
    image,
    {
      xPercent: -100,
      opacity: 0,
      duration: 1,
    },
    "-=0.5"
  )
  .from(listItems, {
    xPercent: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
  });

const sectionTwoTl = gsap.timeline({
  scrollTrigger: {
    trigger: sectionTwo,
    start: "top 70%",
    end: "bottom 50%",
    markers: false,
    scrub: 0.3,
  },
  defaults: {
    ease: "power2.out",
  },
});

sectionTwoTl
  .from([headingTwo, subtextTwo], {
    y: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
  })
  .fromTo(
    imageTwo,
    {
      yPercent: -40,
      scale: 0.7,
    },
    {
      yPercent: 0,
      scale: 1.05,
    },
    0
  );


const sectionThreeTl = gsap.timeline({
  scrollTrigger: {
    trigger: sectionThree,
    start: "top 80%",
    end: "bottom 60%",
    scrub: .3,
    markers: false
  }
  ,
  defaults: {
    ease: "power2.out",
  },
});

sectionThreeTl.from([headingThree, subtextThree], {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.3
})
  .from(cards, {
    y: 100,
    opacity: 0,
    scale: 0.95,
    duration: 1,
    stagger: 0.3
  }, "-=0.3");


// Section Four Animation (Brands)


gsap.set(logos, {
  y: 0
})

gsap.from(logos, {
  opacity: 0,
  scale: 0.8,
  y: 50,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: sectionFour,
    start: "top 80%",
    end: "bottom 60%",
    scrub: false,
    markers: false
  },
  onComplete: () => {
    gsap.to(logos, {
      y: 15,
      duration: 2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      stagger: {
        amount: 1.5,
        from: "center"
      }
    });
  }
});


const sectionFiveTl = gsap.timeline({
  scrollTrigger: {
    trigger: sectionFive,
    start: "top 60%",
    end: "center 60%",
    scrub: .2,
    markers: false
  },
  defaults: {
    ease: "power2.out",
  },
})

sectionFiveTl
  .from([sectionHeading, sectionSubtext], {
    y: 50,
    opacity: 0,
  })
  .fromTo(sectionCtas, {
    x: (i) => i % 2 == 0 ? -100 : 100,
    opacity: 0,
    stagger: 0.3
  }, {
    x: 0,
    opacity: 1
  })
