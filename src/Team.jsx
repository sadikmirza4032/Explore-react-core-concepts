import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11);

    const handleAdd = () =>{
        const newCount = team + 1;
        setTeam(newCount);
    }

    const handleReduce = () =>{
        setTeam(team - 1)
    } 
   const TeamStyle ={
    border:'2px solid yellow',
    margin:'15px',
    padding:'15px',
    margin:'15px'
   }


    return(
        <div style={TeamStyle}>
            <h3>Players:{team}</h3>
            <button onClick={handleAdd}>click ADD</button>
            <button onClick={handleReduce}>Click Reduce</button>
        </div>
    )
}