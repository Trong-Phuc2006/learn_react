import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <h1>Input Form</h1>

      <form>
        <input
          onChange={handleChange}
          type="text"
          value={name}
        />
      </form>

      <p>Name: {name}</p>
    </div>
  );
}