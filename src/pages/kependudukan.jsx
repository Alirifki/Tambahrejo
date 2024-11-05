
import { Link } from "react-router-dom";
import Cards from "../components/Fragments/Card";
import Button from "../components/Elements/Button/Index";

const Kependudukan = () => {
  return (
<>
    <Cards color="bg-orange-300 ">
        <Cards.Body title="Kependudukan">
            150.000 Jiwa
        </Cards.Body>
        <Button variant="bg-purple-300">
        <p className="flex justify-center p-2 border-t-2 text-white font-bold hover:bg-purple-200 hover:text-black">Lihat
            <svg className="-mr-1 ml-2 h-6 w-4 justify-between" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
                />
            </svg>
            </p>
        </Button>
    </Cards>
    <Cards color="bg-slate-400 ">
        <Cards.Body title="Dukuh">
            6 Dukuh
        </Cards.Body>
        <Button variant="bg-purple-300">
        <p className="flex justify-center p-2 text-white font-bold hover:bg-purple-200 hover:text-black">Lihat
            <svg className="-mr-1 ml-2 h-6 w-4 justify-between" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
                />
            </svg>
            </p>
        </Button>
    </Cards>
  </>
  );
}

export default Kependudukan