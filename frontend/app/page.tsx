import Link from "next/link";
import "./sass/Main.scss";
import Image from "next/image";
import HeroImage from "./images/2.jpg";
import logocon from "./images/fluent--brain-circuit-20-filled.svg";
import MentalIcon from "./images/line-md--heart-filled-half.svg";
import AssessmentIcon from "./images/line-md--clipboard-check-twotone.svg";
import CrisisIcon from "./images/line-md--alert-square-twotone-loop.svg";
import TherapyIcon from "./images/ri--psychotherapy-fill.svg";
import WellnessIcon from "./images/hugeicons--wellness.svg";
import SupportIcon from "./images/mingcute--group-3-fill.svg";
import CounselingIcon from "./images/material-symbols--globe-asia-sharp.svg";
import MindfulnessIcon from "./images/material-symbols--mindfulness-rounded.svg";
import about from "./images/Image-3.png";



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
            <Image 
            src={MentalIcon}
            alt="Mental Health Icon"
            width={60}
            quality={100}
            className="object-contain"
            />
          </div>
          <div className="content-div">
            <h3 className="text-xl font-bold">
              Mental Health Appointments with Professionals
            </h3>
            <p className="mt-2">
              At MindHarmony, we provide personalized appointments with mental
              health professionals.
            </p>
          </div>
        </div>
        <div className="shadow-md service-card">
          <div className="image-container">
            <Image
            src={AssessmentIcon}
            alt="Assessment Icon"
            width={60}
            quality={100}
            className="object-contain"
            />
          </div>
          <div className="content-div">
            <h3 className="text-xl font-bold">
              Assessment to Gauge Mental Health Capacity
            </h3>
            <p className="mt-2">
              Our assessments are designed to evaluate your mental health
              capacity, providing insights.
            </p>
          </div>
        </div>
        <div className="shadow-md service-card">
          <div className="image-container">
            <Image
            src={CrisisIcon}
            alt="Crisis Icon"
            width={60}
            quality={100}
            className="object-contain"
            />
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
            <Image
            src={TherapyIcon}
            alt="Therapy Icon"
            width={60}
            quality={100}
            className="object-contain"
            />
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
            <Image
            src={WellnessIcon}
            alt="Wellness Icon"
            width={60}
            quality={100}
            className="object-contain"
            />
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
            <Image
            src={SupportIcon}
            alt="Support Icon"
            width={60}
            quality={100}
            className="object-contain"
            />
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
          <Image 
            src={CounselingIcon}
            alt="Counseling Icon"
            width={60}
            quality={100}
            className="object-contain"
            />
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
          <div className="image-container ">
            <Image
            src={MindfulnessIcon}
            alt="Mindfulness Icon"
            width={60}
            quality={100}
            className="object-contain"
            />
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
<section className="py-12 about-section bg-gray-50">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <h2 className="mb-8 text-3xl font-bold text-center">Welcome to MindHarmony</h2>

    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className="flex items-center justify-center">
       <Image
       src={about}
       alt="About Us"
       width={200}
       quality={100}
       className="object-contain"
       />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-lg">
          At MindHarmony, we are dedicated to transforming lives through care
          and compassion. Our mission is to promote mental wellness, empower
          individuals, and support personal growth.
        </p>
        <p className="mt-4">
          Welcome to a place where your well-being is our priority.
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
      <div className="p-6 bg-gray-100 rounded-lg shadow-md">
        <h3 className="text-xl font-bold">Empowering Mental Wellness</h3>
        <p className="mt-2">
          At MindHarmony, we strive to empower mental wellness by providing
          personalized care and support tailored to your unique needs.
        </p>
      </div>
      <div className="p-6 bg-gray-100 rounded-lg shadow-md">
        <h3 className="text-xl font-bold">Nurturing Personal Growth</h3>
        <p className="mt-2">
          We nurture personal growth through compassionate guidance and
          evidence-based practices that enhance your mental well-being.
        </p>
      </div>
      <div className="p-6 bg-gray-100 rounded-lg shadow-md">
        <h3 className="text-xl font-bold">Caring for Mental Health</h3>
        <p className="mt-2">
          Our dedicated team is committed to caring for your mental health,
          offering support and resources to help you thrive in life.
        </p>
      </div>
    </div>

    <div className="mt-12 text-center">
      <h2 className="mb-8 text-3xl font-bold">Our Commitment</h2>
      <p className="text-lg">
        At MindHarmony, we are committed to creating a safe and supportive
        environment where you can find healing and hope. Together, we can
        achieve mental wellness and resilience.
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
