export const goToSection = (idTitle) => {
  document.getElementById(idTitle).scrollIntoView({ behavior: "smooth" })
}
