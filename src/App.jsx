import ProductFilter from "./assets/components/ProductFilter";
import "./App.css";

function App() {
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mouse" },
    { id: 3, name: "Keyboard" },
    { id: 4, name: "Monitor" },
    { id: 5, name: "Printer" },
    { id: 6, name: "Tablet" },
    { id: 7, name: "Smartphone" },
  ];

  return (
    <>
      <ProductFilter products={products} />
    </>
  );
}

export default App;