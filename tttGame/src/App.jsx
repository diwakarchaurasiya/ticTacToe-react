import { useState,useRef } from 'react'
import './App.css'
import cross_icon from './assets/cross.png'
import circle_icon from './assets/circle.png'

let dataStorage = Array(9).fill('');
function App() {
  let [userImg, setUserImg] = useState(0);
  let [lock, setLock] = useState(false);
  let winnerRef = useRef(null);
  let b1 = useRef(null);
  let b2 = useRef(null);
  let b3 = useRef(null);
  let b4 = useRef(null);
  let b5 = useRef(null);
  let b6 = useRef(null);
  let b7 = useRef(null);
  let b8 = useRef(null);
  let b9 = useRef(null);
  let boxes_array = [b1, b2, b3, b4, b5, b6, b7, b8, b9];
 
  function toggle(e, num) {
    if (lock) {
      return 0;
    }
    if (userImg %2 === 0) {
      e.target.innerHTML = `<img src =${cross_icon}>` 
      dataStorage[num] = 'x';
      setUserImg(++userImg);
    }
    else {
      e.target.innerHTML = `<img src =${circle_icon}>`;
      dataStorage[num] = 'o';
      setUserImg(++userImg); 
    }
    checkWin();
  }
  function checkWin() {
    if (dataStorage[0] === dataStorage[1] && dataStorage[1] === dataStorage[2] && dataStorage[2] != '') {
      won(dataStorage[2])
   }
    if (dataStorage[3] === dataStorage[4] && dataStorage[4] === dataStorage[5] && dataStorage[5] != '') {
       won(dataStorage[5])
   }
    if (dataStorage[6] === dataStorage[7] && dataStorage[7] === dataStorage[8] && dataStorage[8] != '') {
       won(dataStorage[8])
   }
    if (dataStorage[0] === dataStorage[3] && dataStorage[3] === dataStorage[6] && dataStorage[6] != '') {
      won(dataStorage[6])
   }
    if (dataStorage[1] === dataStorage[4] && dataStorage[4] === dataStorage[7] && dataStorage[7] != '') {
      won(dataStorage[7])
   }
    if (dataStorage[2] === dataStorage[5] && dataStorage[5] === dataStorage[8] && dataStorage[8] != '') {
      won(dataStorage[8])
   }
    if (dataStorage[0] === dataStorage[4] && dataStorage[4] === dataStorage[8] && dataStorage[8] != '') {
      won(dataStorage[8])
   }
    if (dataStorage[2] === dataStorage[4] && dataStorage[4] === dataStorage[6] && dataStorage[6] != '') {
      won(dataStorage[6])
   }
  }
  let won = (winner) => {
    setLock(lock=true);
    if (winner === "x") {
      winnerRef.current.innerHTML =`Congratulations winner is <img src =${cross_icon}>` 
    }
    else {
      winnerRef.current.innerHTML =`Congratulations winner is <img src =${circle_icon}>` 
    }
  } 
  let  resetGame = ()=>{
    setLock(lock=false);
    dataStorage = ["", "", "", "", "", "", "", "", ""];
    winnerRef.current.innerHTML = `Tic Tac Toe Game Using <span> React </span> `;
    boxes_array.map((e) => {
      e.current.innerHTML = ""; 
    })
  }
  return (
    <>
      <div className='ticTacToeField' > 
      <h1 ref={winnerRef} className="title">Tic Tac Toe Game Using <span> React </span> </h1>
        <div className="board">
          <div className = "boxes" ref={b1} onClick={(e)=>{toggle(e,0)}}> </div>
          <div className = "boxes" ref={b2} onClick={(e)=>{toggle(e,1)}}> </div>
          <div className = "boxes"  ref={b3}onClick={(e)=>{toggle(e,2)}}> </div>
          <div className = "boxes"  ref={b4} onClick={(e)=>{toggle(e,3)}}> </div>
          <div className = "boxes"  ref={b5} onClick={(e)=>{toggle(e,4)}}> </div>
          <div className = "boxes"   ref={b6}onClick={(e)=>{toggle(e,5)}}> </div>
          <div className = "boxes"   ref={b7} onClick={(e)=>{toggle(e,6)}}> </div>
          <div className = "boxes"  ref={b8} onClick={(e)=>{toggle(e,7)}}> </div>
          <div className = "boxes"  ref={b9} onClick={(e)=>{toggle(e,8)}}> </div>
          </div>
      <div className="resetButton">
          <button onClick={()=>resetGame()}>Reset</button>
        </div>
      </div>
    </>
  )
}
export default App
