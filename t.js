// Select necessary DOM elements
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

// Add Task Function
addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  
  if (taskText === '') {
    return; // Don't add empty tasks
  }
  
  const li = document.createElement('li');
  li.textContent = taskText;
  
  // Create a Delete Button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-btn');
  deleteButton.addEventListener('click', () => {
    li.remove();
  });

  // Add Delete Button to List Item
  li.appendChild(deleteButton);
  
  // Add a click event to toggle completion
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });
  
  // Append the new task to the task list
  taskList.appendChild(li);
  
  // Clear the input field
  taskInput.value = '';
});
