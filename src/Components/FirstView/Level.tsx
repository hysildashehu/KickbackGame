import React, { useState } from "react";

const Level = () =>{

    const [selected, setSelected] = useState(false);

    return (<>
    <div className='divLevel'>
        <h3>Level</h3>
        <button onClick={() =>setSelected(true)}>Easy</button>
        <button>Medium</button>
        <button>Hard</button>
    </div>
    </>)
}
export default Level;