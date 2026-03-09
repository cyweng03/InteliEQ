"use client";

import Image from "next/image";

import people from "../assets/icons/people.svg";
import planet from "../assets/icons/planet.svg";
import passion from "../assets/icons/passion.svg";

import christianne from "@/app/assets/christianne.png";
import karl from "@/app/assets/karl.png";
import terry from "@/app/assets/terry.png";

import { motion } from "framer-motion";
import Profile from "../components/Profile";

export default function ResourcesPage() {
  return (
    <div className="pt-16">
      <div className="w-full h-[50vh] border border-gray-400 flex items-center justify-center bg-gray-100">
        <span className="text-gray-400 text-3xl">▲</span>
      </div>

      <div className="px-[10vw] my-6 space-y-12">
        <div className="space-y-4">
          <h1 className="type-page-title text-black">About Us</h1>
          <h2 className="type-lead text-brand-orange font-bold">Our Mission</h2>
          <p className="type-body">In a world flooded with point solutions, InteliEQ is doing something fundamentally different. While others focus on monitoring air,
            purifying air, or optimizing HVAC systems in isolation, InteliEQ delivers something bigger: <span className="font-bold text-brand-orange">a full-stack environmental intelligence
              engine</span> that connects the dots between health, energy, and performance to address the Health-Performance Gap within our built environments.
            <br></br><br></br>
            We believe buildings shouldn’t just respond to problems, they should predict and prevent them. That’s why InteliEQ integrates real-time sensing,
            active purification, AI-driven analytics, and intelligent controls into a seamless system that adapts dynamically to the environment and the people in it.
            <br></br><br></br>
            Where many systems stop at dashboards or alerts, we go further, offering actionable insights and system-level automation that drive healthier outcomes,
            lower energy use, and smarter operations across entire facilities.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex flex-1 flex-col space-y-2">
              <div className="flex justify-center"> <Image src={people} alt="People illustration" /></div>
              <div className="type-card-title-sm text-center text-black">People</div>
              <div className="type-body">We design technology that protects what matters most, human health, comfort, and performance. Every environment we touch is made measurably safer, cleaner, and more supportive of the people who live, work, and heal within it.</div>
            </div>
            <div className="flex flex-1 flex-col space-y-2">
              <div className="flex justify-center"> <Image src={planet} alt="planet illustration" /></div>
              <div className="type-card-title-sm text-center text-black">Planet</div>
              <div className="type-body">Sustainability isn’t a feature; it’s a responsibility. Our systems actively reduce energy waste, lower carbon impact, and extend the life of building infrastructure, proving that healthy indoor environments and a healthier planet go hand in hand.</div>
            </div>
            <div className="flex flex-1 flex-col space-y-2">
              <div className="flex justify-center"> <Image src={passion} alt="passion illustration" /></div>
              <div className="type-card-title-sm text-center text-black">Passion</div>
              <div className="type-body">We challenge outdated thinking. We innovate with urgency. And we build with purpose. Our passion is transforming buildings into intelligent, self-optimizing ecosystems that elevate health, efficiency, and trust in the spaces we depend on every day.</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h3 className="type-section-title-sm text-black">Core Values</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="flex flex-1 flex-col">
              <div className="type-kicker text-brand-orange">Serve with Purpose</div>
              <div className="type-body">We design solutions that improve lives, protect health, and create long-term value for every community we touch.</div>
            </div>
            <div className="flex flex-1 flex-col">
              <div className="type-kicker text-brand-orange">Act with Integrity</div>
              <div className="type-body">We operate with transparency, trust, and accountability — in our technology, our partnerships, and our impact.</div>
            </div>
            <div className="flex flex-1 flex-col">
              <div className="type-kicker text-brand-orange">Innovate with Intention</div>
              <div className="type-body">We challenge assumptions, reject the status quo, and build solutions that solve real problems, not just symptoms.</div>
            </div>
            <div className="flex flex-1 flex-col">
              <div className="type-kicker text-brand-orange">Measure What Matters</div>
              <div className="type-body">If we can’t measure it, we can’t improve it. Data guides every decision, proving performance and earning confidence.</div>
            </div>
            <div className="flex flex-1 flex-col">
              <div className="type-kicker text-brand-orange">Elevate the Standard</div>
              <div className="type-body">We believe indoor spaces can — and must — do more. So we build systems that set the bar higher, then continue to raise it.</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="type-section-title-sm text-black">Meet The Leadership</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Profile
              image={<Image src={christianne} alt="Christianne" width={300} height={300} className="mx-auto rounded-full object-cover" />}
              name="Christianne Radziewicz"
              title="CEO"
              hoverText="Christianne Radziewicz leads the company’s mission to transform buildings into intelligent, health-optimized, energy-efficient ecosystems that actively protect the people inside them.
With over two decades across the built-environment ecosystem, Christianne has driven business growth, advanced sustainability strategies, and aligned architects, engineers, and technical teams around high-performance outcomes. At InteliEQ, she bridges environmental science, product innovation, and strategic execution to deliver systems that move beyond reactive solutions toward measurable, real-time performance.
Beyond InteliEQ, she is restoring a historic 1810 farm, a living expression of her belief that environments shape how we live, work and thrive.
"
            />
            <Profile
              image={<Image src={karl} alt="Karl" width={300} height={300} className="mx-auto rounded-full object-cover" />}
              name="Karl Selander"
              title="CTO"
              hoverText="Karl Selander is the architect of the intelligence system behind the company’s environmental systems. A systems thinker grounded in engineering rigor, he designs technologies that allow buildings to sense, interpret and respond in real time.
With more than two decades of experience in embedded systems, IoT platforms, and intelligent sensing technologies, Karl has operated at the intersection of hardware, software, and human experience. During his tenure at IBM, he developed advanced connected-device solutions and earned 15 patents. He is known for building scalable, resilient architecture that turns complex environmental challenges into elegant, data-driven systems.
Outside the lab, Karl can be found exploring the outdoors with his family, deep-sea fishing, or diving into specialized engineering research.
"
            />
            <Profile
              image={<Image src={terry} alt="Terry" width={300} height={300} className="mx-auto rounded-full object-cover" />}
              name="Terry Zarnowski"
              title="Executive Leader | Hardware Automation & IoT Systems"
              hoverText="Terry Zarnowski brings entrepreneurial leadership and operational scale to InteliEQ. Over three decades, he has built and led technology-driven companies from startup innovation to multimillion-dollar global operations, delivering advanced automation and sensing systems to Fortune 500 clients.
His expertise spans P&L leadership, global sales and distribution, advanced manufacturing, IoT platforms, and intelligent sensing technologies. A patent holder and published contributor in robotics and image sensing, Terry is known for transforming complex engineering into commercially scalable systems.
At InteliEQ, he ensures environmental intelligence is not only visionary, but manufacturable, deployable, and built to scale. Outside of work, he is a dedicated brewmaster, applying the same precision and craftsmanship to brewing as he does to engineering.
"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}