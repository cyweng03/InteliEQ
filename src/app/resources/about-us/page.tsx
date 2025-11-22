import Profile from "../../components/Profile";
import profile1 from "../../assets/profile_cr.png"

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
        <h3 className="text-black text-2xl font-bold mb-3 mt-5">Where InteliEQ Stands Apart:</h3>
        <ul>
          <li><span className="font-bold">Unified platform:</span> Sensing + purification + analytics + control in one ecosystem.</li>
          <li><span className="font-bold">Predictive & preventative:</span> Not just reactive alerts, our system anticipate </li>
        </ul>
        <h2 className="text-black text-3xl font-bold mb-7 mt-10">Meet The Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-2">
          <Profile
            image={<img src={profile1.src} alt="Profile" className="mx-auto rounded-full p-3 m-3" />}
            name="Christianne Radziewicz"
            title="Co-Founder/CEO"
            email="cradziewicz@intelieq.life"
            linkedin="https://www.linkedin.com/in/christianne-r-radziewicz-601b6540/"
          />
          <Profile
            image={<img src={profile1.src} alt="Profile" className="mx-auto rounded-full p-3 m-3" />}
            name="Karl Selander"
            title="Co-Founder/CTO"
            email="kselander@intelieq.life"
            linkedin="https://www.linkedin.com/in/karl-selander-774571b/"
          />
          <Profile
            image={<img src={profile1.src} alt="Profile" className="mx-auto rounded-full p-3 m-3" />}
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