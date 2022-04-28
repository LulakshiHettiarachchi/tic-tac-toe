import { SquareValue } from "../../type"
import NextPlayer from "./NextPlayer"

type movesProps={
    history : SquareValue[][] | null,
    nextPlayer : String
    timeTravel:(value:number)=>void
    winner:String | null
}


const Moves:React.FC < movesProps >= (props)=>{
    return(
        <div>
           {
               props.winner ? <h1>Winner is {props.winner}</h1>:
               <div>
                    <NextPlayer nextPlayer={props.nextPlayer}></NextPlayer>
            <ol>
                <li >Go to game start</li>

                {
                    props.history?.length
                }
                {
                props.history?.map((item,index) =>{
                    return <li key={index} onClick={()=>{props.timeTravel(index)}}>Go to move #{index+1}</li>
                })
                }
            </ol>
               </div>
           }
        </div>
           
    )
}
export default Moves