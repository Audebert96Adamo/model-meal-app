import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Meals = () => {
  const [data, setData] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputSearch
      )
      .then((response) => setData(response.data.meals));
    // .then((res) => console.log(res));
  }, [inputSearch]);

  return (
    <div className="meals">
      <h1>React Cook</h1>
      <input
        type="text"
        placeholder="Tapez le nom d'un aliment (en anglais)"
        onChange={(e) => setInputSearch(e.target.value)}
      />
      <ul className="card">
        {data.map((meal) => (
          <Card key={meal.idMeal} meal={meal} />
        ))}
      </ul>
    </div>
  );
};

export default Meals;
