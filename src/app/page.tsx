'use client';

import React, { useEffect, useState, useRef } from "react";
import Button from "./components/Button";
import Solutions from "./components/Solutions";
import Statistic from "./components/Statistic";


export default function Home() {
  const [solutionsVisible, setSolutionsVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const solutionsRef = useRef(null);
  const aboutRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === solutionsRef.current) setSolutionsVisible(entry.isIntersecting);
          if (entry.target === aboutRef.current) setAboutVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    if (solutionsRef.current) observer.observe(solutionsRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);


  return (
    <>
      <section id="landing-page" className="relative w-full flex items-center bg-[url(./assets/city-background3.png)] bg-cover bg-center bg-no-repeat h-screen">
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-black text-5xl md:text-6xl font-bold w-full text-left m-2">Redefining how buildings
            <span className="ml-2">
              <span className="cycle-wrapper">
                <span className="cycle-word cycle-1 text-5xl md:text-6xl text-brand-orange font-bold">think.</span>
                <span className="cycle-word cycle-2 text-5xl md:text-6xl text-brand-orange font-bold">breathe.</span>
                <span className="cycle-word cycle-3 text-5xl md:text-6xl text-brand-orange font-bold">heal.</span>
              </span>
            </span>
          </h1>
          <div>
            <Button
              content="Request a Demo &#8599;"
            />
          </div>
        </div>
      </section>
      <div className="container mx-auto px-16 py-8 bg-white">
        <section id="about">
          <div id="about" ref={aboutRef} className={`transition-opacity duration-1000 ease-in-out ${aboutVisible ? "opacity-100" : "opacity-0"} flex flex-col mt-12 mb-6`}>
            <h1 className="text-black text-5xl font-bold mb-7">About InteliEQ</h1>
            <p className="text-xl">InteliEQ is an innovative technology company revolutionizing indoor environmental management with our patent-pending solution.
              We deliver intelligent, data-driven systems that integrate advanced air and surface purification devices, sensors, and a
              software platform that creates smart, healthy, and energy-efficient environments. This approach creates healthier, more efficient,
              and sustainable indoor spaces across healthcare, education, commercial, and residential markets.</p>

            <div id="stats" className="flex flex-col mt-14 mb-14 items-center justify-center">
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

        <section id="solutions">
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
                  image="./assets/InteliEQLogo.png"
                  caption="Provides 24/7 surface decontamination & air purification in indoor spaces up to 2000 sq. ft. Effective in any environment."
                  learn_more="#"
                />
              </div>

              <div className="flex-1">
                <Solutions
                  title="SensorPure"
                  image="./assets/InteliEQLogo.png"
                  caption="Provides 24/7 surface decontamination & air purification without the use of ozone. It is a proactive & effective solution for any environment."
                  learn_more="#"
                />
              </div>

              <div className="flex-1">
                <Solutions
                  title="i365+"
                  image="./assets/InteliEQLogo.png"
                  caption="Provides real-time monitoring with proactive, predictive, preventative alerts with automated compliance reporting using energy optimization algorithms."
                  learn_more="#"
                />
              </div>
            </div>
          </div>
        </section>


      </div>
    </>
  );
}
