function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value !== "") {
      var taskItem = document.createElement("li");
      taskItem.innerText = taskInput.value;
  
      var deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.className = "delete-button";
      deleteButton.addEventListener("click", function() {
        taskList.removeChild(taskItem);
      });
  
      var completeButton = document.createElement("button");
      completeButton.innerText = "Complete";
      completeButton.className = "complete-button";
      completeButton.addEventListener("click", function() {
        taskItem.style.textDecoration = "line-through";
      });
  
      taskItem.appendChild(deleteButton);
      taskItem.appendChild(completeButton);
      taskList.appendChild(taskItem);
      taskInput.value = "";
    }
  }
  