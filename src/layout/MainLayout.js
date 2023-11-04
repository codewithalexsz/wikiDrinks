import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout({ children, asideData }) {
  return (
    <>
      <Navbar></Navbar>
      <main className="flex lg:flex-row m-auto justify-start gap-4 max-w-custom">
        <div className="basis-[880px] m-5 flex flex-wrap gap-6 justify-center">
          {children}
        </div>
        <aside className="basis-[420px] bg-[#DAD4B5] h-[100vh] mt-5 rounded-md ">
          {asideData}
        </aside>
      </main>
      <Footer></Footer>
    </>
  );
}

export default MainLayout;
