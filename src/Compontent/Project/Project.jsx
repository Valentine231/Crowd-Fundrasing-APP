import React, { useState } from 'react'
import { Link,  useOutletContext } from 'react-router-dom'



const Project = () => {
    const { Project } = useOutletContext();
  return (
    <div className='flex flex-col items-center gap-4 w-full max-w-screen-lg mx-auto my-auto p-4 md:flex-row md:gap-8 '>

        {Project.map((projects)=> (
        <div key={projects.id} className="bg-white shadow-lg rounded-lg overflow-hidden border border-indigo-300 ">
            <img src={projects.imageURL} alt={projects.name} className="w-full h-64 object-cover" />
            <div className="p-5">
                <h2 className="text-xl font-semibold">{projects.name}</h2>
                <p className="text-gray-600">{projects.motive}</p>
                <div className='flex flex-col-2 gap-2'>
                    <div><p className='text-xs'>Goal: {projects.goal}</p></div>
                    <div><p className='text-xs'>Donation: ${projects.donation}</p></div>
                    
                </div>

                <div  className='flex flex-rows-2'>
                    <div><p className='text-xs'>Progress: {Math.floor(projects.progress)}%</p></div>
                   <div>{ projects.donation  >= projects.goal && (
                    <p className='text-2xl text-green-500'>congratulation goal has being reached</p>)}
                    </div>

                    </div>
                <Link to={`/Donation?id=${projects.id}`}>
                    <button className='bg-gray-800 text-white rounded-lg p-2 mt-2'>
                        Donate
                    </button>
                </Link>
        </div>
    </div>
    ))}

     

        
    </div>
    
  )

}

export default Project

