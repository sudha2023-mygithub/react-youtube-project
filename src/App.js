import "./App.css";
import Head from "./components/Head.js";
import Body from "./components/Body.js";
import { Provider } from "react-redux";
import store from "./utils/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer.js";
import WatchPage from "./components/WatchPage.js";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />

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
