//import Image from "next/image";
import FormContent from './components/form-content';


export default function Home() {
  return (
    <div className="md:w-[65%] md:w-full w-[90%] bg-white mx-[auto] rounded-lg md:rounded-none">
      <form className="mx-[auto] md:w-[80%] w-[90%] -mt-[15px] md:mt-0 flex flex-col h-full">
        <FormContent />
      </form>
    </div>
  )
}
