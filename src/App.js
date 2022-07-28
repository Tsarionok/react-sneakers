import React from "react";
import axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [sneakers, setSneakers] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [isVisibleCart, setVisibilityCart] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");

  React.useEffect(() => {
    axios
      .get("https://62de917b976ae7460bdd1ba0.mockapi.io/items")
      .then((items) => setSneakers(items.data));
    axios
      .get("https://62de917b976ae7460bdd1ba0.mockapi.io/cart")
      .then((items) => setCartItems(items.data));
  }, []);

  const addToCart = async (item) => {
    try {
      const {data} = await axios.post(
        "https://62de917b976ae7460bdd1ba0.mockapi.io/cart",
        item
      );
      setCartItems(() => [...cartItems, data]);
    } catch (error) {
      console.error(`Some error with "AddToCart" action`, error);
    }
  };

  const removeFromCart = (id) => {
    axios.delete(`https://62de917b976ae7460bdd1ba0.mockapi.io/cart/${id}`);
    setCartItems(() => [...cartItems.filter((item) => item.id !== id)]);
  };

  return (
    <div className="wrapper clear">
      {isVisibleCart && (
        <Drawer
          addedItems={cartItems}
          removeItem={removeFromCart}
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
          {searchText ? (
            <h3>{`По резульатату запроса "${searchText}" найдено:`}</h3>
          ) : (
            <h1>Все кроссы</h1>
          )}
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input
              onChange={(event) => setSearchText(event.target.value)}
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="d-flex sneakers">
          {sneakers
            .filter((item) =>
              item.title.toLowerCase().includes(searchText.toLowerCase().trim())
            )
            .map((sneakers, index) => (
              <Card
                key={index}
                id={sneakers.id}
                title={sneakers.title}
                price={sneakers.price}
                imageUrl={sneakers.imageUrl}
                addToCart={(item) => addToCart(item)}
                removeFromCart={(id) => removeFromCart(id)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
