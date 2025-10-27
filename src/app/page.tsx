import Image from "next/image";
import Button from "./components/Button";
import Solutions from "./components/Solutions";

export default function Home() {
  return (
    <>
      {/* Full-bleed hero section so background image has no white margins */}
      <section className="w-full flex flex-col justify-center bg-[url(./assets/city-background.png)] bg-cover bg-center bg-no-repeat min-h-[60vh] py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-black text-5xl font-bold w-full md:w-1/2 text-left m-2">Redefining how buildings think, breathe, and heal.</h1>
          <Button
            content="Request a Demo &#8599;"
          />
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 bg-white">
        <div>
          <h1 className="text-4xl font-bold text-center mb-12">Our Solutions</h1>
          <div className="flex justify-center gap-35 max-w-6xl mx-auto px-8">
            <div className="flex-1">
              <Solutions
                title="Symphony-iQ"
                image="https://www.shutterstock.com/image-vector/fill-image-preview-icon-simple-260nw-2338969281.jpg"
                caption="Provides 24/7 surface decontamination & air purification in indoor spaces up to 2000 sq. ft. Effective in any environment."
                learn_more="#"
              />
            </div>

            <div className="flex-1">
              <Solutions
                title="SensorPure"
                image="https://www.shutterstock.com/image-vector/fill-image-preview-icon-simple-260nw-2338969281.jpg"
                caption="Provides 24/7 surface decontamination & air purification without the use of ozone. It is a proactive & effective solution for any environment."
                learn_more="#"
              />
            </div>

            <div className="flex-1">
              <Solutions
                title="i365+"
                image="https://www.shutterstock.com/image-vector/fill-image-preview-icon-simple-260nw-2338969281.jpg"
                caption="Provides real-time monitoring with proactive, predictive, preventative alerts with automated compliance reporting using energy optimization algorithms."
                learn_more="#"
              />
            </div>
          </div>

        </div>

      </div>
    </>
  );
}
