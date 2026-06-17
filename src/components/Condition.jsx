import True from "./True";
import False from "./False";

export default function Condition() {
  let condition = true;
  let message = condition ? <True></True> : <False></False>;
  return (
    <div>
      <h1>Conditional Rendering</h1>
      {message}
    </div>
  );
}
