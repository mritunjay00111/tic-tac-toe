# Tic Tac Toe – Vanilla JavaScript

A simple **Tic Tac Toe** game built using **HTML, CSS, and JavaScript** with no external libraries or frameworks.

This project was created to practice:
- DOM manipulation
- Game state management
- Event handling
- Basic game logic and edge cases

---

## 🎮 Features

- Two-player gameplay (Player X vs Player O)
- Win detection (rows, columns, diagonals)
- Draw detection
- Game-over overlay with result message
- Reset / Play Again functionality
- Clean UI with hover effects

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **Vanilla JavaScript**

---

## 📂 Project Structure

├── index.html
├── style.css
├── script.js
└── README.md
---

## 🚀 How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/mritunjay00111/tic-tac-toe.git
Open index.html in your browser
(No build step or dependencies required)

🧠 Implementation Notes
Game logic is handled using a data-driven approach for win conditions.

A gameOver flag is used to prevent invalid actions after the game ends.

Draw detection checks the actual board state instead of counting clicks.

The UI overlay is used to display win/draw messages.

✅ Known Limitations
No AI opponent (local two-player only)

No score persistence between rounds

Board state is stored directly in the DOM

These were intentional trade-offs to keep the project simple and focused.

📌 Possible Improvements
Add AI opponent

Add score tracking

Highlight winning combinations

Store game state in a JavaScript array

Improve animations and UX

📄 License
This project is open-source and free to use for learning purposes.

🙌 Acknowledgements

Built as a personal learning project to strengthen JavaScript fundamentals.
