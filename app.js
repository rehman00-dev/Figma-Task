let items = document.querySelectorAll(".accordion-item")

items.forEach(item => {
  let header = item.querySelector(".accordion-header")
  let icon = item.querySelector(".icon")

  header.addEventListener("click", () => {

    let isOpen = item.classList.contains("active")

    items.forEach(el => {
      el.classList.remove("active")
      el.querySelector(".icon").src = "Assets/ButtonIcons/Plus-con.png"
      el.querySelector(".accordion-header").style.backgroundColor = "#f3f3f3"
    })

    if (!isOpen) {
      item.classList.add("active")
      icon.src = "Assets/ButtonIcons/Minus-icon.png"
      header.style.backgroundColor = "#b9ff66"
    }

  })
})

// Adjust header top padding to match container side padding
const setHeaderGap = () => {
  const header = document.querySelector("header")
  const container = document.querySelector(".container")
  if (header && container) {
    const containerStyle = window.getComputedStyle(container)
    header.style.paddingTop = containerStyle.paddingLeft
  }
}

window.addEventListener("load", setHeaderGap)
window.addEventListener("resize", setHeaderGap)

// Toggle Hamburger Menu
const menuBtn = document.querySelector(".menu")
const navLinks = document.querySelector(".links")
const navBar = document.querySelector(".navBar")

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active")
    if (navBar) navBar.classList.toggle("active")
  })
}
