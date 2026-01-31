function initSidebar() {
    const sidebar = document.querySelector("aside.sidebar")
    const sidebarToggler = document.querySelector("#sidebar-toggler")
    const allLinks = sidebar.querySelectorAll("a")

    allLinks.forEach(a => {
        a.addEventListener("click", () => {
            sidebar.classList.remove("show")
        })
    })

    sidebarToggler.addEventListener("click", () => {
        sidebar.classList.toggle("show")
    })
}

export default initSidebar