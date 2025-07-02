 const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === "") return;

      const li = document.createElement("li");

      const span = document.createElement("span");
      span.classList.add("task-text");
      span.innerText = taskText;
      span.onclick = () => span.parentElement.classList.toggle("checked");

      const removeBtn = document.createElement("button");
      removeBtn.innerHTML = "&times;";
      removeBtn.className = "remove-btn";
      removeBtn.onclick = () => li.remove();

      li.appendChild(span);
      li.appendChild(removeBtn);
      taskList.appendChild(li);

      taskInput.value = "";
    }

    // Add task on Enter key press
    taskInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        addTask();
      }
    });