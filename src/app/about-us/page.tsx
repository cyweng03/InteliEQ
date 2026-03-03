import Profile from "../components/Profile";
import profile1 from "../assets/profile_cr.png"
import Image from "next/image";
import people from "../assets/icons/people.svg"
import planet from "../assets/icons/planet.svg"
import passion from "../assets/icons/passion.svg"

export default function ResourcesPage() {

  return (
    <div className="pt-16">
      <div className="w-full h-[50vh] border border-gray-400 flex items-center justify-center bg-gray-100">
        <span className="text-gray-400 text-3xl">▲</span>
      </div>
      <div className="container mx-auto my-6 space-y-2 ">
        <h1 className="type-page-title text-black mb-7 mt-3">About Us</h1>
        <h2 className="type-lead text-black font-bold">Our Mission</h2>
        <p className="type-body">In a world flooded with point solutions, InteliEQ is doing something fundamentally different. While others focus on monitoring air,
          purifying air, or optimizing HVAC systems in isolation, InteliEQ delivers something bigger: <span className="font-bold">a full-stack environmental intelligence
            engine</span> that connects the dots between health, energy, and performance to address the Health-Performance Gap within our built environments.
          <br></br><br></br>
          We believe buildings shouldn’t just respond to problems, they should predict and prevent them. That’s why InteliEQ integrates real-time sensing,
          active purification, AI-driven analytics, and intelligent controls into a seamless system that adapts dynamically to the environment and the people in it.
          <br></br><br></br>
          Where many systems stop at dashboards or alerts, we go further, offering actionable insights and system-level automation that drive healthier outcomes,
          lower energy use, and smarter operations across entire facilities.</p>
        <h3 className="type-section-title-sm text-black mt-12">About InteliEQ</h3>
        <div className="flex flex-row space-x-6">
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

        <div className="space-y-4">
          <h3 className="type-section-title-sm text-black mt-12">Core Values</h3>
          <div className="flex flex-row space-x-6">
            <div className="flex flex-1 flex-col">
              <div className="type-kicker text-black">Serve with Purpose</div>
              <div className="type-body">We design solutions that improve lives, protect health, and create long-term value for every community we touch.</div>
            </div>
            <div className="flex flex-1 flex-col">
              <div className="type-kicker text-black">Act with Integrity</div>
              <div className="type-body">We operate with transparency, trust, and accountability — in our technology, our partnerships, and our impact.</div>
            </div>
            <div className="flex flex-1 flex-col">
              <div className="type-kicker text-black">Innovate with Intention</div>
              <div className="type-body">We challenge assumptions, reject the status quo, and build solutions that solve real problems, not just symptoms.</div>
            </div>
            <div className="flex flex-1 flex-col">
              <div className="type-kicker text-black">Measure What Matters</div>
              <div className="type-body">If we can’t measure it, we can’t improve it. Data guides every decision, proving performance and earning confidence.</div>
            </div>
            <div className="flex flex-1 flex-col">
              <div className="type-kicker text-black">Elevate the Standard</div>
              <div className="type-body">We believe indoor spaces can — and must — do more. So we build systems that set the bar higher, then continue to raise it.</div>
            </div>
          </div>
        </div>


        <h2 className="type-section-title-sm text-black mt-12">Meet The Team</h2>
        <div>
          <div className="type-kicker text-black mt-4">
            Turning Buildings Into Intelligent Ecosystems
          </div>
          <div className="type-body">
            At InteliEQ, we’re a team of engineers, builders and boundary-pushers united by a single belief: indoor environments should actively protect human health. Together we are rethinking what’s possible inside the spaces where people live, heal, learn and work.
            We blend deep technical expertise with a mission-driven mindset, designing technology that serves people, respects the planet, and elevates everyday environments into something smarter, safer, and more sustainable.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-2">
          <Profile
            image={
              <Image
                src={profile1}
                alt="Profile"
                width={200}
                height={200}
                className="mx-auto rounded-full object-cover p-3 m-3"
              />
            }
            name="Christianne Radziewicz"
            title="Co-Founder/CEO"
            email="cradziewicz@intelieq.life"
            linkedin="https://www.linkedin.com/in/christianne-r-radziewicz-601b6540/"
          />

          <Profile
            image={
              <Image
                src={profile1}
                alt="Profile"
                width={200}
                height={200}
                className="mx-auto rounded-full p-3 m-3"
              />
            }
            name="Karl Selander"
            title="Co-Founder/CTO"
            email="kselander@intelieq.life"
            linkedin="https://www.linkedin.com/in/karl-selander-774571b/"
          />

          <Profile
            image={
              <Image
                src={profile1}
                alt="Profile"
                width={200}
                height={200}
                className="mx-auto rounded-full p-3 m-3"
              />
            }
            name="Mike Marley"
            title="Co-Founder/Board Chairman"
            email=""
            linkedin="https://www.linkedin.com/in/mikemarley/"
          />
        </div>

      </div>
    </div >
  );
}