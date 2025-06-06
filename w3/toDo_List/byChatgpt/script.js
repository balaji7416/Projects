// Grab all the things
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const clearBtn = document.getElementById("clearAllBtn");

// Add Task
addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="deleteBtn">❌</button>
  `;
  taskList.appendChild(li);
  input.value = "";
  input.focus();
});

// Event Delegation for delete
taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteBtn")) {
    e.target.closest("li").remove();
  }
});

// Clear All
clearBtn.addEventListener("click", () => {
  taskList.innerHTML = "";
});
