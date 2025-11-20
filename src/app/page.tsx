'use client';

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Button from "./components/Button";
import Solutions from "./components/Solutions";
import Statistic from "./components/Statistic";
import placeholder from "./assets/placeholder.png"
import Icon from "./components/Icon";
import filtration from "./assets/icons/filtration.png";
import ai from "./assets/icons/ai.png";
import ruling from "./assets/icons/ruling.png";
import healthcare from "./assets/icons/healthcare.png";
import education from "./assets/icons/education.png";
import estate from "./assets/icons/estate.png";
import government from "./assets/icons/government.png";
import senior from "./assets/icons/senior.png";
import hospitality from "./assets/icons/hospitality.png";
import arrow from "./assets/icons/downward_arrow.png";

import { stack } from "d3";
import { off } from "process";

export default function Home() {
  const [differenceVisible, setDifferenceVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [offerVisible, setOfferVisible] = useState(false);
  const [serveVisible, setServeVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  const differenceRef = useRef(null);
  const aboutRef = useRef(null);
  const offerRef = useRef(null);
  const serveRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  const enableScrollAndGoToAbout = (e?: React.MouseEvent) => {
    if (e) e.preventDefault()
    document.body.style.overflow = ''
    if (aboutRef && aboutRef.current) {
      // @ts-ignore
      aboutRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === differenceRef.current) setDifferenceVisible(entry.isIntersecting);
          if (entry.target === aboutRef.current) setAboutVisible(entry.isIntersecting);
          if (entry.target === offerRef.current) setOfferVisible(entry.isIntersecting);
          if (entry.target === serveRef.current) setServeVisible(entry.isIntersecting);
          if (entry.target === contactRef.current) setContactVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    if (differenceRef.current) observer.observe(differenceRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (offerRef.current) observer.observe(offerRef.current);
    if (serveRef.current) observer.observe(serveRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, []);


  return (
    <>
      <section id="landing-page" className="overflow-hidden relative w-full flex items-center bg-[url(./assets/city-background3.png)] bg-cover bg-center bg-no-repeat h-screen">
        <div className="relative z-10 container px-8 lg:px-20">
          <h1 className="text-white text-4xl md:text-6xl font-bold w-full text-left m-2">Redefining how buildings
            <span className="ml-4">
              <span className="cycle-wrapper">
                <span className="cycle-word cycle-1 text-4xl md:text-6xl shadow-xl text-brand-orange font-bold">think.</span>
                <span className="cycle-word cycle-2 text-4xl md:text-6xl shadow-xl text-brand-orange font-bold">breathe.</span>
                <span className="cycle-word cycle-3 text-4xl md:text-6xl shadow-xl text-brand-orange font-bold">heal.</span>
              </span>
            </span>
          </h1>
          <div>
            <Link href="/contact">
              <Button
                image=""
                content="Request a Demo &#8599;"
              />
            </Link>
          </div>
          
        </div>
        <div className="absolute left-0 right-0 bottom-6 md:bottom-16 flex justify-center z-20 animate-bounce">
          <Button
            onClick={enableScrollAndGoToAbout}
            image={<img src={arrow.src} alt="Scroll to About" className="mx-auto w-12 md:w-16"/>}
            content=""
          />
        </div>
      </section>
      <div className="container mx-auto px-16 py-8 bg-white">
        <section id="about">
          <div id="about" ref={aboutRef} className={`transition-opacity duration-1000 ease-in-out ${aboutVisible ? "opacity-100" : "opacity-0"} flex flex-col mt-12 mb-6`}>
            <div id="stats" className="flex flex-col mb-14 items-center justify-center">
              <Statistic
                header="Every 5 minutes"
                info="Someone dies of a health-care associated infection"
              />
              <Statistic
                header="$190 Billion"
                info="Wasted annually on inefficient building energy use"
              />
              <Statistic
                header="$40 Billion"
                info="Lost productivity, performance & absenteeism annually"
              />
              <Statistic
                header="90 MMT*"
                info="CO2 emission from commercial buildings *million metric tons"
              />
            </div>
          </div>
        </section>

        {/* <section id="solutions">
          <div
            id="solutions"
            ref={solutionsRef}
            className={`transition-opacity duration-1000 ease-in-out ${solutionsVisible ? "opacity-100" : "opacity-0"} flex flex-col justify-center items-center mt-12`}
          >
            <h1 className="text-black text-4xl font-bold mb-5">Our Solutions</h1>
            <div className="flex flex-col md:flex-row space-x-4">
              <div className="flex-1">
                <Solutions
                  title="Symphony-iQ"
                  image={placeholder}
                  caption="Provides 24/7 surface decontamination & air purification in indoor spaces up to 2000 sq. ft. Effective in any environment."
                  learn_more="#"
                />
              </div>

              <div className="flex-1">
                <Solutions
                  title="SensorPure"
                  image={placeholder}
                  caption="Provides 24/7 surface decontamination & air purification without the use of ozone. It is a proactive & effective solution for any environment."
                  learn_more="#"
                />
              </div>

              <div className="flex-1">
                <Solutions
                  title="i365+"
                  image={placeholder}
                  caption="Provides real-time monitoring with proactive, predictive, preventative alerts with automated compliance reporting using energy optimization algorithms."
                  learn_more="#"
                />
              </div>
            </div>
          </div>
        </section> */}

        <section id="different">
          <div id="difference" ref={differenceRef} className={`transition-opacity duration-1000 ease-in-out ${differenceVisible ? "opacity-100" : "opacity-0"} flex flex-col mt-20 mb-6`}>
            <h1 className="text-black text-5xl font-bold mb-7">How are we different?</h1>
            <p className="text-xl">We offer an industry-leading solution that outperforms competitors by combining active air and surface
              purification in an unobtrusive, easy-to-install form factor with integrated sensors and our i365+ intelligent platform.
              This system seamlessly integrates with existing building automation systems, <span className="font-bold">reducing energy consumption by over 30%.</span></p>
              <div className="flex items-center justify-center mt-7">
                <div className="grid grid-cols-1 md:grid-rows-2 md:grid-cols-2 w-full md:w-2/3 items-center justify-center gap-5">
                  <Icon
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#0070c0" 
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-databricks">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 17l9 5l9 -5v-3l-9 5l-9 -5v-3l9 5l9 -5v-3l-9 5l-9 -5l9 -5l5.418 3.01" />
                        </svg>
                    }
                    title="Unified platform"
                    content=""
                  />
                  <Icon
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#0070c0" 
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-alert-hexagon">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 
                        -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 
                        -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
                    }
                    title="Predictive & preventative"
                    content=""
                  />
                  <Icon
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#0070c0" 
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-world">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M3.6 9h16.8" />
                        <path d="M3.6 15h16.8" /><path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3a17 17 0 0 1 0 18" /></svg>
                    }
                    title="Human-centric & planet-conscious"
                    content=""
                  />
                  <Icon
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#0070c0" stroke-width="2" 
                      stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-ikosaedr">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 8.007v7.986a2 2 0 0 1 -1.006 1.735l-7 4.007a2 2 0 
                        0 1 -1.988 0l-7 -4.007a2 2 0 0 1 -1.006 -1.735v-7.986a2 2 0 0 1 1.006 -1.735l7 -4.007a2 2 0 0 1 1.988 0l7 4.007a2 2 
                        0 0 1 1.006 1.735" /><path d="M3.29 6.97l4.21 2.03" /><path d="M20.71 6.97l-4.21 2.03" /><path d="M20.7 17h-17.4" />
                        <path d="M11.76 2.03l-4.26 6.97l-4.3 7.84" /><path d="M12.24 2.03q 2.797 4.44 4.26 6.97t 4.3 7.84" /><path d="M12 17l-4.5 -8h9z" />
                        <path d="M12 17v5" /></svg>
                    }
                    title="Infrastructure-agnostic"
                    content=""
                  />
                </div>
              </div>
          </div>
        </section>
        <section id="offer">
          <div ref={offerRef} className={`transition-opacity duration-1000 ease-in-out ${offerVisible ? "opacity-100" : "opacity-0"} flex flex-col mt-20 mb-6`}>
            <h1 className="text-black text-5xl font-bold mb-7">What We Offer</h1>
            <p className="text-xl">InteliEQ provides intelligent technologies that improve indoor environments:</p>
            <div className="grid grid-col-1 md:grid-cols-3 gap-12 mt-5 mx-10 text-center">
              <Icon
                icon={<img src={filtration.src} alt="Filtration" className="mx-auto flex justify-center items-center"/>}
                title="Active Air Purification"
                content="Continuously removes pathogens and contaminants from indoor air."
              />
              <Icon 
                icon={<img src={ai.src} alt="AI" className="mx-auto flex justify-center items-center" />}
                title="AI Monitoring & Optimization"
                content="Analyzes building conditions and improves performance in real time."
              />
              <Icon 
                icon={<img src={ruling.src} alt="Ruling" className="mx-auto flex justify-center items-center" />}
                title="Automated Compliance"
                content="Automatically generates reports to meet health and safety standards."
              />
            </div>
            <Button 
              image=""
              content="Learn More &#8599;"
            />
          </div>
        </section>
        <section id="serve">
          <div ref={serveRef} className={`transition-opacity duration-1000 ease-in-out ${serveVisible ? "opacity-100" : "opacity-0"} flex flex-col mt-20 mb-6`}>
            <h1 className="text-black text-5xl font-bold mb-7">Who We Serve</h1>
            <p className="text-xl">InteliEQ provides intelligent technologies that improve indoor environments:</p>
            <div className="mt-7">
              <div className="hidden md:grid md:grid-cols-6 md:gap-8 md:justify-center md:items-center">
                <Link href="/sectors/education" className="inline-block">
                  <Icon icon={<img src={education.src} alt="Education" className="mx-auto" />} title="" content="Education" />
                </Link>
                <Link href="/sectors/healthcare" className="inline-block">
                  <Icon icon={<img src={healthcare.src} alt="Healthcare" className="mx-auto" />} title="" content="Healthcare" />
                </Link>
                <Link href="/sectors/hospitality" className="inline-block">
                  <Icon icon={<img src={hospitality.src} alt="Hospitality" className="mx-auto" />} title="" content="Hospitality" />
                </Link>
                <Link href="/sectors/estate" className="inline-block">
                  <Icon icon={<img src={estate.src} alt="Real Estate" className="mx-auto" />} title="" content="Real Estate" />
                </Link>
                <Link href="/sectors/government" className="inline-block">
                  <Icon icon={<img src={government.src} alt="Government" className="mx-auto" />} title="" content="Government" />
                </Link>
                <Link href="/sectors/senior-living" className="inline-block">
                  <Icon icon={<img src={senior.src} alt="Senior Living" className="mx-auto" />} title="" content="Senior Living" />
                </Link>
              </div>

              <div className="md:hidden mt-2">
                <div className="flex gap-4 overflow-x-auto px-4 py-2 snap-x snap-mandatory touch-pan-x">
                  <Link href="/sectors/education" className="snap-center flex-shrink-0 w-40">
                    <Icon icon={<img src={education.src} alt="Education" className="mx-auto" />} title="" content="Education" />
                  </Link>
                  <Link href="/sectors/healthcare" className="snap-center flex-shrink-0 w-40">
                    <Icon icon={<img src={healthcare.src} alt="Healthcare" className="mx-auto" />} title="" content="Healthcare" />
                  </Link>
                  <Link href="/sectors/hospitality" className="snap-center flex-shrink-0 w-40">
                    <Icon icon={<img src={hospitality.src} alt="Hospitality" className="mx-auto" />} title="" content="Hospitality" />
                  </Link>
                  <Link href="/sectors/estate" className="snap-center flex-shrink-0 w-40">
                    <Icon icon={<img src={estate.src} alt="Real Estate" className="mx-auto" />} title="" content="Real Estate" />
                  </Link>
                  <Link href="/sectors/government" className="snap-center flex-shrink-0 w-40">
                    <Icon icon={<img src={government.src} alt="Government" className="mx-auto" />} title="" content="Government" />
                  </Link>
                  <Link href="/sectors/senior-living" className="snap-center flex-shrink-0 w-40">
                    <Icon icon={<img src={senior.src} alt="Senior Living" className="mx-auto" />} title="" content="Senior Living" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
          <div ref={contactRef} className={`transition-opacity duration-1000 ease-in-out ${contactVisible ? "opacity-100" : "opacity-0"} flex flex-col mt-20`}>
            <h1 className="text-black text-4xl font-bold">Ready to create healthier, smarter indoor environments?</h1>
            <Link href="/contact" className="inline-block">
              <Button 
                image=""
                content="Contact Us &#8599;"
              />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
