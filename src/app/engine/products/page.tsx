import Image, { StaticImageData } from 'next/image';
import background from '@/app/assets/products.png';
import i365Image from '@/app/assets/i365.png';
import symphonyImage from '@/app/assets/symphony-IQ.png';
import athleticIcon from "@/app/assets/athletic.png";
import educationIcon from "@/app/assets/education.png";
import hospitalityIcon from "@/app/assets/hospitality.png";
import healthcareIcon from "@/app/assets/healthcare.png";

export default function EngineProductsPage() {
  type ProductProps = {
    name: string;
    description: string;
    image: StaticImageData;

    whatItIsDescription: string;
    whatItIsBullets?: string[];

    howItWorksSteps?: {
      title: string;
      text: string;
    }[];

    whyItMattersDescription: React.ReactNode;
    whyItMattersBullets?: string[];

    extraRightSection?: {
      title: string;
      bullets: string[];
    };

    designedFor?: {
      title: string;
      items: { label: string; icon: StaticImageData }[];
    };
};

  const SymphonyiQ: ProductProps = {
  name: "Symphony-iQ",

  description:
    "An integrated system that senses, purifies, and optimizes indoor environments in real time.",

  image: symphonyImage,

  whatItIsDescription:
    "Symphony-iQ is a modular environmental intelligence system designed for high-density, high-performance environments.",

  whatItIsBullets: [
    "Real-time environmental sensing",
    "Active air and surface intervention",
    "Adaptive HVAC optimization",
  ],

  howItWorksSteps: [
    {
      title: "SENSE",
      text: "Continuously monitors IAQ metrics, occupancy dynamics, and environmental load.",
    },
    {
      title: "INTERVENE",
      text: "Actively treats air and surfaces within occupied zones.",
    },
    {
      title: "OPTIMIZE",
      text: "Integrates with HVAC systems to balance exposure reduction and energy demand.",
    },
  ],

  whyItMattersDescription:
    "High-performance facilities cannot afford reactive environments.",

  whyItMattersBullets: [
    "Stabilizes environmental conditions during peak occupancy",
    "Reduces unnecessary conditioning demand",
    "Improves environmental recovery dynamics",
    "Aligns performance environments with energy efficiency goals",
  ],

  designedFor: {
    title: "Designed for Performance Environments:",
    items: [
    { label: "Athletic Facilities", icon: athleticIcon },
    { label: "Education", icon: educationIcon },
    { label: "Hospitality", icon: hospitalityIcon },
    { label: "Healthcare", icon: healthcareIcon },
  ],
  },
};

  const i365: ProductProps = {
  name: "i365+",

  description: "Continuous environmental awareness. Continuous optimization.",

  image: i365Image,

  whatItIsDescription:
    "i365+ is the data and control layer that powers Symphony-iQ deployments.",

  whatItIsBullets: [
    "Aggregates real-time environmental data",
    "Analyzes exposure dynamics",
    "Optimizes HVAC response",
    "Provides actionable reporting",
  ],

  whyItMattersDescription: (
  <>
    Traditional systems monitor, i365+ <em>adapts</em>. <br />
    Traditional systems report, i365+ <em>optimizes</em>.
  </>
),

  extraRightSection: {
    title: "Data Layer",
    bullets: [
      "Environmental trend visualization",
      "Exposure stabilization tracking",
      "Energy optimization modeling",
      "Deployment analytics",
    ],
  },
};

  function Product({ content }: { content: ProductProps }) {
  const isSymphonyLayout = !!content.howItWorksSteps;

  return (
    <div className="max-w-[1000px] mx-auto py-12">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-12">
        {content.name}
      </h2>

      {isSymphonyLayout ? (
        <div className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
               <p className="text-lg text-gray-700 leading-relaxed">
                {content.description}
              </p>
                <h3 className="text-3xl font-bold text-gray-900">What It Is</h3>

                <p className="text-lg text-gray-700 leading-relaxed">
                  {content.whatItIsDescription}
                </p>

                {content.whatItIsBullets && (
                  <div className="text-lg text-gray-700">
                    <div className="mt-3 mb-2">It combines:</div>
                    <ul className="list-disc pl-6 space-y-1 leading-relaxed">
                      {content.whatItIsBullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>

            <div>
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={content.image}
                  alt={`${content.name} image`}
                  fill
                  className="object-contain scale-110"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">How It Works</h3>

              <div className="space-y-6">
                {content.howItWorksSteps!.map((s, i) => (
                  <div key={i} className="space-y-1">
                    <div className="font-extrabold tracking-wide text-gray-900">
                      {s.title}
                    </div>
                    <div className="text-lg text-gray-700 leading-relaxed">
                      {s.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Why It Matters</h3>

              <p className="text-lg text-gray-700 leading-relaxed">
                {content.whyItMattersDescription}
              </p>

              {content.whyItMattersBullets && (
                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 leading-relaxed">
                  {content.whyItMattersBullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {content.designedFor && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">
                {content.designedFor.title}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                {content.designedFor.items.map((it, i) => (
                  <div key={i} className="flex flex-col items-center gap-3">
                   <div className="relative h-20 w-20">
                      <Image
                        src={it.icon}
                        alt={`${it.label} icon`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="text-sm text-gray-800">{it.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                {content.description}
              </p>
              <h3 className="text-3xl font-bold text-gray-900">What It Is</h3>

              <p className="text-lg text-gray-700 leading-relaxed">
                {content.whatItIsDescription}
              </p>

              {content.whatItIsBullets && (
                <div className="text-lg text-gray-700">
                  <div className="mt-3 mb-2">{content.name}:</div>
                  <ul className="list-disc pl-6 space-y-1 leading-relaxed">
                    {content.whatItIsBullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div>
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={content.image}
                  alt={`${content.name} image`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">Why It Matters</h3>

              <p className="text-lg text-gray-700 leading-relaxed">
                {content.whyItMattersDescription}
              </p>
            </div>

            {content.extraRightSection && (
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-900">
                  {content.extraRightSection.title}
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 leading-relaxed">
                  {content.extraRightSection.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}


  return (
    <div className='pt-16'>
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden mb-2">
        <Image src={background} alt="Engine Products Background" fill className="object-cover object-center" />
      </div>
      <div className="max-w-[1000px] mx-auto flex flex-col py-12">
        <Product content={SymphonyiQ} />
        <Product content={i365} />
      </div>
    </div>
  );
}