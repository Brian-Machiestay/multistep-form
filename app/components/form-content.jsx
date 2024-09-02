'use client';

export default function FormContent ({ step, setActiveStep}) {

    const handleClick = (e) => {
        e.preventDefault();
        setActiveStep(step + 1);
    }

    return (
        <>
           <h1 className="text-xl font-bold mt-4 text-black">Personal info</h1>
            <p className="text-sm mb-8 text-black">Please provide your name, email address and phone number</p>
            <div className="flex flex-wrap-reverse">
                <input className="peer block border-2 min-w-full w-full p-2 rounded-lg outline-0 focus:ring-2 ring-violet-500 invalid:ring-red-500 focus:invalid:border-red-200 border-1 mb-4 mt-2 text-black" type="text" required/>
                <label className="inline-block mr-[auto] text-black">Name</label>
                <p className="inline invisible peer-invalid:visible peer-invalid:text-red-400 font-bold">This field is required</p>
            </div>
            <div className="flex flex-wrap-reverse">
                <input className="peer block border-2 min-w-full w-full p-2 rounded-lg outline-0 focus:ring-2 ring-violet-500 invalid:ring-red-500 focus:invalid:border-red-200 border-1 mb-4 mt-2 text-black" type="email" required/>
                <label className="inline-block mr-[auto] text-black">Email address</label>
                <p className="inline invisible peer-invalid:visible peer-invalid:text-red-400 font-bold">This field is required</p>
            </div>
            <div className="flex flex-wrap-reverse">
                <input className="peer block border-2 min-w-full w-full p-2 rounded-lg outline-0 focus:ring-2 ring-violet-500 invalid:ring-red-500 focus:invalid:border-red-200 border-1 mb-4 mt-2 text-black" type="tel" required/>
                <label className="inline-block mr-[auto] text-black">Phone number</label>
                <p className="inline invisible peer-invalid:visible peer-invalid:text-red-400 font-bold">This field is required</p>
            </div>
            <button className="md:mt-[auto] md:ml-[auto] bg-blue-800 w-fit p-2 rounded-lg text-white lg:mb-12" onClick={handleClick}>Next Step</button>
        </>
    )
}