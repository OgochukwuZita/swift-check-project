
'use strict';

const Todo = localStorage.getItem('todoz') ? JSON.parse(localStorage.getItem('todoz')) : [];
const textField = document.getElementById('text-input-field');
const addBtn = document.getElementById('addBtn');
const deleteBtn = document.getElementById('deleteBtn');
const editBtn = document.getElementById('editBtn');
const todoContainer = document.getElementById('todos-container');

document.addEventListener('DOMContentLoaded', function () {
  const daily_Quote = [
    "Success is not just about making money. It's about making a difference, pursuing your passions, and living life on your terms.",
          "Life is a journey that must be traveled no matter how bad the roads and accommodations. Embrace the journey and learn from it.",
            "Challenges are what make life interesting. Overcoming them is what makes life meaningful.",
             "Happiness is not the absence of problems, but the ability to deal with them. Face your challenges with a positive mindset.",
             "Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change.",
             "Don't be afraid to stand for what you believe in, even if it means standing alone. Your integrity is worth more than conformity.",
            "The secret to getting ahead is getting started. Take the first step, no matter how small, and keep moving forward.",
             "Success is stumbling from failure to failure with no loss of enthusiasm. Learn from your mistakes and keep going.",
             "Life is too short to spend time with people who suck the happiness out of you. Surround yourself with those who inspire and uplift you.",
             "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle."
  ];

  const randomIndex = Math.floor(Math.random()*daily_Quote.length);
   const randomQuote = daily_Quote[randomIndex];
  const quoteElement = document.getElementById('dailyQuote'); 
   quoteElement.textContent=randomQuote;

  addBtn.addEventListener('click', function () {
    if (textField.value.trim() === '') {
      alert('Please add a task!');
    } else {
      Todo.unshift(textField.value);
      localStorage.setItem('todoz', JSON.stringify(Todo));
      textField.value = '';
      renderTodo();
    }
  });

  function renderTodo() {
    // Clear existing content in the todos container
    todoContainer.innerHTML = '';

    Todo.forEach((task, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = task;

      const listBtns = document.createElement('div');
      listBtns.className = 'listBtns';

      const editBtn = document.createElement('button');
      editBtn.type = 'button';
      editBtn.id = 'editBtn';
      editBtn.addEventListener('click', () => editItem(index));

      const editIcon = document.createElement('img');
      editIcon.src = './assets/edit-solid-24.png';
      editIcon.alt = 'edit-icon';

      editBtn.appendChild(editIcon);

      const deleteBtn = document.createElement('button');
      deleteBtn.type = 'button';
      deleteBtn.id = 'deleteBtn';
      deleteBtn.addEventListener('click', () => deleteItem(index));

      const deleteIcon = document.createElement('img');
      deleteIcon.src = './assets/trash-alt-regular-24.png';
      deleteIcon.alt = 'delete-icon';

      deleteBtn.appendChild(deleteIcon);

      listBtns.appendChild(editBtn);
      listBtns.appendChild(deleteBtn);

      listItem.appendChild(listBtns);
      todoContainer.appendChild(listItem);
    });
  }

  function deleteItem(i) {
    Todo.splice(i, 1);
    localStorage.setItem('todoz', JSON.stringify(Todo));
    renderTodo();
  }

  function editItem(i) {
    const newTask = prompt('Enter new task');
    if (newTask !== null) {
      Todo.splice(i, 1, newTask);
      localStorage.setItem('todoz', JSON.stringify(Todo));
      renderTodo();
    }
  }

  // Initial rendering
  renderTodo();
});
