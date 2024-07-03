import Link from "next/link";
import "./sass/Main.scss";
import Image from "next/image";
import HeroImage from "./images/2.jpg";

export default function Home() {
  return (
    <main className="container">
<div className="intro-section">
<div className="image-container">
    <Image
      src={HeroImage}
      alt="HeroImage"
      layout="responsive"
      className="w-full"
    />
  </div>
  <div className="navbar">
      <nav className="bg-green-400 nav flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0 space-y-4">
        <Link href="/">
          <div className=" text-gray-800 hover:text-red-500 cursor-pointer">Home</div>
        </Link>
        <Link href="/about">
          <div className="text-gray-800 hover:text-gray-900 cursor-pointer">About</div>
        </Link>
        <Link href="/services">
          <div className="text-gray-800 hover:text-gray-900 cursor-pointer">Services</div>
        </Link>
        <Link href="/contact">
          <div className="text-gray-800 hover:text-gray-900 cursor-pointer">Contact</div>
        </Link>
        <Link href="/login">
          <div className="text-gray-800 hover:text-gray-900 cursor-pointer">Login</div>
        </Link>
        <Link href="/register">
          <div className="text-gray-800 hover:text-gray-900 cursor-pointer">Register</div>
        </Link>
      </nav>
      </div>
      </div>
      <div className="header w-full  py-8 px-4 sm:px-24">
  <h1 className="text-4xl font-bold text-center text-gray-900">
    Mental Health Web App
  </h1>
  <div className="max-w-3xl mx-auto mt-4">
   <h2>Your pathway to mental wellness with MindHarmony.</h2> 
  </div>
</div>


    </main>
  );
}
