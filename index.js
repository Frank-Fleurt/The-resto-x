dayMenuBtn.addEventListener("click", () => {
  dayMenu.style.zIndex = "1"
  bar.style.zIndex = "0"
  dayMenu.style.transition = "0.5s"
  bar.style.transition = "0.5s"
})
barBtn.addEventListener("click", () => {
  dayMenu.style.zIndex = "0"
  bar.style.zIndex = "1"
  bar.style.transition = "0.5s"
  dayMenu.style.transition = "0.5s"
})