import React from "react";
import styles from "./Card.module.scss";

function Card({id, title, price, imageUrl, addToCart, removeFromCart}) {
  const [isChecked, setState] = React.useState(false);

  const changeChecked = () => {
    if (!isChecked) {
      addToCart({id, title, imageUrl, price })
    } else {
      removeFromCart(id)
    }
    setState(!isChecked)
  }

  return (
    <div className={`${styles.card} mr-20`}>
      <div className={styles.favorite}>
        <img src="/img/heart-unliked.svg" alt="Heart" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img onClick={changeChecked} className="cu-p" src={isChecked ? "/img/add-checked.svg" : "/img/add-unchecked.svg"} alt="Plus" />
      </div>
    </div>
  );
}

export default Card;
