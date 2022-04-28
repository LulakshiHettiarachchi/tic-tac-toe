type NextPlayerProps={
    nextPlayer :String
}


const NextPlayer :React.FC<NextPlayerProps> =(props)=>{
    return(
        <h1>Next player : {props.nextPlayer} </h1>
    )
}
export default NextPlayer;