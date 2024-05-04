import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Logement from "./pages/logement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "logement:id",
    element: <Logement />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
