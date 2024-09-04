export default function StepFour({step, setActiveStep}: {step: number, setActiveStep: CallableFunction}) {

      const handleClick = (e: React.SyntheticEvent) => {
            e.preventDefault();
            setActiveStep(step + 1);
      }

      const goBack = (e: React.SyntheticEvent) => {
            e.preventDefault();
            setActiveStep(step - 1);
      }

      const goToStepTwo = (e: React.SyntheticEvent) => {
            e.preventDefault();
            setActiveStep(2);
      }

      return (
            <>
                  <h1 className="text-3xl font-bold mt-8 mb-4">Finishing up</h1>
                  <p className="text-gray-500">Double-check everything looks OK before confirming</p>
                  <div className="p-4 bg-gray-100 rounded-lg mt-8">
                        <div className="flex items-center border-b pb-8">
                              <div>
                                    <h2 className="font-bold">Arcade (Monthly)</h2>
                                    <button className="underline font-bold text-gray-500 decoration-1" onClick={goToStepTwo}>Change</button>
                              </div>
                              <p className="ml-[auto] font-bold">$9/mo</p>
                        </div>
                        <div className="flex py-4">
                              <p className="text-gray-500">Online service</p>
                              <p className="ml-[auto] text-gray-600 font-bold">+$1/mo</p>
                        </div>
                        <div className="flex py-4">
                              <p className="text-gray-500">Larger storage</p>
                              <p className="ml-[auto] text-gray-600 font-bold">+$2/mo</p>
                        </div>
                  </div>
                  <div className="flex justify-between mt-8 px-8">
                        <p className="text-gray-400 font-bold">Total (per month)</p>
                        <p className="font-bold text-blue-700 text-lg">+$12/mo</p>
                  </div>
                  <div className="flex md:mt-[auto] my-8 md:my-0">
                        <button className="w-fit p-2 rounded-lg text-gray-500 font-bold px-4" onClick={goBack}>Go Back</button>
                        <button className="bg-blue-900 w-fit p-2 rounded-lg text-white px-4 mt-[auto] ml-[auto]" onClick={handleClick}>Next Step</button>
                  </div>      
            </>
      )
}