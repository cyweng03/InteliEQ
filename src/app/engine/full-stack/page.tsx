import Solutions from "@/app/components/Solutions";
import placeholder from "@/app/assets/placeholder.png"
import background from "@/app/assets/earth-globe.png";
import Image from "next/image";

export default function FullStackPage() {
  return (
    <div className="pt-16">
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] h-[500px] overflow-hidden ">
        <Image src={background} alt="Earth Globe Background" fill className="object-cover object-[50%_60%]" />
      </div>
      <div className="m-12 space-y-6">
        <h1 className="text-5xl font-bold mb-10">Our Full Stack Engine</h1>
        <div className="text-xl">InteliEQ : An environmental intelligence engine that creates healthy, efficient buildings automatically, which includes:</div>
        <div className="flex flex-row justify-between items-stretch mt-12">
          <div className="flex-1 px-16 flex flex-col">
            <div className="text-[28px] font-bold leading-[1.1] mb-6">
              Real-Time Monitoring & AI Optimization
            </div>
            <ul role="list" className="list-disc ml-5 text-lg leading-relaxed">
              <li>Continuous IAQ sensing with predictive analytics</li>
              <li>Automatically adjusts HVAC operations for optimal health and efficiency</li>
            </ul>
          </div>
          <div className="w-[1.5px] bg-[#1A1A1A] self-stretch"></div>
          <div className="flex-1 px-16 flex flex-col">
            <div className="text-[28px] font-bold leading-[1.1] mb-6">
              Active Purification (99.9% Pathogen Reduction)
            </div>
            <ul role="list" className="list-disc ml-5 text-lg leading-relaxed">
              <li>FDA-approved, hospital-grade technology</li>
              <li>Continuously eliminates viruses, bacteria and mold on surfaces and in air</li>
            </ul>
          </div>
          <div className="w-[1.5px] bg-[#1A1A1A] self-stretch"></div>
          <div className="flex-1 px-16 flex flex-col">
            <div className="text-[28px] font-bold leading-[1.1] mb-6">
              Automated Compliance & Reporting
            </div>
            <ul role="list" className="list-disc ml-5 text-lg leading-relaxed">
              <li>Meet ASHRAE 241, WELL, LEED & RESET standards automatically</li>
              <li>Comprehensive documentation without manual effort</li>
            </ul>
          </div>
        </div>
        <div className="text-4xl font-bold mb-12 mt-16">
          With our full stack...
        </div>
        <div className="flex flex-row justify-center items-start gap-1 w-full mt-12 mb-20 text-brand-orange">
          <div className="flex flex-col justify-center items-center max-w-[300px] w-full mx-auto text-center">
            <svg
              fill="currentColor"
              width="140"
              height="140"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.221 16.268a15.064 15.064 0 0 0 1.789 1.9C2.008 18.111 2 18.057 2 18a5.029 5.029 0 0 1 3.233-4.678 1 1 0 0 0 .175-1.784A2.968 2.968 0 0 1 4 9a2.988 2.988 0 0 1 5.022-2.2 5.951 5.951 0 0 1 2.022-.715 4.994 4.994 0 1 0-7.913 6.085 7.07 7.07 0 0 0-2.91 4.098zM23.779 16.268a7.07 7.07 0 0 0-2.91-4.1 4.994 4.994 0 1 0-7.913-6.086 5.949 5.949 0 0 1 2.022.715 2.993 2.993 0 1 1 3.614 4.74 1 1 0 0 0 .175 1.784A5.029 5.029 0 0 1 22 18c0 .057-.008.111-.01.167a15.065 15.065 0 0 0 1.789-1.899z" />
              <path d="M18.954 20.284a7.051 7.051 0 0 0-3.085-5.114A4.956 4.956 0 0 0 17 12a5 5 0 1 0-8.869 3.17 7.051 7.051 0 0 0-3.085 5.114 14.923 14.923 0 0 0 1.968.849C7.012 21.088 7 21.046 7 21a5.031 5.031 0 0 1 3.233-4.678 1 1 0 0 0 .175-1.785A2.964 2.964 0 0 1 9 12a3 3 0 1 1 6 0 2.964 2.964 0 0 1-1.408 2.537 1 1 0 0 0 .175 1.785A5.031 5.031 0 0 1 17 21c0 .046-.012.088-.013.133a14.919 14.919 0 0 0 1.967-.849z" />
            </svg>
            <div className="font-bold text-xl text-brand-black">105,000 lives</div>
            <div className="text-brand-black text-lg font-semibold">Can be saved</div>

          </div>
          <div className="w-[1.5px] bg-[#1A1A1A] self-stretch"></div>
          <div className="flex flex-col justify-center items-center max-w-[300px] w-full mx-auto text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1" /><path d="M12 7v10" /></svg>
            <div className="font-bold text-xl text-brand-black">$38 Billion</div>
            <div className="text-brand-black text-lg font-semibold">Potential energy savings</div>
          </div>
          <div className="w-[1.5px] bg-[#1A1A1A] self-stretch"></div>
          <div className="flex flex-col justify-center items-center max-w-[300px] w-full mx-auto text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 18.004h-5.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.38 0 2.573 .813 3.13 1.99" /><path d="M19 16v6" /><path d="M22 19l-3 3l-3 -3" /></svg>
            <div className="font-bold text-xl text-brand-black">165 MMT</div>
            <div className="text-brand-black text-lg font-semibold">CO₂ emission reduction potential</div>

          </div>
        </div>
        <div className="text-4xl font-bold mt-24 mb-8">
          Our Solutions
        </div>
        <div className="flex flex-row space-x-4">
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



    </div>
  );
}
