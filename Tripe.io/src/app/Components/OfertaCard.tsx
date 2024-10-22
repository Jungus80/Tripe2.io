"use client"
import Link from "next/link"
import Image from 'next/image'

 export const OfertaCard = ({ producto}:any) => {


    return (
        <>
        <div className='lg:w-64 m-1 my-5 w-52 group'>
            <div className="rounded-lg overflow-hidden">
                <div className='rounded-lg relative lg:h-64 h-52 w-full'>
                    <Link href={`/producto/${producto.id}`}>
                        <Image 
                            src={producto.image[0]} 
                            alt={producto.name} 
                            fill
                            style={{objectFit:'cover'}}
                            className='transform transition duration-300 group-hover:scale-105' 
                        />
                    </Link>
                </div>
            </div>
            <Link href={`/producto/${producto.id}`}>  {/**id de elemento */}
            <p className="font-medium mt-2 leading-tight group-hover:underline">
                    {producto.name}
                </p>
            </Link>
        </div>

        </>
    );
};


export default OfertaCard;