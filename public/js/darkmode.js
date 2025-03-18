let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')
const themeColorMeta = document.querySelector('meta[name="theme-color"]')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', "active")

    if (themeColorMeta) themeColorMeta.setAttribute("content", "#000000");
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)

    if (themeColorMeta) themeColorMeta.setAttribute("content", "#ffffff");
}

if (darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    if (darkmode !== "active") {
        enableDarkmode()
    } else {
        disableDarkmode()
    }
    // darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})