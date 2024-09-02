export default function Navigation() {
      return (
      <div className="md:h-full lg:pt-8 md:bg-[url('/bg-sidebar-desktop.svg')] md:rounded-lg md:items-start md:w-[35%] md:flex-col md:justify-start md:p-8 gap-8 bg-[url('/bg-sidebar-mobile.svg')] w-full bg-center bg-no-repeat min-h-40 flex justify-center items-center gap-5">
            <div className="md:flex md:mt-12">
              <button className="rounded-full w-8 h-8 bg-teal-200 md:mr-4 cursor-default">1</button>
              <div className="hidden md:block">
                <h2 className="text-zinc-200">STEP 1</h2>
                <p className="text-white uppercase">your info</p>
              </div>
            </div>
            <div className="md:flex">
              <button className="rounded-full w-8 h-8 bg-teal-200 md:mr-4 cursor-default">2</button>
              <div className="hidden md:block">
                <h2 className="text-zinc-200">STEP 2</h2>
                <p className="text-white">select plan</p>
              </div>
            </div>
            <div className="md:flex">
              <button className="rounded-full w-8 h-8 bg-teal-200 md:mr-4 cursor-default">3</button>
              <div className="hidden md:block">
                <h2 className="text-zinc-200">STEP 3</h2>
                <p className="text-white">add-ons</p>
              </div>
            </div>
            <div className="md:flex">
              <button className="rounded-full w-8 h-8 bg-teal-200 md:mr-4 cursor-default">4</button>
              <div className="hidden md:block">
                <h2 className="text-zinc-200">STEP 4</h2>
                <p className="text-white">summary</p>
              </div>
            </div>
      </div>
      )
}