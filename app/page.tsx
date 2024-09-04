'use client';
//import Image from "next/image";
import StepOne from './components/stepOne';
import StepTwo from './components/stepTwo';
import Navigation from './components/navigation';
import { useState } from 'react';
import StepThree from './components/stepThree';
import StepFour from './components/stepFour';
import Thankyou from './components/thankyou';

export default function Home() {
  const [step, setStep] = useState(1);
  const [data, updateData] = useState();

  const setActiveStep = (step : number) => {
    setStep(step);
  }

  const getStepComponent = () => {
    if (step === 1) return <StepOne step={step} setActiveStep={setActiveStep} />
    if (step === 2) return <StepTwo step={step} setActiveStep={setActiveStep} />
    if (step === 3) return <StepThree step={step} setActiveStep={setActiveStep} />
    if (step === 4) return <StepFour step={step} setActiveStep={setActiveStep} />
    if (step === 5) return <Thankyou />
  }

  return (
    <section className="md:h-full md:justify-start md:flex md:flex-row w-full md:p-4 md:rounded">
      <Navigation step={step} />
      <div className="md:w-[65%] md:w-full w-[90%] bg-white mx-[auto] rounded-lg md:rounded-none">
        <form className="mx-[auto] md:w-[70%] w-[90%] -mt-[15px] md:mt-0 flex flex-col h-full text-black min-h-[60vh]">
          {
            getStepComponent()
          }
        </form>
      </div>
    </section>
  )
}
