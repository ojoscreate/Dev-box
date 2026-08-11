const section = document.querySelectorAll("section");

const option = {
  root: null, //defaut to browser viewpoint
  threshold: 0.5, // activate when 50% of sc

  //   rootMargin: "-50% 0px -50% 0px",
  //   threshold: 0,
};

const observer = new IntersectionObserver(
  ((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const color = entry.target.getAttributes("data-color");
        document.body.style.backgroundColor = color;
      }
    });
  },
  option),
);
section.forEach((section) => observer.observe(section), console.log("working"));
