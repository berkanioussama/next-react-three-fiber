const Projects = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-40" id="projects">
      <div className="grid grid-cols-3 gap-8 w-full max-w-[65rem] z-10">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-semibold leading-tight">Compact and portable</h2>
          <p className="text-xl text-neutral-400">Foldable for easy storage</p>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-semibold leading-tight">Multispectral Camera</h2>
          <div>
          <p className="text-lg text-neutral-400">4 × 5MP</p>
          <p className="text-lg text-neutral-400">G/R/RE/NIR</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-semibold leading-tight">RGB camera</h2>
          <div>
          <p className="text-lg text-neutral-400">20 MP</p>
          <p className="text-lg text-neutral-400">4/3 CMOS, mechanical shutter</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-semibold leading-tight">Safe and stable</h2>
          <div>
            <p className="text-lg text-neutral-400">Omnidirectional Obstacle Avoidance [1]</p>
            <p className="text-lg text-neutral-400">15km Transmission Distance [2]</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-semibold leading-tight">Precise positioning</h2>
          <div>
          <p className="text-lg text-neutral-400">Centimeter-level RTK positioning</p>
          <p className="text-lg text-neutral-400">Microsecond-level time synchronization</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-semibold leading-tight">Efficient aerial surveying</h2>
          <div>
          <p className="text-lg text-neutral-400">Up to 200 hectares per flight [3]</p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Projects;