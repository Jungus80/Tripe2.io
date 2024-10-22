'use client'
import Product from "../../Components/Productinfo";

export default function Page({ params }: { params: { productid: string } }) {
  if (!params.productid) {
    return <div>Loading...</div>;
  }

  const indexPage:number = Number(params.productid)-1

  if (isNaN(indexPage)) {
    return <div>Invalid product ID</div>;
  }

  console.log(params.productid);
  
  return (
    <div className="bg-white">
      <Product  index ={indexPage} />
    </div>
  );
}
