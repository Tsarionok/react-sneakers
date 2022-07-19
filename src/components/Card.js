function Card() {
  return (
    <div className="card mr-20">
      <div className="favorite">
        <img src="/img/heart-unliked.svg" alt="Heart" />
      </div>
      <img width={133} height={112} src="/img/sneakers/1.png" alt="Sneakers" />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>12999 руб.</b>
        </div>
        <button className="button">
          <img width={30} height={30} src="/img/add.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;