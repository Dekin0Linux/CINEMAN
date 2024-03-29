import React, {useState,useEffect} from 'react'
import {FaSearch} from 'react-icons/fa'

// import env from "react-dotenv";


import { Splide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import MovieCard from './MovieCard'

import { Link } from 'react-router-dom';

// New Movies Component

function NewMovies({mov}) {
  return (
    <div className='overflow-hidden rounded-lg md:w-[220px] w-[48.6%] relative my-2 md:my-0'>
        <Link to={`/preview/${mov.id}`}>
            <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${mov.poster_path}`} alt="" className='hover:scale-125 transition ease-in-out delay-150 duration-75'/>
        </Link>
        <div className='backdrop-blur-md bg-white/10 p-2 absolute bottom-0 w-full'>
            <p className='font-semibold truncate'>{mov.title}</p>
            <small>{mov.release_date}</small>
        </div>
    </div>
  );
}

function Main() {
    const API = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    const [movies,setMovies] = useState([]);
    const [newMov,setNewMov] =  useState()
    const [isLoading,setIsLoading] = useState(true)

    // new release fetchAPI
    const newMovies = ()=>{
        let num = Math.floor(Math.random()*3 + 1)
        let api = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${num}`
        fetch(`${api}`)
        .then((res)=>res.json())
        .then((data)=> {
            setNewMov(data.results) 
            setIsLoading(false)
        })
    }

    useEffect(()=>{

        fetch(`${API}`)
        .then((res)=>res.json())
        .then((data)=> {
            setMovies(data.results) 
            setIsLoading(false)
        })
        .catch((err)=>{console.log(err)})

        newMovies()

    },[API])


  return (
    <div className='basis-4/5 md:p-5 bg-neutral-900'>
        <div className='md:mx-10 m-2 text-white'>
            <div className='md:flex items-center justify-between inline-flex gap-10'>
                <span>TV Shows</span>
                <span className='font-bold border-b-2 text-blue-500'>Movies</span>
                <span>Anime</span>
                <form className='md:flex hidden items-center basis-10 bg-transparent border-1 w-full p-1 rounded'>
                    <FaSearch/><input type="search" className='bg-transparent w-100 focus:outline-none mx-1'/>
                </form>
            </div>

            {/* hero */}
            <div className='overflow-hidden my-5 rounded-lg relative md:w-full'>
                <Link to='/preview'>
                
                <iframe height="500" title='movie' className='md:w-full w-full'
                src="https://www.youtube.com/embed/cZIhRHSXtyU?autoplay=1&controls=0&loop=1">
                </iframe>
                
                <div className='z-20 backdrop-blur-md bg-white/30 p-2 absolute bottom-0 w-full overflow-hidden'>
                    <h1 className='font-bold text-3xl'>Sniper</h1>
                    <span className='text-gray-100'>ACTION , ADVENTURE, COMEDY</span><br />
                    <p className='md:w-full hidden md:block'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur amet iure laborum cum optio dolor excepturi, veniam rerum explicabo et, voluptatum qui ea ....</p>
                </div>
                </Link>
            </div>

            {/* cards */}
            <div className='w-full'>
                <h3 className='font-bold'>Best of the week</h3>
                <div className='my-5 w-full'>
                {/* className="flex md:gap-6 gap-2 overflow-hidden flex-wrap" */}

                { isLoading && <div className='text-center font-bold'>Loading...</div>}
                    <Splide className='overflow-hidden' options={{
                        gap:'1rem',
                        drag:'free',
                        perPage: 4,
                        type : 'loop',
                        pagination:false,
                        lazyLoad: 'nearby',
                        autoplay: true,
                        breakpoints: {
                            640:{
                                perPage: 2
                            }
                        }
                    }}>
                        {movies && 
                            movies.map((movie,index)=> {return(
                                <MovieCard mov={movie} key={movie.id}/>
                            )})
                        }             
                    </Splide>
                    
                </div>
            </div>

            

            {/* New Movies */}
            {/* md:flex md:flex-wrap md:gap-5 grid gap-2 grid-cols-2 */}
            <div className='mt-10'>
                <h3 className='font-bold text-xl'>New Movies</h3>
                <div className='my-5'>
                    <div className="flex flex-wrap gap-2 ">
                        {newMov && 
                            newMov.map((movie,index)=> {return(
                                <NewMovies mov={movie} key={movie.id}/>
                            )})
                        }     
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main