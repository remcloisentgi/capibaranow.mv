<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Злови Капібару</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
    <style>
        /* Стилі для гри "Злови Капібару" */
        body {
            font-family: 'Press Start 2P', cursive;
            background-color: #f4e4d0;
            text-align: center;
            margin: 0;
            overflow: hidden; /* Запобігає появі смуг прокрутки */
        }
        .container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start; /* Вирівнювання по верхньому краю */
            padding-top: 20px;
        }
        h1 {
            color: #a0522d;
            margin-bottom: 20px;
            font-size: 1.5rem;
        }
        #score {
            font-size: 1rem;
            color: #5c3d2e;
            margin-bottom: 20px;
        }
        #capybara {
            position: absolute; /* Абсолютне позиціонування для довільного розміщення */
            width: 100px; /* Початковий розмір зображення */
            height: auto;
            cursor: pointer;
            transition: transform 0.2s ease; /* Плавний перехід при русі */
            z-index: 10; /* Переконатися, що зображення видно */
        }
        .game-over-overlay {
            position: fixed;
            inset: 0;
            background-color: rgba(0, 0, 0, 0.8);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 1.2rem;
            z-index: 100;
            display: none; /* Спочатку приховано */
        }
        .game-over-content {
          border: 4px solid #fff;
          border-radius: 10px;
          padding: 1rem;

        }

        #reset-button {
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
            background-color: #ff8c00;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 1rem;
            transition: background-color 0.3s ease;
            font-family: 'Press Start 2P', cursive;
        }
        #reset-button:hover {
            background-color: #e67e00;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Злови Капібару</h1>
        <p id="score">Рахунок: 0</p>
        <img id="capybara" src="images/capybara_game.png" alt="Капібара">
        <div class="game-over-overlay">
            <div class = "game-over-content">
                <h2>Гра Закінчена!</h2>
                <p>Підсумковий Рахунок: <span id="final-score">0</span></p>
                <button id="reset-button">Нова Гра</button>
            </div>
        </div>
    </div>

    <script>
        // JavaScript для гри "Злови Капібару"
        const capybara = document.getElementById('capybara');
        const scoreDisplay = document.getElementById('score');
        const gameOverOverlay = document.querySelector('.game-over-overlay');
        const resetButton = document.getElementById('reset-button');
        const finalScoreDisplay = document.getElementById('final-score');

        let score = 0;
        let gameRunning = true;
        let timerId;
        let imagePaths = [
            'images/capybara_game.png',
            'images/capybara_game_2.png',
            'images/capybara_game_3.png',
            'images/capybara_game_4.png',
        ];
        let currentImageIndex = 0;

        function updateScore() {
            scoreDisplay.textContent = `Рахунок: ${score}`;
        }

        function moveCapybara() {
            if (!gameRunning) return;

            const maxX = window.innerWidth - capybara.width;
            const maxY = window.innerHeight - capybara.height;
            const x = Math.random() * maxX;
            const y = Math.random() * maxY;

            capybara.style.left = `${x}px`;
            capybara.style.top = `${y}px`;
        }

        function changeImage() {
            currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
            capybara.src = imagePaths[currentImageIndex];
        }

        function handleCapybaraClick() {
            if (!gameRunning) return;
            score++;
            updateScore();
            changeImage();
            moveCapybara(); // Змінюємо позицію після кліку
        }

        function startGame() {
            score = 0;
            updateScore();
            gameOverOverlay.style.display = 'none';
            gameRunning = true;
            capybara.style.display = 'block'; // Ensure capybara is visible
            moveCapybara();
            timerId = setInterval(moveCapybara, 1000); // Рухаємо капібару кожну секунду
        }

        function endGame() {
            gameRunning = false;
            clearInterval(timerId);
            finalScoreDisplay.textContent = score;
            gameOverOverlay.style.display = 'flex';
            capybara.style.display = 'none'; // Hide capybara when game over
        }

        capybara.addEventListener('click', handleCapybaraClick);
        // Кінець гри через 10 секунд (для прикладу)
        setTimeout(endGame, 10000);

        resetButton.addEventListener('click', startGame);

        // Почати гру
        startGame();
    </script>
</body>
</html>
