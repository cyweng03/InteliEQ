"use client";

import Link from 'next/link';

import { GlowingEffect } from '@/app/components/ui/glowing-effect';
import HeroCarousel from '../components/Carousel';
import carousel3 from '../assets/carousel3.jpeg';
import carousel4 from '../assets/carousel4.jpg';
import carousel5 from '../assets/carousel5.jpg';
import carousel6 from '../assets/carousel6.jpeg';

export default function SectorsPage() {
  type SectorProps = {
    title: string;
    icon: string;
    description1: string;
    bullets: string[];
    description2?: string;
    learnMoreText: string;
    learnMoreLink: string;
  };

  const Education: SectorProps = {
    title: "Education: Focus Elevated",
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
      viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
      <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
    </svg>
  `,
    description1:
      "From classrooms to dormitories, InteliEQ helps schools create healthier, high-performing spaces by actively purifying air and surfaces while continuously monitoring pollutants, temperature, humidity, CO₂ and ventilation efficiency.",
    bullets: [
      "Improved student focus",
      "Reduced absenteeism",
      "Energy-smart buildings"
    ],
    learnMoreText: "Learn more",
    learnMoreLink: "/sectors/education/learn-more.pdf",

  };

  const Healthcare: SectorProps = {
    title: "Healthcare: Safety Reinvented",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-first-aid-kit"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 8v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" /><path d="M4 8m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M10 14h4" /><path d="M12 12v4" /></svg>`,
    description1:
      "In environments where every breath matters, InteliEQ delivers continuous protection against airborne and surface pathogens while ensuring optimal ventilation and energy efficiency.",
    bullets: [
      "Reduced HAIs",
      "Improved patient outcomes",
      "Safer spaces for healthcare professionals"
    ],
    description2:
      "The result: fewer HAIs, improved patient outcomes and safer spaces for healthcare professionals.",
    learnMoreText: "Learn more",
    learnMoreLink: "/sectors/education/learn-more.pdf",

  };

  const Hospitality: SectorProps = {
    title: "Hospitality: Comfort Perfected",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-building-skyscraper"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l18 0" /><path d="M5 21v-14l8 -4v18" /><path d="M19 21v-10l-6 -4" /><path d="M9 9l0 .01" /><path d="M9 12l0 .01" /><path d="M9 15l0 .01" /><path d="M9 18l0 .01" /></svg>`,
    description1:
      "Guests remember how a space makes them feel. InteliEQ enhances that experience by delivering cleaner, fresher air and more balanced environments while reducing operational costs through intelligent energy management.",
    bullets: [
      "Elevated guest comfort and satisfaction",
      "Reduced energy consumption and operational costs",
      "Verified indoor environmental quality for brand trust"
    ],
    learnMoreText: "Learn more",
    learnMoreLink: "/sectors/hospitality.pdf",
  };

  const CommercialRealEstate: SectorProps = {
    title: "Commercial Real Estate: Performance Unlocked",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-home-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M10 12h4v4h-4z" /></svg>`,
    description1:
      "For owners and operators, InteliEQ turns buildings into living assets by combining active purification, real-time monitoring, and data analytics.",
    bullets: [
      "Reduced energy use",
      "Enhanced occupant productivityn",
      "Increased property value"
    ],
    learnMoreText: "Learn more",
    learnMoreLink: "/sectors/commercial/learn-more.pdf",
  };

  const Government: SectorProps = {
    title: "Athletic Facilities: Built for Performance ",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-shoe"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6h5.426a1 1 0 0 1 .863 .496l1.064 1.823a3 3 0 0 0 1.896 1.407l4.677 1.114a4 4 0 0 1 3.074 3.89v2.27a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1" /><path d="M14 13l1 -2" /><path d="M8 18v-1a4 4 0 0 0 -4 -4h-1" /><path d="M10 12l1.5 -3" /></svg>`,
    description1:
      "From locker rooms and training facilities to weight rooms and recovery spaces, InteliEQ helps athletic programs protect athlete health by actively purifying air and surfaces while continuously monitoring air quality, humidity, temperature, and ventilation performance.",
    bullets: [
      "Healthier athletes",
      "Reduced infection risk",
      "Peak performance environments"
    ],
    learnMoreText: "Learn more",
    learnMoreLink: "/sectors/athletic.pdf",
  };


  const SeniorLiving: SectorProps = {
    title: "Senior Living: Care Amplified",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-old"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 21l-1 -4l-2 -3v-6" /><path d="M5 14l-1 -3l4 -3l3 2l3 .5" /><path d="M8 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M7 17l-2 4" /><path d="M16 21v-8.5a1.5 1.5 0 0 1 3 0v.5" /></svg>`,
    description1:
      "In senior living communities, air quality and comfort directly influence health and longevity. InteliEQ safeguards residents and staff through active purification and continuous monitoring ensuring:",
    bullets: [
      "Cleaner air",
      "Reduced pathogen risk",
      "Optimized energy use"
    ],
    learnMoreText: "Learn more",
    learnMoreLink: "/sectors/senior/learn-more.pdf",
  };

  const slides = [
    { id: 1, image: carousel3, alt: 'Hero slide 1' },
    { id: 2, image: carousel4, alt: 'Hero slide 2' },
    { id: 3, image: carousel5, alt: 'Hero slide 3' },
    { id: 4, image: carousel6, alt: 'Hero slide 4' }
  ];


  function SectorBlock({ content }: { content: SectorProps }) {
    return (
      <div className="relative group min-h-[20rem] rounded-2xl">
        <GlowingEffect
          spread={100}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />

        {/* Content */}
        <div className="relative z-10 p-6 h-full space-y-4 rounded-2xl border bg-white dark:bg-neutral-900 shadow-md">
          <div className="flex items-start space-x-4">
            <div
              className="w-12 h-12 text-brand-orange [&>svg]:w-full [&>svg]:h-full"
              dangerouslySetInnerHTML={{ __html: content.icon }}
            />
            <h2 className="type-card-title">{content.title}</h2>
          </div>

          <p className="type-body text-brand-gray">{content.description1}</p>

          <ul className="list-disc list-inside space-y-1 text-brand-gray">
            {content.bullets.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <p className="type-body text-brand-gray">{content.description2}</p>

          <div className="font-semibold flex flex-row text-brand-black underline">
            <Link href={content.learnMoreLink} className="font-semibold flex flex-row items-center gap-2 text-brand-black underline hover:text-brand-orange">
              {content.learnMoreText}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                <path d="M11 13l9 -9" />
                <path d="M15 4h5v5" />
              </svg>
            </Link>

          </div>
        </div>
      </div>
    );
  }



  return (
    <div className='pt-16'>
      <HeroCarousel slides={slides} autoPlayInterval={3000} />

      <div className="px-[10vw] my-12 space-y-4">
        <h1 className="type-page-title">Sectors</h1>
        <div className="type-lead font-bold text-brand-orange"> Where we make an impact</div>
        <div className='type-body mb-5'>Every building tells a story of the people within it, the energy it consumes, and the invisible forces that shape how it performs.</div>
        <div className="type-body">From healthcare to education, commercial to government, our solutions deliver more than clean air … we deliver proof. Proof of healthier people, more efficient operations, and smarter buildings. Because when you can see what’s in the air, you can finally take control of what’s possible.</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
          <SectorBlock content={Government} />
          <SectorBlock content={Hospitality} />
          <SectorBlock content={Education} />
          <SectorBlock content={Healthcare} />
          <SectorBlock content={CommercialRealEstate} />
          <SectorBlock content={SeniorLiving} />
        </div>


      </div>


    </div>
  );
}