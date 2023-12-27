// 'use strict';

// const Todo = localStorage.getItem('todoz') ? JSON.parse(localStorage.getItem('todoz')) : [];

// document.addEventListener('DOMContentLoaded', function () {
//     const dailyQuoteElement = document.getElementById('dailyQuote');
//     const toDo = document.getElementById('todos-container'); // Define toDo here

//     function fadeOut() {
//         dailyQuoteElement.classList.add('daily-quote');
//         setTimeout(updateQuote, 60000);
//     }

//     function fadeIn() {
//         dailyQuoteElement.classList.remove('daily-quote');
//     }

//     function updateQuote() {
//         const dailyQuotes = [
//             // ... (your daily quotes array)
//         ];

//         const randomIndex = Math.floor(Math.random() * dailyQuotes.length);
//         const randomQuote = dailyQuotes[randomIndex];

//         fadeOut();

//         setTimeout(function () {
//             dailyQuoteElement.textContent = randomQuote;
//             fadeIn();
//         }, 60000);
//     }

//     updateQuote();

//     const addBtn = document.getElementById('addBtn');
//     const textField = document.getElementById('text-input-field');

//     function createTask() {
//         addBtn.addEventListener('click', function () {
//             if (textField.value.trim() === '') {
//                 alert('Please enter a task!');
//             } else {
//                 Todo.unshift(textField.value);
//                 localStorage.setItem('todoz', JSON.stringify(Todo));
//                 textField.value = "";
//                 renderTodo();
//             }
//         });
//     }

//     createTask();

// });
