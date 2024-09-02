'use client';
//import Image from "next/image";
import FormContent from './components/form-content';
import Navigation from './components/navigation';
import { useState } from 'react';

export default function Home() {
  const [step, setStep] = useState(1);

  const setActiveStep = (step : number) => {
    setStep(step);
  }

  return (
    <section className="md:h-full md:justify-start md:flex md:flex-row md:w-full md:p-4 md:rounded">
      <Navigation />
      <div className="md:w-[65%] md:w-full w-[90%] bg-white mx-[auto] rounded-lg md:rounded-none">
        <form className="mx-[auto] md:w-[80%] w-[90%] -mt-[15px] md:mt-0 flex flex-col h-full">
          <FormContent step={step} setActiveStep={setActiveStep}></FormContent>
        </form>
      </div>
    </section>
  )
}
