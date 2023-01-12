import React,{useState,useEffect} from 'react'
import {FaPlus, FaHeart, FaShare } from "react-icons/fa";

// import env from 'react-dotenv';

import {useNavigate, useParams,Link} from 'react-router-dom'

function Preview() {
    let {movID} = useParams()
    const navigate = useNavigate()

    const [movies,setMovies] = useState([]);

    const API = `https://api.themoviedb.org/3/movie/${movID}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    useEffect(()=>{
        window.scrollTo(0, 0)
        fetch(`${API}`)
        .then((res)=>res.json())
        .then((data)=> {
            setMovies(data.results[0]) 
            // console.log(data.results[0])
        })
        .catch((err)=>{console.log(err)})

    },[])


  return (
    <div className='bg-neutral-900 w-full text-white p-5 md:px-10'>
        {/* top bar */}
        <div className='md:flex justify-between my-2'>
            <h1 className='font-bold text-lg md:mb-2' onClick={()=>{navigate('/')}}>CINE<span className='text-blue-500'>MAN</span></h1>
            <div className='md:flex md:gap-7'>
                <Link to={'/'}>Home</Link>
                <p>Top Rated</p>
                <p>Popular</p>
                <p>Dicovery</p>
                <p>Coming Soon</p>
            </div>
            <div></div>
        </div>
        {/* Moview Prev */}
        <div className='overflow-hidden rounded-lg relative md:w-full md:mb-5'>
            <iframe title='preview' height="300" className='md:w-full w-full md:h-[700px]'
                src={`https://www.youtube.com/embed/${movies.key}?autoplay=1&loop=1`}>
            </iframe>
        </div>

        {!movies && navigate('/')}
        
        {/* title section */}
        <div className='flex justify-between my-2 items-center'>
            <h1 className='font-bold text-2xl'>{movies.name}</h1>
            <div className='inline-flex gap-4 p-2 backdrop-sepia-0 bg-white/30 text-black rounded-lg divide-x-3 my-2 shadow-lg'>
                <FaHeart/>
                <FaShare/>
                <FaPlus/>
            </div>
        </div>

        {/* genre */}
        <div className='md:my-2 my-2'>
            <p>Genre : <span className='text-blue-400'>Action</span> </p>
            <p>Product Channel : <span className='text-blue-400'>Action</span></p>
            <p>Studio : <span className='text-blue-400'>Action</span></p>
            <p>Release date : <span className='text-blue-400'>Action</span></p>
            <p>Country :<span className='text-blue-400'>Action</span></p>
        </div>

        {/* Movie Description */}
        <div>
            <h1 className='font-bold text-2xl'>MOVIE DESCRIPTION</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus rerum eum, aut tempore quos quidem exercitationem repellendus error molestias ea?</p>
        </div>
        
        <div className='md:my-8 my-3 hidden md:block'>
            <h1 className='font-bold text-2xl'>CAST</h1>
            <div className='flex flex-wrap gap-2 md:gap-5'>
                <div className='rounded-lg overflow-hidden md:max-w-xs  mt-3 md:w-40'>
                    <img src="https://i.pravatar.cc/150?img=3" alt="img" className='w-full'/>
                    <p className='font-light text-center text-lg my-2'>Mike Banks</p>
                </div>
                <div className='rounded-lg overflow-hidden md:max-w-xs  mt-3 md:w-40'>
                    <img src="https://i.pravatar.cc/150?img=2" alt="img" className='w-full'/>
                    <p className='font-light text-center text-lg my-2'>Joes</p>
                </div>
                <div className='rounded-lg overflow-hidden md:max-w-xs mt-3 md:w-40'>
                    <img src="https://i.pravatar.cc/150?img=4" alt="img" className='w-full'/>
                    <p className='font-light text-center text-lg my-2'>Nathaniel Phipls</p>
                </div>
                <div className='rounded-lg overflow-hidden md:max-w-xs  mt-3 md:w-40'>
                    <img src="https://i.pravatar.cc/150?img=5" alt="img" className='w-full'/>
                    <p className='font-light text-center text-lg my-2'>Pitty James</p>
                </div>
                <div className='rounded-lg overflow-hidden md:max-w-xs mt-3 md:w-40'>
                    <img src="https://i.pravatar.cc/150?img=7" alt="img" className='w-full'/>
                    <p className='font-light text-center text-lg my-2'>James Phipls</p>
                </div>
                
            </div>
        
            
        </div>


    </div>
  )
}

export default Preview