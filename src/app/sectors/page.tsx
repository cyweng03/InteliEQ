"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import { GlowingEffect } from "@/app/components/ui/glowing-effect";
import HeroCarousel from "../components/Carousel";

import carousel1 from "../assets/carousel1.png";
import carousel2 from "../assets/carousel2.png";
import carousel3 from "../assets/carousel3.jpeg";
import carousel4 from "../assets/carousel4.jpg";
import carousel5 from "../assets/carousel5.png";
import carousel6 from "../assets/carousel6.jpeg";
import carousel7 from "../assets/carousel7.jpg";
import carousel8 from "../assets/carousel8.png";
import carousel9 from "../assets/carousel9.jpg";


import athleticIcon from "@/app/assets/athletic.png";
import educationIcon from "@/app/assets/education.png";
import hospitalityIcon from "@/app/assets/hospitality.png";
import healthcareIcon from "@/app/assets/healthcare.png";
import seniorIcon from "@/app/assets/senior.png";
import estateIcon from "@/app/assets/realestate.png";

export default function SectorsPage() {
  type SectorProps = {
    title: string;
    icon: StaticImageData;
    description1: string;
    bullets: string[];
    description2?: string;
    learnMoreText: string;
    learnMoreLink: string;
  };

  const Education: SectorProps = {
    title: "Education: Focus Elevated",
    icon: educationIcon,
    description1:
      "From classrooms to dormitories, InteliEQ helps schools create healthier, high-performing spaces by actively purifying air and surfaces while continuously monitoring pollutants, temperature, humidity, CO₂ and ventilation efficiency.",
    bullets: [
      "Improved student focus",
      "Reduced absenteeism",
      "Energy-smart buildings",
    ],
    learnMoreText: "Learn more",
    learnMoreLink: "/sectors/education/learn-more.pdf",
  };

  const Healthcare: SectorProps = {
    title: "Healthcare: Safety Reinvented",
    icon: healthcareIcon,
    description1:
      "In environments where every breath matters, InteliEQ delivers continuous protection against airborne and surface pathogens while ensuring optimal ventilation and energy efficiency.",
    bullets: [
      "Reduced HAIs",
      "Improved patient outcomes",
      "Safer spaces for healthcare professionals",
    ],
    description2:
      "The result: fewer HAIs, improved patient outcomes and safer spaces for healthcare professionals.",
    learnMoreText: "Learn more",
    learnMoreLink: "/sectors/education/learn-more.pdf",
  };

  const Hospitality: SectorProps = {
    title: "Hospitality: Comfort Perfected",
    icon: hospitalityIcon,
    description1:
      "Guests remember how a space makes them feel. InteliEQ enhances that experience by delivering cleaner, fresher air and more balanced environments while reducing operational costs through intelligent energy management.",
    bullets: [
      "Elevated guest comfort and satisfaction",
      "Reduced energy consumption and operational costs",
      "Verified indoor environmental quality for brand trust",
    ],
    learnMoreText: "Learn more",
    learnMoreLink: "/sectors/hospitality.pdf",
  };

  const CommercialRealEstate: SectorProps = {
    title: "Commercial Real Estate: Performance Unlocked",
    icon: estateIcon,
    description1:
      "For owners and operators, InteliEQ turns buildings into living assets by combining active purification, real-time monitoring, and data analytics.",
    bullets: [
      "Reduced energy use",
      "Enhanced occupant productivity",
      "Increased property value",
    ],
    learnMoreText: "Learn more",
    learnMoreLink: "/sectors/commercial/learn-more.pdf",
  };

  const Government: SectorProps = {
    title: "Athletic Facilities: Built for Performance",
    icon: athleticIcon,
    description1:
      "From locker rooms and training facilities to weight rooms and recovery spaces, InteliEQ helps athletic programs protect athlete health by actively purifying air and surfaces while continuously monitoring air quality, humidity, temperature, and ventilation performance.",
    bullets: [
      "Healthier athletes",
      "Reduced infection risk",
      "Peak performance environments",
    ],
    learnMoreText: "Learn more",
    learnMoreLink: "/sectors/athletic.pdf",
  };

  const SeniorLiving: SectorProps = {
    title: "Senior Living: Care Amplified",
    icon: seniorIcon,
    description1:
      "In senior living communities, air quality and comfort directly influence health and longevity. InteliEQ safeguards residents and staff through active purification and continuous monitoring ensuring:",
    bullets: [
      "Cleaner air",
      "Reduced pathogen risk",
      "Optimized energy use",
    ],
    learnMoreText: "Learn more",
    learnMoreLink: "/sectors/senior/learn-more.pdf",
  };

  const slides = [
    { id: 1, image: carousel1, alt: "Hero slide 1" },
    { id: 2, image: carousel2, alt: "Hero slide 2" },
    { id: 3, image: carousel3, alt: "Hero slide 3" },
    { id: 4, image: carousel4, alt: "Hero slide 4" },
    { id: 5, image: carousel5, alt: "Hero slide 5" },
    { id: 6, image: carousel6, alt: "Hero slide 6" },
    { id: 7, image: carousel7, alt: "Hero slide 7" },
    { id: 8, image: carousel8, alt: "Hero slide 8" },
    { id: 9, image: carousel9, alt: "Hero slide 9" },
  ];

  function SectorBlock({ content, id }: { content: SectorProps; id: string }) {
    return (
      <div id={id} className="relative group min-h-[20rem] rounded-2xl scroll-mt-24">
        <GlowingEffect
          spread={100}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />

        <div className="relative z-10 p-6 h-full space-y-4 rounded-2xl border bg-white dark:bg-neutral-900 shadow-md">
          <div className="flex items-start space-x-4">
            <Image
              src={content.icon}
              alt={content.title}
              className="w-12 h-12 object-contain"
            />
            <h2 className="type-card-title">{content.title}</h2>
          </div>

          <p className="type-body text-brand-gray">
            {content.description1}
          </p>

          <ul className="list-disc list-inside space-y-1 text-brand-gray">
            {content.bullets.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          {content.description2 && (
            <p className="type-body text-brand-gray">
              {content.description2}
            </p>
          )}

          <div className="font-semibold">
            <Link
              target="_blank"
              href={content.learnMoreLink}
              className="flex items-center gap-1 text-brand-black hover:text-brand-orange"
            >
              <span className="underline">{content.learnMoreText} ↗</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <HeroCarousel slides={slides} autoPlayInterval={3000} />

      <div className="px-[10vw] my-12 space-y-4">
        <h1 className="type-page-title">Sectors</h1>
        <div className="type-lead font-bold text-brand-orange">
          Where we make an impact
        </div>

        <div className="type-body mb-5">
          Every building tells a story of the people within it, the energy it
          consumes, and the invisible forces that shape how it performs.
        </div>

        <div className="type-body">
          From healthcare to education, commercial to government, our solutions
          deliver more than clean air … we deliver proof. Proof of healthier
          people, more efficient operations, and smarter buildings. Because when
          you can see what’s in the air, you can finally take control of what’s
          possible.
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
          <SectorBlock content={Government} id="athletic" />
          <SectorBlock content={Hospitality} id="hospitality" />
          <SectorBlock content={Education} id="education" />
          <SectorBlock content={Healthcare} id="healthcare" />
          <SectorBlock content={CommercialRealEstate} id="real-estate" />
          <SectorBlock content={SeniorLiving} id="senior-living" />
        </div>
      </div>
    </div>
  );
}