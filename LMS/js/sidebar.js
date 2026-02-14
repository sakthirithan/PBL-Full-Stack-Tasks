document.addEventListener("DOMContentLoaded", () =>{
    const menuBtn = document.getElementById("menuBtn");
    const sidebar = document.getElementById("sidebar");
    const sidebarItem = document.querySelectorAll(".sidebar-item");

    menuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        sidebar.classList.toggle("active");
        menuBtn.classList.toggle("menuBtn-active");
    });

    //Click inside sidebar should NOT close it
    sidebar.addEventListener("click", (e) =>{
        e.stopPropagation();
    });

    document.addEventListener("click", () => {
        sidebar.classList.remove("active");
        menuBtn.classList.remove("menuBtn-active");
    });

    sidebarItem.forEach(item => {
        item.addEventListener("click", (e) => {
            sidebarItem.forEach(i => i.classList.remove("sidebar-active"));
            e.target.classList.add("sidebar-active");
            sidebar.classList.remove("active");
        })
    })
});

document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop();
    const menuItems = document.querySelectorAll(".sidebar-container li");

    menuItems.forEach(item => {
        if(item.dataset.page === currentPage) {
            item.classList.add("active");
        }

        item.addEventListener("click", () => {
            item.dataset.page !== currentPage
            ? window.location.href = `${item.dataset.page}`
            : null;
        });
    });
});
