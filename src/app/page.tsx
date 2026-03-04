'use client';

import React, { useEffect, useState, useRef, useContext } from "react";
import Link from "next/link";
import Image from "next/image";

import Button from "./components/Button";
import Statistic from "./components/Statistic";
import Icon from "./components/Icon";
import NavContext from "./components/NavContext";

import filtration from "./assets/icons/filtration.png";
import ai from "./assets/icons/ai.png";
import healthcare from "./assets/icons/healthcare.png";
import education from "./assets/icons/education.png";
import estate from "./assets/icons/estate.png";
import government from "./assets/icons/government.png";
import senior from "./assets/icons/senior.png";
import hospitality from "./assets/icons/hospitality.png";
import arrow from "./assets/icons/downward_arrow.png";
import data from "./assets/icons/data_icon.png";
import efficiency from "./assets/icons/efficiency_icon.png";
import graphic from "./assets/graphic.png";


export default function Home() {
  const [differenceVisible, setDifferenceVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [offerVisible, setOfferVisible] = useState(false);
  const [serveVisible, setServeVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const [mattersVisible, setMattersVisible] = useState(false);


  const differenceRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const offerRef = useRef<HTMLDivElement | null>(null);
  const serveRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const mattersRef = useRef<HTMLDivElement | null>(null);

  const { setHideNav } = useContext(NavContext);


  const scrollToAbout = () => {
    const element = aboutRef.current;
    if (element) {
      const offsetTop = element.offsetTop - 70;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideNav(entry.isIntersecting); // hide when hero visible
      },
      { threshold: 0.6 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, [setHideNav]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === differenceRef.current) setDifferenceVisible(entry.isIntersecting);
          if (entry.target === aboutRef.current) setAboutVisible(entry.isIntersecting);
          if (entry.target === offerRef.current) setOfferVisible(entry.isIntersecting);
          if (entry.target === serveRef.current) setServeVisible(entry.isIntersecting);
          if (entry.target === contactRef.current) setContactVisible(entry.isIntersecting);
          if (entry.target === mattersRef.current) setMattersVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    if (differenceRef.current) observer.observe(differenceRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (offerRef.current) observer.observe(offerRef.current);
    if (serveRef.current) observer.observe(serveRef.current);
    if (contactRef.current) observer.observe(contactRef.current);
    if (mattersRef.current) observer.observe(mattersRef.current);


    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO */}
      <section
        id="landing-page"
        ref={heroRef}
        className="overflow-hidden relative w-full flex items-center bg-[url(./assets/city-background3.png)] bg-cover bg-center bg-no-repeat h-screen"
      >
        <div className="relative z-10 container px-8 lg:px-20">
          <h1 className="type-hero-title text-white w-full text-left m-2">
            Redefining how buildings
            <span className="ml-4">
              <span className="cycle-wrapper">
                <span className="cycle-word cycle-1 type-hero-title shadow-xl text-brand-orange">
                  think.
                </span>
                <span className="cycle-word cycle-2 type-hero-title shadow-xl text-brand-orange">
                  breathe.
                </span>
                <span className="cycle-word cycle-3 type-hero-title shadow-xl text-brand-orange">
                  optimize.
                </span>
              </span>
            </span>
          </h1>

          <Link href="/contact">
            <Button image="" content="Request a Demo &#8599;" />
          </Link>
        </div>

        <div className="absolute left-0 right-0 flex justify-center z-20 animate-bounce" style={{ bottom: "12vh" }}>
          <Button
            onClick={scrollToAbout}
            image={
              <Image
                src={arrow.src}
                alt="Scroll to About"
                className="w-8 md:w-10 opacity-80 hover:opacity-100 transition-all"
                width={40}
                height={40}
              />
            }
            content=""
          />
        </div>

      </section>

      {/* MAIN CONTENT */}
      <div className="container mx-auto py-8 bg-white" ref={aboutRef}>

        <section id='section2' className="p-5 py-8 px-16">
          <div>
            <p className="type-lead font-bold">Founded by innovators in environmental health, sensing technology, and intelligent building systems, InteliEQ was built on a simple belief:
              <br></br><br></br>
              <span className="type-subtitle text-brand-orange">Indoor spaces should empower human well-being, not endanger it. </span><br></br><br></br>
              We fuse research-grade sensing, proactive purification, and real-time data intelligence into a single platform, turning invisible risks into measurable improvements and giving building operators a new level of clarity and control.<br></br><br></br>
              Our purpose is to create environments where every breath, every room, and every moment is supported by intelligent systems working quietly in the background.
            </p>
          </div>
        </section>


        {/* OFFER */}
        <section id="offer" className="px-16">
          <div
            ref={offerRef}
            className={`transition-opacity duration-1000 ease-in-out ${offerVisible ? "opacity-100" : "opacity-0"} flex flex-col mt-20 mb-6`}
          >
            <h1 className="type-section-title text-black mb-7">What We Offer</h1>
            <p className="type-lead">InteliEQ provides intelligent technologies that improve indoor environments:</p>

            <div className="grid grid-col-1 md:grid-cols-4 gap-8 mt-5 mx-4 text-center">
              <Icon
                icon={
                  <Image
                    src={filtration.src}
                    alt="Filtration"
                    width={85}
                    height={85}
                    className="mx-auto"
                  />
                }
                title="Active Purification"
                content="Proactive, scientifically validated purification that neutralizes threats before they spread."
              />

              <Icon
                icon={
                  <Image
                    src={ai.src}
                    alt="AI"
                    width={80}
                    height={80}
                    className="mx-auto"
                  />
                }
                title="Real-Time Monitoring"
                content="High-fidelity sensors that measure the full picture of indoor environmental quality—airborne and surface-level—24/7."
              />

              <Icon
                icon={
                  <Image
                    src={data.src}
                    alt="Data"
                    width={80}
                    height={80}
                    className="mx-auto"
                  />
                }
                title="Data Intelligence"
                content="Actionable insights, automated responses, and verified outcomes that turn invisible risks into measurable improvements that build trust with occupants, patients, students and staff."
              />
              <Icon
                icon={
                  <Image
                    src={efficiency.src}
                    alt="Efficiency"
                    width={80}
                    height={80}
                    className="mx-auto"
                  />
                }
                title="Efficiency Gains"
                content="Better IAQ shouldn’t require more energy. Our systems optimize ventilation and purification intelligently, reducing waste and improving building performance."
              />
            </div>
          </div>

          <Link href="/system" className=" mt-4">
              <Button image="" content="See the Engine &#8599;" />
          </Link>
        </section>
        <section id="matters">
          <div ref={mattersRef} className={`transition-opacity duration-1000 ease-in-out ${mattersVisible ? "opacity-100" : "opacity-0"} flex flex-col mt-20`}>
            <div className="flex flex-col md:flex-row md:items-center md:gap-8">
              
              <div className="md:flex-1">
                <h1 className="type-section-title text-black mb-7">Why It Matters</h1>
                <h2 className="type-subtitle text-brand-orange font-bold mb-4">Health, Productivity, Energy, Trust</h2>

                <p className="type-body mb-4">Great indoor environments don’t happen by accident. They’re engineered continuously, intelligently, and transparently.</p>

                <ul className="type-body list-disc pl-6 space-y-2 mb-4">
                  <li>Cleaner air = better health and fewer disruptions</li>
                  <li>Verified spaces = peace of mind for building owners and occupants</li>
                  <li>Smart optimization = lower energy costs</li>
                  <li>Unified intelligence = simpler operations</li>
                </ul>

                <p className="type-body">InteliEQ brings clarity to what’s been invisible for too long.</p>
              </div>
              <div className="md:w-1/3 mt-6 md:mt-0 flex-shrink-0">
                <Image className="relative right-0" src={graphic.src} width={600} height={600} alt="graphic" />
                {/* <div className="w-full h-48 md:h-56 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Image placeholder</span>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        <section id="difference">
          <div ref={differenceRef} className={`transition-opacity duration-1000 ease-in-out ${differenceVisible ? "opacity-100" : "opacity-0"} flex flex-col mt-20 mb-6`}>
            <h1 className="type-section-title text-black mb-7">The InteliEQ Difference</h1>

            <p className="type-lead mb-4">Most buildings rely on outdated, reactive systems, ventilation that runs blindly, purification that’s inconsistent and monitors that only tell you what already went wrong.</p>

            <div className="grid md:grid-cols-2 gap-6 type-body w-ful m-5">
              <div className="shadow-md p-4 rounded-lg m-2 bg-white text-black">
                <h3 className="font-bold">Proactive Instead of Reactive</h3>
                <p>We prevent problems before they affect people.</p>
              </div>

              <div className="shadow-md p-4 rounded-lg m-2 bg-white text-black">
                <h3 className="font-bold">Unified Instead of Fragmented</h3>
                <p>One intelligent system replaces a patchwork of disconnected devices.</p>
              </div>

              <div className="shadow-md p-4 rounded-lg m-2 bg-white text-black">
                <h3 className="font-bold">Verified Instead of Assumed</h3>
                <p>Real-time data proves performance — no guesswork, no uncertainty.</p>
              </div>

              <div className="shadow-md p-4 rounded-lg m-2 bg-white text-black">
                <h3 className="font-bold">Healthy + Efficient Instead of Choosing One</h3>
                <p>Our environmental intelligence optimizes IAQ and energy concurrently.</p>
              </div>
            </div>
            <p className="type-body mt-2 font-medium">Environmental intelligence isn’t a feature. It’s the foundation for the future of indoor environments.</p>
          </div>
        </section>

        {/* SERVE */}
        <section id="serve"  className="px-16">
          <div
            ref={serveRef}
            className={`transition-opacity duration-1000 ease-in-out ${serveVisible ? "opacity-100" : "opacity-0"} flex flex-col mt-20 mb-6`}
          >
            <h1 className="type-section-title text-black mb-7">Who We Serve</h1>
            <p className="type-lead">InteliEQ provides intelligent technologies that improve indoor environments:</p>

            {/* DESKTOP GRID */}
            <div className="hidden md:grid md:grid-cols-6 md:gap-8 md:justify-center md:items-center mt-7">

              <Link href="/sectors" className="inline-block">
                <Icon
                  icon={
                    <Image src={education.src} alt="Education" width={64} height={64} className="mx-auto" />
                  }
                  content="Education"
                />
              </Link>

              <Link href="/sectors" className="inline-block">
                <Icon
                  icon={
                    <Image src={healthcare.src} alt="Healthcare" width={64} height={64} className="mx-auto" />
                  }
                  content="Healthcare"
                />
              </Link>

              <Link href="/sectors" className="inline-block">
                <Icon
                  icon={
                    <Image src={hospitality.src} alt="Hospitality" width={64} height={64} className="mx-auto" />
                  }
                  content="Hospitality"
                />
              </Link>

              <Link href="/sectors" className="inline-block">
                <Icon
                  icon={
                    <Image src={estate.src} alt="Real Estate" width={64} height={64} className="mx-auto" />
                  }
                  content="Real Estate"
                />
              </Link>

              <Link href="/sectors" className="inline-block">
                <Icon
                  icon={
                    <Image src={government.src} alt="Government" width={64} height={64} className="mx-auto" />
                  }
                  content="Government"
                />
              </Link>

              <Link href="/sectors" className="inline-block">
                <Icon
                  icon={
                    <Image src={senior.src} alt="Senior Living" width={64} height={64} className="mx-auto" />
                  }
                  content="Senior Living"
                />
              </Link>
            </div>

            <div className="md:hidden mt-2">
              <div className="flex gap-4 overflow-x-auto px-4 py-2 snap-x snap-mandatory touch-pan-x">
                <Link href="/sectors/education" className="snap-center flex-shrink-0 w-40">
                  <Icon
                    icon={<Image src={education.src} alt="Education" width={64} height={64} className="mx-auto" />}
                    content="Education"
                  />
                </Link>
                <Link href="/sectors/healthcare" className="snap-center flex-shrink-0 w-40">
                  <Icon
                    icon={<Image src={healthcare.src} alt="Healthcare" width={64} height={64} className="mx-auto" />}
                    content="Healthcare"
                  />
                </Link>
                <Link href="/sectors/hospitality" className="snap-center flex-shrink-0 w-40">
                  <Icon
                    icon={<Image src={hospitality.src} alt="Hospitality" width={64} height={64} className="mx-auto" />}
                    content="Hospitality"
                  />
                </Link>
                <Link href="/sectors/estate" className="snap-center flex-shrink-0 w-40">
                  <Icon
                    icon={<Image src={estate.src} alt="Real Estate" width={64} height={64} className="mx-auto" />}
                    content="Real Estate"
                  />
                </Link>
                <Link href="/sectors/government" className="snap-center flex-shrink-0 w-40">
                  <Icon
                    icon={<Image src={government.src} alt="Government" width={64} height={64} className="mx-auto" />}
                    content="Government"
                  />
                </Link>
                <Link href="/sectors/senior-living" className="snap-center flex-shrink-0 w-40">
                  <Icon
                    icon={<Image src={senior.src} alt="Senior Living" width={64} height={64} className="mx-auto" />}
                    content="Senior Living"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="px-16">
          <div
            ref={contactRef}
            className={`transition-opacity duration-1000 ease-in-out ${contactVisible ? "opacity-100" : "opacity-0"
              } flex flex-col mt-20`}
          >
            <h1 className="type-section-title-sm text-black">
              Ready to See What an Intelligent Indoor Environment Can Do?
            </h1>
            <h2 className='type-kicker mt-5'>Let’s transform your spaces into ecosystems that support human health, operational clarity and sustainable performance.</h2>

            {/* <Link href="/system" className="inline-block mt-4">
              <Button image="" content="See the Engine &#8599;" />
            </Link> */}
            <Link href="/contact" className="inline-block mt-4">
              <Button image="" content="Contact Us &#8599;" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
