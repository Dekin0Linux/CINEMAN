import React from 'react'

import {SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';
import { Link} from 'react-router-dom';

function MovieCard({mov}) {

    return (
        <SplideSlide>
            <div className='overflow-hidden rounded-lg relative shadow-2xl' onClick={()=>console.log(mov.id)} key={mov.id}>
                <Link to={`/preview/${mov.id}`}>
                    <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${mov.poster_path}`} alt="" className='hover:scale-125 transition ease-in-out delay-150 duration-75 w-full h-full'/>
                </Link>

                <div className='backdrop-blur-md bg-white/10 p-2 absolute bottom-0 w-full'>
                    <p className='font-semibold'>{mov.title}</p>
                    <small>{mov.release_date}</small>
                </div>
            </div>
        </SplideSlide>
    )
}

export default MovieCard