import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./redux/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Watch from "./components/Watch";
import SearchResults from "./components/SearchResults";

function App() {
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
          element: <Watch />,
        },
        {
          path: "results",
          element: <SearchResults />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div className="">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
