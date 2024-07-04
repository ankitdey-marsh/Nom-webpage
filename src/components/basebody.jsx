import React from 'react';
const basebody = () => {
  return (
      <div className='text-[#CDD6F4]'>
        <div className='md:mx-40 text-[#CDD6F4] md:mt-16 mt-12 mx-8'>
          <div className='flex justify-between'>
            <h1 className='md:text-4xl text-4xl font-bold'>Nom</h1>
            <a href="https://discord.com/oauth2/authorize?client_id=1255600044229398558&permissions=10737571840&integration_type=0&scope=bot">
              <div className='md:w-36 md:h-14 w-20 h-10 border-2 rounded-lg flex justify-center border-[#CDD6F4] hover:bg-indigo-950 transition-all duration-300 md:hover:scale-110 md:hover:-translate-y-1'>
                <div className=''>
                  <h1 className='md:mt-2.5 md:text-2xl font-semibold font-poppins tracking-wider mt-1.5'>Invite</h1>
                </div>
              </div>
            </a>
          </div>
            <h1 className='md:mt-5 mt-12 md:text-lg text-sm font-semibold md:w-6/12 w-fill text-left font-rubix'>A multi-purpose Discord bot with Gemini integration, football news, fetch weather report, and much more. To provide finance and business news in the future. </h1>
            <h1 className='mt-10 md:text-xl font-semibold text-lg'>Github Repository : <a href="https://github.com/ankitdey-marsh/Nom" className='underline underline-offset-4'>Visit Nom</a></h1>
            <h1 className='mt-2 md:text-xl font-semibold text-lg'>My Github : <a href="https://github.com/ankitdey-marsh" className='underline underline-offset-4'>  ankitdey-marsh</a></h1>
            <h1 className='mt-2 md:text-xl font-semibold text-lg'>My Webpage : <a href="https://dub.sh/ankitdey" className='underline underline-offset-4'>dub.sh/ankitdey</a></h1>
            <h1 className='mt-10 md:text-lg text-md font-semibold md:w-6/12'>Contributions to the project are highly appreciated.</h1>
            <footer className='absolute bottom-4 text-[#494969b4]'>
              <h1 className='text-xs font-semibold'>Copyright © 2024 Ankit Dey</h1>
            </footer>
        </div>
      </div>
    )
}
export default basebody;