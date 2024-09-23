import{createBrowserRouter,RouterProvider} from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout"
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Country from "./pages/Country";
import CountryDetails from "./components/UI/CountryDetails";
const router=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"country/:id",
        element:<CountryDetails/>
      },
      {
        path:"country",
        element:<Country/>
      }

    ]

  }
 
])

function App() {
   return <RouterProvider router={router}/>
}

export default App
