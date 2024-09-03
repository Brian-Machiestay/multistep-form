import Image from 'next/image';
import arcade from '../../public/icon-arcade.svg';
import pro from '../../public/icon-pro.svg';
import advanced from '../../public/icon-advanced.svg';

export default function StepTwo ({step, setActiveStep}: {step: number, setActiveStep: CallableFunction}) {

      const handleClick: CallableFunction = (e: React.SyntheticEvent) => {
            e.preventDefault();
            if (step === 4) return
            setActiveStep(step + 1);
      }


      return (
      <>
            <h1 className="text-3xl font-bold">Select Your Plan</h1>
            <p>You have the option of yearly or monthly billing</p>
            <div className="flex flex-col justify-between mt-10 md:flex-row md:flex-row-reverse flex-wrap-reverse flex-col-reverse group">
                  <div className='w-full flex justify-center items-center bg-gray-200 rounded-lg py-2 mt-4'>
                        <p className='mr-4'>monthly</p>
                        <label className="relative inline-flex items-center cursor-pointer">
                              <input className="sr-only peer" value="" type="checkbox" />
                              <div className="peer rounded-full outline-none duration-100 after:duration-500 w-20 h-6 bg-blue-800 peer-focus:outline-none peer-focus:ring-blue-500 after:absolute after:outline-none after:rounded-full after:h-4 after:w-4 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  after:text-sky-800 after:font-bold peer-checked:after:translate-x-14  peer-checked:after:border-white">
                              </div>
                        </label>
                        <p className='ml-4'>yearly</p>
                  </div>
                  <button className='border md:w-[30%] md:h-52 h-44 p-4 rounded-xl hover:ring-1 hover:bg-gray-100 ring-violet-500 flex md:flex-col flex-row w-full active:bg-gray-200 h-fit mb-4'>
                        <Image src={pro} height={40} width={40} alt='arcade' className='mr-4 md:m-0' />
                        <div className='mt-[auto] text-start'>
                              <p className='font-bold'>Pro</p>
                              <p className='font-bold text-gray-500 group-has-[:checked]:hidden block'>$15/mo</p>
                              <p className='font-bold text-gray-500 group-has-[:checked]:block hidden'>$150/yr</p>
                              <p className='font-bold group-has-[:checked]:block hidden'>2 months free</p>
                        </div>
                  </button>
                  <button className='border md:w-[30%] md:h-52 h-44 p-4 rounded-xl hover:ring-1 hover:bg-gray-100 ring-violet-500 flex md:flex-col flex-row w-full active:bg-gray-200 h-fit mb-4'>
                        <Image src={advanced} height={40} width={40} alt='arcade' className='mr-4 md:m-0' />
                        <div className='mt-[auto] text-start'>
                              <p className='font-bold'>Advanced</p>
                              <p className='font-bold text-gray-500 group-has-[:checked]:hidden block'>$12/mo</p>
                              <p className='font-bold text-gray-500 group-has-[:checked]:block hidden'>$120/yr</p>
                              <p className='font-bold group-has-[:checked]:block hidden'>2 months free</p>
                        </div>
                  </button>
                  <button className='border md:w-[30%] md:h-52 h-44 p-4 rounded-xl hover:ring-1 hover:bg-gray-100 ring-violet-500 flex md:flex-col flex-row w-full active:bg-gray-200 h-fit mb-4'>
                        <Image src={arcade} height={40} width={40} alt='arcade' className='mr-4 md:m-0' />
                        <div className='mt-[auto] text-start'>
                              <p className='font-bold'>Arcade</p>
                              <p className='font-bold text-gray-500 group-has-[:checked]:hidden block'>$9/mo</p>
                              <p className='font-bold text-gray-500 group-has-[:checked]:block hidden'>$90/yr</p>
                              <p className='font-bold group-has-[:checked]:block hidden'>2 months free</p>
                        </div>
                  </button>
            </div>
            <button className="bg-blue-900 w-fit p-2 rounded-lg text-white px-4 mt-[auto] ml-[auto]" onClick={handleClick}>Next Step</button>
      </>
      )
}