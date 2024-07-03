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
              <div className="text-gray-800 hover:text-red-500 cursor-pointer">
                Home
              </div>
            </Link>
            <Link href="/about">
              <div className="text-gray-800 hover:text-gray-900 cursor-pointer">
                About
              </div>
            </Link>
            <Link href="/services">
              <div className="text-gray-800 hover:text-gray-900 cursor-pointer">
                Services
              </div>
            </Link>
            <Link href="/contact">
              <div className="text-gray-800 hover:text-gray-900 cursor-pointer">
                Contact
              </div>
            </Link>
            <Link href="/login">
              <div className="text-gray-800 hover:text-gray-900 cursor-pointer">
                Login
              </div>
            </Link>
            <Link href="/register">
              <div className="text-gray-800 hover:text-gray-900 cursor-pointer">
                Register
              </div>
            </Link>
          </nav>
        </div>
      </div>
      <div className="header w-full py-8 px-4 sm:px-24">
        <h1 className="text-4xl font-bold text-center text-gray-900">
          Mental Health Web App
        </h1>
        <div className="max-w-3xl mx-auto mt-4 text-center">
          <h2>Your pathway to mental wellness with MindHarmony.</h2>
        </div>
      </div>

      <section className="services-section py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Core Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="service-card p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Therapy Sessions</h3>
            <p className="mt-2">
              Odio cras proin proin sit quis fringilla aliquet. Consectetur
              elementum viverra egestas egestas nulla ullamcorper varius quam.
            </p>
          </div>
          <div className="service-card p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Psychiatric Consultations</h3>
            <p className="mt-2">
              Odio cras proin proin sit quis fringilla aliquet. Consectetur
              elementum viverra egestas egestas nulla ullamcorper varius quam.
            </p>
          </div>
        </div>
      </section>

      <section className="about-us-section py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-center">
            Transforming Lives Through Care
          </p>
          <p className="mt-4 text-center">
            Welcome Message from Our CEO
            Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel
            sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida
            placerat viverra purus sed ac ultricies sem nulla.
          </p>
          <p className="mt-4 text-center font-bold">
            Joseph Doolenan
          </p>
          <p className="text-center">
            CEO, MindHarmony
          </p>
        </div>
      </section>

      <section className="mission-section py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="mission-card p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Promoting Mental Wellness</h3>
            <p className="mt-2">
              Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel
              sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida
              placerat viverra purus sed ac ultricies sem nulla.
            </p>
          </div>
          <div className="mission-card p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Empowering Individuals</h3>
            <p className="mt-2">
              Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel
              sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida
              placerat viverra purus sed ac ultricies sem nulla.
            </p>
          </div>
          <div className="mission-card p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Supporting Personal Growth</h3>
            <p className="mt-2">
              Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel
              sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida
              placerat viverra purus sed ac ultricies sem nulla.
            </p>
          </div>
        </div>
      </section>

      <section className="conditions-section py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Conditions We Treat</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="condition-card p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Anxiety Disorders</h3>
            <p className="mt-2">
              Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel
              sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida
              placerat viverra purus sed ac ultricies sem nulla.
            </p>
          </div>
          <div className="condition-card p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Post-Traumatic Stress Disorder</h3>
            <p className="mt-2">
              Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel
              sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida
              placerat viverra purus sed ac ultricies sem nulla.
            </p>
          </div>
          <div className="condition-card p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Eating Disorders</h3>
            <p className="mt-2">
              Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel
              sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida
              placerat viverra purus sed ac ultricies sem nulla.
            </p>
          </div>
        </div>
      </section>

      <section className="services-section py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="service-card p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Individual Therapy</h3>
            <p className="mt-2">
              Id nisl lacus penatibus bibendum vitae lectus et a. Lorem nulla
              nulla nulla faucibus amet feugiat ultricies. Posuere arcu enim.
            </p>
          </div>
          <div className="service-card p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Group Therapy</h3>
            <p className="mt-2">
              Id nisl lacus penatibus bibendum vitae lectus et a. Lorem nulla
              nulla nulla faucibus amet feugiat ultricies. Posuere arcu enim.
            </p>
          </div>
          <div className="service-card p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Online Counseling</h3>
            <p className="mt-2">
              Id nisl lacus penatibus bibendum vitae lectus et a. Lorem nulla
              nulla nulla faucibus amet feugiat ultricies. Posuere arcu enim.
            </p>
          </div>
          <div className="service-card p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Psychiatric Evaluation</h3>
            <p className="mt-2">
              Id nisl lacus penatibus bibendum vitae lectus et a. Lorem nulla
              nulla nulla faucibus amet feugiat ultricies. Posuere arcu enim.
            </p>
          </div>
          <div className="service-card p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Crisis Intervention</h3>
            <p className="mt-2">
              Id nisl lacus penatibus bibendum vitae lectus et a. Lorem nulla
              nulla nulla faucibus amet feugiat ultricies. Posuere arcu enim.
            </p>
          </div>
          <div className="service-card p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Wellness Workshops</h3>
            <p className="mt-2">
              Id nisl lacus penatibus bibendum vitae lectus et a. Lorem nulla
              nulla nulla faucibus amet feugiat ultricies. Posuere arcu enim.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer py-8 bg-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2023 MindHarmony. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
