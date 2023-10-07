import { useState, useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './App.css'

function App() {
  const [user, setUser] = useState([])

  useEffect(() => { 
    getUserData(); 
}, [user]); 

  var gitHubUrl = `https://jsonplaceholder.typicode.com/photos?_limit=10`; 
  
  const getUserData = async () => { 
      const response = await fetch(gitHubUrl); 
      const jsonData = await response.json(); 
      if (jsonData && jsonData.message !== "Not Found") { 
        setUser(jsonData); 
          console.log(jsonData) 
      } 
      else if (username !== "") { 
          console.log('Username does not exist'); 
      } 
      else { 
        setUser({}) 
      } 
  };

  return (
    <>{user.map((users)=> (<div className='flex flex-col mt-5' key={users.id}>
    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <LazyLoadImage className='ps-5'
    alt=""
    effect="blur"
    delayTime={100}
    src={users.thumbnailUrl} />
         <div className="flex flex-col justify-between p-4 leading-normal">
             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{users.title}</h5>
             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
         </div>
     </a>
    </div>) )}
     


    </>
  )
}

export default App
