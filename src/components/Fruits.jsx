import Fruit from "./Fruit";
export default function Fruits() {
  const fruits = [
    { name: "Apple", price: 10, origin: "Australia" },
    { name: "Pineapple", price: 7, origin: "Vietnam" },
    { name: "Pear", price: 3, origin: "China" },
    { name: "Durian", price: 6, origin: "Vietnam" },
    { name: "Cabbage", price: 2, origin: "China" },
  ];

  return (
    <div>
        <h1>List rendering</h1>
      <ul>
        {fruits.map((fruit) => (
          <Fruit key={fruit.name} name={fruit.name} price={fruit.price} origin={fruit.origin} />
        ))}
      </ul>
    </div>
  );
}