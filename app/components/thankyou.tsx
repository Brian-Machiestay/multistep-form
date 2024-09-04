import thakyou_img from '../../public/icon-thank-you.svg';
import Image from 'next/image';

export default function Thankyou({}) {
      return (
            <div className='my-[auto] mx-[auto]'>
                  <Image src={thakyou_img} width={80} height={80} alt="thankyou" className='mx-[auto] mb-8' />
                  <h1 className='font-bold text-3xl text-center mb-4'>Thank you!</h1>
                  <p className='text-center text-gray-400 font-bold'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
            </div>
      )
}