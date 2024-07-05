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

export default function Home() {
  return (
    <main className="w-full">
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
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="px-4 top sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
          <div className="flex flex-col items-center logo-cont sm:flex-row sm:justify-between">
            <div className="mb-4 logo-container rounded-2xl sm:mb-0">
              <Image
                src={logocon}
                alt="Logo"
                width={200}
                quality={100}
                className="object-contain"
              />
            </div>
            <div className="text-center logo-name sm:text-left">
              <h3>MindHarmony</h3>
            </div>
          </div>
          <div className="flex justify-center mt-6 navbar">
            <nav className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link href="/">
                <div className="cursor-pointer hover:text-red-500">Home</div>
              </Link>
              <Link href="/about">
                <div className="cursor-pointer hover:text-gray-900">About</div>
              </Link>
              <Link href="/services">
                <div className="cursor-pointer hover:text-gray-900">Services</div>
              </Link>
              <Link href="#contact">
                <div className="cursor-pointer hover:text-gray-900">Contact</div>
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
      <div className="px-4 py-8 header sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
        <h1 className="text-4xl font-bold text-center text-gray-900">
          MindHarmony - Mental health
        </h1>
        <div className="max-w-3xl mx-auto mt-4 text-center">
          <h2>Embark on a journey to mental well-being with MindHarmony</h2>
        </div>
        <div className="relative w-full h-5 mt-12 rounded-lg shadow-lg bg-noctis-fg animate-slide"></div>
        <div className="flex justify-center mt-6 button-container">
          <button className="px-4 py-2 font-bold text-white transition-transform duration-300 transform bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline">
            Learn More
          </button>
        </div>
      </div>

      <section className="px-4 py-8 service-section sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
        <h2 className="mb-8 text-3xl font-bold text-center">Core Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 bg-white rounded-lg shadow-md service-card">
            <div className="flex items-center justify-center mb-4 image-container">
              <Image
                src={MentalIcon}
                alt="Mental Health Icon"
                width={60}
                quality={100}
                className="object-contain"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">
                Mental Health Appointments with Professionals
              </h3>
              <p className="mt-2">
                At MindHarmony, we provide personalized appointments with mental
                health professionals.
              </p>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md service-card">
            <div className="flex items-center justify-center mb-4 image-container">
              <Image
                src={AssessmentIcon}
                alt="Assessment Icon"
                width={60}
                quality={100}
                className="object-contain"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">
                Assessment to Gauge Mental Health Capacity
              </h3>
              <p className="mt-2">
                Our assessments are designed to evaluate your mental health
                capacity, providing insights.
              </p>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md service-card">
            <div className="flex items-center justify-center mb-4 image-container">
              <Image
                src={CrisisIcon}
                alt="Crisis Icon"
                width={60}
                quality={100}
                className="object-contain"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">Crisis Intervention</h3>
              <p className="mt-2">
                Our crisis intervention services offer immediate support and
                guidance during challenging mental health situations.
              </p>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md service-card">
            <div className="flex items-center justify-center mb-4 image-container">
              <Image
                src={TherapyIcon}
                alt="Therapy Icon"
                width={60}
                quality={100}
                className="object-contain"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">Therapy Sessions</h3>
              <p className="mt-2">
                We offer both individual and group therapy sessions to help you
                navigate and manage your mental health challenges effectively.
              </p>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md service-card">
            <div className="flex items-center justify-center mb-4 image-container">
              <Image
                src={WellnessIcon}
                alt="Wellness Icon"
                width={60}
                quality={100}
                className="object-contain"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">Wellness Workshops</h3>
              <p className="mt-2">
                Join our wellness workshops to learn practical skills and
                strategies for enhancing your mental well-being and resilience.
              </p>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md service-card">
            <div className="flex items-center justify-center mb-4 image-container">
              <Image
                src={SupportIcon}
                alt="Support Icon"
                width={60}
                quality={100}
                className="object-contain"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">Support Groups</h3>
              <p className="mt-2">
                Connect with others facing similar challenges through our
                supportive and confidential group sessions.
              </p>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md service-card">
            <div className="flex items-center justify-center mb-4 image-container">
              <Image
                src={CounselingIcon}
                alt="Counseling Icon"
                width={60}
                quality={100}
                className="object-contain"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">Counseling Services</h3>
              <p className="mt-2">
                Our counseling services offer a safe space to discuss and work
                through personal challenges with a trained professional.
              </p>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md service-card">
            <div className="flex items-center justify-center mb-4 image-container">
              <Image
                src={MindfulnessIcon}
                alt="Mindfulness Icon"
                width={60}
                quality={100}
                className="object-contain"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">Mindfulness Practices</h3>
              <p className="mt-2">
                Explore mindfulness techniques to enhance your mental clarity,
                focus, and emotional balance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="px-4 py-8 text-center about sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40"
      >
        <h2 className="mb-4 text-3xl font-bold">About Us</h2>
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="mb-4 md:w-1/2 md:pr-8">
            <p>
              MindHarmony is a leading platform dedicated to promoting mental
              health and well-being. Our mission is to provide accessible and
              effective mental health services to individuals and communities.
              Our team of experienced professionals is committed to helping you
              achieve mental harmony and lead a fulfilling life.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src={about}
              alt="About Us Image"
              width={500}
              quality={100}
              className="object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="px-4 py-8 text-center contact sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40"
      >
        <h2 className="mb-4 text-3xl font-bold">Contact Us</h2>
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="mb-4 md:w-1/2 md:pr-8">
            <p>
              We'd love to hear from you! Whether you have questions, need
              support, or want to learn more about our services, please get in
              touch with us. You can reach us via email, phone, or through our
              social media channels.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="flex items-center justify-center mt-4 space-x-4 social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src={FacebookIcon}
                  alt="Facebook Icon"
                  width={40}
                  quality={100}
                  className="transition-transform duration-200 hover:scale-110"
                />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src={TwitterIcon}
                  alt="Twitter Icon"
                  width={40}
                  quality={100}
                  className="transition-transform duration-200 hover:scale-110"
                />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src={InstagramIcon}
                  alt="Instagram Icon"
                  width={40}
                  quality={100}
                  className="transition-transform duration-200 hover:scale-110"
                />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src={LinkedInIcon}
                  alt="LinkedIn Icon"
                  width={40}
                  quality={100}
                  className="transition-transform duration-200 hover:scale-110"
                />
              </a>
              <a href="mailto:support@mindharmony.com">
                <Image
                  src={EmailIcon}
                  alt="Email Icon"
                  width={40}
                  quality={100}
                  className="transition-transform duration-200 hover:scale-110"
                />
              </a>
              <a href="tel:+1234567890">
                <Image
                  src={PhoneIcon}
                  alt="Phone Icon"
                  width={40}
                  quality={100}
                  className="transition-transform duration-200 hover:scale-110"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
