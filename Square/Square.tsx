import { SquareValue } from "../../type";


type SquareProps = {
    // value : "x" | "o" | null
    value :SquareValue
    clickSqureHandler: () =>void

}


const Square:React.FC<SquareProps> = (props)=>{
    return(
        <div className="square" onClick={props.clickSqureHandler}>
           {props.value}
        </div>
    )
}
export default Square;