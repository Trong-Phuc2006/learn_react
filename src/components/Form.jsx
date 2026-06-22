import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({first: "",last: ""});
  const [kaba, setKaba] = useState("");

  function handleChange(e) {
    const {name, value} = e.target;
    setName(prev=>({
      ...prev,
      [name]:value
    }))
  }

  return (
    <div>
      <h1>Input Form</h1>

      <form>
        <input
        name="first"
        onChange={handleChange}
        type="text"
        value={name.first}
        />
        <input
        name = "last"
        onChange={handleChange}
        type="text"
        value={name.last}>
        </input>
        <p>The full name is {name.first} {name.last}</p>
      </form>
    </div>
  );
}