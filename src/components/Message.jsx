import { useState } from "react";

export default function Message()
{
   
    function popMsg()
    {
        const skins = ["Singularity", "Chaos", "Evori", "Valiant", "Forsaken", "Kuronami", "Reaver", "Ion", "minhthanh224", "i_forgot", "filler_1", "filler_2"];
        const random = skins[Math.floor(Math.random()*skins.length)];
        setSkin(random);
        
    }
    const [skin,setSkin] = useState("Normal");
    return(
        <div>
        <h1>Event handling</h1>
            <button onClick={popMsg}>Click me to have a free random Vandal skin</button>
            <p>Your skin is {skin}!</p>
        </div>
    )
}