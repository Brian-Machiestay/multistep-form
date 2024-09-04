export default function StepThree({step, setActiveStep}: {step: number, setActiveStep: CallableFunction}) {

      const handleClick = (e: React.SyntheticEvent) => {
            e.preventDefault();
            if (step === 4) return
            setActiveStep(step + 1);
      }

      const goBack = (e: React.SyntheticEvent) => {
            e.preventDefault();
            setActiveStep(step - 1);
      }


      return (
            <>
                  <h1 className="text-3xl font-bold mt-8 mb-4">Pick add-ons</h1>
                  <p className="text-gray-500">Add-ons help enhance your gaming experience</p>
                  <div className="flex p-4 justify-center items-center mt-12 rounded-lg border-2 border-gray-200 has-[:checked]:ring-1 has-[:checked]:border-0 ring-violet-400">
                        <input type="checkbox" id="onlineService" name="onlineService" className="mr-4 w-5 h-5 checked:bg-gray-400" />
                        <div className="w-10/12">
                              <h2 className="font-bold">Online service</h2>
                              <p className="text-xs font-semibold text-gray-400">Access to multiplayer games</p>
                        </div>
                        <p className="ml-[auto] font-bold text-gray-500">+$1/mo</p>
                  </div>
                  <div className="flex p-4 justify-center items-center mt-8 rounded-lg border-2 border-gray-200 has-[:checked]:ring-1 has-[:checked]:border-0 ring-violet-400">
                        <input type="checkbox" id="onlineService" name="onlineService" className="mr-4 w-5 h-5 checked:bg-gray-400" />
                        <div className="w-10/12">
                              <h2 className="font-bold">Larger storage</h2>
                              <p className="text-xs font-semibold text-gray-400">Extra 1TB of cloud save</p>
                        </div>
                        <p className="ml-[auto] font-bold text-gray-500">+$2/mo</p>
                  </div>
                  <div className="flex p-4 justify-center items-center mt-8 rounded-lg border-2 border-gray-200 has-[:checked]:ring-1 has-[:checked]:border-0 ring-violet-400">
                        <input type="checkbox" id="onlineService" name="onlineService" className="mr-4 w-5 h-5 checked:bg-gray-400" />
                        <div className="w-10/12">
                              <h2 className="font-bold">Customizable profile</h2>
                              <p className="text-xs font-semibold text-gray-400">Custom theme on your profile</p>
                        </div>
                        <p className="ml-[auto] font-bold text-gray-500">+$2/mo</p>
                  </div>
                  <div className="flex md:mt-[auto] my-8 md:my-0">
                        <button className="w-fit p-2 rounded-lg text-gray-500 font-bold px-4" onClick={goBack}>Go Back</button>
                        <button className="bg-blue-900 w-fit p-2 rounded-lg text-white px-4 mt-[auto] ml-[auto]" onClick={handleClick}>Next Step</button>
                  </div>
            </>
      )
} 