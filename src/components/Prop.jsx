function Prop({npc})
{
    return <div>
        <h1>Prop</h1>
        message = {npc.message} <br></br>
        name = {npc.name} <br></br>
        emoji = {npc.emoji} 
        <p>Can also do like prop.name, prop.message, can not modify prop value from components files</p>
    </div>
}
export default Prop;