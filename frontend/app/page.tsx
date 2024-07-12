"use client";

import Link from "next/link";
import "./sass/Main.scss";
import Image from "next/image";
import HeroImage from "./images/2.jpg";
import logocon from "./images/fluent--brain-circuit-20-filled.svg";

import about from "./images/Image-3.png";
import FacebookIcon from "./images/line-md--facebook.svg";
import TwitterIcon from "./images/line-md--twitter-x.svg";
import InstagramIcon from "./images/line-md--instagram.svg";
import LinkedInIcon from "./images/line-md--linkedin.svg";
import EmailIcon from "./images/line-md--email-twotone-alt.svg";
import PhoneIcon from "./images/line-md--phone-add-twotone.svg";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { services } from "@/lib/services";
import { Button } from "./components/ui/button";

export default function Home() {
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <main className="w-full space-y-4 ">
      <div className="relative h-screen bg-center bg-cover image-container">
        <div
          className="absolute inset-0 header-landing zooming-image"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col ">
          <div className="flex items-center justify-between space-x-2 text-white logo-cont">
            <div className="flex flex-col items-center cont ">
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
                <h3 className="p-1 text-2xl font-bold ">MindHarmony</h3>
              </div>
            </div>
          <div className="nav-menu">
            <nav className="flex justify-end mr-10 space-x-6 text-sm text-white sm:text-base">
              {[
                "Home",
                "About",
                "Services",
                "Contact",
                "Sign In | Sign Up"
              ].map((item, index) => (
                <Link
                  key={index}
                  href={
                    item === "Home"
                      ? "/"
                      : item === "Sign In | Sign Up"
                      ? "/auth"
                      : `#${item.toLowerCase()}`
                  }
                >
                  <div className="relative overflow-hidden cursor-pointer group">
                    <span className="inline-block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                      {item}
                    </span>
                    <span className="absolute top-0 left-0 inline-block text-red-400 transition-transform duration-300 ease-in-out -translate-y-full group-hover:translate-y-0">
                      {item}
                    </span>
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-red-400 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                  </div>
                </Link>
              ))}
            </nav>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center flex-grow w-full px-4 py-8 header sm:px-24"
          >
            <h1 className="text-4xl font-bold text-center text-gray-300">
              MindHarmony - Mental health
            </h1>
            <div className="max-w-3xl mx-auto mt-4 text-center text-gray-300">
              <h2>Embark on a journey to mental well-being with MindHarmony</h2>
            </div>
            <div className="relative h-5 shadow-lg rectangle bg-noctis-fg top-80 rounded-5 w-500 animate-slide"></div>
            <div className="">
              <button className="flex items-center justify-center px-8 py-3 mt-6 text-xl font-bold text-white transition-transform duration-300 transform border border-white rounded-3xl hover:border-white hover:bg-black focus:outline-none focus:shadow-outline">
                <span>Learn More</span>
                <ChevronDownIcon className="text-white size-8" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="px-3 pt-5" ref={servicesRef}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={servicesInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-8 text-3xl font-bold text-center">Core Services</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-wrap">
            {services.map((service) => (
              <Card
                className="relative overflow-hidden shadow-md aspect-auto group"
                key={service.id}
              >
                {/* <div className="absolute top-0 bottom-0 left-0 w-1 transition-all duration-300 ease-in-out bg-green-500 group-hover:left-full group-hover:-ml-1 group-hover:bg-blue-500"></div> */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#40e0d0] transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>

                {/* Right border */}
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#1f9978] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
                <div className="relative z-10 transition-all duration-300 ease-in-out group-hover:translate-x-1">
                  <CardHeader>
                    <Image
                      src={service.icon}
                      alt={`${service.imageAlt}`}
                      width={60}
                      quality={100}
                      className="object-contain"
                    />
                    <CardTitle className="text-xl font-bold">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mt-2">{service.details}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>

      <section
        id="about"
        ref={aboutRef}
        // className="py-12 about-section bg-gray-50"
        className="pt-5 "
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          // className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
          // className="bg-green-300"
        >
          <h2 className="mb-8 text-3xl font-bold text-center">About Us</h2>

          <div className="flex flex-col items-center justify-center sm:px-4 sm:flex-row ">
            {/* <div className="flex items-center justify-center about-image"> */}
            <Image
              src={about}
              alt="About Us"
              width={200}
              height={280}
              quality={100}
              className="object-contain"
            />

            <div className="flex flex-col items-center justify-center text-center sm:text-left sm:px-3">
              <p className="text-lg ">
                At MindHarmony, we are dedicated to transforming lives through
                care and compassion. Our mission is to promote mental wellness,
                empower individuals, and support personal growth.
              </p>
              <p className="p-5 mt-4 border border-slate-600 unique rounded-3xl">
                Welcome to a place where your well-being is our priority
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 px-2 mt-12 md:grid-cols-3 sm:px-3 md:px-4">
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
        </motion.div>
      </section>

      <section className="contact-section" id="contact" ref={contactRef}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={contactInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="container"
        >
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

            <Button type="submit" className="bg-[#40e0d0]  w-full">
              Submit
            </Button>
          </form>

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
        </motion.div>
      </section>

      <footer className="bg-slate-950 footer">
        <div className="container">
          <p>©Copyright 2024 MindHarmony. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
