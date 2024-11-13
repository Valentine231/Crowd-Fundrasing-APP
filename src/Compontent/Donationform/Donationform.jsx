import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {   useOutletContext, useSearchParams } from 'react-router-dom'
import { PaystackButton } from 'react-paystack'

const Donationform = () => {
  const {Project , handleDonation} = useOutletContext()
  const [searchParams] = useSearchParams();
  const projectId = parseInt(searchParams.get('id'),10);

  const projects = Project.find((proj)=>proj.id === projectId)
  const[Donation, setDonation] = useState(0)
  const[Name, setName]= useState('')
  const [Email, setEmail] = useState('')
  const [currency,setCurrency] = useState('NGN')

  const publickey = 'pk_test_296f47c5e8e7a5b71336f33dd7c61d59b70083cb';
  const amount = Donation * 100;

  const componentProps = {
    email: Email,
    amount: amount,
    currency: currency,
    metadata: {
      name: Name,
    },
    publicKey: publickey,
    text: 'Donate',
    onSuccess: () => {
      alert('Payment Successful');
      handleDonation(Project.id,Donation)
      resetForm();
    },
    onClose: () => {
      alert('Payment closed');
  }
  };

const handleSumbit=(e)=> {
  e.preventDefault(e)
   
   if(!projects){
    return('invaild project selected')
   }

   if (Donation <= 0) {
    alert('Please enter a valid donation amount.');
    return;
  }

  if (!Name || !Email) {
    alert('Please fill out all fields.');
    return;
  }
 
  const resetForm =()=>{
    setName('')
    setEmail('') 
    setDonation(0)  
    setCurrency('NGN')
  }
 
  
  

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
          
          <select  className="w-full p-2 mb-4 rounded"
           value={currency} onChange={(e) => setCurrency(e.target.value)}>

            <option value="NGN">NGN</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="GHS">Ghanaian Cedi (GHS)</option>
            <option value="ZAR">South African Rand (ZAR)</option>
          </select>
            
           {/* <button type='submit' className='bg-black rounded-lg p-2 text-white hover:bg-white hover:text-green-300 m-2'>Donate</button> */}
           { Name && Email && Donation > 0 && (
           <PaystackButton {...componentProps} className='bg-black rounded-lg p-2 text-white hover:bg-white hover:text-green-300 m-2' type='submit' />
           )} 
           </form>
           
        </section>
    </div>
  )
}

export default Donationform