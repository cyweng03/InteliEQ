import Image, { StaticImageData } from 'next/image';
import background from '@/app/assets/plant-keyboard.png';
import thumb from '@/app/assets/thumbs-up-icon.png';
import placeholder2 from '@/app/assets/placeholder2.png';


export default function EngineProductsPage() {
  type ProductProps = {
    name: string;
    features: string[];
    img1: StaticImageData;
    header: string;
    content: string;
    benefits: string[];
  }

  const SymphonyiQ: ProductProps = {
    name: "SymphonyiQ",
    features: ["Patented AP cell for active purification",
  "IAQ sensor package for continuous monitoring",
  "LoRaWAN connectivity for long-range data",
  "Air & surface purification to neutralize contaminants",
  "Targets viruses, bacteria, and pollutants",],
    img1: placeholder2,
    header: "Benefits",
    content: "AP cell technology delivers 24/7 surface decontamination and air purification",
    benefits: [
      "Proven to reduce over 99.9% of many common airborne and surface contaminants including viruses, bacteria, mold, fungi, VOCs, smoke allergens, and odors.",
      "Reduces VOC gases, smoke and odors without the use of ozone.",
      "Portable, lightweight device.",
      "Easy to use and low maintenance—plug-and-play solution."
    ]
  }

  const SensorPure: ProductProps = {
    name: "SensorPure",
    features: ["Active purification cell for HVAC ductwork",
  "Integrates directly with existing systems",
  "Reduces airborne and surface contaminants",
  "Neutralizes viruses, bacteria, and pollutants",
  "Improves overall indoor air quality",],
    img1: placeholder2,
    header: "Benefits",
    content: "The SensorPURE induct provides 24/7 surface decontamination and air purification without the use of ozone. It is a proactive and effective solution for any environment.",
    benefits: [
      "AP cell technology delivers 24/7 surface decontamination and air purification.",
      "Proven to reduce over 99.9% of many common airborne and surface contaminants including viruses, bacteria, mold, fungi, VOCs, smoke allergens, and odors.",
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
      <div>
        <h2 className="text-4xl font-bold text-gray-900 mt-12 mb-6">
          {content.name}
        </h2>
          <div className="flex flex-col md:flex-row items-start gap-12 mt-6 mb-12">
            <div className="flex-1">
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 leading-relaxed">
                {content.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
          </div>
          <div className="flex-1 max-w-[480px]">
            <Image
              src={content.img1}
              alt={`${content.name} image 1`}
              className="w-full h-auto border border-gray-200 shadow-sd object-cover"
            />
          </div>
        </div>

          <h3 className="text-3xl font-semibold text-gray-900 mt-10 mb-4">
            {content.header}
          </h3>
          <div className="text-lg text-gray-700 mt-4 mb-4">{content.content}</div>
          <div className="flex flex-row items-center gap-8 mt-4">
            <div className="flex-1">

              <div className="space-y-4 mt-4 mb-12">
                {content.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <Image src={thumb} alt="thumb icon" width={24} height={24} />
                    <p className="text-base text-gray-800 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </div>
    )
  }


  return (
    <div>
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden mb-10">
        <Image src = {background} alt = "Engine Products Background" fill className = "object-cover object-center"/>
      </div>
      <div className="max-w-[1000px] mx-auto flex flex-col py-12">

        <div className="pt-10 pb-6 border-b border-gray-300 last:border-none">
          <Product content={SymphonyiQ} />
        </div>

        <div className="pt-10 pb-6 border-b border-gray-300 last:border-none">
          <Product content={SensorPure} />
        </div>

        <div className="py-10">
          <Product content={i365} />
        </div>
      </div>
    </div>

  );
}

