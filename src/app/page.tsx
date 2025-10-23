import Image from "next/image";
import Button from "./components/Button";

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

      <div className="container mx-auto px-4 py-8 bg-white"></div>
    </>
  );
}
