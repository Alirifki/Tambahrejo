import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import 'flowbite';
import Beranda from './components/Layouts/Beranda';
import Home from './pages/home';
import Auth from './components/Layouts/Auth';
import Formlogin from './components/Fragments/Formlogin';
import Dashboard from './pages/dashboard';

const router = createBrowserRouter([
 {
  path : '/',
  element:  <Beranda/>,
  children:[
    {
      path:'/home',
      element:<Home/>
    },
    {
      path:'/dashboard',
      element:<Dashboard/>
    },
    {
      path:"/login",
      element:<Auth/>
    }
  ]
 }

])



function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
