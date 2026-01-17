"use client"; 

import { useRouter } from "next/navigation";
import { BiError } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact.js";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-[80vh] ">
        <div className="flex flex-col items-center space-y-4 text-7xl font-calibri">
          <BiError />
        </div>

        <h1 className="text-3xl font-semibold text-yellow-200">Page not found</h1>
        <p className="text-gray-400 py-4">The page you are looking for doesn’t exist.</p>

        <div className="flex space-x-4 font-calibri">
          <button
            onClick={() => router.back()}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg flex items-center gap-2 group transition-all duration-300"
          >
            <IoIosArrowBack className="transform transition-all duration-300 group-hover:-translate-x-1" />
            Go back
          </button>
          <button
            onClick={() => router.push("/")}
            className="px-4 py-2 bg-white text-black rounded-lg"
          >
            Take me home
          </button>
        </div>
      </main>
      <Contact />
      <Footer />
    </>
  );
}
