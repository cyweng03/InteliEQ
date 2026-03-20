import Image from "next/image";

import background from "@/app/assets/products.png";
import symphonyImage from "@/app/assets/Symphony-iQ3d.png";
import i365Image from "@/app/assets/i365+platformimage.png";

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

      <h3 className="px-[10vw] mt-12 text-3xl font-bold text-gray-900">
        High-performance facilities{" "}
        <span className="text-brand-orange">cannot afford</span>{" "}
        reactive environments.
      </h3>

      <div className="px-[10vw] mt-12 space-y-6">
        <section className="space-y-6">
          <h2 className="text-5xl font-extrabold text-gray-900">
            Symphony-iQ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">

            <div className="space-y-2">
              <p className="text-lg text-gray-700 leading-relaxed">
                is an integrated modular environmental intelligence system designed for high-density, high-performance environments.
              </p>
              <div className="space-y-4">
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

              {/* <p className="text-lg text-gray-700 leading-relaxed"> */}
              {/* Symphony-iQ is a modular environmental intelligence system
                designed for high-density, high-performance environments. */}
              {/* Explore the Intelligence Layer */}

              {/* </p> */}

              {/* <div className="text-lg text-gray-700">
                <div className="mt-3 mb-2">It combines:</div>
                <ul className="list-disc pl-6 leading-relaxed">
                  <li>Real-time environmental sensing</li>
                  <li>Active air and surface intervention</li>
                  <li>Adaptive HVAC optimization</li>
                </ul>
              </div> */}
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
            <span className="align-top t">i</span><span className="align-top">3</span>65+
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-2">
              <p className="text-lg text-gray-700 font-bold">
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

          <div className="gap-16">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900 mt-6">Features</h3>

              {/* Timeline */}
              <div className="relative mt-8">
                {/* Mobile: vertical layout */}
                <div className="flex flex-col gap-6 md:hidden">
                  {/* Vertical line */}
                  <div className="absolute left-[7px] top-0 bottom-0 w-[3px] bg-orange-500" />

                  {[
                    "Environmental trend visualization",
                    "Exposure stabilization tracking",
                    "Energy optimization modeling",
                    "Deployment analytics",
                  ].map((label) => (
                    <div key={label} className="flex items-center gap-4 relative">
                      <div className="w-[15px] h-[15px] rounded-full bg-gray-600 z-10 flex-shrink-0" />
                      <span className="text-sm text-gray-700 leading-tight">{label}</span>
                    </div>
                  ))}
                </div>

                {/* Desktop: horizontal layout */}
                <div className="hidden md:block relative px-4">
                  <div className="absolute top-[7px] left-4 right-4 h-[3px] bg-orange-500" />
                  <div className="relative flex justify-between">
                    {[
                      "Environmental trend visualization",
                      "Exposure stabilization tracking",
                      "Energy optimization modeling",
                      "Deployment analytics",
                    ].map((label) => (
                      <div key={label} className="flex flex-col items-center gap-3 w-24">
                        <div className="w-[15px] h-[15px] rounded-full bg-gray-600 z-10 flex-shrink-0" />
                        <span className="text-sm text-center text-gray-700 leading-tight">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

      </div>
    </div>
  );
}