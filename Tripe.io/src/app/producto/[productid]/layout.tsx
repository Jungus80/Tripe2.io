// app/dashboard/layout.tsx

import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
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
