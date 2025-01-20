// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get the trimmed value from the input field
        const taskText = taskInput.value.trim();

        // Check if the task input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return; // Exit the function if no task is entered
        }

        // Create a new list item (li) for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Attach an onclick event to the remove button
        removeButton.onclick = function() {
            taskList.removeChild(li); // Remove the li from the task list
        };

        // Append the remove button to the li, then append the li to the task list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear the input field for the next task
        taskInput.value = "";
    }

    // Attach event listeners
    addButton.addEventListener('click', addTask); // Call addTask when the button is clicked
    taskInput.addEventListener('keypress', (event) => {
        // Check if the Enter key is pressed
        if (event.key === 'Enter') {
            addTask(); // Call addTask if Enter is pressed
        }
    });
});