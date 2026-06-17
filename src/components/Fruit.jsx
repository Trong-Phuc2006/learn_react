export default function Fruit({ name, price, origin }) {
  return (
    <>
      {/* Name: {name} - {price}$ - Origin: {origin} */}
      {price > 6 ? (
        <li>
          Name: {name} - {price}$ - Origin: {origin}
        </li>
      ) : (
        ""
      )}
    </>
  );
}
