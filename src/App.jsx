import Kaba from "./components/Kaba";
import Function from "./components/Function";
import Prop from "./components/Prop";
import Fruits from "./components/Fruits";
import Condition from "./components/Condition";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Form from "./components/Form";

function App() {
  let npc = { name: "NPC", age: 9999, message: "Hewwo", emoji: "()()()()" };

  return (
    <div className="App">
      <Function></Function>
      <Prop npc={npc}></Prop>
      <Fruits></Fruits>
      <Condition></Condition>
      <Message></Message>
      <Counter></Counter>
      <Form></Form>
    </div>
  );
}

export default App;
