import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [sneakers, setSneakers] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [isVisibleCart, setVisibilityCart] = React.useState(false);

  React.useEffect(() => {
    fetch("https://62de917b976ae7460bdd1ba0.mockapi.io/items")
      .then((items) => items.json())
      .then((json) => setSneakers(json));
  }, []);

  const addToCart = (item) => {
    setCartItems(() => [...cartItems, item])
  }

  const removeFromCart = (title) => {
    console.log(title);
    setCartItems(() => cartItems.filter(item => item.title !== title))
  }

  return (
    <div className="wrapper clear">
      {isVisibleCart && (
        <Drawer
          addedItems = {cartItems}
          closeCart={() => {
            setVisibilityCart(false);
          }}
        />
      )}

      <Header
        openCart={() => {
          setVisibilityCart(true);
        }}
      />

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
              addToCart={(item) => addToCart(item)}
              removeFromCart={(title) => removeFromCart(title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
