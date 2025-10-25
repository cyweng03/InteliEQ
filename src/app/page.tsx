import Image from "next/image";
import Button from "./components/Button";

export default function Home() {
  return (
    <>
      <section id="landing-page" className="relative w-full flex items-center bg-[url(./assets/city-background.png)] bg-cover bg-center bg-no-repeat h-screen">
        <div className="absolute inset-0 bg-black/35" aria-hidden />

        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-white text-5xl font-bold w-full md:w-1/2 text-left m-2">Redefining how buildings think</h1>
          <Button 
            content="Request a Demo &#8599;"
          />
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 bg-white"></div>
    </>
  );
}
