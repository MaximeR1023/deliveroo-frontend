import { FaStar } from "react-icons/fa";

const Meal = ({
  title,
  description,
  price,
  popular,
  picture,
  basket,
  setBasket,
}) => {
  return (
    <section
      onClick={() => {
        const index = basket.findIndex((item) => item.title === title);
        if (index !== -1) {
          const newBasket = [...basket];
          newBasket[index].quantity++;
          setBasket(newBasket);
        } else {
          setBasket([...basket, { title, price, quantity: 1 }]);
        }
      }}
      className="meal"
    >
      <div className="meal-left">
        <h3>{title}</h3>
        <div className="meal-description">{description}</div>
        <div className="meal-bottom">
          <p className="price">{price} €</p>
          {popular && (
            <p className="popular-tag">
              <FaStar /> Populaire
            </p>
          )}
        </div>
      </div>
      {picture && <img src={picture} alt="Photo du plat" />}
    </section>
  );
};

export default Meal;
