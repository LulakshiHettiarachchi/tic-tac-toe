import { useEffect, useState } from "react";
import { SquareValue } from "../../type";
import Board from "../Board/Board";
import Moves from "../moves/Moves";

const Game: React.FC =()=>{
    const [currentGame , setCurrentGame] = useState<SquareValue[]>(Array(9).fill(null)) ;
    const [nextPlayer , setNextPlayer] = useState("x") ;
    const [history , setHistory] = useState<SquareValue[][] | null> (null);
    const [winner , setWinner] = useState<String | null> (null);
  

    const SquareClick=(value:number)=>{
        if(currentGame[value] != null ) return;
        let currentGameTemp = currentGame.slice();
       
        if(nextPlayer == "x"){
            currentGameTemp[value]="x";
            setNextPlayer("o");
      
        }
        else{
          currentGameTemp[value]="o";
          setNextPlayer("x");
        }
        setCurrentGame(currentGameTemp);
        let historyTemp=history?history?.slice():[];
        historyTemp?.push(currentGame);
        setHistory(historyTemp);
        cheackWinner();
     }

     /* useEffect(()=>{
        let historyTemp=history?history?.slice():[];
        historyTemp?.push(currentGame);
        setHistory(historyTemp);
     },[currentGame])

     useEffect(()=>{
         console.log(history)
     },[history])
 */
const TimeTravelhandler =(value:number)=>{
    if(!history) return;
    let temp= history[value];
    let historyTemp = history.slice(0,value);
    if(value==-1)
    {
        setCurrentGame(Array(9).fill(null));
        setHistory([]);
    }   
    else{
        setCurrentGame(history[value]);
        setHistory(historyTemp)
    } 
}
const cheackWinner=()=>{
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (currentGame[a] && currentGame[a] === currentGame[b] && currentGame[a] === currentGame[c]) {
        setWinner(currentGame[a]);
        }
      }
      return null; 
}
    return (
        <div>
            <Board SquareClick={value=>SquareClick(value)} currentGame={currentGame} ></Board>
            <Moves winner={winner} history={history} nextPlayer={nextPlayer} timeTravel={value=>{TimeTravelhandler(value) }}></Moves>


        </div>
    )
}

export default Game;