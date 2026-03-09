import Image from "next/image";

import background from "@/app/assets/products.png";
import symphonyImage from "@/app/assets/symphony-IQ.png";
import i365Image from "@/app/assets/i365.png";

import athleticIcon from "@/app/assets/athletic.png";
import educationIcon from "@/app/assets/education.png";
import hospitalityIcon from "@/app/assets/hospitality.png";
import healthcareIcon from "@/app/assets/healthcare.png";

export default function EngineProductsPage() {
  return (
    <div className="pt-16">
      <div className="relative w-full h-[50vh] overflow-hidden">
        <Image
          src={background}
          alt="Engine Products Background"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="px-[10vw] mt-12 space-y-6">
        <section className="space-y-6">
          <h2 className="text-5xl font-extrabold text-gray-900">
            Symphony-iQ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">

            <div className="space-y-2">
              <p className="text-lg text-gray-700 leading-relaxed">
                An integrated system that senses, purifies, and optimizes indoor
                environments in real time.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Symphony-iQ is a modular environmental intelligence system
                designed for high-density, high-performance environments.
              </p>

              <div className="text-lg text-gray-700">
                <div className="mt-3 mb-2">It combines:</div>
                <ul className="list-disc pl-6 leading-relaxed">
                  <li>Real-time environmental sensing</li>
                  <li>Active air and surface intervention</li>
                  <li>Adaptive HVAC optimization</li>
                </ul>
              </div>
            </div>

            <div className="flex items-stretch">
              <div className="relative w-full h-full overflow-hidden rounded-xl">
                <Image
                  src={symphonyImage}
                  alt="Symphony-iQ system image"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            <div className="space-y-4 mt-6">
              <div>
                <div className="font-extrabold text-gray-900">SENSE</div>
                <p className="text-lg text-gray-700">
                  Continuously monitors IAQ metrics, occupancy dynamics,
                  and environmental load.
                </p>
              </div>

              <div>
                <div className="font-extrabold text-gray-900">INTERVENE</div>
                <p className="text-lg text-gray-700">
                  Actively treats air and surfaces within occupied zones.
                </p>
              </div>

              <div>
                <div className="font-extrabold text-gray-900">OPTIMIZE</div>
                <p className="text-lg text-gray-700">
                  Integrates with HVAC systems to balance exposure reduction
                  and energy demand.
                </p>
              </div>
            </div>

            <div className="space-y-4 mt-6">
              <h3 className="text-3xl font-bold text-gray-900">
                High-performance facilities  <p className="text-brand-orange">cannot afford</p> reactive environments.
              </h3>

              <p className="font-extrabold text-gray-900">The Symphony:</p>

              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                <li>Stabilizes conditions during peak occupancy</li>
                <li>Reduces unnecessary conditioning demand</li>
                <li>Improves environmental recovery dynamics</li>
                <li>Aligns performance with energy efficiency goals</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900">
              Designed for Performance Environments:
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              {[
                { label: "Athletic Facilities", icon: athleticIcon },
                { label: "Education", icon: educationIcon },
                { label: "Hospitality", icon: hospitalityIcon },
                { label: "Healthcare", icon: healthcareIcon },
              ].map(({ label, icon }) => (
                <div key={label} className="flex flex-col items-center gap-3">
                  <div className="relative h-20 w-20">
                    <Image src={icon} alt={`${label} icon`} fill className="object-contain" />
                  </div>
                  <div className="text-sm text-gray-800">{label}</div>
                </div>
              ))}
            </div>
          </div>

        </section>

        <section className="space-y-6">
          <h2 className="text-5xl font-extrabold text-gray-900 mt-12">
            i365+
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-2">
              <p className="text-lg text-gray-700">
                Continuous environmental awareness. Continuous optimization.
              </p>

              <p className="text-lg text-gray-700">
                i365+ is the data and control layer that powers
                Symphony-iQ deployments.
              </p>

              <ul className="list-disc pl-6 text-lg text-gray-700">
                <li>Aggregates real-time environmental data</li>
                <li>Analyzes exposure dynamics</li>
                <li>Optimizes HVAC response</li>
                <li>Provides actionable reporting</li>
              </ul>
            </div>

            <div className="flex items-stretch">
              <div className="relative w-full h-full overflow-hidden rounded-xl">
                <Image
                  src={i365Image}
                  alt="i365+ platform image"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Traditional systems monitor, i365+ <em>adapts</em>.<br />
                Traditional systems report, i365+ <em>optimizes</em>.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900 mt-6">
                Features
              </h3>

              <ul className="list-disc pl-6 text-lg text-gray-700">
                <li>Environmental trend visualization</li>
                <li>Exposure stabilization tracking</li>
                <li>Energy optimization modeling</li>
                <li>Deployment analytics</li>
              </ul>
            </div>
          </div>

        </section>

      </div>
    </div>
  );
}