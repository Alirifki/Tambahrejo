import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import 'flowbite';
import Beranda from './components/Layouts/Beranda';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Kabardesa from './pages/kabardesa';
import Layanan from './pages/layanan';
import Profile from './pages/profil';
import Galeri from './pages/galeri';
import Login from './pages/login';
import ProtectedRoute from './route/protected-route';
import { useState } from 'react';

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false); // State untuk autentikasi

  const handleLogin = () => {
      setIsAuthenticated(true); // Mengubah status autentikasi
  };


const router = createBrowserRouter([
  {
    path: 'tambahrejo',
    element: <Beranda />, // Menggunakan Beranda sebagai komponen utama
    children: [
      {
        path: '',
        element: <Home />, // Rute untuk halaman Home
      },
      {
        path: '/layanan',
        element: <Layanan />, // Rute untuk halaman Layanan
      },
      {
        path: '/profile',
        element: <Profile />, // Rute untuk halaman Profil
      },
      {
        path: '/kabardesa',
        element: <Kabardesa />, // Rute untuk halaman Profil
      },
      {
        path: '/galeri',
        element: <Galeri />, // Rute untuk halaman Profil
      },
     
    ],
  },
  {
    path: '/login',
    element: <Login onLogin={handleLogin}/>, // Rute untuk halaman Profil
  },
  {
    path: '?dashboard',
    element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Dashboard />
        </ProtectedRoute>
    ), // Lindungi rute dashboard
},
]);

return (

    <RouterProvider router={router} />
  );
}

export default App;
