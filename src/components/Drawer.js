function Drawer({ addedItems, removeItem, closeCart }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img
            onClick={closeCart}
            className="cu-p"
            src="/img/close.svg"
            alt="Remove"
          />
        </h2>
        {/* Items */}
        <div className="items">
          {addedItems.map((item) => {
            return (
              <div className="cartItem d-flex align-center mb-20">
                <div
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                  className="cartItemImg"
                ></div>
                <div className="mr-20 flex">
                  <p className="mb-5">{item.title}</p>
                  <b>{item.price} руб.</b>
                </div>
                <img onClick={() => removeItem(item.id)} className="removeBtn" src="/img/close.svg" alt="Remove" />
              </div>
            );
          })}
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
