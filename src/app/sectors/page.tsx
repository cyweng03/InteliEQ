import Link from 'next/link';


export default function SectorsPage() {
  type SectorProps = {
    title: string;
    icon: string;
    description1: string;
    bullets: string[];
    description2: string;
    learnMoreText: string;
    learnMoreLink: string;
    caseStudyText: string;
    caseStudyLink: string;
    blogPostsText: string;
    blogPostsLink: string;
  };

  const Education: SectorProps = {
    title: "Education",
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
      "From classrooms to dormitories, InteliEQ helps schools create healthier, high-performing spaces by actively purifying air and surfaces while continuously monitoring pollutants, CO₂ and ventilation efficiency.",
    bullets: [
      "Fastest decision cycles (3–6 months vs 12–18 for healthcare)",
      "Strong regulatory tailwinds (New IAQ mandates)",
      "Current Status: Advanced discussions with major US school district ($23M)"
    ],
    description2:
      "The result: improved student focus, reduced absenteeism and energy-smart buildings that support both learning and sustainability goals.",
    learnMoreText: "Learn more (pdf)",
    learnMoreLink: "/sectors/education/learn-more.pdf",
    caseStudyText: "Case Study",
    caseStudyLink: "/sectors/education/case-study",
    blogPostsText: "Blog Posts",
    blogPostsLink: "/blog/education"
  };

  const Healthcare: SectorProps = {
    title: "Healthcare",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-first-aid-kit"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 8v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" /><path d="M4 8m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M10 14h4" /><path d="M12 12v4" /></svg>`,
    description1:
      "In environments where every breath matters, InteliEQ delivers continuous protection against airborne and surface pathogens while ensuring optimal ventilation and energy efficiency.",
    bullets: [
      "Highest ROI potential ($1.5M savings/year from HAI reduction)",
      "300-facility group in early discussions",
      "Partnership with national healthcare service company"
    ],
    description2:
      "The result: fewer HAIs, improved patient outcomes and safer spaces for healthcare professionals.",
    learnMoreText: "Learn more (pdf)",
    learnMoreLink: "/sectors/healthcare/learn-more.pdf",
    caseStudyText: "Case Study",
    caseStudyLink: "/sectors/healthcare/case-study",
    blogPostsText: "Blog Posts",
    blogPostsLink: "/blog/healthcare"
  };

  const Hospitality: SectorProps = {
    title: "Hospitality",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-building-skyscraper"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l18 0" /><path d="M5 21v-14l8 -4v18" /><path d="M19 21v-10l-6 -4" /><path d="M9 9l0 .01" /><path d="M9 12l0 .01" /><path d="M9 15l0 .01" /><path d="M9 18l0 .01" /></svg>`,
    description1:
      "Guests remember how a space makes them feel. InteliEQ enhances that experience by delivering cleaner, fresher air and more balanced environments while reducing operational costs through intelligent energy management, where well-being and efficiency work hand in hand.",
    bullets: [
      "Fastest decision cycles (3–6 months vs 12–18 for healthcare)",
      "Strong regulatory tailwinds (New IAQ mandates)",
      "Current Status: Advanced discussions with major US school district ($23M)"
    ],
    description2:
      "The result: welcoming, healthier, and more memorable environments that drive guest satisfaction and operational excellence.",
    learnMoreText: "Learn more (pdf)",
    learnMoreLink: "/sectors/hospitality/learn-more.pdf",
    caseStudyText: "Case Study",
    caseStudyLink: "/sectors/hospitality/case-study",
    blogPostsText: "Blog Posts",
    blogPostsLink: "/blog/hospitality"
  };

  const CommercialRealEstate: SectorProps = {
    title: "Commercial Real Estate",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-home-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M10 12h4v4h-4z" /></svg>`,
    description1:
      "For owners and operators, InteliEQ turns buildings into living assets. By combining active purification, real-time monitoring, and analytics, we help reduce energy use, enhance occupant productivity, and increase property value through smarter, healthier, more efficient spaces.",
    bullets: [
      "Hotels/hospitality for guest experience/energy reduction",
      "Office buildings seeking WELL/LEED certification",
      "Focus on 25,000 – 300,000 sq. ft.",
      "Mass consumers – smart homes/health-conscious markets"
    ],
    description2:
      "The result: more productive tenants, healthier environments, and higher-performing portfolios.",
    learnMoreText: "Learn more (pdf)",
    learnMoreLink: "/sectors/commercial/learn-more.pdf",
    caseStudyText: "Case Study",
    caseStudyLink: "/sectors/commercial/case-study",
    blogPostsText: "Blog Posts",
    blogPostsLink: "/blog/commercial"
  };

  const Government: SectorProps = {
    title: "Government",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-scale"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 20l10 0" /><path d="M6 6l6 -1l6 1" /><path d="M12 3l0 17" /><path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0" /><path d="M21 12l-3 -6l-3 6a3 3 0 0 0 6 0" /></svg>`,
    description1:
      "From public safety facilities to defense operations, mission-critical environments demand uncompromising reliability. InteliEQ integrates continuous air purification, real-time monitoring, and energy optimization to safeguard health, improve resilience, and enhance operational readiness.",
    bullets: [
      "Verified compliance",
      "Enhanced resilience",
      "Lower lifecycle costs"
    ],
    description2:
      "The result: healthier government facilities, greater uptime, and long-term operational efficiency.",
    learnMoreText: "Learn more (pdf)",
    learnMoreLink: "/sectors/government/learn-more.pdf",
    caseStudyText: "Case Study",
    caseStudyLink: "/sectors/government/case-study",
    blogPostsText: "Blog Posts",
    blogPostsLink: "/blog/government"
  };


  const SeniorLiving: SectorProps = {
    title: "Senior Living",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-old"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 21l-1 -4l-2 -3v-6" /><path d="M5 14l-1 -3l4 -3l3 2l3 .5" /><path d="M8 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M7 17l-2 4" /><path d="M16 21v-8.5a1.5 1.5 0 0 1 3 0v.5" /></svg>`,
    description1:
      "In senior living communities, air quality and comfort directly influence health and longevity. InteliEQ safeguards residents and staff through active purification and continuous monitoring ensuring:",
    bullets: [
      "Cleaner air",
      "Reduced pathogen risk",
      "Optimized energy use"
    ],
    description2:
      "The result: healthier environments, improved well-being, and peace of mind for residents and families.",
    learnMoreText: "Learn more (pdf)",
    learnMoreLink: "/sectors/senior/learn-more.pdf",
    caseStudyText: "Case Study",
    caseStudyLink: "/sectors/senior/case-study",
    blogPostsText: "Blog Posts",
    blogPostsLink: "/blog/senior"
  };

  function SectorBlock({ content }: { content: SectorProps }) {
    return (
      <div className="max-w-3xl space-y-4">
        <div className="flex items-start space-x-4">
          <div
            className="w-12 h-12 text-brand-orange [&>svg]:w-full [&>svg]:h-full"
            dangerouslySetInnerHTML={{ __html: content.icon }}
          />
          <h1 className="text-3xl font-bold">{content.title}</h1>
        </div>

        <p className="text-brand-gray leading-relaxed">{content.description1}</p>

        <ul className="list-disc list-inside space-y-1 text-brand-gray">
          {content.bullets.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <p className="text-brand-gray leading-relaxed">{content.description2}</p>

        <div className="space-x-4 font-semibold">
          <Link href={content.learnMoreLink} className="text-brand-black underline hover:text-brand-orange">
            {content.learnMoreText}
          </Link>

          <div className='space-x-4'>
            <Link href={content.caseStudyLink} className="text-brand-black underline hover:text-brand-orange">
              {content.caseStudyText}
            </Link>

            <Link href={content.blogPostsLink} className="text-brand-black underline hover:text-brand-orange">
              {content.blogPostsText}
            </Link></div>

        </div>
      </div>
    );
  }



  return (
    <div className='pt-16'>
      <div className="w-full aspect-[3/1] border border-gray-400 flex items-center justify-center bg-gray-100">
        <span className="text-gray-400 text-3xl">▲</span>
      </div>
      <div className="m-12 space-y-6">
        <h1 className="text-5xl font-bold">Sectors</h1>
        <div className="text-xl font-bold"> Where we make an impact</div>
        <div className='mb-5'>Every building breathes…and how well it does, defines health, performance and energy outcomes.InteliEQ transforms indoor spaces into intelligent ecosystems that actively purify air and surfaces, monitor real-time conditions and optimize building performance.</div>
        <div>The result: measurable ROI through healthier people, smarter energy use and more resilient, sustainable environments.</div>
        <div className="grid grid-cols-2 gap-16">
          <SectorBlock content={Education} />
          <SectorBlock content={Healthcare} />
          <SectorBlock content={Hospitality} />
          <SectorBlock content={CommercialRealEstate} />
          <SectorBlock content={Government} />
          <SectorBlock content={SeniorLiving} />
        </div>


      </div>


    </div>
  );
}