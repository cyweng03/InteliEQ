import Profile from "../../components/Profile";
import profile1 from "../../assets/profile_cr.png"
import Image from "next/image";

export default function ResourcesPage() {

  return (
    <div className="pt-16">
      <div className="w-full aspect-[3/1] border border-gray-400 flex items-center justify-center bg-gray-100">
        <span className="text-gray-400 text-3xl">▲</span>
      </div>
      <div className="m-12 space-y-6 ">
        <h1 className="text-black text-5xl font-bold mb-7 mt-3">About Us</h1>
        <h2 className="text-black text-3xl font-bold mb-7">Our Mission</h2>
        <p>In a world flooded with point solutions, InteliEQ is doing something fundamentally different. While others focus on monitoring air,
          purifying air, or optimizing HVAC systems in isolation, InteliEQ delivers something bigger: <span className="font-bold">a full-stack environmental intelligence
            engine</span> that connects the dots between health, energy, and performance to address the Health-Performance Gap within our built environments.
          <br></br><br></br>
          We believe buildings shouldn’t just respond to problems, they should predict and prevent them. That’s why InteliEQ integrates real-time sensing,
          active purification, AI-driven analytics, and intelligent controls into a seamless system that adapts dynamically to the environment and the people in it.
          <br></br><br></br>
          Where many systems stop at dashboards or alerts, we go further, offering actionable insights and system-level automation that drive healthier outcomes,
          lower energy use, and smarter operations across entire facilities.</p>
        <h3 className="text-black text-2xl font-bold mb-3 mt-5">About InteliEQ</h3>
        <div className="flex flex-row space-x-6">
          <div className="flex flex-1 flex-col space-y-2">
            <div className="text-center text-black text-2xl font-bold">People</div>
            <div>We design technology that protects what matters most, human health, comfort, and performance. Every environment we touch is made measurably safer, cleaner, and more supportive of the people who live, work, and heal within it.</div>
          </div>
          <div className="flex flex-1 flex-col space-y-2">
            <div className="text-center text-black text-2xl font-bold">Planet</div>
            <div>Sustainability isn’t a feature; it’s a responsibility. Our systems actively reduce energy waste, lower carbon impact, and extend the life of building infrastructure, proving that healthy indoor environments and a healthier planet go hand in hand.</div>
          </div>
          <div className="flex flex-1 flex-col space-y-2">
            <div className="text-center text-black text-2xl font-bold">Passion</div>
            <div>We challenge outdated thinking. We innovate with urgency. And we build with purpose. Our passion is transforming buildings into intelligent, self-optimizing ecosystems that elevate health, efficiency, and trust in the spaces we depend on every day.</div>
          </div>
        </div>

        <div>
          <h3 className="text-black text-2xl font-bold mb-3 mt-5">Core Values</h3>
          <div className="flex flex-row space-x-6">
            <div className="flex flex-1 flex-col space-y-2">
              <div className="text-black text-xl font-bold">Serve with Purpose</div>
              <div>We design solutions that improve lives, protect health, and create long-term value for every community we touch.</div>
            </div>
            <div className="flex flex-1 flex-col space-y-2">
              <div className="text-black text-xl font-bold">Act with Integrity</div>
              <div>We operate with transparency, trust, and accountability — in our technology, our partnerships, and our impact.</div>
            </div>
            <div className="flex flex-1 flex-col space-y-2">
              <div className="text-black text-xl font-bold">Innovate with Intention</div>
              <div>We challenge assumptions, reject the status quo, and build solutions that solve real problems, not just symptoms.</div>
            </div>
            <div className="flex flex-1 flex-col space-y-2">
              <div className="text-black text-xl font-bold">Measure What Matters</div>
              <div>If we can’t measure it, we can’t improve it. Data guides every decision, proving performance and earning confidence.</div>
            </div>
            <div className="flex flex-1 flex-col space-y-2">
              <div className="text-black text-xl font-bold">Elevate the Standard</div>
              <div>We believe indoor spaces can — and must — do more. So we build systems that set the bar higher, then continue to raise it.</div>
            </div>
          </div>
        </div>


        <h2 className="text-black text-3xl font-bold mb-7 mt-10">Meet The Team</h2>
        <div>
          <div className="text-black text-xl font-bold">
            Turning Buildings Into Intelligent Ecosystems
          </div>
          <div>
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
                className="mx-auto rounded-full p-3 m-3"
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
    </div>
  );
}