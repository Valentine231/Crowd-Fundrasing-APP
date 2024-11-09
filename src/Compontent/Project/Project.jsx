import React, { useState } from 'react'
import Donationform from '../Donationform/Donationform'

const Project = () => {
    const [Donation, setDonation] = useState(0)
    const [Progress, setProgress] = useState(0)
    
    const Goal = 1000000;

    const handleDonation = (Amount) => {
   
        setDonation(Donation + Amount)
        setProgress((Donation + Amount) / Goal * 100)

    }
 
  return (
    <div>
       
        <section className='flex flex-col items-center mt-[5rem]  '>
        <h1 className='text-2xl text-center'>HOUSING CONSTRUCTION FUND</h1>
            <div className='flex flex-col items-center'>
                <h1 className='text-2xl'>Goal: $1,000,000</h1>
                <h1 className='text-2xl'>Donation: ${Donation}</h1>
                <h1 className='text-2xl'>Progress: {Progress}%</h1>
               {Donation  >= Goal && <h1 className='text-2xl text-green-500'>congratulation goal has being reached</h1>}
                <Donationform handleDonation={handleDonation} />
            </div>
        </section>
    </div>
  )
}

export default Project