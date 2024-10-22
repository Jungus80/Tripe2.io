

import Header from "@/app/Components/Header";
import Footer from "../Components/Footer";
import React from "react";

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
