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
import FacebookIcon from "./images/line-md--facebook.svg";
import TwitterIcon from "./images/line-md--twitter-x.svg";
import InstagramIcon from "./images/line-md--instagram.svg";
import LinkedInIcon from "./images/line-md--linkedin.svg";
import EmailIcon from "./images/line-md--email-twotone-alt.svg";
import PhoneIcon from "./images/line-md--phone-add-twotone.svg";
// import { ChevronDownIcon } from "@radix-ui/react-icons";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className=" w-full">
       
      <div
        className="relative h-screen bg-cover bg-center zooming-image"
        style={{ backgroundImage: `url(/2.jpg)` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col border border-red-300">
          <div className="logo-cont text-white border border-green-400 flex items-center justify-between space-x-2">
            <div className=" flex flex-col items-center">
              <div className="logo-container rounded-xl ">
                <Image
                  src={logocon}
                  alt="Logo"
                  width={100}
                  quality={100}
                  className="object-contain"
                />
              </div>
              <div className="logo-name">
                <h3 className="text-2xl font-bold">MindHarmony</h3>
              </div>
            </div>

            <div className="flex justify-end navbar border border-cyan-300 rounded p-4">
              <nav className="flex flex-col justify-end space-y-4 nav text-cyan-300  sm:flex-row sm:space-x-8 sm:space-y-0 sm:text-lg md:text-xl lg:text-2xl">
                <Link href="/">
                  <div className="cursor-pointer hover:text-white hover:underline">
                    Home
                  </div>
                </Link>
                <Link href="/about">
                  <div className="cursor-pointer hover:text-white hover:underline">
                    About
                  </div>
                </Link>
                <Link href="/services">
                  <div className="cursor-pointer hover:text-white hover:underline">
                    Services
                  </div>
                </Link>
                <Link href="#contact">
                  <div className="cursor-pointer hover:text-white hover:underline">
                    Contact
                  </div>
                </Link>
                <Link href="/auth">
                  <div className="cursor-pointer hover:text-white hover:underline">
                    Login
                  </div>
                </Link>
                <Link href="/auth">
                  <div className="cursor-pointer hover:text-white hover:underline">
                    Signup
                  </div>
                </Link>
              </nav>
            </div>
          </div>
          <div className="w-full px-4 py-8 header sm:px-24  flex flex-col flex-grow justify-center items-center">
            <h1 className="text-4xl font-bold text-center text-gray-300">
              MindHarmony - Mental health
            </h1>
            <div className="max-w-3xl mx-auto mt-4 text-center text-gray-300">
              <h2>Embark on a journey to mental well-being with MindHarmony</h2>
            </div>
            <div className="relative h-5 shadow-lg rectangle bg-noctis-fg top-80 rounded-5 w-500 animate-slide"></div>
            <div className="">
              <button className="flex   justify-center items-center px-8 py-3 text-xl mt-6 font-bold text-white border border-white transition-transform duration-300 transform rounded-3xl hover:border-none hover:bg-slate-900   focus:outline-none focus:shadow-outline">
                <span>Learn More</span>
              <ChevronDownIcon className="size-8 text-white"/>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full px-4 py-8 header sm:px-24">
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
      </div> */}

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
                    At MindHarmony, we provide personalized appointments with
                    mental health professionals.
                  </p>
                </div>
              </div>
              <Link href={"/assessment"} className="shadow-md service-card">
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
              </Link>
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
                    We offer both individual and group therapy sessions to help
                    you navigate and manage your mental health challenges
                    effectively.
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
                    strategies for enhancing your mental well-being and
                    resilience.
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
          <h2 className="mb-8 text-3xl font-bold text-center">About Us</h2>

          <div className="grid grid-cols-1 gap-8 about-intro md:grid-cols-2">
            <div className="flex items-center justify-center about-image">
              <Image
                src={about}
                alt="About Us"
                width={200}
                height={280}
                quality={100}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg">
                At MindHarmony, we are dedicated to transforming lives through
                care and compassion. Our mission is to promote mental wellness,
                empower individuals, and support personal growth.
              </p>
              <p className="p-5 mt-4 bg-blue-300 unique rounded-xl">
                Welcome to a place where your well-being is our priority.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Empowering Mental Wellness</h3>
              <p className="mt-2">
                At MindHarmony, we strive to empower mental wellness by
                providing personalized care and support tailored to your unique
                needs.
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
                Our dedicated team is committed to caring for your mental
                health, offering support and resources to help you thrive in
                life.
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

      <section className="contact-section" id="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <form>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                aria-describedby="email-helper-text"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
              ></textarea>
            </div>
          </form>
          <div className="buttons">
            <button type="submit">Submit</button>
          </div>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/mindharmonycounseling/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={FacebookIcon} alt="Facebook Icon" quality={100} />
            </a>
            <a
              href="https://www.instagram.com/mindharmonycounseling/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={InstagramIcon} alt="Instagram Icon" quality={100} />
            </a>
            <a
              href="https://www.twitter.com/mindharmonycounseling/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={TwitterIcon} alt="Twitter Icon" quality={100} />
            </a>
            <a
              href="https://www.linkedin.com/company/mindharmonycounseling/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={LinkedInIcon} alt="LinkedIn Icon" quality={100} />
            </a>
          </div>
          <div className="contact-info">
            <a href="tel:123-456-7890">
              <Image src={PhoneIcon} alt="Phone Icon" quality={100} />
              <span>(123) 456-7890</span>
            </a>
            <a href="mailto:contact@mindharmony.com">
              <Image src={EmailIcon} alt="Email Icon" quality={100} />
              <span>contact@mindharmony.com</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 footer">
        <div className="container">
          <p>©Copyright 2023 MindHarmony. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
