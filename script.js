// script.js
document.addEventListener('DOMContentLoaded', function() {
    const messageButton = document.getElementById('messageButton');

    messageButton.addEventListener('click', function() {
        alert('хочеш дізнатись яка ти капа ?');
        window.location.href = 'quiz.html'; // Перехід на сторінку з тестом
   });
});