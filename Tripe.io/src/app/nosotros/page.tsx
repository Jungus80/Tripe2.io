'use client'
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Nosotros from "../Components/Nosotros";

export default function Page() {

  return (
    <div className="bg-white">
      <Header></Header>
      <Nosotros/>
      <Footer></Footer>
    </div>
  );
}
