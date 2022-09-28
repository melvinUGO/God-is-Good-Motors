const tabs = document.querySelectorAll(".tab");
const positionGroups = document.querySelectorAll(".position-group");
const form = document.querySelector(".positions");
const btn = document.querySelector(".burger");
const links = document.querySelector(".nav-links");

form.addEventListener("click", (e) => {
  const id = e.target.dataset.id;

  if (id) {
    tabs.forEach((tab) => {
      tab.classList.remove("active-tab");
    });
    tabs.forEach((tab) => {
      if (tab.dataset.id === id) {
        tab.classList.add("active-tab");
      }
    });
    positionGroups.forEach((positionGroup) => {
      positionGroup.classList.remove("active");
    });
    const tab = document.getElementById(id);
    tab.classList.add("active");
  }
});

btn.addEventListener("click", () => {
  links.classList.toggle("height");
});
