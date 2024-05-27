'use client';
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";

interface Props {
    onClick?: () => void;
}
const BotonRegreso: React.FC<Props> = ({ onClick }) => {
    const handleclick = () => {
        alert("Hello " + name);
    };

    return (
        <Link href="#" passHref>
            <button 
                className="fixed bottom-8 right-8 z-10 bg-black text-white rounded-full p-2 shadow-md flex items-center justify-center hover:bg-gray-900 transition duration-300"
                onClick={onClick}
            >
                <FaArrowUp className="mr-2" />
                Regresar al Inicio
            </button>
        </Link>
    );
}

export default BotonRegreso;

