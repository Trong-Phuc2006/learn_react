import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [kaba, setKaba] = useState("");
  const [submission, setSubmission] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }
  function handleKaba(e)
  {
    setKaba(e.target.value);
  }
  function submit()
  {
    setSubmission(name+kaba);
  }

  return (
    <div>
      <h1>Input Form</h1>

      <form>
        <input
          onChange={handleChange}
          size = "1"
          type="text"
          value={name}
        />
        <input onChange={handleKaba} type="text" value={kaba}></input>
        <input type="submit" onClick={submit}></input>
      </form>
      <p>After submission = {submission}</p>
    </div>
  );
}