import React from "react";
import Header from "../../Client/Header";
import Footer from "../../Client/Footer/ClientFooter";

const ClientLayout = ({ children }: { children: any }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="max-w-[1440px] mx-auto>">{children}</main>
      <Footer />
    </>
  );
};

export default ClientLayout;
