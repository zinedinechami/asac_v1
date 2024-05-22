import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Logement from "./pages/logement";
import Reservations from "./pages/reservation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "logement/:id",
    element: <Logement />,
  },
  {
    path: "/reservation",
    element: <Reservations />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
