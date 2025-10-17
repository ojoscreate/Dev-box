const inpSearch = document.querySelector("#search");

// console.log(inpSearch);
const onSearch = () => {
  const filterSearch = inpSearch.value.toUpperCase();
  //   console.log(filterSearch);

  const list = document.querySelectorAll("#list li");
  //   console.log(list);

  list.forEach((el) => {
    const text = el.textContent.toUpperCase();
    el.style.display = text.includes(filterSearch) ? "block" : "none";
  });
};
inpSearch.addEventListener("input", onSearch);

const Password = document.querySelector("#password");
Password.addEventListener("input", Pass);
function Pass() {
  const paypass = Password.value;
  change();
  setTimeout(change, 1500);
  // console.log(paypass);
}

// Hide password content
const passwordVisibility = document.querySelector("#passwordToggler");
passwordVisibility.addEventListener("click", change);

function change() {
  if (Password.type == "password") {
    Password.type = "type";
    passwordVisibility.textContent = "🔒";
  } else {
    Password.type = "password";
    passwordVisibility.textContent = "👁️";
  }
}
