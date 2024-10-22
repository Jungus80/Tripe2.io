import manuel from "../../public/Assets/manuel.jpg"
import joaquin from "../../public/Assets/joaquin.jpg"
import jabneel from "../../public/Assets/jabneel.png"
import Image from "next/image"

export default function Nosotros() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 flex-col flex-wrap mt-28">
      
      <h2 className='text-5xl font-bold'>Sobre nosotros</h2>
     <p className="text-xl mx-20 md:mx-40 my-10 text-justify">Tripea es una plataforma ECommerce especializada en la promoción y comercialización de ofertas turísticas en Panamá. Su misión es facilitar el acceso a experiencias únicas a través de descuentos exclusivos en destinos, hoteles, restaurantes y actividades de entretenimiento, fomentando el turismo local. Con un enfoque en la innovación y la difusión digital, Tripea conecta a los viajeros con opciones atractivas que permiten disfrutar de la diversidad cultural, natural y gastronómica de Panamá, contribuyendo al crecimiento sostenible del sector turístico del país.</p>
      <p className="text-3xl font-bold">Nuestro equipo</p>
        <p className="text-xl my-3">Joaquín Lu Estudiante de Lic. Ingenieria de Software</p>
        <p className="text-xl my-3">Jabneel Gonzalez Estudiante de Lic. Ingenieria de Software </p>
        <p className="text-xl my-3">Manuel Guillén Estudiante de Lic. Ingenieria de Software</p>
      
      </div>
      
      
      
      
      
   
  )
}