// Dynamic Dashboard

const dashboardData = [
    {title: "Total Courses", value : 6},
    {title: "Asssignments Due", value : 3},
    {title: "Attendance", value : "85%"},
    {title: "GPA", value : 8.4}
];

const cardsContainer = document.getElementById("dashboardCards");

dashboardData.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.value}</p>
    `;

    cardsContainer.appendChild(card);
});

