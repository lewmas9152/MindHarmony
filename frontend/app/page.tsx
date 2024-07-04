import Link from "next/link";
import "./sass/Main.scss";
import Image from "next/image";
import HeroImage from "./images/2.jpg";
import logocon from "./images/fluent--brain-circuit-20-filled.svg";

export default function Home() {
  return (
    <main className="container">
      <div className="intro-section">
        <div className="image-container flex flex-col items-center bg-red-500 justify-center min-h-screen">
          <Image
            src={HeroImage}
            alt="HeroImage"
            layout="responsive"
            quality={100}
            width={1920}
            height={1080}
            className="w-full zooming-image"

          />
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
        <div className="ml-11 flex justify-end navbar">
          <nav className="flex justify-end nav flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0 space-y-4">
            <Link href="/">
              <div className=" hover:text-red-500 cursor-pointer">
                Home
              </div>
            </Link>
            <Link href="/about">
              <div className=" hover:text-gray-900 cursor-pointer">
                About
              </div>
            </Link>
            <Link href="/services">
              <div className=" hover:text-gray-900 cursor-pointer">
                Services
              </div>
            </Link>
            <Link href="#contact">
              <div className=" hover:text-gray-900 cursor-pointer">
                Contact
              </div>
            </Link>
            <Link href="/login">
              <div className=" hover:text-gray-900 cursor-pointer">
                Login
              </div>
            </Link>
            <Link href="/signup">
              <div className=" hover:text-gray-900 cursor-pointer">
                Signup
              </div>
            </Link>
          </nav>
        </div>
        </div>
      </div>
      <div className="header w-full py-8 px-4 sm:px-24">
        <h1 className="text-4xl font-bold text-center text-gray-900">
          MindHarmony - Mental health 
        </h1>
        <div className="max-w-3xl mx-auto mt-4 text-center">
          <h2>Embark on a journey to mental well-being with MindHarmony</h2>
        </div>
        <div className="rectangle bg-noctis-fg h-5 relative top-80 rounded-5 w-500 shadow-lg animate-slide">
</div>
<div className="button-container">
  <button className="mt-6 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition-transform duration-300">
    Learn More
  </button>
</div>


      </div>

      <section className=" services-section py-12">
  <h2 className="text-3xl font-bold text-center mb-8">Core Services</h2>
  <div className="services-section">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-screen-2xl mx-auto">
    {/* Service Card 1 */}
    <div className="service-card p-6 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">Mental Health Appointments with Professionals</h3>
      <p className="mt-2">
        At MindHarmony, we provide personalized appointments with mental health professionals to address your specific needs and challenges.
      </p>
    </div>

    {/* Service Card 2 */}
    <div className="service-card p-6 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">Assessment to Gauge Mental Health Capacity</h3>
      <p className="mt-2">
        Our assessments are designed to evaluate your mental health capacity, providing insights and recommendations for your well-being.
      </p>
    </div>

    {/* Service Card 3 */}
    <div className="service-card p-6 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">Crisis Intervention</h3>
      <p className="mt-2">
        Our crisis intervention services offer immediate support and guidance during challenging mental health situations.
      </p>
    </div>

    {/* Service Card 4 */}
    <div className="service-card p-6 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">Therapy Sessions</h3>
      <p className="mt-2">
        We offer both individual and group therapy sessions to help you navigate and manage your mental health challenges effectively.
      </p>
    </div>

    {/* Service Card 5 */}
    <div className="service-card p-6 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">Wellness Workshops</h3>
      <p className="mt-2">
        Join our wellness workshops to learn practical skills and strategies for enhancing your mental well-being and resilience.
      </p>
    </div>

    {/* Service Card 6 */}
    <div className="service-card p-6 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">Support Groups</h3>
      <p className="mt-2">
        Connect with others facing similar challenges through our supportive group sessions, fostering empathy and community.
      </p>
    </div>

    {/* Service Card 7 */}
    <div className="service-card p-6 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">Online Counseling</h3>
      <p className="mt-2">
        Access our professional counseling services online, ensuring convenient and confidential support wherever you are.
      </p>
    </div>

    {/* Service Card 8 */}
    <div className="service-card p-6 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">Mindfulness Training</h3>
      <p className="mt-2">
        Learn mindfulness techniques that promote relaxation, stress reduction, and overall mental well-being in our specialized training programs.
      </p>
    </div>
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
