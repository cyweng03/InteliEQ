'use client';

import React, { useEffect, useRef, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";


import Button from "./components/Button";
import Statistic from "./components/Statistic";
import Icon from "./components/Icon";
import NavContext from "./components/NavContext";
import StatProfile from "./components/StatProfile";

import filtration from "./assets/icons/filtration.png";
import ai from "./assets/icons/ai.png";
import arrow from "./assets/icons/downward_arrow.png";
import data from "./assets/icons/data_icon.png";
import efficiency from "./assets/icons/efficiency_icon.png";
import graphic from "./assets/matters_image.png";
import capabilities_graphic from "./assets/capabilities_image.png";

import athleticIcon from "@/app/assets/athletic.png";
import educationIcon from "@/app/assets/education.png";
import hospitalityIcon from "@/app/assets/hospitality.png";
import healthcareIcon from "@/app/assets/healthcare.png";
import seniorIcon from "@/app/assets/senior.png";
import estateIcon from "@/app/assets/realestate.png";


export default function Home() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);

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
        setHideNav(entry.isIntersecting);
      },
      { threshold: 0.6 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, [setHideNav]);

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
      <div className="px-[10vw] mx-auto py-8 bg-white" ref={aboutRef}>

        <section id='section2' className="p-5 py-8 px-16">
          <div className="font-bold mb-10">
            <h3 className="type-section-title mb-4 md:w-full md:text-5xl mr-3 text-4xl"> Environmental Intelligence for the Spaces We Rely On</h3>
            <div className="flex flex-col items-center justify-center m-8">
              <Statistic
                header="Buildings shouldn't guess."
                info="They should know." />
              <Statistic
                header="They shouldn't react."
                info="They should anticipate." />
            </div>

          </div>
          <div>
            <p className="type-lead font-bold rounded-2xl border bg-white p-8">
              <span className="type-subtitle text-black">Indoor spaces should empower human well-being, not endanger it. </span><br></br><br></br>
              We fuse research-grade sensing, proactive purification, and real-time data intelligence into a single platform, turning invisible risks into measurable improvements and giving building operators a new level of clarity and control.<br></br><br></br>
              Our purpose is to create environments where every breath, every room, and every moment is supported by intelligent systems working quietly in the background.
            </p>
          </div>
        </section>


        {/* OFFER */}
        <section id="offer" className="px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col mt-14 mb-6"
          >
            <h1 className="md:w-1/3 type-section-title text-black mb-7">What We Offer</h1>
            <p className="type-lead">InteliEQ provides intelligent technologies that improve indoor environments:</p>

            <div className="grid grid-col-1 md:grid-cols-4 gap-8 mt-5 mx-4 text-center">

              <StatProfile
                image={<Image src={ai.src} alt="AI" width={120} height={120} className="mx-auto" />}
                name="Real-Time Monitoring"
                title=""
                hoverText="High-fidelity sensors that measure the full picture of indoor environmental quality—airborne and surface-level—24/7."
              />
              <StatProfile
                image={<Image src={filtration.src} alt="filtration" width={125} height={125} className="mx-auto" />}
                name="Active Purification"
                title=""
                hoverText="Proactive, scientifically validated purification that neutralizes threats before they spread."
              />

              <StatProfile
                image={<Image src={data.src} alt="data" width={125} height={125} className="mx-auto" />}
                name="Data Intelligence"
                title=""
                hoverText="Actionable insights, automated responses, and verified outcomes that turn invisible risks into measurable improvements that build trust with occupants, patients, students and staff."
              />
              <StatProfile
                image={<Image src={efficiency.src} alt="efficiency" width={135} height={135} className="mx-auto" />}
                name="Efficiency Gains"
                title=""
                hoverText="Better IAQ shouldn't require more energy. Our systems optimize ventilation and purification intelligently, reducing waste and improving building performance."
              />
            </div>
          </motion.div>

          <Link href="/system" className=" mt-4">
            <Button image="" content="See the Engine &#8599;" />
          </Link>
        </section>
        <section id="matters" className="px-16 mb-15 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col mt-20"
          >
            <div className="flex flex-col md:flex-row md:items-center md:gap-8 justify-center">

              <div className="md:flex-1">
                <h1 className="md:w-3/4 type-section-title text-black mb-7">Why It Matters</h1>
                <h2 className="type-subtitle text-brand-orange font-bold mb-4">Health, Productivity, Energy, Trust</h2>

                <p className="type-body mb-4">Great indoor environments don't happen by accident. They're engineered continuously, intelligently, and transparently.</p>

                <ul className="type-body list-disc pl-6 space-y-2 mb-4">
                  <li>Cleaner air = better health and fewer disruptions</li>
                  <li>Verified spaces = peace of mind for building owners and occupants</li>
                  <li>Smart optimization = lower energy costs</li>
                  <li>Unified intelligence = simpler operations</li>
                </ul>

                <p className="type-body">InteliEQ brings clarity to what's been invisible for too long.</p>
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0 flex-shrink-0 items-center justify-center flex">
                <Image
                  className="w-full h-auto"
                  src={graphic.src}
                  width={600}
                  height={600}
                  alt="graphic"
                />
              </div>
            </div>
          </motion.div>
        </section>
        <section id="difference" className="bg-brand-black relative left-1/2 right-1/2 w-screen -translate-x-1/2 text-white py-6 px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col mt-12 mb-8 px-[10vw]"
          >
            <h1 className="md:w-1/2 type-section-title text-white mb-5">
              The InteliEQ Difference
            </h1>

            <p className="type-lead mb-6 text-white">
              Most buildings rely on outdated, reactive systems, ventilation that runs blindly, purification that's inconsistent and monitors that only tell you what already went wrong.
            </p>

            <div className="flex flex-col gap-1 type-body w-full">
              {[
                {
                  title: "Proactive Instead of Reactive",
                  body: "We prevent problems before they affect people.",
                },
                {
                  title: "Unified Instead of Fragmented",
                  body: "One intelligent system replaces a patchwork of disconnected devices.",
                },
                {
                  title: "Verified Instead of Assumed",
                  body: "Real-time data proves performance — no guesswork, no uncertainty.",
                },
                {
                  title: "Healthy + Efficient Instead of Choosing One",
                  body: "Our environmental intelligence optimizes IAQ and energy at the same time.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.12 }}
                  className="py-2 px-3 border-b border-white/10 rounded-md cursor-default transition-colors"
                >
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="text-white/80 mt-0.5">{item.body}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="type-body text-xl mt-5 font-bold text-brand-orange"
            >
              Environmental intelligence isn't a feature. It's the foundation for the future of indoor environments.
            </motion.p>
          </motion.div>
        </section>

        {/* SERVE */}
        <section id="serve" className="px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col mt-20 mb-6"
          >
            <h1 className="md:w-1/3 type-section-title text-black mb-7">Who We Serve</h1>
            <p className="type-lead font-bold text-brand-orange mb-2">Designed for the Places Where Performance Matters Most</p>
            <p>Any indoor space where health, trust, and efficiency are mission-critical.
              Whether it's a hospital wing, a school district, or a corporate campus, InteliEQ scales seamlessly.
            </p>

            <div className="hidden md:grid md:grid-cols-6 md:gap-8 md:justify-center md:items-center mt-7">

              <Link href="/sectors" className="inline-block">
                <Icon
                  icon={
                    <Image src={athleticIcon.src} alt="Government" width={64} height={64} className="mx-auto" />
                  }
                  subtitle="Athletic Facilities"
                />
              </Link>
              <Link href="/sectors" className="inline-block">
                <Icon
                  icon={
                    <Image src={hospitalityIcon.src} alt="Hospitality" width={64} height={64} className="mx-auto" />
                  }
                  subtitle="Hospitality"
                />
              </Link>
              <Link href="/sectors" className="inline-block">
                <Icon
                  icon={
                    <Image src={educationIcon.src} alt="Education" width={64} height={64} className="mx-auto" />
                  }
                  subtitle="Education"
                />
              </Link>

              <Link href="/sectors" className="inline-block">
                <Icon
                  icon={
                    <Image src={healthcareIcon.src} alt="Healthcare" width={64} height={64} className="mx-auto" />
                  }
                  subtitle="Healthcare"
                />
              </Link>

              <Link href="/sectors" className="inline-block">
                <Icon
                  icon={
                    <Image src={estateIcon.src} alt="Real Estate" width={64} height={64} className="mx-auto" />
                  }
                  subtitle="Real Estate"
                />
              </Link>

              <Link href="/sectors" className="inline-block">
                <Icon
                  icon={
                    <Image src={seniorIcon.src} alt="Senior Living" width={64} height={64} className="mx-auto" />
                  }
                  subtitle="Senior Living"
                />
              </Link>
            </div>

            <div className="md:hidden mt-2">
              <div className="flex gap-4 overflow-x-auto px-4 py-2 snap-x snap-mandatory touch-pan-x">
                <Link href="/sectors" className="snap-center flex-shrink-0 w-40">
                  <Icon
                    icon={<Image src={athleticIcon.src} alt="Government" width={64} height={64} className="mx-auto" />}
                    subtitle="Athletic Facilities"
                  />
                </Link>
                <Link href="/sectors" className="snap-center flex-shrink-0 w-40">
                  <Icon
                    icon={<Image src={hospitalityIcon.src} alt="Hospitality" width={64} height={64} className="mx-auto" />}
                    subtitle="Hospitality"
                  />
                </Link>

                <Link href="/sectors" className="snap-center flex-shrink-0 w-40">
                  <Icon
                    icon={<Image src={educationIcon.src} alt="Education" width={64} height={64} className="mx-auto" />}
                    subtitle="Education"
                  />
                </Link>
                <Link href="/sectors" className="snap-center flex-shrink-0 w-40">
                  <Icon
                    icon={<Image src={healthcareIcon.src} alt="Healthcare" width={64} height={64} className="mx-auto" />}
                    subtitle="Healthcare"
                  />
                </Link>
                <Link href="/sectors" className="snap-center flex-shrink-0 w-40">
                  <Icon
                    icon={<Image src={estateIcon.src} alt="Real Estate" width={64} height={64} className="mx-auto" />}
                    subtitle="Real Estate"
                  />
                </Link>

                <Link href="/sectors" className="snap-center flex-shrink-0 w-40">
                  <Icon
                    icon={<Image src={seniorIcon.src} alt="Senior Living" width={64} height={64} className="mx-auto" />}
                    subtitle="Senior Living"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
        <section id="capabilities" className="mt-20 px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="md:w-1/3 type-section-title text-black mb-7">Key Capabilities</h1>

            <div className="flex flex-col md:flex-row md:items-center md:gap-12">

              <div className="md:w-2/5 w-full flex items-center justify-center flex-shrink-0">
                <Image src={capabilities_graphic.src} width={600} height={600} alt="graphic" />
              </div>

              <div className="flex-1 flex flex-col justify-center ml-auto pl-8">
                <h2 className="type-subtitle text-brand-orange font-bold mb-4">
                  Science-Driven. Field-Tested. Human-Centered.
                </h2>

                <h3 className="mb-3 text-lg">
                  Our systems are developed by multidisciplinary experts in engineering, environmental science, building systems and data intelligence.
                </h3>

                <ul className="type-body list-disc pl-6 space-y-2 mb-4">
                  <li>Pathogen & contaminant reduction in real-world environments</li>
                  <li>Research-grade sensor accuracy</li>
                  <li>Automated ventilation optimization</li>
                  <li>Transparent, continuous performance verification</li>
                  <li>Proven alignment with IAQ, WELL, LEED, and ASHRAE standards</li>
                </ul>

                <p className="type-body">InteliEQ doesn't ask for trust. We earn it with data.</p>
              </div>

            </div>
          </motion.div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col mt-20"
          >
            <h1 className="type-section-title-sm text-black">
              Ready to See What an Intelligent Indoor Environment Can Do?
            </h1>
            <h2 className='type-kicker mt-5'>Let's transform your spaces into ecosystems that support human health, operational clarity and sustainable performance.</h2>

            <Link href="/contact" className="inline-block mt-4">
              <Button image="" content="Request a Demo &#8599;" />
            </Link>
            <Link href="/system" className="inline-block mt-4">
              <Button image="" content="Learn about the Engine &#8599;" />
            </Link>
          </motion.div>
        </section>
      </div>
    </>
  );
}