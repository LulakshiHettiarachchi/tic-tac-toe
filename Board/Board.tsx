import Square from "../Square/Square";
import { useState } from "react";
import { SquareValue } from "../../type";
import { type } from "@testing-library/user-event/dist/type";
type BoardProps={
    currentGame:SquareValue[];
    SquareClick :(value:number )=>void;
}
const Board: React.FC<BoardProps> =(props)=>{
    
    

    const renderSquare=(value:number)=>{
       return <Square clickSqureHandler={()=>{props.SquareClick(value)}}  value={props.currentGame[value]} ></Square>
    }
  
    return (
        <div className="board">
           {renderSquare(0)}
           {renderSquare(1)}
           {renderSquare(2)}
           {renderSquare(3)}
           {renderSquare(4)}
           {renderSquare(5)}
           {renderSquare(6)}
           {renderSquare(7)}
           {renderSquare(8)}
        </div>
      
    )
}

export default Board;