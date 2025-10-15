import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold">Welcome to InteliEQ</h1>
        <p className="text-xl text-gray-600">Your Intelligent Business Solutions</p>
      </div>
    </div>
  );
}
