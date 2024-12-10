import { Button } from "flowbite-react";
// import Button from "../Elements/Button/Index"

const Cards = (props) =>{
    const {children,
            color = "bg-slate-500",
    } = props;
    return(
        <div className=' w-full lg:w-[24.2%] m-1 border border-black rounded mb-2'>
            <div className='max-w-sm p-4 rounded shadow animate-pulse md:p-6 dark:border-gray-700'>
                 {children}
            </div>
        </div>
    )
} 
const Header = (props) =>{
    const {image,alt} = props
    return(
        <div className='flex item-center justify-center h-44 mb-2 backdrop:rounded dark:bg-gray-700'>
               <a href="#">
                  <img src={image} alt={alt} className="hover:scale-125 h-40" />
                </a>
        </div>
    )
}

const Body = (props) =>{
    const {title, children} = props 
    return (
        <div className="px-5 pb-5 h-full">
            <a href="http://">
                <h5 className="font-playwrite text-xl font-semibold tracking-tight text-black">{title}</h5>
            </a>
            <p className="font-sans text-black truncate">{children}</p>
        </div>
    )
}

const Footer = (props) =>{
    const {penulis,nama, tgl} = props;
    return(
        <div className="flex items-center mt-2 space-x-3">
             {/* <svg class="text-gray-200 w-14 h-14 dark:text-gray-700" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path>
             </svg> */}
             <img src={penulis} alt="" class="rounded-full text-gray-200 w-14 h-14 dark:text-gray-700" />
                 <div>
                    <div className="mb-2 font-sans font-bold">{nama}</div>
                     <div className="mb-1 font-sans font-medium">{tgl}</div>
                 </div>
        </div>
    );

};

Cards.Header = Header;
Cards.Body = Body;
Cards.Footer = Footer;

export default Cards