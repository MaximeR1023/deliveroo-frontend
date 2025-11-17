import { FaStar } from "react-icons/fa";

const Meal = ({ title, description, price, popular, picture }) => {
  return (
    <div className="meal">
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
    </div>
  );
};

export default Meal;
