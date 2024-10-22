'use client'
import ProfilePage from "@/app/Components/Profile";

export default function Page({ params }: { params: { empresaid: string } }) {

  
  if (!params.empresaid) {
    return <div>Loading...</div>;
  }

  const indexPage:number = Number(params.empresaid)

  if (isNaN(indexPage)) {
    return <div>Invalid product ID</div>;
  }

  console.log(params.empresaid);
  console.log('dadadaw')
  return (
    <div className="bg-white">
      <ProfilePage  index ={indexPage} />
    </div>
  );
}
