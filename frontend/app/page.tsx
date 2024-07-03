import Link from "next/link";
import "./sass/Main.scss";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-24">
<div className="intro-section max-w-full h-[70vh] sm:max-w-screen-md mx-auto">
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
      <h1 className="text-4xl font-bold text-center text-gray-900 bg-red-400 p-4">
        Mental Health Web App
      </h1>
    </main>
  );
}
