let total = 0;

function addExpense() {
  const name = document.getElementById("expenseName").value;
  const amount = document.getElementById("expenseAmount").value;
  const category = document.getElementById("expenseCategory").value;

  if (name === "" || amount === "" || category === "") {
    alert("Please fill all fields");
    return;
  }

  const expenseList = document.getElementById("expenseList");

  const li = document.createElement("li");
  li.innerHTML = `
    ${name} (${category}) - ₹${amount}
    <button class="delete-btn" onclick="deleteExpense(this, ${amount})">X</button>
  `;

  expenseList.appendChild(li);

  total += Number(amount);
  document.getElementById("totalAmount").innerText = total;

  // Clear inputs
  document.getElementById("expenseName").value = "";
  document.getElementById("expenseAmount").value = "";
  document.getElementById("expenseCategory").value = "";
}

function deleteExpense(button, amount) {
  button.parentElement.remove();
  total -= Number(amount);
  document.getElementById("totalAmount").innerText = total;
}