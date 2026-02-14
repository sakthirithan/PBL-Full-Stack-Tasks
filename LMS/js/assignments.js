document.addEventListener("DOMContentLoaded", () => {
    const assignments = [
        {title: "JS Assignment", status: "Pending"},
        {title: "CSS Project", status: "Submitted"},
        {title: "HTML Quiz", status: "Late"},
    ];

    const list = document.getElementById("assignmentList");

    assignments.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "assignment-card";

        const title = document.createElement("h3");
        title.innerHTML = item.title;

        const status = document.createElement("p");
        status.innerHTML = item.status;

        const button = document.createElement("button");
        button.innerHTML = "Submit Assignment";
        button.className = "submit-button";

        if (item.status === "Pending") { 
            button.classList.add("pending");
            button.innerHTML = "Pending";
        }
        else if (item.status === "Submitted") { 
            button.classList.add("submitted");
            button.innerHTML = "Submitted";
        }
        else if (item.status === "Late") { 
            button.classList.add("late");
            button.innerHTML = "Late";
            
        }
        
        button.addEventListener("click", () => {
            item.status = "Submitted";
            status.innerHTML = "Submitted";
            status.className = "status submitted";
            
            button.classList.add("submitted");
            button.innerHTML = "Submitted";
            button.disabled = true;
            alert("Assignment submitted successfully");
        });

        card.append(title, status, button);
        list.appendChild(card);
    });
});