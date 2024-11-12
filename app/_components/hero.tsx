import { Spotlight } from "@/components/ui/spotlight";

const Hero = () => {
  return (
    <div className="w-full bg-black  bg-dot-white/[0.2]  relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="h-svh flex items-center justify-center text-white z-20" id="hero">
        <Spotlight
          className="-top-20 right-10 "
          fill="white"
        />
        <div className="p-8 text-center z-50">
          <h1 className="text-7xl font-bold">DJI Mavic 3M</h1>
          <p className="text-2xl">
            See More, Work Smarter
          </p>
        </div>
      </div>
    </div>
  );
}
 
export default Hero;