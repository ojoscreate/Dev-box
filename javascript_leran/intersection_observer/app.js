const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver((entries) => {
  (entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);

    /* THIS IS TO STOP THE OBSERVER */
    // if (entry.isIntersecting) observer.unobserve(entry.target);
  }),
    {
      /* OPTIONS: YOU CAN USE EITHER TO GET THE SAME OUTPUT */
      threshold: 1,
      //   rootMargin: "-200px",
      //   root: null,
    });
});

// ADDING INFINITE SCROLLING

const lastCardObserver = new IntersectionObserver((entries) => {
  const LastCard = entries[0];
  if (!LastCard.isIntersecting) return;
  loadNewCards();
  lastCardObserver.unobserve(LastCard.target);
  (lastCardObserver.observe(document.querySelector(".card:last-child")),
    {
      rootMargin: "100px",
    });
});
// END OF INFINITE SCROLLING
const LastCard = document.querySelector(".card:last-child");
lastCardObserver.observe(LastCard);

cards.forEach((card) => {
  observer.observe(card);
});
const container = document.querySelector(".card-container");

function loadNewCards() {
  for (let i = 0; i < 2; i++) {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.textContent = "This is the new card";
    container.appendChild(newCard);
    observer.observe(newCard);
  }
}
