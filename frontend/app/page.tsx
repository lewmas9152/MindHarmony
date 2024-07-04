import Link from "next/link";
import "./sass/Main.scss";
import Image from "next/image";
import HeroImage from "./images/2.jpg";
import logocon from "./images/fluent--brain-circuit-20-filled.svg";

export default function Home() {
  return (
    <main className="container">
      <div className="intro-section">
      <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
  <div className="relative w-full h-full image-container">
    <Image
      src={HeroImage}
      alt="HeroImage"
      layout="responsive"
      quality={100}
      width={1920}
      height={1080}
      className="object-contain w-full h-full zooming-image"
    />
  </div>
</div>

        <div className="top">
          <div className="logo-cont">
            <div className="logo-container rounded-2xl">
              <Image
                src={logocon}
                alt="Logo"
                width={200}
                quality={100}
                className="object-contain"
              />
            </div>
            <div className="logo-name">
              <h3>MindHarmony</h3>
            </div>
          </div>
          <div className="flex justify-end ml-11 navbar">
            <nav className="flex flex-col justify-end space-y-4 nav sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link href="/">
                <div className="cursor-pointer hover:text-red-500">Home</div>
              </Link>
              <Link href="/about">
                <div className="cursor-pointer hover:text-gray-900">About</div>
              </Link>
              <Link href="/services">
                <div className="cursor-pointer hover:text-gray-900">
                  Services
                </div>
              </Link>
              <Link href="#contact">
                <div className="cursor-pointer hover:text-gray-900">
                  Contact
                </div>
              </Link>
              <Link href="/login">
                <div className="cursor-pointer hover:text-gray-900">Login</div>
              </Link>
              <Link href="/signup">
                <div className="cursor-pointer hover:text-gray-900">Signup</div>
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="w-full px-4 py-8 header sm:px-24">
        <h1 className="text-4xl font-bold text-center text-gray-900">
          MindHarmony - Mental health
        </h1>
        <div className="max-w-3xl mx-auto mt-4 text-center">
          <h2>Embark on a journey to mental well-being with MindHarmony</h2>
        </div>
        <div className="relative h-5 shadow-lg rectangle bg-noctis-fg top-80 rounded-5 w-500 animate-slide"></div>
        <div className="button-container">
          <button className="px-4 py-2 mt-6 font-bold text-white transition-transform duration-300 transform rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline">
            Learn More
          </button>
        </div>
      </div>

      <section className="service-section">
  <h2 className="mb-8 text-3xl font-bold text-center">Core Services</h2>
  <div className="services-section">
    <div className="cards max-w-screen-2xl">
      <div className="row-1">
        <div className="service-card">
          <div className="image-container">
            {/* Insert your image here */}
          </div>
          <div className="content-div">
            <h3 className="text-xl font-bold">
              Mental Health Appointments with Professionals
            </h3>
            <p className="mt-2">
              At MindHarmony, we provide personalized appointments with mental
              health professionals to address your specific needs and
              challenges.
            </p>
          </div>
        </div>
        <div className="shadow-md service-card">
          <div className="image-container">
            {/* Insert your image here */}
          </div>
          <div className="content-div">
            <h3 className="text-xl font-bold">
              Assessment to Gauge Mental Health Capacity
            </h3>
            <p className="mt-2">
              Our assessments are designed to evaluate your mental health
              capacity, providing insights and recommendations for your
              well-being.
            </p>
          </div>
        </div>
        <div className="shadow-md service-card">
          <div className="image-container">
            {/* Insert your image here */}
          </div>
          <div className="content-div">
            <h3 className="text-xl font-bold">Crisis Intervention</h3>
            <p className="mt-2">
              Our crisis intervention services offer immediate support and
              guidance during challenging mental health situations.
            </p>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg shadow-md service-card">
          <div className="image-container">
            {/* Insert your image here */}
          </div>
          <div className="content-div">
            <h3 className="text-xl font-bold">Therapy Sessions</h3>
            <p className="mt-2">
              We offer both individual and group therapy sessions to help you
              navigate and manage your mental health challenges effectively.
            </p>
          </div>
        </div>
      </div>
      <div className="row-2">
        <div className="shadow-md service-card">
          <div className="image-container">
            {/* Insert your image here */}
          </div>
          <div className="content-div">
            <h3 className="text-xl font-bold">Wellness Workshops</h3>
            <p className="mt-2">
              Join our wellness workshops to learn practical skills and
              strategies for enhancing your mental well-being and resilience.
            </p>
          </div>
        </div>
        <div className="shadow-md service-card">
          <div className="image-container">
            {/* Insert your image here */}
          </div>
          <div className="content-div">
            <h3 className="text-xl font-bold">Support Groups</h3>
            <p className="mt-2">
              Connect with others facing similar challenges through our
              supportive group sessions, fostering empathy and community.
            </p>
          </div>
        </div>
        <div className="shadow-md service-card">
          <div className="image-container">
            {/* Insert your image here */}
          </div>
          <div className="content-div">
            <h3 className="text-xl font-bold">Online Counseling</h3>
            <p className="mt-2">
              Access our professional counseling services online, ensuring
              convenient and confidential support wherever you are.
            </p>
          </div>
        </div>
        <div className="shadow-md service-card">
          <div className="image-container">
            {/* Insert your image here */}
          </div>
          <div className="content-div">
            <h3 className="text-xl font-bold">Mindfulness Training</h3>
            <p className="mt-2">
              Learn mindfulness techniques that promote relaxation, stress
              reduction, and overall mental well-being in our specialized
              training programs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="py-12 about-us-section bg-gray-50">
        <h2 className="mb-8 text-3xl font-bold text-center">About Us</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-center">Transforming Lives Through Care</p>
          <p className="mt-4 text-center">
            Welcome Message from Our CEO Vulputate bibendum erat morbi interdum
            diam sit. Eu sit dolor vel sodales sed nibh ut. Ac fringilla fames
            eget a aliquet. Gravida placerat viverra purus sed ac ultricies sem
            nulla.
          </p>
          <p className="mt-4 font-bold text-center">Joseph Doolenan</p>
          <p className="text-center">CEO, MindHarmony</p>
        </div>
      </section>

      <section className="py-12 mission-section">
        <h2 className="mb-8 text-3xl font-bold text-center">Our Mission</h2>
        <div className="grid max-w-4xl grid-cols-1 gap-6 mx-auto sm:grid-cols-3">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md mission-card">
            <h3 className="text-xl font-bold">Promoting Mental Wellness</h3>
            <p className="mt-2">
              Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel
              sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida
              placerat viverra purus sed ac ultricies sem nulla.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md mission-card">
            <h3 className="text-xl font-bold">Empowering Individuals</h3>
            <p className="mt-2">
              Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel
              sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida
              placerat viverra purus sed ac ultricies sem nulla.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md mission-card">
            <h3 className="text-xl font-bold">Supporting Personal Growth</h3>
            <p className="mt-2">
              Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel
              sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida
              placerat viverra purus sed ac ultricies sem nulla.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 conditions-section bg-gray-50">
        <h2 className="mb-8 text-3xl font-bold text-center">
          Conditions We Treat
        </h2>
        <div className="grid max-w-4xl grid-cols-1 gap-6 mx-auto sm:grid-cols-3">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md condition-card">
            <h3 className="text-xl font-bold">Anxiety Disorders</h3>
            <p className="mt-2">
              Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel
              sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida
              placerat viverra purus sed ac ultricies sem nulla.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md condition-card">
            <h3 className="text-xl font-bold">
              Post-Traumatic Stress Disorder
            </h3>
            <p className="mt-2">
              Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel
              sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida
              placerat viverra purus sed ac ultricies sem nulla.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md condition-card">
            <h3 className="text-xl font-bold">Eating Disorders</h3>
            <p className="mt-2">
              Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel
              sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida
              placerat viverra purus sed ac ultricies sem nulla.
            </p>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-gray-200 footer">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2023 MindHarmony. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
