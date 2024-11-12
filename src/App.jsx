import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Compontent/Footer/Footer';
import Navbar from './Compontent/NavBar/Navbar';



const App = () => {

const [Project, setProject]=useState([
  {id:1, name:'hospital construction', 
    goal:1000000, donation:0, 
    progress:0, 
    imageURL:"/images/hospital.jpeg",
    motive:'Help us build a new hospital to serve the community'
  },

  {id:2, name:'School construction', 
    goal:3000000, 
    donation:0, 
    progress:0, 
    imageURL:"/images/abadoned sch.png",
    motive:'Help us build a new school to serve the community and promote development.'
  },

  {id:3,
     name:'orphage home  construction', 
     goal:1500000, 
     donation:0, 
     progress:0, 
     imageURL:"/images/nodview.jpg",
     motive:'Orpahage Home Development.'
    }
])

const handleDonation=(projectId,amount)=>{
  setProject((prevproject)=> prevproject .map((projects)=> Project.id === projectId ?
{
  ...projects,
  donation:projects.donation + amount,
  progress:((projects.donation + amount)/projects.goal)*100

}
: projects
))
}

  


  return (
    <>

 

    <div className='bg-indigo-300 min-w-full min-h-screen flex flex-col'>
     
    <Navbar />

      <main>
     <Outlet context={{ Project, handleDonation }} />
     </main>

    
    </div>
     <Footer />
     </>
  );
}

export default App;