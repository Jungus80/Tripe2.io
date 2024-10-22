// app/dashboard/layout.tsx

import Header from "@/app/Components/Header";
import React from "react";
import Footer from "../Components/Footer";

export default function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
