import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const sneakers = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imageUrl: "/img/sneakers/1.png",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 12999,
    imageUrl: "/img/sneakers/2.png",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    imageUrl: "/img/sneakers/3.png",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    imageUrl: "/img/sneakers/4.png",
  },
  {
    title: "Мужские Кроссовки Under Armour Curry 8",
    price: 15199,
    imageUrl: "/img/sneakers/5.png",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />

      <Header />

      {/* Content */}
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссы</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex sneakers">
          {sneakers.map((sneakers) => (
            <Card
              title={sneakers.title}
              price={sneakers.price}
              imageUrl={sneakers.imageUrl}
              onClick={() => {console.log(sneakers.title)}}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
