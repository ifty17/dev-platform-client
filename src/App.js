import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import router from "./routes/Routes";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster/>
    </div>
  );
}

export default App;
