// 1. Target the element to watch and the body to change color
const triggerBox = document.querySelectorAll(".section");
const body = document.body;

// 2. Define the callback function (Note: it must be defined FIRST)
const changeBackground = (entries) => {
  entries.forEach((entry) => {
    // If the box is visible on screen, change background to dark blue
    if (entry.isIntersecting) {
      const color = entry.target.getAttribute("data-color");
      body.style.backgroundColor = color;
      //    body.style.backgroundColor = "#1e3a8a";
    }
    //else {
    // If the box leaves the screen, change background back to white
    //   body.style.backgroundColor = "#ffffff";
    // }
  });
};

// 3. Create the observer (Callback function is the 1st parameter)
const observer = new IntersectionObserver(changeBackground, {
  threshold: 0.2, // Triggers when 20% of the box is visible
});

// 4. Start watching the box
triggerBox.forEach((box) => observer.observe(box));
