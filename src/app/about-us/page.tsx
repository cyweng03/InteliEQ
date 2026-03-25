"use client";

import Image from "next/image";
import aboutus from "@/app/assets/aboutus.png";

import people from "../assets/icons/people.svg";
import planet from "../assets/icons/planet.svg";
import passion from "../assets/icons/passion.svg";

import christianne from "@/app/assets/christianne.png";
import karl from "@/app/assets/karl.png";
import terry from "@/app/assets/terry.png";
import jeff from "@/app/assets/jeff.png";
import william from "@/app/assets/william.png";
import joe from "@/app/assets/joe.png";

import { motion } from "framer-motion";
import Profile from "../components/Profile";

export default function ResourcesPage() {
  return (
    <div className="pt-16">
    <div className="relative w-full h-[50vh]">
      <Image
        src={aboutus}
        alt="About Us banner"
        fill
        className="object-cover object-[70%_50%]"
        priority
      />

      <div className="absolute inset-0 bg-black/35 z-0" />

      <div className="absolute inset-0 z-10 flex items-center">
        <div className="px-[6vw] max-w-[700px]">
          <h1 className="text-white font-bold text-4xl md:text-5xl leading-tight">
            Purpose Driven.
            <br />
            Intelligence Enabled.
          </h1>
          <p className="mt-4 text-brand-orange font-semibold text-xl md:text-2xl">
            For the spaces where life happens
          </p>
        </div>
      </div>
    </div>

      <div className="px-[10vw] my-6 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4"
        >
          <h1 className="type-page-title text-black mt-20">About Us</h1>
          <h2 className="type-lead text-brand-orange font-bold">Our Mission</h2>
          <p className="type-body">
            In a world flooded with point solutions, InteliEQ is doing something fundamentally different. While others focus on monitoring air,
            purifying air, or optimizing HVAC systems in isolation, InteliEQ delivers something bigger: <span className="font-bold text-brand-orange">a full-stack environmental intelligence
              engine</span> that connects the dots between health, energy, and performance to address the Health-Performance Gap within our built environments.
            <br></br><br></br>
            We believe buildings shouldn’t just respond to problems, they should predict and prevent them. That’s why InteliEQ integrates real-time sensing,
            active purification, AI-driven analytics, and intelligent controls into a seamless system that adapts dynamically to the environment and the people in it.
            <br></br><br></br>
            Where many systems stop at dashboards or alerts, we go further, offering actionable insights and system-level automation that drive healthier outcomes,
            lower energy use, and smarter operations across entire facilities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex flex-1 flex-col space-y-2 hover:shadow-lg transition duration-300 rounded-2xl border bg-white p-10 m-4">
              <div className="flex justify-center"> <Image src={people} alt="People illustration" width={100} height={100} /></div>
              <div className="type-card-title-sm text-center text-black">People</div>
              <div className="type-body">We design technology that protects what matters most, human health, comfort, and performance. Every environment we touch is made measurably safer, cleaner, and more supportive of the people who live, work, and heal within it.</div>
            </div>
            <div className="flex flex-1 flex-col space-y-2 hover:shadow-lg transition duration-300 rounded-2xl border bg-white p-10 m-4">
              <div className="flex justify-center"> <Image src={planet} alt="planet illustration" width={100} height={100}/></div>
              <div className="type-card-title-sm text-center text-black">Planet</div>
              <div className="type-body">Sustainability isn’t a feature; it’s a responsibility. Our systems actively reduce energy waste, lower carbon impact, and extend the life of building infrastructure, proving that healthy indoor environments and a healthier planet go hand in hand.</div>
            </div>
            <div className="flex flex-1 flex-col space-y-2 hover:shadow-lg transition duration-300 rounded-2xl border bg-white p-10 m-4">
              <div className="flex justify-center"> <Image src={passion} alt="passion illustration" width={100} height={100}/></div>
              <div className="type-card-title-sm text-center text-black">Passion</div>
              <div className="type-body">We challenge outdated thinking. We innovate with urgency. And we build with purpose. Our passion is transforming buildings into intelligent, self-optimizing ecosystems that elevate health, efficiency, and trust in the spaces we depend on every day.</div>
            </div>
          </div>
        </motion.div>

      <div className="bg-brand-black w-screen relative left-1/2 right-1/2 -mx-[50vw] mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="px-[1.5vw] py-12 space-y-6"
        >
          <h3 className="type-section-title-sm text-white">Core Values</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="flex flex-1 flex-col">
              <div className="type-kicker text-brand-orange">Serve with Purpose</div>
              <div className="type-body text-white">We design solutions that improve lives, protect health, and create long-term value for every community we touch.</div>
            </div>
            <div className="flex flex-1 flex-col">
              <div className="type-kicker text-brand-orange">Act with Integrity</div>
              <div className="type-body text-white">We operate with transparency, trust, and accountability—in our technology, our partnerships, and our impact.</div>
            </div>
            <div className="flex flex-1 flex-col">
              <div className="type-kicker text-brand-orange">Innovate with Intention</div>
              <div className="type-body text-white">We challenge assumptions, reject the status quo, and build solutions that solve real problems, not just symptoms.</div>
            </div>
            <div className="flex flex-1 flex-col">
              <div className="type-kicker text-brand-orange">Measure What Matters</div>
              <div className="type-body text-white">If we can’t measure it, we can’t improve it. Data guides every decision, proving performance and earning confidence.</div>
            </div>
            <div className="flex flex-1 flex-col">
              <div className="type-kicker text-brand-orange">Elevate the Standard</div>
              <div className="type-body text-white">We believe indoor spaces can—and must—do more. So we build systems that set the bar higher, then continue to raise it.</div>
            </div>
          </div>
        </motion.div>
      </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="type-section-title-sm text-black mt-12">Meet The Leadership</h2>
          <div className="space-y-3">
            <h2 className="type-lead text-brand-orange font-bold max-w-[800px]">
              Leadership Built on Performance, Experience, and Real-World Execution
            </h2>
            <p className="type-body text-black">
              InteliEQ’s leadership team brings deep expertise across building systems, sustainability, infrastructure deployment, and enterprise market development. United by a shared belief that indoor environments directly influence health, performance, and operational outcomes, the team combines strategic vision with practical execution experience. From mechanical systems integration to large-scale client partnerships, InteliEQ’s leaders are focused on delivering Environmental Intelligence solutions that perform reliably in real buildings, and create measurable impact where people live, learn, train, and recover.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Profile
              image={<Image src={christianne} alt="Christianne" width={300} height={300} className="mx-auto rounded-full object-cover h-[300px] w-[300px] shrink-0" />}
              name="Christianne Radziewicz"
              title="CEO"
              hoverText="Christianne Radziewicz leads InteliEQ’s mission to transform buildings into intelligent, health-optimized, and energy-efficient environments that actively protect the people inside them. With more than two decades of experience across the built-environment ecosystem, she has driven business growth, advanced sustainability strategies, and aligned architects, engineers, and technical teams around high-performance outcomes. At InteliEQ, Christianne bridges environmental science, product innovation, and strategic execution to deliver solutions that move beyond reactive building systems toward measurable, real-time performance. Her leadership is focused on redefining how indoor environments are understood, managed, and optimized at scale, positioning Environmental Intelligence as a new layer of critical building infrastructure. A former Division I collegiate athlete, Christianne, brings a performance-driven mindset to leadership, grounded in teamwork, discipline, and the belief that environments play a critical role in human potential."
            />
            <Profile
              image={<Image src={karl} alt="Karl" width={300} height={300} className="mx-auto rounded-full object-cover h-[300px] w-[300px] shrink-0" />}
              name="Karl Selander"
              title="CTO"
              hoverText="Karl Selander is the architect of the intelligence system behind the company’s environmental systems. A systems thinker grounded in engineering rigor, he designs technologies that allow buildings to sense, interpret and respond in real time.
With more than two decades of experience in embedded systems, IoT platforms, and intelligent sensing technologies, Karl has operated at the intersection of hardware, software, and human experience. During his tenure at IBM, he developed advanced connected-device solutions and earned 15 patents. He is known for building scalable, resilient architecture that turns complex environmental challenges into elegant, data-driven systems.
Outside the lab, Karl can be found exploring the outdoors with his family, deep-sea fishing, or diving into specialized engineering research.
"
            />
            <Profile
              image={<Image src={terry} alt="Terry" width={300} height={300} className="mx-auto rounded-full object-cover h-[300px] w-[300px] shrink-0" />}
              name="Terry Zarnowski"
              title="Executive Leader | Hardware Automation & IoT Systems"
              hoverText="Terry Zarnowski brings entrepreneurial leadership and operational scale to InteliEQ. Over three decades, he has built and led technology-driven companies from startup innovation to multimillion-dollar global operations, delivering advanced automation and sensing systems to Fortune 500 clients.
His expertise spans P&L leadership, global sales and distribution, advanced manufacturing, IoT platforms, and intelligent sensing technologies. A patent holder and published contributor in robotics and image sensing, Terry is known for transforming complex engineering into commercially scalable systems.
At InteliEQ, he ensures environmental intelligence is not only visionary, but manufacturable, deployable, and built to scale. Outside of work, he is a dedicated brewmaster, applying the same precision and craftsmanship to brewing as he does to engineering.
"
            />
            <Profile
              image={<Image src={jeff} alt="Jeff Miller" width={300} height={300} className="mx-auto rounded-full object-cover object-[50%_30%] h-[300px] w-[300px] shrink-0" />}
              name="Jeff Miller"
              title="Head of Building Systems & Deployment"
              hoverText="Jeff Miller brings decades of hands-on experience in commercial and residential HVAC systems, building performance, and mechanical operations. As Head of Building Systems & Deployment at InteliEQ, he leads the practical integration of Symphony-iQ into complex real-world environments, ensuring seamless deployment, system compatibility, and operational reliability across diverse building types. Prior to joining InteliEQ, Jeff founded and successfully operated a full-service HVAC company serving clients throughout the greater New York City region. His work spanned system design, installation, troubleshooting, retrofit strategy, and long-term facility support, giving him deep insight into how buildings perform beyond design intent. At InteliEQ, Jeff plays a critical role in bridging advanced environmental intelligence technology with the realities of mechanical infrastructure. He works closely with facilities teams, engineers, and deployment partners to optimize performance outcomes, accelerate pilot implementation, and support scalable portfolio rollouts. His leadership ensures that InteliEQ’s solutions not only innovate but deliver dependable results where they matter most."
            />

            <Profile
              image={
                <Image
                  src={joe}
                  alt="Joseph McLaughlin"
                  width={300}
                  height={300}
                  className="mx-auto rounded-full object-cover object-[30%_0%] h-[300px] w-[300px] shrink-0"
                />
              }
              name="Joseph McLaughlin"
              title="VP of Business Development & Client Services"
              hoverText="Joseph McLaughlin brings more than two decades of experience building trusted relationships across both public and private sector organizations. As Vice President of Business Development & Client Services at InteliEQ, he leads strategic engagement with clients and partners to accelerate the adoption of Environmental Intelligence solutions that improve building performance, occupant health, and energy efficiency. Throughout his career, Joe has helped organizations navigate complex infrastructure and sustainability initiatives, aligning operational needs with long-term performance outcomes. His work has focused on developing integrated solutions that reduce energy waste, support decarbonization goals, and deliver measurable value across diverse facility portfolios. Joe plays a key role in expanding InteliEQ’s presence in high-performance environments, including athletic facilities where health, recovery, and environmental conditions directly influence human performance. A former collegiate athlete, he brings personal insight into the importance of optimized indoor environments and remains closely connected to youth athletics, often traveling with his daughter to competitive volleyball tournaments. His leadership helps ensure InteliEQ’s clients experience not only innovative technology, but a trusted partnership focused on real-world results."
            />

            <Profile
              image={<Image src={william} alt="William Hatch" width={300} height={300} className="mx-auto rounded-full object-cover h-[300px] w-[300px] shrink-0" />}
              name="William Hatch"
              title="Director of Software Engineering"
              hoverText="William Hatch brings more than 20 years of experience in software development spanning AI-driven applications, web and mobile platforms, DevOps infrastructure, big data systems, and Internet of Things (IoT) technologies. As Director of Software Engineering at InteliEQ, he leads the design and development of the digital intelligence layer that enables real-time environmental monitoring, predictive insights, and scalable deployment across diverse building portfolios. Throughout his career, William has built and delivered complex software solutions that connect physical systems with actionable data, transforming how organizations understand performance and make operational decisions. At InteliEQ, he is responsible for advancing the company’s unified intelligence platform, ensuring reliability, adaptability, and meaningful user insight across evolving environmental conditions. Beyond his technical leadership, William is a dedicated musician and an advocate for environmental stewardship. He is deeply motivated by the opportunity to apply technology in ways that create positive, measurable changes, helping organizations operate more sustainably while improving the health and performance of the spaces people depend on every day."
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}