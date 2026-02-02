import "./App.css";
import Head from "./components/Head.js";
import Body from "./components/Body.js";
import { Provider } from "react-redux";
import store from "./utils/store.js";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <Body />

        {/**
         * Head
         * Body
         *   Sidebar
         *     Menu Items
         *   Main Container
         *     ButtonList
         *     VideoContainer
         *        Video Card
         */}
      </div>
    </Provider>
  );
}

export default App;
