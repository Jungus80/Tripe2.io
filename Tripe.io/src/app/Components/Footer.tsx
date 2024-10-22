import Image from 'next/image';
import logo from "../../public/Assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col  justify-center items-center ">
          
        <Image src={logo} alt='Logo' width={200} height={100}></Image>
        <p className="text-2xl  text-white my-5 ">
              Tripea Panamá con las mejores ofertas de viajes en Tripea
            </p>

          
        </div>

        {/* Línea divisoria */}
        <div className="mt-8 border-t border-gray-700 pt-6 flex justify-center items-center">
          <p className="text-center text-white text-sm">
            © 2024 Tripea.io. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
