function addEvents() {
  meLink = document.getElementById("me");
  meSection = document.querySelector(".main");
  scrollToEl(meLink, meSection);

  projectsLink = document.getElementById("projects");
  projectsSection = document.querySelector(".projects");
  scrollToEl(projectsLink, projectsSection);

  // workLink = document.getElementById("work");
  // workSection = document.querySelector(".work");
  // scrollToEl(workLink, workSection);

  skillsLink = document.getElementById("skills");
  skillsSection = document.querySelector(".skills");
  scrollToEl(skillsLink, skillsSection);
}

function scrollToEl(link, el) {
  link.addEventListener("click", () => {
    window.scrollTo({
      top: el.offsetTop,
      behavior: "smooth",
    })
  }, false);
}

document.addEventListener('DOMContentLoaded', addEvents, false);

