import Meal from "./Meal";

const FoodCategory = ({ category, meals, basket, setBasket }) => {
  return (
    <section>
      <h2>{category}</h2>
      <div className="category-content">
        {meals.map((element, index) => {
          return (
            <Meal
              title={element.title}
              description={element.description}
              price={element.price}
              popular={element.popular}
              picture={element.picture}
              basket={basket}
              setBasket={setBasket}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FoodCategory;
