document.addEventListener("DOMContentLoaded", () => {
    const courses = [
        { name: "JavaScript Basics", status: "Active"},
        { name: "HTML & CSS", status: "completed"},
        { name: "React Introduction", status: "Active"},
    ];

    const courseList = document.getElementById("courseList");

    courses.forEach(course => {
        const card = document.createElement("div");
        card.className = "course-card";

        const title = document.createElement("h3");
        title.innerHTML = course.name;

        const status = document.createElement("span");
        status.innerHTML = course.status;
        status.className = "status";

        course.status == "Active" ? status.classList.add("active") : status.classList.add("completed");

        card.appendChild(title);
        card.appendChild(status);
        courseList.appendChild(card);
    });
});

