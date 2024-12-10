import Inputform from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Formlogin = () => {
  const navigate = useNavigate();

  // Data dummy untuk autentikasi
  const dummyCredentials = {
    nip: '123456', // Ganti dengan NIP yang diinginkan
    password: 'password123', // Ganti dengan password yang diinginkan
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const nip = e.target.nip.value; // Ambil nilai NIP dari input
    const password = e.target.password.value; // Ambil nilai password dari input

    console.log("NIP:", nip);
    console.log("Password:", password);
    
    // Validasi input
    if (!nip || !password) {
      alert("NIP dan password harus diisi!");
      return;
    }

    // Cek kredensial
    if (nip === dummyCredentials.nip && password === dummyCredentials.password) {
      // Simpan ke localStorage (jika perlu)
      localStorage.setItem('nip', nip);
      // Alihkan ke dashboard
      navigate('/dashboard');
    } else {
      alert("NIP atau password salah!");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <Inputform 
        label="NIP"
        type="text" 
        placeholder="Masukan NIP"
        name="nip"
      />
      <Inputform
        label="Password"
        type="password"
        placeholder="*****"
        name="password"
      />
      <Button variant='bg-blue-400 w-full' type="submit">Login</Button>
    </form>
  );
}

export default Formlogin