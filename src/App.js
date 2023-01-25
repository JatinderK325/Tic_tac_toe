import { useState } from 'react';
import './App.css';
import ScoreBoard from './Components/ScoreBoard';
import Board from './Components/Board';
import ResetButton from './Components/ResetButton';

function App() {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // const board = ['O', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'];
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({ xScores: 0, oScores: 0 });
  const [gameOver, setGameOver] = useState(false);

  const boxHandler = (boxID) => {
    const updatedBoard = board.map((value, id) => {
      if (id === boxID) {
        return xPlaying === true ? "X" : "O";
      }
      else {
        return value;
      }
    })
    const winner = checkWinner(updatedBoard);
    if (winner) {
      if (winner === "O") {
        let { oScores } = scores;
        oScores++;
        setScores({ ...scores, oScores });
      } else {
        let { xScores } = scores;
        xScores++;
        setScores({ ...scores, xScores });
      }
    }
    // console.log(scores);
    setBoard(updatedBoard);
    setXPlaying(!xPlaying);
  }

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        // console.log(board[x]);
        setGameOver(true);
        return board[x];
      }
    }
  }

  const resetHandler = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  }

  return (
    <div>
      <ScoreBoard scores={scores} xPlaying={xPlaying} />
      <Board board={board} onClick={gameOver ? resetHandler : boxHandler}></Board>
      <ResetButton reset = {resetHandler}/>
    </div>
  );
}

export default App;
