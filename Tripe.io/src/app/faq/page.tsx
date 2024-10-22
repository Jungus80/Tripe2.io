'use client'
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import FAQ from "../Components/FAQ";

export default function Page() {

  return (
    <div className="bg-white">
      <Header></Header>
      <FAQ/>
      <Footer></Footer>
    </div>
  );
}
