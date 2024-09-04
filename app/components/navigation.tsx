'use client';

export default function Navigation({ step } : {step: number}) {

      console.log(step + 1);

      return (
      <div className="md:min-h-full lg:pt-2 md:bg-[url('/bg-sidebar-desktop.svg')] w-full md:rounded-lg md:items-start md:w-[35%] md:flex-col md:justify-start md:p-8 gap-8 bg-[url('/bg-sidebar-mobile.svg')] bg-cover bg-center bg-no-repeat min-h-40 flex justify-center items-center gap-5">
            <div className="md:flex md:mt-12">
              <button className={`rounded-full w-8 h-8 border-2 md:mr-4 cursor-default ${step === 1? 'bg-teal-200 text-black border-none' : ''}`}>1</button>
              <div className="hidden md:block">
                <h2 className='text-zinc-200'>STEP 1</h2>
                <p className="text-white uppercase font-bold">your info</p>
              </div>
            </div>
            <div className="md:flex">
              <button className={`rounded-full w-8 h-8 border-2 md:mr-4 cursor-default ${step === 2? 'bg-teal-200 text-black border-none' : ''}`}>2</button>
              <div className="hidden md:block">
                <h2 className="text-zinc-200">STEP 2</h2>
                <p className="text-white font-bold uppercase">select plan</p>
              </div>
            </div>
            <div className="md:flex">
              <button className={`rounded-full w-8 h-8 border-2 md:mr-4 cursor-default ${step === 3? 'bg-teal-200 text-black border-none' : ''}`}>3</button>
              <div className="hidden md:block">
                <h2 className="text-zinc-200">STEP 3</h2>
                <p className="text-white font-bold uppercase">add-ons</p>
              </div>
            </div>
            <div className="md:flex">
              <button className={`rounded-full w-8 h-8 border-2 md:mr-4 cursor-default ${step >= 4? 'bg-teal-200 text-black border-none' : ''}`}>4</button>
              <div className="hidden md:block">
                <h2 className="text-zinc-200">STEP 4</h2>
                <p className="text-white font-bold uppercase">summary</p>
              </div>
            </div>
      </div>
      )
}