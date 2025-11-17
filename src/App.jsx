import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import BusinessDesc from "./components/BusinessDesc";
import FoodCategory from "./components/foodCategory";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://site--delivro-fullstack--gpzsmybdsdl5.code.run/"
    );

    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>Chargement...</span>
  ) : (
    <>
      <Header />
      <BusinessDesc
        name={data.restaurant.name}
        description={data.restaurant.description}
        picture={data.restaurant.picture}
      />
      <article className="menu">
        <div className="container">
          {data.categories.map((element, index) => {
            if (element.meals.length > 0)
              return (
                <FoodCategory
                  category={element.name}
                  meals={element.meals}
                  key={index}
                />
              );
          })}
        </div>
      </article>
    </>
  );
}

export default App;
