import { RouterProvider } from "react-router";
import { router } from "../src/Layout/route";
function App() {
  return (
    <div className="bg-primary text-text">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
