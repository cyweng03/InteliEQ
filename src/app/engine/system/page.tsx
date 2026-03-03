"use client"

import background from "@/app/assets/plant-keyboard.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FullStackPage() {
  return (
    <div className="pt-16 ">
      <div className="w-full relative h-[50vh] overflow-hidden">
        <Image src={background} alt="Plant Keyboard Background" fill className="object-cover object-center" />
      </div>
      <div className="container mx-auto space-y-2">
        <h1 className="type-page-title mt-12 mb-6">The Environmental Intelligence Engine</h1>
        <div className="type-lead font-bold text-brand-orange">Turning Buildings Into Living, Intelligent Ecosystems</div>
        <p className="type-body">
          At InteliEQ, we believe the spaces we inhabit should do more than operate ... they should <em>think</em>, <em>breathe</em>, and <em>respond</em>.
        </p>
        <p className="type-body">
          Our Symphony-iQ system fuses intelligent sensors, active purification, and
          AI-driven analytics into a unified environmental intelligence engine. The
          result is a building that learns, adapts, and acts—improving air quality,
          reducing energy waste, and creating environments where people and
          performance thrive.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-4"
        >
          <div className="mt-12">
            <h2 className="type-section-title-sm">How It Works</h2>
            <div className="type-kicker mt-3 text-brand-orange">Continuous Awareness. Continuous Action.</div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex-1 items-center flex flex-col">
              <div className="type-card-title mb-4">
                Continuous Monitoring
              </div>
              <ul role="list" className="type-body list-disc ml-5">
                <li>Symphony-iQ monitors indoor air and surface conditions in real time</li>
                <li>Tracks pollutants, CO₂, humidity, and ventilation performance</li>
                <li>Enables continuous awareness and action</li>
              </ul>
            </div>
            <div className="flex-1 items-center flex flex-col">
              <div className="type-card-title mb-4">
                Active Purification
              </div>
              <ul role="list" className="type-body list-disc ml-5">
                <li>Responds immediately when threats emerge</li>
                <li>Reduces contamination risk through active purification</li>
                <li>Optimizes ventilation and zone dampers dynamically</li>
              </ul>
            </div>
            <div className="flex-1 items-center flex flex-col">
              <div className="type-card-title mb-4">
                i365+ Intelligence
              </div>
              <ul role="list" className="type-body list-disc ml-5">
                <li>Connects sensor, purification, and building automation data</li>
                <li>AI models interpret conditions and predict issues early</li>
                <li>Actionable insights delivered through a secure cloud interface</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-4"
        >
          <h2 className="type-section-title-sm mt-12">The ROI of Environmental Intelligence</h2>
          <div className="type-kicker mt-3 text-brand-orange">Health. Performance. Sustainability. Delivered.</div>
          <p className="type-body">
            Poor indoor environments silently cost billions in lost productivity, absenteeism, and energy waste. InteliEQ changes that equation.
          </p>
          <div className="flex flex-row justify-center items-start gap-1 w-full mt-12 text-brand-orange">
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
              <div className="type-kicker text-brand-black">Reduce Airborne Illness Risk</div>
              <div className="type-body-strong text-brand-black">Healthier, more productive spaces</div>

            </div>
            <div className="w-px bg-[#1A1A1A] self-stretch"></div>
            <div className="flex flex-col justify-center items-center max-w-[300px] w-full mx-auto text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1" /><path d="M12 7v10" /></svg>
              <div className="type-kicker text-brand-black">Cut Energy Use by 30%</div>
              <div className="type-body-strong text-brand-black">Lower Costs + Emissions</div>
            </div>
            <div className="w-px bg-[#1A1A1A] self-stretch"></div>
            <div className="flex flex-col justify-center items-center max-w-[300px] w-full mx-auto text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 18.004h-5.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.38 0 2.573 .813 3.13 1.99" /><path d="M19 16v6" /><path d="M22 19l-3 3l-3 -3" /></svg>
              <div className="type-kicker text-brand-black">Meet ESG + WELL/LEED Goals</div>
              <div className="type-body-strong text-brand-black">Measurable Sustainability Impact</div>
            </div>
          </div>
          <p className="type-body">
            This is the power of intelligent air: every breath, every watt, every moment optimized.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-4"
        >

          <div className="mt-12">
            <h2 className="type-section-title-sm">
              A Smarter Path to Net Zero
            </h2>

            <div className="type-lead font-bold mt-4 text-brand-orange">
              Cleaner Air. Smaller Footprint. Bigger Impact.
            </div>

            <p className="type-body mt-6 mb-8">
              With the ability to reduce up to 165 million metric tons of CO₂ annually across large-scale deployment, InteliEQ is accelerating the built environment’s path to net zero. By linking health outcomes to energy intelligence, we’re helping organizations transform environmental performance into a competitive advantage, one intelligent building at a time.
            </p>
          </div>

        </motion.div>


      </div>
    </div>
  );
}
