import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotePage from "./pages/NotePage.jsx";
import CreateNote from "./pages/CreateNote.jsx";
import EditNote from "./pages/EditNote.jsx";

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/note", element: <NotePage />},
  {path: "/newnote", element: <CreateNote />},
  {path: "/editnote?", element: <EditNote />}
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
