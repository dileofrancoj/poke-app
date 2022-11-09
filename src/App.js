import { Provider } from "react-redux";
import { store } from "./store";
import { Pokemon } from "./views/Pokemon";

function App() {
  return (
    <Provider store={store}>
      <Pokemon />
    </Provider>
  );
}

export default App;
