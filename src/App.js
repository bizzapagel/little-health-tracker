import './App.css';
import { useState } from 'react';

function App() {
  const [totalCalories, setTotalCalories] = useState(0);
  const [maxCalories, setmaxCalories] = useState(2000);
  const [meals, setMeals] = useState([
    {title: 'Pizza', id: 1},
    {title: 'Cake', id: 2},
    {title: 'Ice Cream', id: 3}
  ]);

  const handleAddCalories = () => {
    setTotalCalories(prevState => prevState + 200);
  };

  const handleAddMeal = () => {
    setMeals((prevMeals) => {
      return prevMeals.concat(
        {title: 'Dong', id: 4}
      );
    });
  };

  return (
    <div className="App">
      <h1>Calorie Counter</h1>
      <p>Calories: {totalCalories} / {maxCalories}</p>

      <div>
        {meals.map((meal) => (
          <div key={meal.id}>{meal.title}</div>
        ))}
      </div>
      
      <div>
        <button onClick={handleAddCalories}>Add Calories</button>
      </div>

      <div>
        {/* <button onClick={() => {handleAddMeal()}}>Add Meal</button> */}
        <button onClick={handleAddMeal}>Add Meal</button>
      </div>

    </div>
  );
}

export default App;
