import React, { useState } from 'react'

const Donationform = ({handleDonation}) => {
  const[Donation, setDonation] = useState(0)
  const[Name, setName]= useState('')
  const [Email, setEmail] = useState('')

const handleSumbit=(e)=> {
  e.preventDefault(e)
  
  handleDonation(Donation)

 

  setName('')
   setEmail('') 
   setDonation(0)
   
  
  

}


  return (
    <div className='bg-gray-600 w-full max-w-md mx-auto  m-[8rem]-md p-4 rounded-lg shadow-lg mt-[2rem]'>
        <h1 className='text-2xl text-center'>Donationform</h1>
        <section >
            <form className='items-center flex-col flex' onSubmit={handleSumbit}>
            <label>Name</label>
            <input type="text"  placeholder='Name' value={Name} onChange={(e)=>setName(e.target.value)}/>
          
            <label>Email</label>
            <input type="email" placeholder='Email' value={Email} onChange={(e)=>setEmail(e.target.value)}/>

           <label> Donation Amount</label>
           <input type="number"  placeholder='Amount' value={Donation} onChange={(e) => setDonation(Number(e.target.value))}/>

           <button type='submit' className='bg-black rounded-lg p-2 text-white hover:bg-white hover:text-green-300 m-2'>Donate</button>
            </form>
        </section>
    </div>
  )
}

export default Donationform