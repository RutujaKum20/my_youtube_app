import "./App.css";
import Head from "./Components/Head";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import Store from "./Utils/Store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";

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
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={Store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
        {/* 
      header
      body 
        sidebar
          menuitems
      maincontainer
        buttonlist
        videocontainer
          videocard

      */}
      </div>
    </Provider>
  );
}

export default App;
