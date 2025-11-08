import Image, { StaticImageData } from 'next/image';
import gray from '@/app/assets/gray.png';


export default function EngineProductsPage() {
  type ProductProps = {
    name: string;
    description: string;
    header1: string;
    content1: string;
    img1: StaticImageData;
    header2: string;
    img2: StaticImageData;
    content2: string;
    benefits: string[];
  }

  const SymphonyiQ: ProductProps = {
    name: "Symphony iQ",
    description: "The Symphony-iQ combines multiple complementary technologies, including patented AP cell technology, IAQ sensor package and LoRaWAN connectivity. The advanced surface and air purification technology neutralizes viruses, bacteria and other contaminants in the ambient air and on surfaces.",
    header1: "Reduces Contaminants and Pathogens",
    content1: "[placeholder] Symphony iQ uses a combination of advanced technologies to reduce contaminants and pathogens in indoor environments. Its patented AP cell technology continuously eliminates viruses, bacteria, mold, and VOCs from the air and surfaces, providing a safer and healthier space for occupants.",
    img1: gray,
    header2: "Benefits",
    img2: gray,
    content2: "AP cell technology delivers 24/7 surface decontamination and air purification",
    benefits: [
      "Proven to reduce over 99.9% of many common airborne and surface contaminants including viruses, bacteria, mold, fungi, ,VOCs, smoke allergens, and odors.",
      "Reduces VOC gases, smoke and odors without the use of ozone.",
      "Portable, lightweight device.",
      "Easy to use and low maintenance—plug-and-play solution."
    ]
  }

  const SensorPure: ProductProps = {
    name: "SensorPure",
    description: "The SensorPURE induct series provides active purification in the form of a cell that attaches directly to the HVAC system ductwork to reduce viruses, bacteria and other contaminants in the ambient air and on surfaces.",
    header1: "Reduces Contaminants and Pathogens",
    content1: "[placeholder] Symphony iQ uses a combination of advanced technologies to reduce contaminants and pathogens in indoor environments. Its patented AP cell technology continuously eliminates viruses, bacteria, mold, and VOCs from the air and surfaces, providing a safer and healthier space for occupants.",
    img1: gray,
    header2: "Benefits",
    img2: gray,
    content2: "The SensorPURE induct provides 24/7 surface decontamination and air purification without the use of ozone. It is a proactive and effective solution for any environment.",
    benefits: [
      "AP cell technology delivers 24/7 surface decontamination and air purification.",
      "Proven to reduce over 99.9% of many common airborne and surface contaminants including viruses, bacteria, mold, fungi, ,VOCs, smoke allergens, and odors.",
    ]
  }

  function Product({ content }: { content: ProductProps }) {
    return (
      <div>

        <div className='flex flex-col space-y-4'>
          <div className="text-5xl font-bold">{content.name}</div>
          <div className="text-lg mt-2">{content.description}</div>
          <div className="text-2xl font-bold">{content.header1}</div>
          <div className="flex flex-row items-center gap-8">
            <div className="flex-1">
              <div>{content.content1}</div>
            </div>
            <div className="flex-1">
              <Image
                src={content.img1}
                alt={`${content.name} image 1`}
                className="w-full h-auto rounded-lg"
                width={600}
                height={400}
              />
            </div>
          </div>
          <div className="text-2xl font-bold">{content.header2}</div>
          <div className="flex flex-row items-center gap-8">
            <div className="flex-1">
              <Image
                src={content.img2}
                alt={`${content.name} image 2`}
                className="w-full h-auto rounded-lg"
                width={600}
                height={400}
              />
            </div>
            <div className="flex-1">
              <div>{content.content2}</div>

              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                {content.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    )
  }


  return (
    <div>
      <div className="w-full aspect-[3/1] border border-gray-400 flex items-center justify-center bg-gray-100">
        <span className="text-gray-400 text-3xl">▲</span>
      </div>
      <div className="container mx-auto flex flex-col space-y-12 py-8">

        <Product content={SymphonyiQ} />
        <Product content={SensorPure} />
      </div>
    </div>

  );
}

