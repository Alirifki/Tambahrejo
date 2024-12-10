import { Button, Table } from "flowbite-react";
// import Button from "../components/Elements/Button/Index";
import Cards from "../components/Fragments/Card";
import Counter from "../components/Fragments/Counter";
import { useState } from "react";

const produks = [
{
  id: 1,
  title:"Specs",
  image:"/img/logo.png",
  price:" 500000",
  deskripsi:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Quasi aliquid earum sed alias quidem voluptas ab ea molestiae enim quia`
},
{
  id: 2,
  title:"nike",
  image:"/img/logo.png",
  price:" 400000",
  deskripsi:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Quasi aliquid earum sed alias quidem voluptas ab ea molestiae enim quia`
},
{
  id: 3,
  title:"adidas",
  image:"/img/logo.png",
  price:" 400000",
  deskripsi:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Quasi aliquid earum sed alias quidem voluptas ab ea molestiae enim quia`
},
]
const email = localStorage.getItem("email");

const Dashboard= () => {

  const [cart, setCart] =useState([
    {
      id:1,
      qty: 1,
    }
  ])

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href="/login";
  };

  const handleAddToCart = (id) => {
  if(cart.find(item =>item.id === id)){
    setCart(
      cart.map(item => item.id===id ?{...item, qty: item.qty + 1} :item ) 
    );
  } else{
    setCart([...cart,{id,qty:1}]);
  }
  }

  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
      <Button className="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
      </div>
      <div className="flex justify-center py-5">
       <div className="flex flex-wrap-3/4">
       {produks.map((produk) => (
          <Cards key={produk.id}>
          <Cards.Header  image={produk.image}/>
          <Cards.Body title={produk.title}>{produk.deskripsi}
            </Cards.Body>
          <Cards.Footer price={produk.price} 
          id={produk.id}
          handleAddToCart={handleAddToCart}/>
          </Cards>
        ))}
       </div>
       <div className="w-1/4"> 
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
          <Table className="border-2">
            <thead>
              <tr>
                <th>Produk</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const produk = produks.find(
                  (produk)=>produk.id===item.id
                );
                return(
                  <tr key={item.id}>
                    <td>{produk.title}</td>
                    <td>Rp{""}
                      {produk.price.toLocaleString("id-ID",{
                        styles:"currency",
                        currency:"IDR"
                      })}</td>
                    <td>{item.qty}</td>
                    <td>{item.qty * produk.price}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
       </div>
      </div>
      <Button className="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
       <div className="flex justify-center mt-5">
        <Counter/>
       </div>
       <div>
       </div>
    </>
  )
}

export default Dashboard