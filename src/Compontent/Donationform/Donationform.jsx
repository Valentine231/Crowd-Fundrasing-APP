import React, { useState } from 'react'
import {  Outlet, useOutletContext, useSearchParams } from 'react-router-dom'

const Donationform = () => {
  const {Project , handleDonation} = useOutletContext()
  const [searchParams] = useSearchParams();
  const projectId = parseInt(searchParams.get('id'));

  const projects = Project.find((proj)=>proj.id === projectId)
  const[Donation, setDonation] = useState(0)
  const[Name, setName]= useState('')
  const [Email, setEmail] = useState('')

const handleSumbit=(e)=> {
  e.preventDefault(e)
  
 

  setName('')
   setEmail('') 
   setDonation(0)
   
   if(!projects){
    return('invaild project selected')
   }

   if (Donation <= 0) {
    alert('Please enter a valid donation amount.');
    return;
  }

  handleDonation(Project.id,Donation)
  
  

}


  return (
    <div className='bg-gray-600 w-full max-w-md mx-auto  p-4 rounded-lg shadow-lg mt-20 md:min-w-md'>
        <h1 className='text-2xl text-center mb-4'>Donation to {projects ? projects.name : 'Project Not Found'}</h1>
        <section >
            <form className='items-center flex-col flex' onSubmit={handleSumbit}>
            <label className='text-white mb-1'>Name</label>
            <input type="text"  placeholder='Name'  className='w-full p-2 mb-4 rounded' value={Name} onChange={(e)=>setName(e.target.value)}/>
          
            <label className='text-white mb-1'>Email</label>
            <input type="email" placeholder='Email'  className='w-full p-2 mb-4 rounded' value={Email} onChange={(e)=>setEmail(e.target.value)}/>

           <label className='text-white mb-1'> Donation Amount</label>
           <input type="number"  placeholder='Amount'  className='w-full p-2 mb-4 rounded' value={Donation} onChange={(e) => setDonation(Number(e.target.value))}/>

           <button type='submit' className='bg-black rounded-lg p-2 text-white hover:bg-white hover:text-green-300 m-2'>Donate</button>
            </form>
        </section>
    </div>
  )
}

export default Donationform