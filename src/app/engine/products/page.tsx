import Image, { StaticImageData } from 'next/image';
import background from '@/app/assets/plant-keyboard.png';
import thumb from '@/app/assets/thumbs-up-icon.png';
import placeholder2 from '@/app/assets/placeholder2.png';


export default function EngineProductsPage() {
  type ProductProps = {
    name: string;
    description?: string;
    topBullets?: string[];
    image: StaticImageData;

    whatItIsDescription: string;
    whatItIsBullets?: string[];

    howItWorksIntro?: string;
    howItWorksSteps?: {
      title: string;
      text: string;
    }[];

    whyItMattersDescription: string;
    whyItMattersBullets?: string[];

    extraRightSection?: {
      title: string;
      bullets: string[];
    };

    designedFor?: {
      title: string;
      items: { label: string; icon?: StaticImageData }[];
    };
};

  const SymphonyiQ: ProductProps = {
    name: "SymphonyiQ",
    description: "An integrated system that senses, purifies, and optimizes indoor environments in real time.",
    image: placeholder2,

    whatItIsDescription: "SymphonyiQ is a next-generation air and surface purification system that uses patented AP cell technology to neutralize airborne and surface contaminants.",
    whatItIsBullets: [
      "Real-time environmental sensing",
      "Active air and surface intervention",
      "Adaptive HVAC optimization"
    ],
    
    howItWorksIntro: "SymphonyiQ works by using a patented AP cell that actively purifies the air and surfaces in real-time, neutralizing contaminants without the use of ozone.",
    howItWorksSteps: 
    whyItMattersDescription: "SymphonyiQ is important because it provides continuous, effective air and surface purification in any indoor environment, improving health, comfort, and safety."
  }

  const i365: ProductProps = {
    name: "i365+",
    description: "i365+ is an intelligent building management system that provides real-time IAQ monitoring, automated alerts, and actionable insights to improve building performance.",
    whatItIsdescription: "i365+ is an intelligent building management system that provides real-time IAQ monitoring, automated alerts, and actionable insights to improve building performance.",
    image: placeholder2,
    howItWorksDescription: "i365+ works by continuously monitoring indoor air quality through integrated sensors and providing real-time data visualization through an intuitive dashboard.",
    whyItMattersDescription: "i365+ matters because it helps building managers maintain optimal indoor air quality standards while reducing energy consumption and improving occupant comfort."
      "Targets viruses, bacteria, and pollutants",],
    img1: placeholder2,
    header: "Benefits",
    content: "AP cell technology delivers 24/7 surface decontamination and air purification",
    benefits: [
      "Proven to reduce over 99.9% of many common airborne and surface contaminants including viruses, bacteria, mold, fungi, VOCs, smoke allergens, and odors.",
      "Reduces VOC gases, smoke and odors without the use of ozone.",
      "Easy to use and low maintenance—plug-and-play solution.",
      "Portable, lightweight device."
    ]
  }

  const i365: ProductProps = {
    name: "i365+",
    features: [
      "Real-time monitoring UI dashboard w/ widgets",
      "Proactive, Predictive, Preventative alerts",
      "BACnet integration",
      "Automated compliance reporting",
      "Energy optimization algorithms"
    ],
    img1: placeholder2,
    header: "Benefits",
    content: "i365+ provides real-time IAQ monitoring, automated alerts, and actionable building insights to improve comfort and efficiency.",
    benefits: [
      "Improves health, comfort, and performance by reducing indoor pollutants and supporting better cognitive function.",
      "Enhances efficiency and safety with early detection, real-time alerts, and optimized HVAC and energy use.",
      "Supports compliance and reliability by maintaining IAQ standards and improving overall building performance."
    ]
  };

  function Product({ content }: { content: ProductProps }) {
    return (
      <div className='max-w-3xl space-y-4'>
        <h2 className="text-5xl font-extrabold text-gray-900 mt-6 mb-12">
          {content.name}
        </h2 >
        <div className="flex flex-col md:flex-row items-start gap-8 mt-4 mb-6">
          <div className="flex-1">
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 leading-relaxed">
              {content.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="flex-1 max-w-[480px] mt-[-100px] mb-[-20px]">
            <Image
              src={content.img1}
              alt={`${content.name} image 1`}
              className="w-full h-auto border border-gray-200 shadow-sd object-cover"
            />
          </div>
        </div>

        <h3 className="text-4xl font-bold text-gray-900 mt-20 mb-4">
          {content.header}
        </h3>
        <div className="text-lg text-gray-700 mt-2 mb-3">{content.content}</div>
        <div className="flex flex-row items-center gap-8 mt-4">
          <div className="flex-1">

            <div className="space-y-8 mt-2 mb-6">
              {content.benefits.map((benefit, index) => (
                <div key={index} className="flex gap-6 items-center">
                  <Image src={thumb} alt="thumb icon" width={32} height={32} className="pt-[2px]" />
                  <p className="text-base text-gray-800 leading-snug relative top-[4px]">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div >
    )
  }


  return (
    <div className='pt-16'>
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden mb-2">
        <Image src={background} alt="Engine Products Background" fill className="object-cover object-center" />
      </div>
      <div className="max-w-[1000px] mx-auto flex flex-col py-12">

        <div className="py-6">
          <Product content={SymphonyiQ} />
        </div>

        <div className="py-6">
          <Product content={i365} />
        </div>
      </div>
    </div>

  );
}

