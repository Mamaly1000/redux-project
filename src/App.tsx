import "./App.css";
import cakeIcon from "./assets/icons8-cake-100.png";
import { useDispatch, useSelector } from "react-redux";
import { selectCake } from "./redux/cake_slice/cakeReducer";
import { buyCake, getFoods } from "./redux/cake_slice/cakeActions";
import axios from "axios";
import { useEffect } from "react";
import { foodInterface } from "./types/foodType";
const foods = () => {
  return `https://api.spoonacular.com/recipes/random?number=20&tags=vegetarian,dessert`;
};
function App() {
  const cake = useSelector(selectCake);
  const dispatch = useDispatch();
  const fetch = () => {
    axios
      .get(foods(), {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "1e67554593b24c579d91e673870c7574",
        },
      })
      .then((res) => dispatch(getFoods(res.data.recipes as foodInterface[])))
      .catch((err) => alert(err));
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <img src={cakeIcon} />
      <span className="text-white font-bold capitalize">
        purchased cakes : {cake.cake}
      </span>
      <button
        onClick={() => dispatch(buyCake())}
        className="bg-violet-800 text-white rounded-lg p-3 capitalize"
      >
        buy cake
      </button>
      <div className=" p-5 min-w-full flex flex-wrap items-start justify-start gap-5 ">
        {cake.foods.map((food) => {
          return (
            <div
              className="flex flex-col items-center justify-between gap-3 min-w-full  md:min-w-[300px] max-w-[300px] min-h-fit md:min-h-[300px] max-h-[300px] rounded-lg drop-shadow-2xl border-[1px] border-violet-800 p-2 "
              key={food.id}
            >
              <img
                src={food.image}
                className="object-cover min-w-full max-h-[200px] rounded-lg "
              />
              <h4 className="font-bold">{food.sourceName}</h4>
              <span>healthScore:{food.healthScore}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
