import "./App.css";
import cakeIcon from "./assets/icons8-cake-100.png";
import { useDispatch, useSelector } from "react-redux";
import { selectCake } from "./redux/cake_slice/cakeReducer";
import { buyCake } from "./redux/cake_slice/cakeActions";
function App() {
  const cake = useSelector(selectCake);
  const dispatch = useDispatch();
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
    </div>
  );
}

export default App;
