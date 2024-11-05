import { Button } from "flowbite-react";
// import Button from "../Elements/Button/Index"

const Cards = (props) =>{
    const {children,
            color = "bg-slate-500",
    } = props;
    return(
    <div className={`w-full max-w-sm bg-gray-800 border ${color} border-white rounded-lg 
     mx-2 my-2 flex flex-col justify-between p-2 `}>
       {children}
    </div>
    )
} 
const Header = (props) =>{
    const {image,alt} = props
    return(
        <a href="#">
        <img src={image} alt={alt}
            className="p-8 rounded-t-lg" />
    </a>
    )
}

const Body = (props) =>{
    const {title, children} = props 
    return (
        <div className="px-5 pb-5 h-full">
            <a href="http://">
                <h5 className="text-xl font-semibold tracking-tight text-white">{title}</h5>
            </a>
            <p className="text-a text-white">{children}</p>
        </div>
    )
}

const Footer = (props) =>{
    const {price, handleAddToCart, id} = props;
    return(
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">Rp{" "}{price.toLocaleString("id-ID", {styles:'currency', currency:"IDR"} )}</span>
            <Button className="bg-blue-700" onClick={() => handleAddToCart(id)} >Add to Cart</Button>
        </div>
    );

};

Cards.Header = Header;
Cards.Body = Body;
Cards.Footer = Footer;

export default Cards